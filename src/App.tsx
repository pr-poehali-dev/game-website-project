import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RacingGame from "./pages/RacingGame";
import CarGame from "./pages/CarGame";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import GameRules from "./pages/GameRules";
import FreeGames from "./pages/FreeGames";
import MiniGames from "./pages/MiniGames";
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
          <Route path="/racing-game" element={<RacingGame />} />
          <Route path="/car-game" element={<CarGame />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rules" element={<GameRules />} />
          <Route path="/free-games" element={<FreeGames />} />
          <Route path="/mini-games" element={<MiniGames />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;