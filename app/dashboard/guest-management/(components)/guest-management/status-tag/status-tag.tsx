import React from 'react';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return '#008D36';
    case 'pending':
      return '#FF8515';
    case 'declined':
      return '#F00';
    default:
      return 'black'; // Default color for unknown status
  }
};

const getStatusBg = (status: string) => {
  switch (status) {
    case 'confirmed':
      return '#E6F4EB';
    case 'pending':
      return '#FFF3E8';
    case 'declined':
      return '#FFE6E6';
    default:
      return 'black'; // Default color for unknown status
  }
};

function StatusTag({ status }: { status: string }) {
  return (
    <div
      style={{
        color: getStatusColor(status),
        backgroundColor: getStatusBg(status),
      }}
      className={`text-xs font-medium capitalize rounded-[20px] flex items-center w-fit mx-auto py-1 px-3 text-[${getStatusColor(
        status,
      )}] bg-[${getStatusBg(status)}]`}
    >
      <div style={{ backgroundColor: getStatusColor(status) }} className={`h-1.5 w-1.5 rounded-full mr-2`} />
      {status}
    </div>
  );
}

export default StatusTag;
