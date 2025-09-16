import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import Home from "../pages/home";
import Sidebar from "../components/navigation/sidebar";
import { useState } from "react";
import Medewerkers from "../pages/medewerkers";
import Organisaties from "../pages/organisaties";
import CustomerForm from "../pages/create-customer";
import Urenregistratie from "../pages/uren";
import Projecten from "../pages/projecten";

function MainLayout({ signOut, currentUser }) {
  // State voor huidige tablad
  const [currentTab, setCurrentTab] = useState("Registreren");

  // Content switchen op basis van currentTab (voor uitbreiding)
  const renderContent = () => {
    switch (currentTab) {
      case "Registreren":
        return <Urenregistratie setCurrentTab={setCurrentTab} />;
      case "Medewerkers":
        return (
          <Medewerkers
            currentUser={currentUser}
            setCurrentTab={setCurrentTab}
          />
        );
      case "Organisaties":
        return <Organisaties />;
      case "create-user":
        return <CustomerForm setCurrentTab={setCurrentTab} />;
      case "Projecten":
        return <Projecten setCurrentTab={setCurrentTab} />;

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
        <main className="flex-grow p-6 bg-gray-50">{renderContent()}</main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
