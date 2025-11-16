import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Shield, Users, ArrowRight } from "lucide-react";

export default function CaseStudiesIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-background to-muted">
          <div className="container max-w-5xl text-center">
            <h1 className="mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Real results from real implementations. See how The AI CEO helps organizations navigate AI adoption with clarity, capability, and control.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="section-padding">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* NEFA Workshop Case Study */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="h-8 w-8 text-accent" />
                    <span className="text-sm font-medium text-accent">Industry Association</span>
                  </div>
                  <h3 className="mb-4">NEFA Equipment Finance Workshop</h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Delivered a comprehensive AI adoption workshop for the National Equipment Finance Association, equipping equipment finance professionals with practical frameworks for AI integration.
                  </p>
                  <div className="mb-8">
                    <img 
                      src="/RJNEFAPresentation.png" 
                      alt="NEFA Workshop Presentation" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex-1 min-w-[120px]">
                      <div className="text-3xl font-bold text-primary mb-1">50+</div>
                      <div className="text-sm text-muted-foreground">Attendees</div>
                    </div>
                    <div className="flex-1 min-w-[120px]">
                      <div className="text-3xl font-bold text-primary mb-1">4.8/5</div>
                      <div className="text-sm text-muted-foreground">Rating</div>
                    </div>
                    <div className="flex-1 min-w-[120px]">
                      <div className="text-3xl font-bold text-primary mb-1">Feb 2025</div>
                      <div className="text-sm text-muted-foreground">Date</div>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/case-study/nefa">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Fraud Detection Case Study */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-accent" />
                    <span className="text-sm font-medium text-accent">Financial Services</span>
                  </div>
                  <h3 className="mb-4">AI-Powered Fraud Detection</h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Transformed risk assessment for a bank-owned equipment leasing company, implementing AI-powered fraud detection that slashed review time by 73% while improving accuracy.
                  </p>
                  <div className="mb-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 h-48 flex items-center justify-center">
                    <Shield className="h-24 w-24 text-primary/30" />
                  </div>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex-1 min-w-[120px]">
                      <div className="text-3xl font-bold text-primary mb-1">73%</div>
                      <div className="text-sm text-muted-foreground">Time Saved</div>
                    </div>
                    <div className="flex-1 min-w-[120px]">
                      <div className="text-3xl font-bold text-primary mb-1">40%</div>
                      <div className="text-sm text-muted-foreground">Fewer False Positives</div>
                    </div>
                    <div className="flex-1 min-w-[120px]">
                      <div className="text-3xl font-bold text-primary mb-1">Zero</div>
                      <div className="text-sm text-muted-foreground">New Hires</div>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/case-study/fraud-detection">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted/30">
          <div className="container max-w-4xl text-center">
            <h2 className="mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's discuss how The AI CEO can help your organization achieve measurable results with AI adoption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book Discovery Call
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/program">
                  Explore Training Program
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
