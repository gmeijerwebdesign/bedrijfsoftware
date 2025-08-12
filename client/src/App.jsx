import MainLayout from "./layouts/mainLayout";
import GetTestData from "./utils/getTestData";

function App() {
  const connectionString = import.meta.env.VITE_API_CONNECTION_LOCAL;
  return (
    <>
      <div>
        {/* <GetTestData connectionString={connectionString} /> */}
        <MainLayout />
      </div>
    </>
  );
}

export default App;
