import { Link } from "wouter";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        {/* Newsletter Section - Full Width */}
        <div className="mb-12">
          <NewsletterSignup />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-bold mb-4">The AI CEO</h4>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              An embedded function for SMBs navigating AI adoption — bringing clarity, capability, and control. 
              Real adoption for real teams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/program">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Training Program
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Philosophy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/case-study">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Case Studies
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Insights
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/press">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Press
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Team
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get Started</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Book Discovery Call
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/boost-cohort">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    BOOST Cohort
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Request Proposal
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Terms of Service
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Cookie Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                    Disclaimer
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p className="mb-2">&copy; {currentYear} Able Leadership LLC DBA The AI CEO. All rights reserved.</p>
          <p className="text-primary-foreground/70 font-medium">Proudly Veteran Owned</p>
        </div>
      </div>
    </footer>
  );
}
