import React from "react";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import CallToActionComponent from "./CallToActionComponent/CallToActionComponent";
import FooterComponent from "./FooterComponent/FooterComponent";

export default function Layout({ children }) {
  return (
    <div>
      <HeaderComponent />
      <main>{children}</main>
      <CallToActionComponent />
      <FooterComponent />
    </div>
  );
}
