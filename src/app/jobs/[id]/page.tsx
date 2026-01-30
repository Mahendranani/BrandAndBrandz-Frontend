import JobDetailsClient from "@/components/job-details-client";

// Mock Data - In a real app, fetch based on ID or slug
const jobData: Record<string, any> = {
    "1": {
        title: "Digital Marketing Specialist",
        location: "Remote, India",
        type: "Internship",
        salary: "Performance based",
        description: "We're looking for a marketing intern who's eager to learn and contribute to brand growth. You'll support campaigns, content development, and research. The internship provides hands-on experience in brand communication, market research, and performance marketing.",
        lookingFor: [
            "Pursuing or recently completed an MBA, PGDM, or related field in Marketing/Business/PR.",
            "Strong communication, presentation, and stakeholder management skills.",
            "Passion for creativity in campaigns and content.",
            "Basic knowledge of social media, SEO, Google Analytics, LinkedIn & CRM tools is a plus.",
            "Strategic thinker with problem-solving abilities and a growth mindset."
        ],
        responsibilities: [
            "Assist in planning and executing digital and social media marketing campaigns.",
            "Support in preparing marketing collateral, proposals, and case studies.",
            "Conduct market and competitor research to identify new opportunities.",
            "Coordinate with the sales team for lead generation initiatives.",
            "Track performance metrics and help optimize campaigns."
        ]
    },
    // ID 3 is duplicate of 1
    "3": {
        title: "Digital Marketing Specialist",
        location: "Remote, India",
        type: "Internship",
        salary: "Performance based",
        description: "We're looking for a marketing intern who's eager to learn and contribute to brand growth. You'll support campaigns, content development, and research. The internship provides hands-on experience in brand communication, market research, and performance marketing.",
        lookingFor: [
            "Pursuing or recently completed an MBA, PGDM, or related field in Marketing/Business/PR.",
            "Strong communication, presentation, and stakeholder management skills.",
            "Passion for creativity in campaigns and content.",
            "Basic knowledge of social media, SEO, Google Analytics, LinkedIn & CRM tools is a plus.",
            "Strategic thinker with problem-solving abilities and a growth mindset."
        ],
        responsibilities: [
            "Assist in planning and executing digital and social media marketing campaigns.",
            "Support in preparing marketing collateral, proposals, and case studies.",
            "Conduct market and competitor research to identify new opportunities.",
            "Coordinate with the sales team for lead generation initiatives.",
            "Track performance metrics and help optimize campaigns."
        ]
    },
    "2": {
        title: "Business Development Intern",
        location: "Remote, India",
        type: "Internship",
        salary: "Performance based",
        description: "We're looking for a Business Development Intern who is motivated to learn how companies grow by building strategic client relationships.",
        lookingFor: [
            "Pursuing or recently completed an MBA, PGDM, or related field in Marketing/Business/PR.",
            "Strong communication, presentation, and stakeholder management skills.",
            "Passion for creativity in campaigns and content.",
            "Basic knowledge of social media, SEO, Google Analytics, LinkedIn & CRM tools is a plus.",
            "Strategic thinker with problem-solving abilities and a growth mindset."
        ],
        responsibilities: [
            "Assist in planning and executing digital and social media marketing campaigns.",
            "Support in preparing marketing collateral, proposals, and case studies.",
            "Conduct market and competitor research to identify new opportunities.",
            "Coordinate with the sales team for lead generation initiatives.",
            "Track performance metrics and help optimize campaigns."
        ]
    },
    // ID 4 is duplicate of 2
    "4": {
        title: "Business Development Intern",
        location: "Remote, India",
        type: "Internship",
        salary: "Performance based",
        description: "We're looking for a Business Development Intern who is motivated to learn how companies grow by building strategic client relationships.",
        lookingFor: [
            "Pursuing or recently completed an MBA, PGDM, or related field in Marketing/Business/PR.",
            "Strong communication, presentation, and stakeholder management skills.",
            "Passion for creativity in campaigns and content.",
            "Basic knowledge of social media, SEO, Google Analytics, LinkedIn & CRM tools is a plus.",
            "Strategic thinker with problem-solving abilities and a growth mindset."
        ],
        responsibilities: [
            "Assist in planning and executing digital and social media marketing campaigns.",
            "Support in preparing marketing collateral, proposals, and case studies.",
            "Conduct market and competitor research to identify new opportunities.",
            "Coordinate with the sales team for lead generation initiatives.",
            "Track performance metrics and help optimize campaigns."
        ]
    }
};

export function generateStaticParams() {
    return Object.keys(jobData).map((id) => ({ id }));
}

export default async function JobDetails({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const job = jobData[resolvedParams.id];
    return <JobDetailsClient job={job} />;
}
