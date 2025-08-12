import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import Home from "../pages/home";
import Sidebar from "../components/navigation/sidebar";
import { useState } from "react";

function MainLayout({ signOut }) {
  // State voor huidige tab (voor nu enkel "home")
  const [currentTab, setCurrentTab] = useState("home");

  // Content switchen op basis van currentTab (voor uitbreiding)
  const renderContent = () => {
    switch (currentTab) {
      case "home":
      default:
        return <Home />;
    }
  };

  // props
  const headerProps = {
    signOut,
    currentTab,
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header {...headerProps} />
        <main className="flex-grow">{renderContent()}</main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
