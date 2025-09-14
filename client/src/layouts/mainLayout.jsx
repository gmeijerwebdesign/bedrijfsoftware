import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import Home from "../pages/home";
import Sidebar from "../components/navigation/sidebar";
import { useState } from "react";
import Medewerkers from "../pages/medewerkers";
import Organisaties from "../pages/organisaties";

function MainLayout({ signOut, currentUser }) {
  // State voor huidige tablad
  const [currentTab, setCurrentTab] = useState("Registreren");

  // Content switchen op basis van currentTab (voor uitbreiding)
  const renderContent = () => {
    switch (currentTab) {
      case "Registreren":
        return <Home />;
      case "Medewerkers":
        return <Medewerkers />;
      case "Organisaties":
        return <Organisaties />;
      default:
        return <Home />;
    }
  };

  // Custom props
  const headerProps = {
    signOut,
    currentTab,
    setCurrentTab,
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col w-full">
        <Header {...headerProps} />
        <main currentUser={currentUser} className="flex-grow p-6">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
