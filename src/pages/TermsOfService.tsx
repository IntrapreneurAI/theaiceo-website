import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="container max-w-4xl">
            <h1 className="mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <section>
                <h2 className="mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the website theaiceo.ai and services provided by Able Leadership LLC, doing business as The AI CEO ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="mb-4">2. Description of Services</h2>
                <p>
                  The AI CEO provides AI adoption consulting, training, and strategic services for small and mid-sized businesses. Our services include role-based prompt fluency training, AI strategy development, and implementation support.
                </p>
              </section>

              <section>
                <h2 className="mb-4">3. User Responsibilities</h2>
                <p className="mb-4">You agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information when using our services</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4">4. Intellectual Property</h2>
                <p>
                  All content, materials, trademarks, and intellectual property on our website and in our services are owned by or licensed to Able Leadership LLC DBA The AI CEO. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="mb-4">5. Payment Terms</h2>
                <p>
                  If you purchase services from us, you agree to pay all fees as specified in your service agreement. All fees are non-refundable unless otherwise stated in writing. We reserve the right to modify our pricing with reasonable notice.
                </p>
              </section>

              <section>
                <h2 className="mb-4">6. Confidentiality</h2>
                <p>
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our business relationship. This obligation survives the termination of services.
                </p>
              </section>

              <section>
                <h2 className="mb-4">7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Able Leadership LLC DBA The AI CEO shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount you paid for our services in the twelve months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="mb-4">8. Disclaimer of Warranties</h2>
                <p>
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or meet your specific requirements.
                </p>
              </section>

              <section>
                <h2 className="mb-4">9. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your access to our services at any time, with or without cause or notice. Upon termination, your right to use our services will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="mb-4">10. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="mb-4">11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the updated terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="mb-4">12. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Able Leadership LLC DBA The AI CEO</strong><br />
                  Email: <a href="mailto:team@theaiceo.ai" className="text-primary hover:underline">team@theaiceo.ai</a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
