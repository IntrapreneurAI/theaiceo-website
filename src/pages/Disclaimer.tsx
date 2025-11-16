import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="container max-w-4xl">
            <h1 className="mb-8">Disclaimer</h1>
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <section>
                <h2 className="mb-4">1. General Information</h2>
                <p>
                  The information provided by Able Leadership LLC, doing business as The AI CEO ("we," "us," or "our"), on theaiceo.ai and through our services is for general informational and educational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
                </p>
              </section>

              <section>
                <h2 className="mb-4">2. Professional Advice Disclaimer</h2>
                <p>
                  The content on our website and in our services is not intended to be a substitute for professional advice. While we provide AI adoption consulting and training services, the information shared should not be relied upon as the sole basis for making business decisions. You should always seek the advice of qualified professionals regarding specific business, legal, financial, or technical matters.
                </p>
              </section>

              <section>
                <h2 className="mb-4">3. No Guarantees of Results</h2>
                <p>
                  While we strive to provide high-quality services and valuable insights, we make no guarantees regarding the specific outcomes or results you may achieve from using our services. Business results depend on numerous factors, including but not limited to your specific circumstances, implementation efforts, market conditions, and organizational commitment.
                </p>
                <p className="mt-4">
                  Any case studies, testimonials, or examples of past results are provided for illustrative purposes only and do not guarantee similar outcomes for your organization.
                </p>
              </section>

              <section>
                <h2 className="mb-4">4. External Links Disclaimer</h2>
                <p>
                  Our website may contain links to external websites that are not provided or maintained by us. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                </p>
              </section>

              <section>
                <h2 className="mb-4">5. Technology and AI Disclaimer</h2>
                <p>
                  The field of artificial intelligence is rapidly evolving. While we make every effort to provide current and accurate information about AI technologies, tools, and best practices, the landscape may change quickly. We recommend staying informed about the latest developments and consulting with technology professionals for implementation decisions.
                </p>
              </section>

              <section>
                <h2 className="mb-4">6. Errors and Omissions</h2>
                <p>
                  Despite our best efforts to ensure accuracy, our website and materials may contain technical inaccuracies, typographical errors, or outdated information. We reserve the right to make changes, corrections, and updates at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="mb-4">7. Limitation of Liability</h2>
                <p>
                  Under no circumstance shall Able Leadership LLC DBA The AI CEO be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of our website or services, whether based on contract, tort, strict liability, or any other legal theory, even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="mb-4">8. Use at Your Own Risk</h2>
                <p>
                  All information and services are provided on an "as is" and "as available" basis. Your use of our website and services is at your sole risk. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.
                </p>
              </section>

              <section>
                <h2 className="mb-4">9. Compliance and Regulatory Matters</h2>
                <p>
                  While we may discuss AI governance, compliance, and best practices, we are not legal or regulatory advisors. Organizations should consult with qualified legal counsel regarding compliance with applicable laws, regulations, and industry standards in their specific jurisdiction and industry.
                </p>
              </section>

              <section>
                <h2 className="mb-4">10. Updates to This Disclaimer</h2>
                <p>
                  We may revise this Disclaimer at any time without prior notice. By using our website and services, you agree to be bound by the current version of this Disclaimer.
                </p>
              </section>

              <section>
                <h2 className="mb-4">11. Contact Information</h2>
                <p>
                  If you have questions about this Disclaimer, please contact us at:
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
