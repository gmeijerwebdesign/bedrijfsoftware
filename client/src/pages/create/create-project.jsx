import Algemeen from "../../components/blocks/create-user/algemeen.js";
import OrganisatieForm from "../../components/blocks/create-user/organisatie.js";
import CreatePageLayout from "../../layouts/create-page-layout.jsx";

export default function CreateProject({ currentTab, setCurrentTab }) {
  return (
    <CreatePageLayout
      title="Nieuwe project aanmaken"
      panels={[{ text: "Organisation" }]}
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
