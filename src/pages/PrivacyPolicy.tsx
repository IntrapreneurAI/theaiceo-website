import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="container max-w-4xl">
            <h1 className="mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <section>
                <h2 className="mb-4">1. Introduction</h2>
                <p>
                  Able Leadership LLC, doing business as The AI CEO ("we," "us," or "our"), respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website theaiceo.ai and use our services.
                </p>
              </section>

              <section>
                <h2 className="mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and other contact details you provide when contacting us or signing up for our services.</li>
                  <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience and gather information about usage patterns.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To communicate with you about our services, updates, and promotional offers</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To analyze usage trends and optimize our website</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4">4. Information Sharing and Disclosure</h2>
                <p className="mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., email delivery, analytics)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4">5. Data Security</h2>
                <p>
                  We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="mb-4">6. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access, correct, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Disable cookies through your browser settings</li>
                  <li>Request information about how we use your data</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4">7. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="mb-4">8. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
                </p>
              </section>

              <section>
                <h2 className="mb-4">9. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
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
