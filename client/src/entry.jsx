import MainLayout from "./layouts/mainLayout";
import GetTestData from "./utils/getTestData";

function Entry({ signOut }) {
  const connectionString = import.meta.env.VITE_API_CONNECTION_LOCAL;
  return (
    <>
      <div>
        {/* <GetTestData connectionString={connectionString} /> */}
        <MainLayout signOut={signOut} />
      </div>
    </>
  );
}

export default Entry;
