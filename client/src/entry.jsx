import { useEffect, useState } from "react";
import MainLayout from "./layouts/mainLayout";
import { supabase } from "./utils/supabaseClient";

function Entry({ signOut }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const loadUserProfile = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session?.user) return;

      const authUser = session.user;

      const { data: user, error } = await supabase
        .from("users")
        .select("*")
        .eq("authentication_id", authUser.id)
        .single();

      if (error) {
        console.error("Error loading profile:", error);
        return;
      }

      setCurrentUser(user);
    };

    loadUserProfile();
  }, []);

  return <MainLayout currentUser={currentUser} signOut={signOut} />;
}

export default Entry;
