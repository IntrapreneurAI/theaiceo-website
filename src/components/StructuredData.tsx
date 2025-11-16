import { useEffect } from "react";

interface StructuredDataProps {
  data: object;
}

/**
 * Component to inject JSON-LD structured data into the page head for SEO
 */
export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}

// Organization Schema for Able Leadership LLC DBA The AI CEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The AI CEO",
  "legalName": "Able Leadership LLC",
  "alternateName": "Able Leadership LLC DBA The AI CEO",
  "url": "https://www.theaiceo.ai",
  "logo": "https://www.theaiceo.ai/TheAICEOLOGOHEADER.png",
  "description": "Human-centered AI consulting and training for business leaders. We help organizations adopt AI strategically through the ABLE Framework: Analyze, Build, Leverage, Execute.",
  "email": "team@theaiceo.ai",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.theaiceo.ai"
  ],
  "founder": {
    "@type": "Person",
    "name": "RJ Grimshaw"
  }
};

// Service Schema for Role-Based Prompt Fluency Training
export const promptFluencyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Training and Consulting",
  "name": "Role-Based Prompt Fluency Training",
  "description": "Comprehensive AI training program teaching teams how to craft effective prompts for their specific roles and workflows. Includes hands-on practice, role-specific templates, and ongoing support.",
  "provider": {
    "@type": "Organization",
    "name": "The AI CEO",
    "legalName": "Able Leadership LLC"
  },
  "areaServed": "US",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Business Leaders and Teams"
  }
};

// Service Schema for BOOST Prompting Mastery Cohort
export const boostCohortServiceSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "name": "BOOST Prompting Mastery Cohort",
  "description": "4-week intensive cohort program teaching advanced prompting techniques for AI tools. Includes live sessions, peer learning, and practical exercises.",
  "provider": {
    "@type": "Organization",
    "name": "The AI CEO",
    "legalName": "Able Leadership LLC"
  },
  "numberOfCredits": 4,
  "timeToComplete": "P4W",
  "occupationalCategory": "AI Skills Development"
};

// Service Schema for AI-Powered Fraud Detection Consulting
export const fraudDetectionServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Consulting",
  "name": "AI-Powered Fraud Detection Implementation",
  "description": "Strategic consulting for implementing AI fraud detection systems in financial services. Includes vendor evaluation, compliance review, and team training using the ABLE Framework.",
  "provider": {
    "@type": "Organization",
    "name": "The AI CEO",
    "legalName": "Able Leadership LLC"
  },
  "areaServed": "US",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Financial Services Companies"
  }
};

// Review Schema for Stephen Markley Testimonial
export const markleyReviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": "BOOST Prompting Mastery Cohort"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Stephen Markley"
  },
  "reviewBody": "Thanks! I have used Chat GPT to draft a strategic plan and I am working on drafting an executive comp plan for a not for profit. I will look into the course. Interesting stuff! Great feedback! I was able to attach some reference documents that captured some of the topics above and the output was pretty amazing. This is an incredibly powerful tool that will reshape the workforce... a little scary!"
};

// Review Schema for James H. (Chief Credit Officer) Testimonial
export const jamesHReviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": "AI-Powered Fraud Detection Implementation"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "James H.",
    "jobTitle": "Chief Credit Officer",
    "worksFor": {
      "@type": "Organization",
      "name": "First Capital Equipment Finance"
    }
  },
  "reviewBody": "If you're considering AI for financial services, these folks understand both the technology and the banking regulatory environment—a rare combination that made all the difference for us."
};

// Aggregate Rating Schema based on 500+ BOOST participants
export const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "EducationalOccupationalProgram",
    "name": "BOOST Prompting Mastery Cohort"
  },
  "ratingValue": "4.8",
  "bestRating": "5",
  "ratingCount": "500"
};
