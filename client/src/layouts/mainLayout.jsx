import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import Home from "../pages/home";
import { useState } from "react";
import Medewerkers from "../pages/medewerkers";
import Organisaties from "../pages/organisaties";
import CustomerForm from "../pages/create/create-customer.jsx";
import Urenregistratie from "../pages/uren.jsx";
import Projecten from "../pages/projecten";
import CreateOrganisation from "../pages/create/create-organisation.jsx";
import CreateProject from "../pages/create/create-project.jsx";

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
        return <Organisaties setCurrentTab={setCurrentTab} />;
      case "create-user":
        return (
          <CustomerForm currentTab={currentTab} setCurrentTab={setCurrentTab} />
        );
      case "create-organisation":
        return (
          <CreateOrganisation
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        );
      case "create-project":
        return (
          <CreateProject
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        );
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
        <main className="flex-grow  bg-gray-50">{renderContent()}</main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
