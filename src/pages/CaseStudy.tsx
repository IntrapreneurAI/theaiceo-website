import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Users, Calendar, TrendingUp, Target, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function CaseStudy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Case Study</Badge>
            <h1 className="mb-6">
              Leading Industry Education
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              How The AI CEO delivered the first AI education class for the equipment finance industry
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>February 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>National Equipment Finance Association</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Equipment Finance Industry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <img 
              src="/images/RJNEFAPresentation.png" 
              alt="RJ Grimshaw presenting at NEFA AI workshop" 
              className="w-full rounded-xl shadow-2xl border-4 border-background"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              RJ Grimshaw delivering the first AI education class for the equipment finance industry at NEFA
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">The Challenge</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                The equipment finance industry faced a critical knowledge gap. While AI tools were rapidly 
                transforming business operations across sectors, equipment finance professionals lacked 
                practical, industry-specific guidance on how to adopt and implement these technologies 
                effectively within their organizations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Generic AI training programs didn't address the unique challenges of equipment finance—from 
                credit analysis and portfolio management to regulatory compliance and customer relationship 
                management. The industry needed education that spoke their language and addressed their 
                specific use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">The AI CEO Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Industry-Specific Content</h3>
                      <p className="text-muted-foreground">
                        Developed curriculum focused exclusively on equipment finance use cases, 
                        from credit decisioning to portfolio optimization.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Practical Application</h3>
                      <p className="text-muted-foreground">
                        Hands-on workshop format with real prompts and workflows that attendees 
                        could implement immediately upon returning to their organizations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Role-Based Training</h3>
                      <p className="text-muted-foreground">
                        Tailored content for different roles within equipment finance organizations—
                        from credit analysts to operations managers to executives.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Strategic Framework</h3>
                      <p className="text-muted-foreground">
                        Provided a clear roadmap for AI adoption that balanced innovation with 
                        governance, ensuring teams could move forward with confidence.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">Impact & Results</h2>
            
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-8">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong>February 2025 – National Equipment Finance Association:</strong> RJ Grimshaw 
                    delivered the first AI education class for the equipment finance industry.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">First</div>
                    <p className="text-sm text-muted-foreground">
                      Industry-specific AI education for equipment finance
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">
                      Practical, immediately actionable content
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">NEFA</div>
                    <p className="text-sm text-muted-foreground">
                      Trusted by the leading industry association
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl mb-4">What Made This Different</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <strong>Industry Firsts:</strong> The AI CEO brought practical, actionable AI insights 
                    to an industry that had been underserved by generic technology training.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <strong>Strategic Thinking Combined with Hands-On Implementation:</strong> The workshop 
                    balanced high-level AI strategy with practical prompt engineering techniques that attendees 
                    could use immediately.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <strong>Ongoing Guidance:</strong> The AI CEO approach ensures teams don't just understand 
                    AI—they implement it effectively, ensuring adoption doesn't stall after the initial training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
              "The AI CEO is at the forefront of industry-specific AI education, bringing practical, 
              actionable insights to organizations ready to embrace transformation."
            </blockquote>
            <p className="text-lg opacity-90">
              National Equipment Finance Association Workshop Feedback
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">Key Takeaways</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-3">For Equipment Finance Leaders</h3>
                  <p className="text-muted-foreground">
                    AI adoption doesn't require massive technology investments or complete operational 
                    overhauls. With the right training and strategic framework, teams can begin 
                    implementing AI tools immediately to improve efficiency and decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-3">For Industry Associations</h3>
                  <p className="text-muted-foreground">
                    Industry-specific AI education fills a critical gap that generic technology training 
                    cannot address. Partnering with experts who understand your sector ensures members 
                    receive relevant, actionable guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Bring AI Education to Your Organization?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you're an industry association looking to provide cutting-edge education to your 
              members, or an organization ready to build AI capability across your team, The AI CEO 
              can help you navigate the transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:team@theaiceo.ai?subject=Workshop Inquiry">
                  Book a Workshop
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-study/fraud-detection">
                  <span>View Fraud Detection Case Study</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
