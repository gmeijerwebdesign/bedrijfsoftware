import { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Entry from "./entry";
import LoginForm from "./components/auth/loginPage";
import LoginPage from "./components/auth/loginPage";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // door supabase gemaakte component moet nog vervangen worden
  if (!session) {
    return <LoginPage supabase={supabase} />;
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  return <Entry signOut={signOut} />;
}

export default App;
