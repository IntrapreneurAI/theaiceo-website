import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Calendar, Tag, Newspaper } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Press() {
  const pressReleases = [
    {
      title: "RJ Grimshaw Launches \"The AI EDGE\" A Practical Guide Where Leadership Meets Innovation",
      date: "October 12, 2025",
      publication: "USA Today",
      url: "https://www.usatoday.com/press-release/story/16936/rj-grimshaw-launches-the-ai-edge-a-practical-guide-where-leadership-meets-innovation/",
      description: "Business leader and AI strategist RJ Grimshaw announces the release of his new ebook, \"Unlocking the Power of Artificial Intelligence for Beginners to Provide an 'AI EDGE',\" published under TheAICEO.ai. The guide serves as a practical roadmap for professionals and organizations seeking to integrate AI responsibly and effectively into their operations."
    }
  ];

  const featuredArticles = [
    {
      title: "Why Most Businesses Will Fail with AI Agents (And How You Won't)",
      date: "August 7, 2025",
      category: "Industry Insights",
      publication: "Equipment Finance Advisor",
      url: "https://www.equipmentfa.com/blogs/40184/why-most-businesses-will-fail-with-ai-agents-and-how-you-wont",
      description: "Speed without structure leads to chaos when considering the role of AI Agents in commercial finance. Learn how to implement AI agents strategically for sustainable business growth."
    },
    {
      title: "Why Most Equipment Finance Professionals Are Struggling with AI (And How to Fix It)",
      date: "March 10, 2025",
      category: "Technology",
      publication: "Equipment Finance Advisor",
      url: "https://www.equipmentfa.com/articles/[article-id]",
      description: "Part one of a three-part series discussing why equipment finance professionals are finding difficulty using AI and provides salient advice on how to succeed using these important and required tools."
    },
    {
      title: "How AI Will Leave Many Companies Scrambling: Building a Culture of Innovation",
      date: "November 22, 2024",
      category: "Industry Trends",
      publication: "Equipment Finance Advisor",
      url: "https://www.equipmentfa.com/articles/38968/how-ai-will-leave-many-companies-scrambling-building-a-culture-of-innovation-for-the-ai-driven-future",
      description: "Embracing AI as a cultural shift, not just a tool, empowers businesses to thrive, foster growth and stay competitive today, and into the future."
    }
  ];

  const allArticles = [
    {
      year: "2024",
      articles: [
        {
          title: "How Intrapreneurs Thrive Amid Workforce Disruptions",
          date: "October 8, 2024",
          category: "Industry Insights",
          url: "https://www.equipmentfa.com/blogs/38696/how-intrapreneurs-thrive-amid-workforce-disruptions-unlocking-their-potential-in-a-changing-workplace",
          description: "Developing and fostering a culture of Intrapreneurship begins at the leadership level of companies."
        },
        {
          title: "Navigating Economic Challenges: The Invaluable Role of Intrapreneurs",
          date: "June 11, 2024",
          category: "Industry Insights",
          url: "https://www.equipmentfa.com/blogs/[blog-id]",
          description: "The valuable and challenging role of Intrapreneurs in a challenging economic environment."
        },
        {
          title: "Unveiling the Power of Mentorship: A Comprehensive Guide",
          date: "January 16, 2024",
          category: "Industry Insights",
          url: "https://www.equipmentfa.com/blogs/[blog-id]",
          description: "A unique view of the long-term benefits creating and implementing mentoring programs in any organization."
        }
      ]
    },
    {
      year: "2022",
      articles: [
        {
          title: "Why Aren't Companies Developing the Next Generation of Leaders?",
          date: "September 23, 2022",
          category: "Professional Development",
          url: "https://www.equipmentfa.com/blogs/[blog-id]",
          description: "It is necessary to develop the next generation of leaders in order to have a sustainable business."
        },
        {
          title: "The Difference Between Mission, Vision and Values",
          date: "July 6, 2022",
          category: "Business Planning",
          url: "https://www.equipmentfa.com/blogs/[blog-id]",
          description: "The importance of a Mission Statement and a Vision Statement to companies."
        }
      ]
    },
    {
      year: "2021",
      articles: [
        {
          title: "The War on Talent: Why Your Company Needs Intrapreneurs",
          date: "November 3, 2021",
          category: "Industry Insights",
          url: "https://www.equipmentfa.com/blogs/[blog-id]",
          description: "Intrapreneurship is the best way to keep talented team members and promote creativity."
        }
      ]
    },
    {
      year: "2019",
      articles: [
        {
          title: "The Amazing Stamina of Social Media",
          date: "October 17, 2019",
          category: "Marketing",
          url: "https://www.equipmentfa.com/blogs/[blog-id]",
          description: "Social media is neither dead nor dying. It remains vibrant, growing and a key way for businesses to grow."
        },
        {
          title: "How to Spot a Digital Leading Company",
          date: "May 8, 2019",
          category: "Business Planning",
          url: "https://www.equipmentfa.com/blogs/[blog-id]",
          description: "What digital transformation is, why it is important for all business and what steps companies should take to embrace it."
        }
      ]
    },
    {
      year: "2018",
      articles: [
        {
          title: "Are You Being Held Hostage?",
          date: "October 24, 2018",
          category: "Business Planning",
          url: "https://www.equipmentfa.com/blogs/[blog-id]",
          description: "Why resisting change toward digital lending technologies can leave equipment finance companies in peril."
        },
        {
          title: "The Cost of NOT Including \"Intrapreneurs\" in Your Company",
          date: "June 4, 2018",
          category: "Professional Development",
          url: "https://www.equipmentfa.com/blogs/[blog-id]",
          description: "Perspectives on fostering innovation by targeting employees with the character traits suited for intrapreneurship."
        }
      ]
    },
    {
      year: "2017",
      articles: [
        {
          title: "RJ Grimshaw, CEO of UniFi Equipment Finance on the Value of Intrapreneurs",
          date: "November 27, 2017",
          category: "Industry Insights",
          url: "https://www.equipmentfa.com/blogs/7451/rj-grimshaw-ceo-of-unifi-equipment-finance-on-the-value-of-intrapreneurs",
          description: "The importance of welcoming \"Intrapreneurs\" into your company and how embracing this entrepreneurial spirit can positively impact companies."
        },
        {
          title: "Foster \"Intrapreneurs\" Through Leadership",
          date: "April 6, 2017",
          category: "Professional Development",
          url: "https://www.equipmentfa.com/blogs/[blog-id]",
          description: "Inspiring employee creativity and innovation means giving workers the space to grow."
        }
      ]
    },
    {
      year: "2016",
      articles: [
        {
          title: "The Art of Mentoring Millennials in the Workplace",
          date: "December 6, 2016",
          category: "Careers / Human Resources",
          url: "https://www.equipmentfa.com/blogs/[blog-id]",
          description: "Mentoring young guns takes an artist's touch, and given the right information, mentoring Millennials will come as naturally as training Baby Boomers."
        }
      ]
    },
    {
      year: "2014",
      articles: [
        {
          title: "Strategic Revolution: The Power of Social Employee Advocacy",
          date: "September 17, 2014",
          category: "Miscellaneous Topic",
          url: "https://www.equipmentfa.com/blogs/[blog-id]",
          description: "The importance of social media and how it should play a part in your very own strategic revolution."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-primary-foreground">
              Press & Media
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Industry insights on AI adoption, intrapreneurship, and business transformation
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              RJ Grimshaw regularly contributes to Equipment Finance Advisor, NEFA Newsline, and Equipment Finance News, 
              sharing expertise on leadership, innovation, and strategic AI implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="section-padding bg-gradient-to-br from-muted/50 to-muted/20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Newspaper className="h-8 w-8 text-primary" />
              <h2 className="mb-0">Press Releases</h2>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {pressReleases.map((release, index) => (
                <Card key={index} className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-xl">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{release.date}</span>
                    </div>
                    <div className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full mb-6">
                      {release.publication}
                    </div>
                    <h3 className="text-2xl md:text-3xl mb-4 leading-tight font-bold">{release.title}</h3>
                    <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                      {release.description}
                    </p>
                    <Button size="lg" asChild>
                      <a href={release.url} target="_blank" rel="noopener noreferrer">
                        Read Full Press Release
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {article.publication}
                    </div>
                    <h3 className="text-xl mb-3 leading-tight">{article.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {article.description}
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read Article
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Articles by Year */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-center">Complete Archive</h2>
            {allArticles.map((yearGroup, yearIndex) => (
              <div key={yearIndex} className="mb-16">
                <h3 className="text-3xl font-bold mb-8 text-primary">{yearGroup.year}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {yearGroup.articles.map((article, articleIndex) => (
                    <Card key={articleIndex} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6 pb-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Tag className="h-4 w-4" />
                            <span>{article.category}</span>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold mb-2 leading-tight">{article.title}</h4>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {article.description}
                        </p>
                        <a 
                          href={article.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm font-medium inline-flex items-center"
                        >
                          Read Article
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Want Insights Like These for Your Organization?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bring clarity, capability, and control to your AI adoption journey with expert guidance 
              from a proven thought leader.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Book Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
