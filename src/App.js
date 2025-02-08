import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Overview from "./components/pages/Overview";
import Members from "./components/pages/Members";
import Network from "./components/pages/Network";
import Publications from "./components/pages/Publications";
import JoinUs from "./components/pages/JoinUs";
import News from "./components/pages/News";
import NewsDetail from "./components/pages/NewsDetail";
import Contact from "./components/pages/Contact";
import NotFound from "./components/NotFound";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Imprint from "./components/pages/Imprint";
import DesignCredits from "./components/pages/DesignCredits";
import "./App.css";
import { inject } from "@vercel/analytics";
import { SpeedInsights } from '@vercel/speed-insights/react';
inject();
export const App = () => {
  
  return (
    <div className="App">
      <ScrollToTop />
      <Layout>
      <Routes>
      <Route path="/" element={<Navigate to="/overview" />} />
      <Route path="/overview" element={<Overview />} />

      {/* Redirect /about to /overview */}
      <Route path="/about" element={<Navigate to="/overview" replace />} />

      <Route path="/members" element={<Members />} />
      <Route path="/network" element={<Network />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:newsId" element={<NewsDetail />} />
      <Route path="/joinus" element={<JoinUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/imprint" element={<Imprint />} />
      <Route path="/designcredits" element={<DesignCredits />} />

      {/* Catch-all for unknown routes */}
      <Route path="*" element={<NotFound />} />
      </Routes>
      </Layout>
      <SpeedInsights />
    </div>
  );
};

export default App;
