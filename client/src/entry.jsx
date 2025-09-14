import { useEffect, useState } from "react";
import MainLayout from "./layouts/mainLayout";
import GetTestData from "./utils/getTestData";
import { supabase } from "./utils/supabaseClient";
function Entry({ signOut }) {
  const connectionString = import.meta.env.VITE_API_CONNECTION_LOCAL;
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setCurrentUser(session.user); // bevat email, id etc.
      }
    });
  }, []);

  return (
    <>
      <div>
        {/* <GetTestData connectionString={connectionString} /> */}
        <MainLayout currentUser={currentUser} signOut={signOut} />
      </div>
    </>
  );
}

export default Entry;
