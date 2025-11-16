import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="container max-w-4xl">
            <h1 className="mb-8">Cookie Policy</h1>
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <section>
                <h2 className="mb-4">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>
              </section>

              <section>
                <h2 className="mb-4">2. How We Use Cookies</h2>
                <p className="mb-4">Able Leadership LLC DBA The AI CEO uses cookies for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly, including security and authentication</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings to enhance your experience</li>
                  <li><strong>Marketing Cookies:</strong> Track your browsing habits to deliver relevant advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4">3. Types of Cookies We Use</h2>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="font-semibold mb-2">Session Cookies</h3>
                    <p>Temporary cookies that expire when you close your browser. These are essential for website functionality.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Persistent Cookies</h3>
                    <p>Remain on your device for a set period or until you delete them. These help us remember your preferences.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">First-Party Cookies</h3>
                    <p>Set directly by our website to improve functionality and user experience.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Third-Party Cookies</h3>
                    <p>Set by external services we use, such as analytics providers or social media platforms.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4">4. Third-Party Services</h2>
                <p className="mb-4">We may use the following third-party services that use cookies:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Google Analytics - for website analytics and performance monitoring</li>
                  <li>Social media platforms - for content sharing and engagement tracking</li>
                  <li>Marketing and advertising platforms - for targeted advertising campaigns</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4">5. Managing Cookies</h2>
                <p className="mb-4">
                  You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
                </p>
                <p className="mb-4">To manage cookies, you can:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Adjust your browser settings to block or delete cookies</li>
                  <li>Use browser extensions that manage cookie preferences</li>
                  <li>Opt-out of third-party advertising cookies through industry opt-out programs</li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Note: Disabling cookies may affect the functionality of our website and limit your access to certain features.
                </p>
              </section>

              <section>
                <h2 className="mb-4">6. Cookie Duration</h2>
                <p>
                  The duration of cookies varies depending on their purpose. Session cookies are deleted when you close your browser, while persistent cookies may remain on your device for days, months, or years, depending on their specific function.
                </p>
              </section>

              <section>
                <h2 className="mb-4">7. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="mb-4">8. Contact Us</h2>
                <p>
                  If you have questions about our use of cookies, please contact us at:
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
