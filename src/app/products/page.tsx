import { Navbar } from "@/components/navbar";
import { ProductHero } from "@/components/product-hero";
import { ProductCard } from "@/components/product-card";
import { ProductFooter } from "@/components/product-footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ProductsPage() {
    return (
        <main className={`min-h-screen bg-[#0A0A0A] text-white ${inter.className} overflow-x-hidden selection:bg-white/20`}>
            {/* Fixed Background */}
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/productpage/herobg.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundAttachment: "fixed",
                    opacity: 0.6
                }}
            />

            {/* Overlay for better text contrast if needed */}
            <div className="fixed inset-0 z-0 bg-[#0A0A0A]/40 pointer-events-none" />

            <div className="relative z-10">
                <Navbar />

                <ProductHero />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
                    <ProductCard
                        title="DailyGo"
                        subtitle="Verified Gigforce & Student Earning Platform"
                        imageSrc="/productpage/Dailygo.webp"
                        reversed={false}
                        description={[
                            "DailyGo is a trusted earning and manpower ecosystem built to empower students and support businesses with reliable, on-ground execution.",
                            "For students, it creates financial independence while studying allowing them to earn with dignity, responsibility, and flexibility.",
                            "For businesses and event organizers, it provides access to a verified, dependable gigforce reducing uncertainty and trust issues."
                        ]}
                    />

                    <ProductCard
                        title="Unifiro"
                        subtitle="Trusted Event Discovery & Registration Platform"
                        imageSrc="/productpage/Unifiro.webp"
                        reversed={true}
                        description={[
                            "Unifiro is an integrated event discovery and registration platform designed to close a major gap in regional events: trust.",
                            "Many events today rely on fragmented Google Forms and informal links, which often lead to confusion, low confidence, and reduced attendance.",
                            "Unifiro replaces this with professional event pages and a secure centralized registration system, helping events feel legitimate before they even begin."
                        ]}
                    />
                </div>

                <ProductFooter />
            </div>
        </main>
    );
}
