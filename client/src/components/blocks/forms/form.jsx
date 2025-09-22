// components/blocks/forms/DataTable.jsx
import React, { useState, useEffect } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function DataTable({
  title = "",
  data = [],
  columns = [],
  onCreateClick,
  createLabel,
  selectable = true, // zet op false als je geen checkbox-kolom wilt
  rowKey = "id", // pas aan naar "organisation_id" of "user_id" waar nodig
}) {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedSet, setSelectedSet] = useState(new Set());

  useEffect(() => {
    // Wanneer data verandert, reset selectie (of selecteer alles als selectedAll waar is)
    if (selectedAll) {
      const allKeys = new Set(data.map((r, i) => r[rowKey] ?? i));
      setSelectedSet(allKeys);
    } else {
      setSelectedSet(new Set());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, selectedAll]);

  const toggleRow = (key) => {
    const s = new Set(selectedSet);
    if (s.has(key)) s.delete(key);
    else s.add(key);
    setSelectedSet(s);
    setSelectedAll(s.size === data.length && data.length > 0);
  };

  const colCount = (selectable ? 1 : 0) + (columns?.length || 0);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
        {title}
      </h1>

      {/* filters */}
      <div className="flex justify-between py-2 items-center ">
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1 max-w-sm">
            <FaSearch className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder={`Zoek ${title.toLowerCase()}`}
              className="w-[350px] border border-gray-300 rounded-md pl-8 pr-2 py-2 text-sm outline-none"
            />
          </div>
          <button className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-md text-sm">
            Actief
          </button>
          <button className="text-gray-600 text-sm hover:underline">
            Wis filters
          </button>
        </div>

        {/* acties */}
        <div className="flex gap-2">
          <button className="border border-gray-300 text-gray-700 rounded-md px-4 py-1 text-sm hover:bg-gray-50 flex items-center">
            Acties
            <MdKeyboardArrowDown className="relative  text-xl text-gray-700" />
          </button>

          {onCreateClick && (
            <button
              onClick={onCreateClick}
              className="bg-indigo-600 text-white rounded-md px-4 py-2 text-sm hover:bg-indigo-700"
            >
              <FaPlus className="inline w-3 h-3 mr-3 " />
              {createLabel}
            </button>
          )}
        </div>
      </div>

      {/* tabel */}
      <div className="bg-white shadow-sm rounded overflow-hidden">
        <table className="w-full border-b text-sm border-collapse border border-gray-200">
          <thead className="bg-gray-50 text-left">
            <tr>
              {selectable && (
                <th className="border border-gray-200 px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedAll}
                    onChange={() => setSelectedAll((v) => !v)}
                  />
                </th>
              )}
              {(columns || []).map((col, i) => (
                <th
                  key={i}
                  className="border border-gray-200 px-4 py-2 font-medium text-gray-600"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-gray-600">
            {!data || data.length === 0 ? (
              <tr>
                <td
                  colSpan={colCount}
                  className="py-6 text-center text-gray-500"
                >
                  Geen resultaten
                </td>
              </tr>
            ) : (
              data.map((row, idx) => {
                const key = row[rowKey] ?? idx;
                return (
                  <tr key={key} className="odd:bg-gray-50">
                    {selectable && (
                      <td className="border border-gray-200 px-4 py-2">
                        <input
                          type="checkbox"
                          checked={selectedSet.has(key)}
                          onChange={() => toggleRow(key)}
                        />
                      </td>
                    )}

                    {(columns || []).map((col, j) => (
                      <td key={j} className="border border-gray-200 px-4 py-2">
                        {col.render ? col.render(row) : row[col.accessor]}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        {/* Pagination footer */}
        <div className="flex items-center justify-between pt-[40px] px-4 py-2 text-sm text-gray-600">
          <div>
            1 tot {data.length} van {data.length}
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 rounded hover:bg-gray-100">left</button>
            <span>Pagina 1 van 1</span>
            <button className="p-1 rounded hover:bg-gray-100">right</button>
          </div>
        </div>
      </div>
    </div>
  );
}
