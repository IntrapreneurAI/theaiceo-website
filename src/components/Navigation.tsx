import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Github } from "lucide-react";
import { APP_LOGO } from "@/const";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/program", label: "Training Program" },
    { href: "/boost-cohort", label: "BOOST Cohort" },
    { href: "/about", label: "Philosophy" },
    { href: "/case-study", label: "Case Studies" },
    { href: "/blog", label: "Insights" },
    { href: "/press", label: "Press" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo & GitHub */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <img 
                src={APP_LOGO} 
                alt="The AI CEO" 
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
            <a
              href="https://github.com/IntrapreneurAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Visit our GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === link.href
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">Book Discovery Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block py-2 text-sm font-medium transition-colors cursor-pointer ${
                      location === link.href
                        ? "text-primary"
                        : "text-foreground/80"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Button asChild className="w-full">
                <Link href="/contact">Book Discovery Call</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
