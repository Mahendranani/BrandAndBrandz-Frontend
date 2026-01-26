// scripts/deploy.js
import { config } from "dotenv";
import { Client } from "basic-ftp";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

// Enable __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config();

const LOCAL_DIR = path.join(__dirname, "..", "out");
const REMOTE_DIR = process.env.FTP_REMOTE_PATH || "/public_html";

const client = new Client();
client.ftp.verbose = true;

// Ensure every .html in /out is moved to a folder with the same name and renamed to index.html
async function normalizeOutDirStructure() {
  const files = await fs.readdir(LOCAL_DIR);

  for (const file of files) {
    const fullPath = path.join(LOCAL_DIR, file);
    const stat = await fs.stat(fullPath);

    if (
      stat.isFile() &&
      file.endsWith(".html") &&
      file !== "index.html" &&
      file !== "404.html"
    ) {
      const nameWithoutExt = file.replace(".html", "");
      const newDir = path.join(LOCAL_DIR, nameWithoutExt);
      const newFilePath = path.join(newDir, "index.html");

      await fs.mkdir(newDir, { recursive: true });
      await fs.rename(fullPath, newFilePath);
      console.log(`🔁 Moved ${file} → ${nameWithoutExt}/index.html`);
    }
  }
}

async function deployToHostinger() {
  try {
    console.log("🔧 Normalizing exported HTML structure...");
    await normalizeOutDirStructure();

    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      secure: false,
    });

    console.log("✅ Connected to Hostinger FTP");

    await client.ensureDir(REMOTE_DIR);
    await client.cd(REMOTE_DIR);
    await client.clearWorkingDir();
    await client.uploadFromDir(LOCAL_DIR);
    
    console.log("🚀 Deployed successfully to Hostinger!");
  } catch (err) {
    console.error("❌ Deployment failed:", err);
  } finally {
    client.close();
  }
}

deployToHostinger();