import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FileText, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              Let's Start the Conversation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ready to bring clarity, capability, and control to your AI adoption journey?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl mb-4">Book Discovery Call</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Schedule a 30-minute consultation to discuss your organization's AI 
                    readiness, challenges, and opportunities. We'll explore whether The AI CEO 
                    approach is the right fit for your team.
                  </p>
              <Button 
                className="w-full"
                asChild
              >
                <a href="mailto:team@theaiceo.ai?subject=Discovery Call Request">Schedule Call</a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Email us to schedule your discovery call
              </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl mb-4">Request Proposal</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Need a detailed proposal for your leadership team? Share your requirements 
                    and we'll prepare a customized proposal outlining scope, timeline, investment, 
                    and expected outcomes.
                  </p>
              <Button 
                variant="outline" 
                className="w-full"
                asChild
              >
                <a href="mailto:team@theaiceo.ai?subject=Proposal Request">Request Proposal PDF</a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Email us for a customized proposal
              </p>
                </CardContent>
              </Card>
            </div>

            {/* Direct Contact Section */}
            <div className="bg-muted rounded-xl p-8 text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl mb-4">Prefer Email?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Send us a message directly and we'll respond within 24 hours.
              </p>
              <a 
                href="mailto:team@theaiceo.ai" 
                className="text-primary hover:underline text-lg font-medium"
              >
                team@theaiceo.ai
              </a>
            </div>

            {/* What to Expect Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-center">What to Expect</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Discovery</h4>
                  <p className="text-sm text-muted-foreground">
                    We learn about your organization, current AI usage, and strategic goals
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    We evaluate your readiness and identify high-impact opportunities
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Proposal</h4>
                  <p className="text-sm text-muted-foreground">
                    We present a customized roadmap with clear outcomes and investment
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-center">Common Questions</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">What size organizations do you work with?</h4>
                  <p className="text-muted-foreground">
                    We specialize in small to mid-sized businesses (10-500 employees) across 
                    industries. Our approach is particularly effective for organizations that 
                    lack dedicated AI teams but recognize AI as a strategic priority.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How long does implementation take?</h4>
                  <p className="text-muted-foreground">
                    Our core training program runs 6 weeks, with ongoing support for 30 days 
                    post-training. Most organizations see measurable adoption within 8 weeks 
                    of starting the program.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Do we need existing AI tools in place?</h4>
                  <p className="text-muted-foreground">
                    No. We help you select the right tools based on your needs. Many organizations 
                    start with widely available AI platforms (like ChatGPT or Claude) and expand 
                    from there based on specific use cases.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What's the investment range?</h4>
                  <p className="text-muted-foreground">
                    Investment varies based on organization size, scope, and customization needs. 
                    During our discovery call, we'll provide transparent pricing aligned with your 
                    specific requirements and expected ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
