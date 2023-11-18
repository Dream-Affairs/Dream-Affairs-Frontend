import React from 'react';

function Asterisk({ color }: { color?: string }) {
  return (
    <sup style={{ color: color ?? '#A97400' }} className={`font-bold`}>
      *
    </sup>
  );
}

export default Asterisk;
