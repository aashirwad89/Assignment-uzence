/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type DataTableProps = {
  columns: string[];
  data: Record<string, any>[];
};

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        border: "1px solid #ccc",
      }}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col}
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                background: "#f4f4f4",
              }}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col} style={{ border: "1px solid #ccc", padding: "8px" }}>
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
