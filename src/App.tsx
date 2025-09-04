import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollProgress from "./components/ScrollProgress";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { initGA, trackPageView } from "@/lib/analytics";

const queryClient = new QueryClient();

const App = () => {
  // Initialize Google Analytics on app start
  useEffect(() => {
    initGA();
    
    // Track initial page view
    if (window.location.pathname) {
      console.log('📄 Tracking initial page view:', window.location.pathname);
      trackPageView(window.location.pathname);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
    <ScrollProgress />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
