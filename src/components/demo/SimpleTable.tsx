interface SimpleTableProps {
  headers: string[];
  rows: string[][];
}

function SimpleTable({ headers, rows }: SimpleTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm md:text-base border-collapse">
        <thead>
          <tr className="bg-navy-dark">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left font-semibold text-white whitespace-nowrap border-b border-gray-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-gray-700 leading-relaxed border-b border-gray-200 last:border-b-0"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SimpleTable;
