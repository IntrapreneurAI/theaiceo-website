import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Users, 
  Calendar, 
  Target,
  Lightbulb,
  TrendingUp,
  Shield,
  ArrowRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Program() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              Role-Based Prompt Fluency Training
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Fix prompting chaos with role-specific habits
            </p>
            <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
              Transform your team from AI-curious to AI-capable through structured, 
              practical training tailored to each role's unique needs and workflows.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Apply to Train Your Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">The Challenge</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Most organizations approach AI training with a one-size-fits-all mindset. 
              They gather everyone in a room, show them ChatGPT, and hope for the best. 
              The result? Minimal adoption, inconsistent quality, and frustrated teams.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              <strong>The truth is simple:</strong> A sales leader needs different prompting 
              skills than an operations manager. A marketing professional has different use 
              cases than a finance analyst. Generic training fails because it ignores these 
              fundamental differences.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our Role-Based Prompt Fluency Training solves this by delivering targeted, 
              practical instruction that meets each role where they are, with examples, 
              templates, and workflows they can implement immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Inclusions Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">What's Included</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive training program designed for measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Users className="h-10 w-10 text-accent mb-4" />
                <h4 className="font-semibold mb-3">Role-Specific Tracks</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Leadership & Strategy</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Operations & Process</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Sales & Marketing</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Finance & Analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Lightbulb className="h-10 w-10 text-accent mb-4" />
                <h4 className="font-semibold mb-3">Practical Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Custom prompt templates</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Workflow integration guides</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Best practice playbooks</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Real-world case studies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-accent mb-4" />
                <h4 className="font-semibold mb-3">Governance Framework</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Data security guidelines</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Quality control standards</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Compliance protocols</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Risk mitigation strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Calendar className="h-10 w-10 text-accent mb-4" />
                <h4 className="font-semibold mb-3">Live Sessions</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Interactive workshops</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Q&A sessions</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Hands-on practice</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Peer collaboration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Target className="h-10 w-10 text-accent mb-4" />
                <h4 className="font-semibold mb-3">Implementation Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>30-day follow-up coaching</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Team office hours</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Custom use case development</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Progress tracking tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="h-10 w-10 text-accent mb-4" />
                <h4 className="font-semibold mb-3">Ongoing Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Monthly prompt library updates</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Community access</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>New feature training</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Industry insights newsletter</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">Week-by-Week Timeline</h2>
            <p className="text-center text-muted-foreground mb-12">
              A structured 6-week journey from foundation to full deployment
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="week1">
                <AccordionTrigger className="text-lg font-semibold">
                  Week 1: Foundation & Assessment
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>
                    <strong>Kickoff Session:</strong> Introduction to AI fundamentals, 
                    prompt engineering basics, and the role-based approach.
                  </p>
                  <p>
                    <strong>Team Assessment:</strong> Evaluate current AI usage, identify 
                    gaps, and define success metrics for each role.
                  </p>
                  <p>
                    <strong>Deliverable:</strong> Customized training roadmap aligned with 
                    your organization's goals.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="week2">
                <AccordionTrigger className="text-lg font-semibold">
                  Week 2: Core Prompting Skills
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>
                    <strong>Universal Techniques:</strong> Learn the CLEAR framework 
                    (Context, Length, Examples, Audience, Role) for effective prompting.
                  </p>
                  <p>
                    <strong>Hands-On Practice:</strong> Apply techniques to real work 
                    scenarios with immediate feedback.
                  </p>
                  <p>
                    <strong>Deliverable:</strong> Personal prompt library starter kit 
                    for each participant.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="week3">
                <AccordionTrigger className="text-lg font-semibold">
                  Week 3: Role-Specific Deep Dive
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>
                    <strong>Track Separation:</strong> Teams split into role-specific 
                    groups for targeted training.
                  </p>
                  <p>
                    <strong>Use Case Development:</strong> Build prompts for your actual 
                    workflows such as sales scripts, process docs, strategic analysis, and more.
                  </p>
                  <p>
                    <strong>Deliverable:</strong> Role-specific prompt templates ready 
                    for immediate deployment.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="week4">
                <AccordionTrigger className="text-lg font-semibold">
                  Week 4: Advanced Techniques & Integration
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>
                    <strong>Advanced Methods:</strong> Chain-of-thought prompting, 
                    multi-step workflows, and quality refinement strategies.
                  </p>
                  <p>
                    <strong>Tool Integration:</strong> Connect AI to your existing 
                    tech stack and workflows.
                  </p>
                  <p>
                    <strong>Deliverable:</strong> Integrated workflow documentation 
                    and automation blueprints.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="week5">
                <AccordionTrigger className="text-lg font-semibold">
                  Week 5: Governance & Best Practices
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>
                    <strong>Risk Management:</strong> Data security, compliance, and 
                    quality control frameworks.
                  </p>
                  <p>
                    <strong>Team Standards:</strong> Establish organizational guidelines 
                    for consistent, safe AI usage.
                  </p>
                  <p>
                    <strong>Deliverable:</strong> AI governance playbook customized 
                    for your organization.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="week6">
                <AccordionTrigger className="text-lg font-semibold">
                  Week 6: Deployment & Sustainability
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>
                    <strong>Full Deployment:</strong> Launch AI capabilities across 
                    the organization with support structures in place.
                  </p>
                  <p>
                    <strong>Measurement Framework:</strong> Track adoption, measure 
                    impact, and identify optimization opportunities.
                  </p>
                  <p>
                    <strong>Deliverable:</strong> 90-day sustainability plan with 
                    ongoing support resources.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-primary-foreground">Measurable Benefits</h2>
            <p className="text-lg text-primary-foreground/80 mb-12">
              Organizations completing this program consistently achieve:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-primary-foreground">
                    85%+ Team Adoption
                  </h4>
                  <p className="text-primary-foreground/80 text-sm">
                    High engagement across all roles, not just early adopters
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-primary-foreground">
                    40% Time Savings
                  </h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Significant reduction in time spent on routine tasks
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-primary-foreground">
                    3x Content Velocity
                  </h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Faster production of high-quality content and deliverables
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-primary-foreground">
                    Consistent Quality
                  </h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Standardized outputs that meet organizational standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Transform Your Team?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Limited cohorts available. Apply now to secure your organization's spot 
              in the next training cycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Apply to Train Your Team</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">
                  Learn Our Philosophy
                  <ArrowRight className="ml-2 h-4 w-4" />
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
