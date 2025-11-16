import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Users,
  CheckCircle2,
  ArrowRight,
  Clock,
  Calendar
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BoostCohort() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8">
              <p className="text-sm font-semibold text-primary-foreground">500+ Professionals Trained</p>
            </div>
            <h1 className="mb-8 text-primary-foreground">
              BOOST Prompting Mastery Cohort
            </h1>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-12 leading-relaxed font-light">
              Unlock the Power of Expert AI Prompting
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              No cohorts will take place until after the first of the year. We appreciate all our professionals 
              who trained in the cohort this year. New sessions will be announced soon—stay tuned for 2025!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Stay Updated</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="#details">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stop Searching, Start Prompting */}
      <section id="details" className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="mb-6">Stop Searching. Start Prompting.</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The difference between typical results and game-changing outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <Card className="border-2 border-destructive/20 bg-destructive/5">
                <CardContent className="p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-destructive/10 p-3 rounded-lg">
                      <Target className="h-8 w-8 text-destructive" />
                    </div>
                    <h3 className="text-destructive">Typical Searches</h3>
                  </div>
                  <p className="text-lg text-muted-foreground italic mb-4">
                    "Best ways to improve email marketing"
                  </p>
                  <p className="text-base text-muted-foreground">
                    Generic answers that everyone else is getting. No competitive advantage.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/50 bg-accent/5">
                <CardContent className="p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Zap className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-accent">AI-Optimized Prompting</h3>
                  </div>
                  <p className="text-lg text-muted-foreground italic mb-4">
                    "Act as an email marketing expert. Analyze top-performing strategies for SaaS companies 
                    and outline a step-by-step framework guaranteed to increase open rates by 30%. Include 
                    subject line formulas, personalization techniques, and ideal sending times."
                  </p>
                  <p className="text-base text-foreground font-semibold">
                    Tailored, actionable insights that drive real results.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-8 text-center">
                  <Target className="h-12 w-12 text-accent mx-auto mb-6" />
                  <h4 className="mb-4">Precision Matters</h4>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Instantly get tailored, actionable insights—not generic answers
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-8 text-center">
                  <Zap className="h-12 w-12 text-accent mx-auto mb-6" />
                  <h4 className="mb-4">Effortless Efficiency</h4>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Skip endless searches; get clear, concise strategies
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-6" />
                  <h4 className="mb-4">Unmatched Value</h4>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Expert-level prompting unlocks smarter insights and accelerates results
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Master */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6">Here's What You'll Master</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transform how you work with AI through proven techniques and expert guidance
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <CheckCircle2 className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Turn AI into Your Ultimate Competitive Advantage</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Learn to leverage AI capabilities that your competitors haven't discovered yet
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <CheckCircle2 className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Generate Faster, Smarter, Higher-Quality Outputs</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Master prompting techniques that consistently deliver exceptional results
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <CheckCircle2 className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Accelerate Creativity and Boost Productivity</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlock creative solutions and streamline workflows with advanced prompting strategies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <CheckCircle2 className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Immediate Access to Exclusive Prompt Database</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Get instant access to our proprietary collection of proven prompts for rapid learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6">Your Competitive Edge Awaits</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join this exclusive, high-impact cohort meeting every Monday in April at 12:00 PM EST
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="border-2 bg-background">
                <CardContent className="p-8 text-center">
                  <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="mb-2">4 Power Sessions</h4>
                  <p className="text-muted-foreground text-sm">
                    Every Monday in April
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-background">
                <CardContent className="p-8 text-center">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="mb-2">60 Minutes Each</h4>
                  <p className="text-muted-foreground text-sm">
                    Focused, actionable training
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-background">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="mb-2">Community Access</h4>
                  <p className="text-muted-foreground text-sm">
                    Connect with fellow learners
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-background">
                <CardContent className="p-8 text-center">
                  <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="mb-2">Prompt Database</h4>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive library included
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 rounded-2xl p-10 text-center">
              <p className="text-lg font-semibold text-foreground mb-4">
                Spots are limited—secure your place today!
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Reserve Your Spot Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="mb-4">What makes this cohort different from other AI courses?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike generic AI courses, our BOOST Prompting Mastery Cohort focuses exclusively on 
                  developing advanced prompting skills with direct application to your work. You'll receive 
                  personalized guidance, access to our proprietary prompt database, and join a community of 
                  forward-thinking professionals leveraging AI for tangible business results.
                </p>
              </div>

              <div>
                <h4 className="mb-4">Do I need prior AI experience to join?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  No prior AI experience is required. Whether you're a complete beginner or have been 
                  experimenting with AI tools, our structured approach ensures everyone can develop 
                  expert-level prompting abilities regardless of technical background.
                </p>
              </div>

              <div>
                <h4 className="mb-4">What happens if I miss a session?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  All sessions are recorded and made available to participants within 24 hours. You'll also 
                  have access to our community forum where you can ask questions and receive feedback on 
                  missed content.
                </p>
              </div>

              <div>
                <h4 className="mb-4">Will this work with any AI tool I'm currently using?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Absolutely! The prompting techniques you'll learn are platform-agnostic and can be applied 
                  across various AI tools including ChatGPT, Claude, Gemini, and many others. The principles 
                  of effective prompting remain consistent regardless of which AI system you prefer.
                </p>
              </div>

              <div>
                <h4 className="mb-4">How much time should I commit outside the sessions?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  For optimal results, we recommend 1-2 hours per week practicing the techniques between 
                  sessions. However, even applying just a few minutes daily will yield significant 
                  improvements in your AI outputs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-primary-foreground">Ready to Master AI Prompting?</h2>
            <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
              Join 500+ professionals who have transformed their AI capabilities through BOOST
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Reserve Your Spot Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
