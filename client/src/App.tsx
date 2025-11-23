import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import UnifiedStore from "./pages/UnifiedStore";
import { CSSGlobalPage } from "./versions/01-css-global/Page";
import { CSSModulesPage } from "./versions/02-css-modules/Page";
import { TailwindPage } from "./versions/03-tailwind/Page";
import { StyledComponentsPage } from "./versions/04-styled-components/Page";

function Router() {
  return (
    <Switch>
      <Route path={"\\"} component={Home} />
      <Route path={"/store"} component={UnifiedStore} />
      <Route path={"/01-css-global"} component={CSSGlobalPage} />
      <Route path={"/02-css-modules"} component={CSSModulesPage} />
      <Route path={"/03-tailwind"} component={TailwindPage} />
      <Route path={"/04-styled-components"} component={StyledComponentsPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}


function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
