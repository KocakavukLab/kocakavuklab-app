import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/pages/About";
import Members from "./components/pages/Members";
import Network from "./components/pages/Network";
import Publications from "./components/pages/Publications";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import PageNotFound from "./components/PageNotFound";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Imprint from "./components/pages/Imprint";
import DesignCredits from "./components/pages/DesignCredits";
import "./App.css";
export const App = () => {
  
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/network" element={<Network />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/designcredits" element={<DesignCredits />} />
          <Route path="*" component={PageNotFound} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
