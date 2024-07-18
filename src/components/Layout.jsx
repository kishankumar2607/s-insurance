import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CallToAction from "./CallToAction";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <CallToAction />
      <Footer />
    </div>
  );
}
