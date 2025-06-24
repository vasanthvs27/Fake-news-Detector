
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Detector from "./pages/Detector";
import NLPAnalysis from "./pages/NLPAnalysis";
import SourceCredibility from "./pages/SourceCredibility";
import ContentVerification from "./pages/ContentVerification";
import SentimentAnalysis from "./pages/SentimentAnalysis";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/detector" element={<Detector />} />
          <Route path="/nlp-analysis" element={<NLPAnalysis />} />
          <Route path="/source-credibility" element={<SourceCredibility />} />
          <Route path="/content-verification" element={<ContentVerification />} />
          <Route path="/sentiment-analysis" element={<SentimentAnalysis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
