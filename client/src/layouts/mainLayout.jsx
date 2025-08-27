import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import Home from "../pages/home";
import Sidebar from "../components/navigation/sidebar";
import { useState } from "react";
import Medewerkers from "../pages/medewerkers";

function MainLayout({ signOut }) {
  // State voor huidige tablad
  const [currentTab, setCurrentTab] = useState("home");

  // Content switchen op basis van currentTab (voor uitbreiding)
  const renderContent = () => {
    switch (currentTab) {
      case "home":
        return <Home />;
      case "medewerkers":
        return <Medewerkers />;
      default:
        return <Home />;
    }
  };

  // props
  const headerProps = {
    signOut,
    currentTab,
  };
  const sideBarProps = {
    setCurrentTab,
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar {...sideBarProps} />
      <div className="flex flex-col w-full">
        <Header {...headerProps} />
        <main className="flex-grow">{renderContent()}</main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
