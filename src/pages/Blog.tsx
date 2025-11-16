import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              Insights & Perspectives
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Strategic thinking on AI adoption, team capability building, and organizational transformation
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center py-12">
              <Card className="border-2">
                <CardContent className="pt-12 pb-12">
                  <h3 className="text-2xl mb-4">Blog Coming Soon</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    We're building a comprehensive library of strategic insights on AI adoption, 
                    prompt engineering, and organizational transformation. Check back regularly 
                    for new perspectives on how AI is reshaping business operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
