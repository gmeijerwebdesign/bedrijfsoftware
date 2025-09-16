import React from "react";
import {
  FaPlay,
  FaPlusCircle,
  FaChevronDown,
  FaRegClock,
} from "react-icons/fa";

export default function TimeTrackerPro() {
  const days = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 text-gray-800">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">
          Maandag 15 september <span className="text-gray-400">(vandaag)</span>
        </h1>
        <button className="flex items-center gap-1 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50">
          Vandaag
          <FaChevronDown className="text-gray-400" />
        </button>
      </header>

      {/* Main layout */}
      <main className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* ---------- Left: Entry form ---------- */}
        <section className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="space-y-5">
            {[
              "Selecteer een klant",
              "Selecteer een project",
              "Selecteer een activiteit",
            ].map((placeholder, i) => (
              <Select key={i} placeholder={placeholder} />
            ))}

            <Textarea placeholder="Omschrijving" />

            <Select placeholder="Labels" />

            <div className="grid grid-cols-3 gap-4">
              <Input placeholder="Starttijd" />
              <Input placeholder="Eindtijd" />
              <Input placeholder="Pauze" />
            </div>

            {/* Timer */}
            <div className="text-center pt-4">
              <p className="font-mono text-5xl font-semibold tracking-tight">
                00:00
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <ActionButton icon={<FaPlay />} variant="secondary">
                Start timer
              </ActionButton>
              <ActionButton icon={<FaPlusCircle />} variant="primary">
                Voeg uren toe
              </ActionButton>
            </div>
          </div>
        </section>

        {/* ---------- Right: Week overview ---------- */}
        <section className="flex flex-col rounded-3xl bg-white p-8 shadow-xl">
          {/* Days header */}
          <div className="mb-8 flex justify-between">
            {days.map((day, i) => (
              <div key={day} className="flex flex-col items-center">
                <span
                  className={`text-sm font-medium ${
                    i === 0 ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {day}
                </span>
                <span
                  className={`mt-2 text-xs font-semibold ${
                    i === 0
                      ? "bg-indigo-600 text-white rounded-full px-2 py-0.5"
                      : "text-gray-400"
                  }`}
                >
                  {i + 15}
                </span>
                <span className="mt-1 text-xs text-gray-500">00:00</span>
              </div>
            ))}
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium text-gray-900">Totaal</span>
              <span className="mt-1 text-xs text-gray-500">00:00</span>
            </div>
          </div>

          {/* Empty state */}
          <div className="flex flex-1 flex-col items-center justify-center text-center text-gray-400">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-indigo-200">
              <FaRegClock className="text-indigo-500 text-3xl" />
            </div>
            <p className="mb-1 text-base font-medium">
              Geen registratie aangemaakt
            </p>
            <p className="max-w-xs text-sm">
              Maak een registratie aan met het linker formulier of kopieer
              registraties van vorige weken
            </p>
            <button className="mt-5 flex items-center gap-1 rounded-lg border px-4 py-1 text-sm font-medium hover:bg-gray-50">
              Kopiëren
              <FaChevronDown className="text-gray-400" />
            </button>
          </div>

          <div className="mt-8 text-right text-sm font-semibold text-gray-700">
            Dagtotaal: 00:00
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------- Small helper components ---------- */
function Select({ placeholder }) {
  return (
    <div className="relative">
      <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
        <option>{placeholder}</option>
      </select>
      <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

function Textarea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full resize-none rounded-lg border border-gray-300 p-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      rows={4}
    />
  );
}

function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
    />
  );
}

function ActionButton({ icon, children, variant }) {
  const base =
    "flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-700"
      : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50";
  return (
    <button className={`${base} ${styles}`}>
      {icon}
      {children}
    </button>
  );
}
