import { ExternalLink, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Team() {
  const teamMembers = [
    {
      name: "RJ Grimshaw",
      title: "Founder & CEO",
      image: "/RJGrimshawTheAICEO.jpg",
      bio: [
        "RJ Grimshaw didn't set out to build an AI company—he stumbled into it the same way he entered entrepreneurship: by solving real problems in real time.",
        <>Back in April 2022, RJ was introduced to AI through a company called <a href="https://www.catipult.ai" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">Catapult AI</a>. The concept was promising—use AI to build world-class KPIs based on SIC and NAICS codes—but the tech wasn't ready. What it did spark was something far more valuable: RJ's curiosity. It planted the seed that AI could be more than hype—it could be a force multiplier for businesses if applied with purpose.</>,
        "This wasn't RJ's first time using technology to close a gap. Since 2016, he'd been leveraging tools like Grammarly to refine communication. In 2021—before AI became mainstream—he was already integrating AI into business operations through a tool called Orculus. Early, quiet adoption.",
        "RJ's edge has never been a specific technical skill. It's knowing where he lacks, and finding the right resources to bridge the gap. His work centers on innovation and intrapreneurship, applying new technologies and strategic thinking to create value within established organizations. It's what drove him to earn certifications from Upwork for financial services, from Anthropic for AI fluency, and from Coach Michael Burt on Person of Interest training. He's not just a student of AI—he's a translator of it. He studies every model, not to chase trends, but to teach, coach, and help others apply them strategically.",
        "The result? A North Star that's dead simple: equip business builders with tools that reduce friction, accelerate clarity, and unlock growth.",
        "This isn't about technology. It's about the workforce. AI isn't a tech wave—it's a 50-year disruption of how we work, lead, and win. RJ sees entrepreneurs as the critical bridge. They must understand AI's inputs, outputs, and implications on process and people. That belief sparked ABLE—Analyze, Build, Leverage, Execute—a continuous improvement cycle that starts with job descriptions and ends in workforce transformation.",
        "RJ calls Ann Arbor home—a fitting base, surrounded by top-tier AI research and Michigan grit. He regularly sits in on university-level AI courses, staying rooted in both theory and application. The same practical mind that scaled one company from $6M to $40M, and another from $13M to $250M, now focuses on translating those playbooks for others in this AI-shaped era.",
        "He leads with a strategy-before-tools mindset. He reads academic and government papers on ethics, security, and IP. And he believes AI isn't here to replace leadership—it's here to amplify it.",
        "Raised in a family of entrepreneurs, RJ didn't start out wanting to run companies. At 30, he became one by necessity. Two decades later, his passion lies in helping others grow the right way, without wasting time or losing their soul in the process.",
        "He's a mentor on MentorCruise. A lifelong learner. A former hockey coach of 20+ years, now watching both his sons coach at the collegiate level. Whether it's the rink or the boardroom, RJ's obsession is the same: eliminate friction, build better systems, and never stop developing the people inside them.",
        "Now, through The AI CEO, RJ helps others do what he's done: scale with intention, act with clarity, and lead with conviction."
      ],
      linkedin: "https://www.linkedin.com/in/rjgrimshaw/",
      twitter: "https://x.com/rjgcoach",
      email: "rj@theaiceo.ai"
    },
    {
      name: "Mark (Marwan) Kashef",
      title: "Strategic Advisor | AI Strategist & Communication Specialist",
      image: "/MarkKashef.png",
      bio: [
        "Mark brings a rare blend of deep technical fluency and sharp business communication. With a Master of Management in Artificial Intelligence (MMAI) from Queen's University and over a decade in AI, data science, and analytics, he helps organizations apply AI to practical challenges—not just pilot projects.",
        "As the founder of Prompt Advisers, he advises on enterprise AI adoption and agent strategy. Mark also teaches how to translate complex technical ideas for decision-makers, drawing on six years as a public speaking coach and professor.",
        "A respected voice in the AI community, he shares insights via keynotes, podcasts (like NeuroBytes), and the Microsoft Learn community."
      ],
      linkedin: "https://www.linkedin.com/in/markkashef/"
    },
    {
      name: "Geoff Woods",
      title: "Strategic Advisor | AI Leadership Coach & Best-Selling Author",
      image: "/GeoffWoods.png",
      bio: [
        "Geoff is a pioneer in using AI as a thought partner at the executive level. As the author of The AI-Driven Leader and founder of AI Leadership, he equips C-suite leaders with the strategic frameworks to integrate AI into high-leverage decisions.",
        "Geoff created the CRIT prompt framework (Context, Role, Interview, Task) to help leaders extract value from AI tools. His Three Pillars of AI Value—productivity, operational efficiency, and product/service enhancement—are foundational to how The AI CEO advises on growth.",
        "Formerly Chief Growth Officer at Jindal Steel & Power, Geoff turned strategic AI adoption into a market cap leap."
      ],
      linkedin: "https://www.linkedin.com/in/geoffwoods/"
    },
    {
      name: "Rose Beverly",
      title: "Strategic Advisor | Human-Centered AI Expert",
      image: "/RoseBeverly.png",
      bio: [
        "Rose sits at the intersection of AI and human behavior. As a Senior Staff AI UX Researcher at PayPal, she ensures AI systems are built with ethics, accessibility, and user psychology at the forefront.",
        "With a background in anthropology, psychology, and philosophy, she advocates for technology that respects and reflects human complexity.",
        "Rose brings a critical user-first lens to The AI CEO's frameworks, ensuring we build not just with power, but with purpose."
      ],
      linkedin: "https://www.linkedin.com/in/rosebeverly/"
    },
    {
      name: "Andy Walters",
      title: "Strategic Advisor | Generative AI Architect",
      image: "/AndyWalters.png",
      bio: [
        "Andy is an execution-first builder, specializing in turning large language models (LLMs) into production-ready systems. As founder of Emerge Haus, based in Austin, he partners with leadership teams to design ROI-driven Gen AI strategies, from custom RAG systems to scalable AI agent stacks.",
        "He's also the creator of AgentPress, a tooling suite that accelerates AI deployment.",
        "Andy's obsession is making AI real—integrated, usable, and value-generating inside organizations that are ready to move beyond the hype."
      ],
      linkedin: "https://www.linkedin.com/in/andywalters/"
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-navy-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-teal-50 mb-4">
              Strategy drives everything before the tools ever enter the conversation.
            </p>
            <p className="text-lg text-teal-100">
              We lean on a select group of deeply experienced advisors who each bring a critical lens to AI, leadership, and execution. These are not theorists—they are operators, strategists, and builders with skin in the game.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-24">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-start`}
              >
                {/* Image */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  {/* Contact Buttons */}
                  <div className="mt-6 flex flex-col gap-3">
                    {member.linkedin && (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-start gap-2"
                      >
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4" />
                          Connect on LinkedIn
                          <ExternalLink className="h-3 w-3 ml-auto" />
                        </a>
                      </Button>
                    )}
                    {member.twitter && (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-start gap-2"
                      >
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="h-4 w-4" />
                          Follow on X
                          <ExternalLink className="h-3 w-3 ml-auto" />
                        </a>
                      </Button>
                    )}
                    {member.email && (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-start gap-2"
                      >
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                          {member.email}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:w-2/3">
                  <div className="mb-6">
                    <h2 className="text-4xl font-bold text-navy-900 mb-2">
                      {member.name}
                    </h2>
                    <p className="text-xl text-teal-600 font-semibold">
                      {member.title}
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    {member.bio.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-slate-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-teal-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-teal-50 mb-8">
              Schedule a discovery call to learn how we can help you navigate the AI revolution
            </p>
            <Button
              asChild
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg"
            >
              <a href="https://outlook.office.com/bookwithme/user/01babf37e6da46af8c567a9f54b02c18@theaiceo.ai?anonymous&ismsaljsauthenabled&ep=plink" target="_blank" rel="noopener noreferrer">
                Book Discovery Call
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
