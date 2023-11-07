import React from 'react';

const SampleTable: React.FC = () => {
  const data = [
    { fullName: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
    { fullName: 'Alice Smith', email: 'alicesmith@example.com', role: 'Decorator' },
    { fullName: 'Bob Johnson', email: 'bobjohnson@example.com', role: 'Guest' },
    { fullName: 'Eve Adams', email: 'eveadams@example.com', role: 'Admin' },
    { fullName: 'Charlie Brown', email: 'charliebrown@example.com', role: 'Guest' },
  ];

  return (
    <table className="min-w-full table-auto">
      <thead className="border-b">
        <tr>
          <th className="px-4 py-2">Full Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Role</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={index !== data.length - 1 ? 'border-b' : ''}>
            <td className="px-4 py-2 text-center">{item.fullName}</td>
            <td className="px-4 py-2 text-center">{item.email}</td>
            <td className="px-4 py-2 text-center">{item.role}</td>
            <td className="px-4 py-2 text-center">
              {/* You can add action buttons here */}
              <button className="bg-blue-500 text-white px-2 py-1">Edit</button>
              <button className="bg-red-500 text-white px-2 py-1">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SampleTable;
