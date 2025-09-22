import React from "react";
import Algemeen from "../../components/blocks/create-user/algemeen";
import OrganisatieForm from "../../components/blocks/create-user/organisatie";
import CreatePageLayout from "../../layouts/create-page-layout";

export default function CustomerForm({ currentTab, setCurrentTab }) {
  return (
    <CreatePageLayout
      title="Nieuwe gebruiker aanmaken"
      panels={[{ text: "Medewerkers" }]}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      sidebarTabs={[
        { key: "Algemeen", label: "Algemeen" },
        { key: "Organisatie", label: "Organisatie" },
      ]}
      renderContent={(activeTab) => {
        if (activeTab === "Algemeen") return <Algemeen />;
        if (activeTab === "Organisatie") return <OrganisatieForm />;
        return null;
      }}
    />
  );
}
