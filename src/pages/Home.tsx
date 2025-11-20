import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Target, 
  Shield, 
  TrendingUp, 
  Users, 
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import StructuredData, { 
  organizationSchema, 
  promptFluencyServiceSchema,
  boostCohortServiceSchema,
  markleyReviewSchema,
  aggregateRatingSchema 
} from "@/components/StructuredData";

export default function Home() {
  const heroAnim = useScrollAnimation({ threshold: 0.2 });
  const problemAnim = useScrollAnimation();
  const problemCardsAnim = useScrollAnimation();
  const solutionAnim = useScrollAnimation();
  const trainingAnim = useScrollAnimation();
  const trainingCardsAnim = useScrollAnimation();
  const outcomesAnim = useScrollAnimation();
  const nefaAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData data={organizationSchema} />
      <StructuredData data={promptFluencyServiceSchema} />
      <StructuredData data={boostCohortServiceSchema} />
      <StructuredData data={markleyReviewSchema} />
      <StructuredData data={aggregateRatingSchema} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted">
        <div className="container">
          <div ref={heroAnim.ref} className={`max-w-5xl mx-auto text-center animate-fade-in ${heroAnim.isVisible ? 'visible' : ''}`}>
            <h1 className="mb-8">
              Clarity. Capability. Control.
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 leading-relaxed font-light">
              Real adoption for real teams.
            </p>
            <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              The AI CEO is an embedded function for SMBs navigating AI adoption, 
              bringing clarity, capability, and control. It is not a tool or dashboard; 
              it is a transformation layer for real teams in real companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book Discovery Call</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/program">
                  See the Framework
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div ref={problemAnim.ref} className={`text-center mb-20 animate-slide-up ${problemAnim.isVisible ? 'visible' : ''}`}>
            <h2 className="mb-6">What's Holding SMBs Back</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Most small and mid-sized businesses struggle with AI adoption due to three critical challenges
            </p>
          </div>
          
          <div ref={problemCardsAnim.ref} className={`grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto stagger-children ${problemCardsAnim.isVisible ? 'visible' : ''}`}>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg bg-background">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center mb-8">
                  <Brain className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-6">Confusion</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Teams don't know where to start. AI feels overwhelming, with too many tools 
                  and no clear path forward. The result? Paralysis instead of progress.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg bg-background">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center mb-8">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-6">Misalignment</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Without strategic direction, AI initiatives become scattered experiments 
                  that don't align with business goals or deliver measurable outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg bg-background">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center mb-8">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-6">Risk</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Teams lack guardrails and best practices, leading to compliance concerns, 
                  data security issues, and inconsistent quality across the organization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding">
        <div className="container">
          <div ref={solutionAnim.ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto animate-slide-up ${solutionAnim.isVisible ? 'visible' : ''}`}>
            <div>
              <h2 className="mb-8">Embedded Strategy, Not Dashboards</h2>
              <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed">
                The AI CEO isn't another platform to learn or dashboard to manage. 
                It's a strategic function that embeds directly into your organization, 
                working alongside your team to build AI capability from the inside out.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-2">Strategic Clarity</h4>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      Define clear AI objectives aligned with your business goals
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-2">Team Capability</h4>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      Build role-specific AI fluency across your entire organization
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-2">Operational Control</h4>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      Implement guardrails and governance that protect while enabling innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Assessment & Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Understand your current state and define your AI roadmap
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Role-Based Training</h4>
                    <p className="text-sm text-muted-foreground">
                      Equip each role with practical AI skills they can use immediately
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Implementation Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Ongoing guidance as you deploy AI across your operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Offer Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div ref={trainingAnim.ref} className={`text-center mb-20 animate-slide-up ${trainingAnim.isVisible ? 'visible' : ''}`}>
            <h2 className="mb-6">Role-Based Prompt Fluency Training</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Fix prompting chaos with role-specific habits. Our flagship program transforms 
              your team from AI-curious to AI-capable through structured, practical training.
            </p>
          </div>

          <div ref={trainingCardsAnim.ref} className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto stagger-children ${trainingCardsAnim.isVisible ? 'visible' : ''}`}>
            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-accent mb-6" />
                <h4 className="mb-4">Leadership Track</h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Strategic prompting for decision-making, planning, and organizational alignment
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-accent mb-6" />
                <h4 className="mb-4">Operations Track</h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Process optimization, workflow automation, and efficiency-focused prompting
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-accent mb-6" />
                <h4 className="mb-4">Sales & Marketing Track</h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Customer-facing prompts, content creation, and revenue-generating applications
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/program">
                Explore the Training Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Prompt Surgeon Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6">Try The Prompt Surgeon</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Elite prompt optimizer for high-stakes outcomes and strategic AI execution
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="/prompt-surgeon.webp"
                  width="708"
                  height="389" 
                  alt="The Prompt Surgeon GPT" 
                  className="rounded-xl shadow-xl w-full border-2 border-border"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="mb-6">Your AI Prompting Assistant</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  The Prompt Surgeon is a custom GPT designed to help you craft precision prompts 
                  for complex tasks and strategic AI execution. Whether you need to optimize existing 
                  prompts, convert tasks into ABLE workflows, or diagnose underperforming prompts, 
                  The Prompt Surgeon delivers expert-level guidance.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-base text-foreground/80">Optimize prompts for RAG use cases</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-base text-foreground/80">Convert tasks into ABLE framework flows</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-base text-foreground/80">Diagnose why prompts underperform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-base text-foreground/80">Create precision prompts for specific use cases</p>
                  </div>
                </div>
                <Button size="lg" asChild>
                  <a href="https://chatgpt.com/g/g-683130adcc98819193d716c4611ea3d3-the-prompt-surgeon" target="_blank" rel="noopener noreferrer">
                    Try The Prompt Surgeon
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div ref={outcomesAnim.ref} className={`text-center mb-20 animate-slide-up ${outcomesAnim.isVisible ? 'visible' : ''}`}>
            <h2 className="mb-6 text-primary-foreground">Measurable Outcomes</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Organizations that implement The AI CEO framework see transformative results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold mb-4">40%</div>
              <div className="text-lg text-primary-foreground/90">Time Saved on Routine Tasks</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold mb-4">3x</div>
              <div className="text-lg text-primary-foreground/90">Faster Content Production</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold mb-4">85%</div>
              <div className="text-lg text-primary-foreground/90">Team Adoption Rate</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold mb-4">6-8</div>
              <div className="text-lg text-primary-foreground/90">Weeks to Full Deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEFA Workshop Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div ref={nefaAnim.ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto animate-slide-up ${nefaAnim.isVisible ? 'visible' : ''}`}>
            <div className="order-2 lg:order-1">
              <img 
                src="/images/nefa-presentation.png" 
                alt="RJ Grimshaw presenting at NEFA" 
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-8">Leading Industry Education</h2>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
                <strong>February 2025 – National Equipment Finance Association:</strong> RJ Grimshaw 
                delivering the first AI education class for the equipment finance industry.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                The AI CEO is at the forefront of industry-specific AI education, bringing 
                practical, actionable insights to organizations ready to embrace transformation. 
                Our approach combines strategic thinking with hands-on implementation, ensuring 
                teams don't just understand AI but use it effectively.
              </p>
              <Button asChild>
                <Link href="/about">Learn About Our Philosophy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div ref={ctaAnim.ref} className={`max-w-4xl mx-auto text-center animate-fade-in ${ctaAnim.isVisible ? 'visible' : ''}`}>
            <h2 className="mb-8">Ready to Transform Your Team?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's discuss how The AI CEO can bring clarity, capability, and control to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book Discovery Call</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/program">View Training Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
