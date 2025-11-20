import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              The Why Behind The AI CEO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              AI transformation isn't about tools. It's about people, strategy, and execution.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="mb-6">Our Belief</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Most AI initiatives fail not because the technology isn't ready, but because 
                organizations treat AI as a product to buy rather than a capability to build.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                They chase dashboards, platforms, and "AI solutions" that promise transformation 
                but deliver complexity. They invest in tools without investing in their people. 
                They expect adoption without providing clarity, training, or strategic direction.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <strong>We believe there's a better way.</strong>
              </p>
            </div>

            <div className="bg-muted p-8 rounded-xl">
              <h3 className="mb-6 text-center">The AI CEO Principles</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">1. Clarity Before Tools</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategy precedes implementation. Before selecting tools, define objectives. 
                    Before deploying AI, understand the problems you're solving. Clarity creates 
                    focus, and focus drives results.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">2. People Over Platforms</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Technology is an enabler, not a solution. The best AI platform is worthless 
                    if your team doesn't know how to use it. Invest in capability building, not 
                    just software licenses.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">3. Embedded, Not External</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Consultants who parachute in, deliver a report, and leave create no lasting 
                    value. Real transformation happens when AI capability becomes embedded in your 
                    organization's DNA, owned by your team and not rented from outsiders.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">4. Guardrails Enable Innovation</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Freedom without structure creates chaos. The right governance framework doesn't 
                    slow teams down but gives them confidence to move fast. Clear guidelines on data 
                    security, quality standards, and compliance free teams to innovate safely.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">5. Literacy Is Non-Negotiable</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    You can't delegate AI literacy to a single "AI team." Every role needs fluency 
                    appropriate to their function. Sales needs different skills than operations. 
                    Leadership needs different perspectives than frontline staff. Universal literacy, 
                    role-specific application.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">6. Outcomes, Not Activity</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Training sessions attended, tools deployed, and pilots launched are vanity metrics. 
                    What matters is measurable impact: time saved, quality improved, revenue generated. 
                    We optimize for outcomes, not activity.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6">The Contrast</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Understanding what we're <em>not</em> is as important as understanding what we are.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary">
                      <th className="text-left py-4 px-4 font-semibold">AI Dashboards & Platforms</th>
                      <th className="text-left py-4 px-4 font-semibold">The AI CEO Approach</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">Sell you software</td>
                      <td className="py-4 px-4 font-medium text-foreground">Build your capability</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">Generic training for everyone</td>
                      <td className="py-4 px-4 font-medium text-foreground">Role-specific fluency training</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">Focus on features and UI</td>
                      <td className="py-4 px-4 font-medium text-foreground">Focus on strategy and outcomes</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">Create dependency on their platform</td>
                      <td className="py-4 px-4 font-medium text-foreground">Create independence and ownership</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">One-time implementation</td>
                      <td className="py-4 px-4 font-medium text-foreground">Embedded transformation layer</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">Measure adoption metrics</td>
                      <td className="py-4 px-4 font-medium text-foreground">Measure business impact</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="mb-6">Who We Serve</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                The AI CEO is designed for small and mid-sized businesses that are serious about 
                AI transformation but skeptical of hype. You're not looking for magic but 
                a practical path forward.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                You recognize that AI is a strategic imperative, not a nice-to-have. You're 
                willing to invest in your team's capability, not just buy another tool. You 
                value clarity, control, and measurable outcomes over buzzwords and promises.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                If that sounds like you, we should talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Build Real AI Capability?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how The AI CEO can embed strategic AI capability into your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book Discovery Call</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/program">
                  View Training Program
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
