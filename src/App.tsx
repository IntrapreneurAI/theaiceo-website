import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import CookieConsent from "./components/CookieConsent";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import Program from "./pages/Program";
import FraudDetectionCaseStudy from "./pages/FraudDetectionCaseStudy";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import CaseStudiesIndex from "./pages/CaseStudiesIndex";
import BoostCohort from "./pages/BoostCohort";
import Press from "./pages/Press";
import Team from "./pages/Team";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/program"} component={Program} />
      <Route path={"/boost-cohort"} component={BoostCohort} />
      <Route path={"/about"} component={About} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/press"} component={Press} />
      <Route path={"/team"} component={Team} />
      <Route path={"/case-study"} component={CaseStudiesIndex} />
      <Route path={"/case-study/nefa"} component={CaseStudy} />
      <Route path={"/case-study/fraud-detection"} component={FraudDetectionCaseStudy} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/terms-of-service"} component={TermsOfService} />
      <Route path={"/cookie-policy"} component={CookiePolicy} />
      <Route path={"/disclaimer"} component={Disclaimer} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieConsent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
