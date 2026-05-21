import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy-loaded pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Wallet = lazy(() => import("./pages/Wallet"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Settings = lazy(() => import("./pages/Settings"));

// Loading Placeholder - Full screen centered loader
const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-background-deep z-[1000]">
    <div className="relative flex flex-col items-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-accent-blue/20 border-t-accent-blue" />
      <span className="text-sm font-medium text-text-secondary animate-pulse uppercase tracking-widest">Loading</span>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/settings" element={<Settings />} />

          {/* Catch-all route redirecting to landing */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
