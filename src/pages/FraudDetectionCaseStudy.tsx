import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData, { fraudDetectionServiceSchema, jamesHReviewSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Shield, 
  TrendingDown, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Users,
  FileCheck
} from "lucide-react";

export default function FraudDetectionCaseStudy() {
  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData data={fraudDetectionServiceSchema} />
      <StructuredData data={jamesHReviewSchema} />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-background to-muted">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Case Study: Financial Services
              </div>
              <h1 className="mb-6">
                AI-Powered Fraud Detection: Transforming Risk Assessment in Equipment Leasing
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                How a bank-owned leasing company slashed document review time by 73% while improving fraud detection accuracy
              </p>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <h2 className="mb-8 text-center">The Challenge</h2>
            <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 mb-12">
              <p className="text-lg leading-relaxed mb-6">
                A bank-owned leasing company financing small-ticket equipment for businesses was struggling with forged bank statement detection in their manual underwriting workflow. They needed efficiency gains without compromising accuracy or compliance.
              </p>
              
              <h3 className="mb-6">The company needed an AI solution to:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="leading-relaxed">Detect sophisticated document forgeries with precision</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="leading-relaxed">Slash manual review time while maintaining accuracy</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="leading-relaxed">Meet stringent banking compliance requirements</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="leading-relaxed">Preserve critical human oversight</p>
                </div>
                <div className="flex gap-3 md:col-span-2">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="leading-relaxed">Gain additional insights into cash flows for obligors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABLE Framework Approach */}
        <section className="section-padding bg-muted/30">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="mb-6">The ABLE Framework Approach</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A systematic methodology for AI implementation in regulated financial services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Analyze */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      A
                    </div>
                    <h3>ANALYZE</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Conducted thorough deal flow analysis with client stakeholders, examining application volumes, fraud patterns, and detection gaps. Mapped existing verification protocols against actual losses to quantify improvement opportunities in the underwriting process.
                  </p>
                </CardContent>
              </Card>

              {/* Build */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      B
                    </div>
                    <h3>BUILD</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Built comprehensive requirements documentation and evaluation criteria tailored to banking-sector security standards. Created technical specifications for AI implementation that aligned with existing credit policy. Developed new procedures for handling bank statements when leveraging the tool.
                  </p>
                </CardContent>
              </Card>

              {/* Leverage */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      L
                    </div>
                    <h3>LEVERAGE</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    The client leveraged The AI CEO's knowledge to identify suitable AI vendors capable of meeting strict compliance requirements. Enhanced the client's credit policy with new verification protocols that integrated new capabilities while maintaining regulatory compliance.
                  </p>
                </CardContent>
              </Card>

              {/* Execute */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      E
                    </div>
                    <h3>EXECUTE</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Executed vendor assessment, selection, and implementation planning. Supported team training on the new system while monitoring performance metrics to ensure detection improvements materialized as projected.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>ABLE is powered by The AI CEO</strong> — Learn more at{" "}
                <a href="https://www.theaiceo.ai" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  www.theaiceo.ai
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Measurable Impact */}
        <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="mb-6 text-primary-foreground">Measurable Impact</h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Transformative results across efficiency, accuracy, and scalability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-primary-foreground/90" />
                <div className="text-5xl md:text-6xl font-bold mb-3">73%</div>
                <div className="text-lg text-primary-foreground/90">Reduction in Document Review Time</div>
              </div>
              <div className="text-center">
                <FileCheck className="h-12 w-12 mx-auto mb-4 text-primary-foreground/90" />
                <div className="text-5xl md:text-6xl font-bold mb-3">40%</div>
                <div className="text-lg text-primary-foreground/90">Decrease in False Positives vs. Manual Review</div>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary-foreground/90" />
                <div className="text-5xl md:text-6xl font-bold mb-3">Zero</div>
                <div className="text-lg text-primary-foreground/90">Additional Headcount Needed</div>
              </div>
              <div className="text-center">
                <TrendingDown className="h-12 w-12 mx-auto mb-4 text-primary-foreground/90" />
                <div className="text-5xl md:text-6xl font-bold mb-3">30%</div>
                <div className="text-lg text-primary-foreground/90">Application Volume Increase Handled</div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-primary-foreground/90 italic">
                Additional insights into the health of the applicant enabled better risk assessment
              </p>
            </div>
          </div>
        </section>

        {/* Key Insight */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-8 lg:p-12">
              <h3 className="mb-6">Key Insight</h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                By applying the ABLE Framework to this fraud detection initiative, we ensured both technical implementation and procedural changes progressed in parallel. This integrated approach allowed the leasing company to transform their fraud detection capabilities while maintaining operational continuity.
              </p>
            </div>
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="section-padding bg-muted/30">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-6">Client Testimonial</h2>
            </div>
            <Card className="border-2">
              <CardContent className="p-10 lg:p-16">
                <div className="text-6xl text-accent mb-6">"</div>
                <p className="text-xl md:text-2xl leading-relaxed mb-8 italic">
                  If you're considering AI for financial services, these folks understand both the technology and the banking regulatory environment—a rare combination that made all the difference for us.
                </p>
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-lg">James H.</p>
                  <p className="text-muted-foreground">Chief Credit Officer, First Capital Equipment Finance</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container max-w-4xl text-center">
            <h2 className="mb-6">Ready to Transform Your Risk Assessment?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's discuss how The AI CEO can bring AI-powered efficiency and accuracy to your financial services operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book Discovery Call
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-study">
                  View NEFA Workshop Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
