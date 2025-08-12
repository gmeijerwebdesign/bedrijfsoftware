import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import Home from "../pages/home";
import Sidebar from "../components/navigation/sidebar";

function MainLayout() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="flex-grow">
            <Home />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
