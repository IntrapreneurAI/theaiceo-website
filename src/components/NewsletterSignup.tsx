import { Mail } from "lucide-react";
import { useEffect } from "react";

/**
 * Newsletter Signup Component with Nutshell Forms Integration
 * 
 * This component integrates with Nutshell CRM to capture email signups
 * and automatically add them to your mailing list.
 */

export default function NewsletterSignup() {
  useEffect(() => {
    // Initialize Nutshell form
    if (typeof window !== 'undefined') {
      // @ts-ignore - Nutshell global
      window.Nutsheller = window.Nutsheller || function() {
        // @ts-ignore
        (window.Nutsheller.q = window.Nutsheller.q || []).push(arguments);
      };
      
      // @ts-ignore
      window.Nutsheller('initForm', {
        form: 'mtYq7r',
        instance: '381356',
        authToken: '',
        target: 'nutshell-form-mtYq7r'
      });

      // Load Nutshell script
      const script = document.createElement('script');
      script.src = 'https://loader.nutshell.com/nutsheller.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="bg-background border border-border rounded-lg p-8 shadow-sm">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Stay Updated
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Get AI insights and prompting tips delivered to your inbox.
        </p>
      </div>

      {/* Nutshell Form Container */}
      <div id="nutshell-form-mtYq7r" className="newsletter-form"></div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
