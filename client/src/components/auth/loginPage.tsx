import React, { useState } from "react";

function LoginPage({ supabase }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    // 1️⃣ Inloggen bij Supabase Auth
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setMessage(`Fout: ${signInError.message}`);
      setLoading(false);
      return;
    }

    // 2️⃣ Ophalen ingelogde gebruiker
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setMessage(`Kon gebruiker niet ophalen: ${userError?.message || ""}`);
      setLoading(false);
      return;
    }

    // 3️⃣ Record in eigen users-table aanmaken (of updaten als het al bestaat)
    const { error: upsertError } = await supabase.from("users").upsert(
      {
        authentication_id: user.id, // verplicht veld met foreign key
        username: user.email, // optioneel: andere kolommen die je wilt bijhouden
        password: "ewfe",
      },

      { onConflict: "authentication_id" }
    );

    if (upsertError) {
      setMessage(
        `Inloggen gelukt, maar kon users-record niet bijwerken: ${upsertError.message}`
      );
    } else {
      setMessage("Inloggen gelukt!");
    }

    setLoading(false);
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setMessage("Vul je e-mail in om wachtwoord te resetten.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      setMessage(`Fout bij resetten wachtwoord: ${error.message}`);
    } else {
      setMessage("Check je mail voor de reset link!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow flex items-center justify-center px-6 sm:px-12">
        <div className="max-w-md w-full">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Inloggen
            </h1>
            <p className="mt-2 text-gray-500 text-sm">
              Voer je gegevens in om verder te gaan
            </p>
          </header>

          <form
            onSubmit={handleLogin}
            className="space-y-6 bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                E-mailadres
              </label>
              <input
                id="email"
                type="email"
                placeholder="jouw.email@voorbeeld.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Wachtwoord
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition disabled:opacity-50"
            >
              {loading ? "Bezig..." : "Inloggen"}
            </button>

            <button
              type="button"
              onClick={handlePasswordReset}
              className="w-full text-indigo-600 hover:text-indigo-800 font-medium text-sm mt-2 underline focus:outline-none"
            >
              Wachtwoord vergeten?
            </button>

            {message && (
              <p
                className={`mt-4 text-center text-sm font-medium ${
                  message.toLowerCase().includes("fout")
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </main>

      <footer className="bg-gray-50 text-center py-6 text-gray-400 text-xs select-none">
        &copy; {new Date().getFullYear()} Jouw Bedrijfsnaam
      </footer>
    </div>
  );
}

export default LoginPage;
