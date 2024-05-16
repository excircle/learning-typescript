import React from 'react';

// Define the types for the props of the Table component
interface TableProps {
  columns: string[];
  children: React.ReactNode;
}

// Define the Table component
const Table: React.FC<TableProps> = ({ columns, children }) => {
  return (
    <table className="min-w-full table-auto shadow-md">
      <thead className="bg-gray-200">
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="px-4 py-2 text-left text-gray-600">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};

// Define the types for the props of the TableData component
interface TableDataProps {
  data: string[];
}

// Define the TableData component
const TableData: React.FC<TableDataProps> = ({ data }) => {
  return (
    <tr>
      {data.map((item, index) => (
        <td key={index} className="border-t px-4 py-2">{item}</td>
      ))}
    </tr>
  );
};

// Export the components
export { Table, TableData };
