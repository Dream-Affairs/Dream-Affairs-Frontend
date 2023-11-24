// import React from 'react';
// import Image from 'next/image';
// import ActionButton from './utils/actionbtn';
// import arrowDown from './icons/arrow-down.png';
// import sort from './icons/sort.png';

// interface Member {
//   fullName: string;
//   email: string;
//   role: string;
// }

// interface TableProps {
//   data: Member[];
//   handleSort: (field: string) => void;
//   sortField: string;
//   selectedMember: number | null;
//   toggleMemberActions: (index: number) => void;
//   closeMemberActions: () => void;
//   activeTab: string;
//   onActionClick: () => void;
// }

// const Table: React.FC<TableProps> = ({
//   data,
//   handleSort,
//   sortField,
//   selectedMember,
//   toggleMemberActions,
//   closeMemberActions,
//   activeTab,
//   onActionClick,
// }) => {
//   const renderRows = () => {
//     return data.map((member, index) => (
//       <tr key={index} className={'border-b'}>
//         <td className="px-4 py-2 text-center">
//           <Image src={sort} alt="sort" />
//         </td>
//         <td className="px-4 py-2 text-left">{member.fullName}</td>
//         <td className="px-4 py-2 text-left">{member.email}</td>
//         <td className="px-4 py-2 text-left">{member.role}</td>
//         <td className="px-4 py-2 text-end">
//           {/* <ActionButton
//             selected={selectedMember === index}
//             toggleMemberActions={() => toggleMemberActions(index)}
//             closeMemberActions={closeMemberActions}
//             activeTab={activeTab}
//             onActionClick={onActionClick}
//           /> */}
//         </td>
//       </tr>
//     ));
//   };

//   return (
//     <table className="min-w-full table-auto">
//       <thead className="border-b">
//         <tr>
//           <th className="px-4 py-2"></th>
//           <th
//             className="px-4 py-2 flex items-center gap-1 text-left cursor-pointer"
//             onClick={() => handleSort('fullName')}
//           >
//             Full Name {sortField === 'fullName' && <Image src={arrowDown} alt="arrow-down" />}
//           </th>
//           <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('email')}>
//             Email {sortField === 'email' && <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />}
//           </th>
//           <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('role')}>
//             Role {sortField === 'role' && <Image src={arrowDown} alt="arrow-down" className=" inline-flex" />}
//           </th>
//           <th className="px-4 py-2 text-left">Action</th>
//         </tr>
//       </thead>
//       <tbody>{renderRows()}</tbody>
//     </table>
//   );
// };

// export default Table;
