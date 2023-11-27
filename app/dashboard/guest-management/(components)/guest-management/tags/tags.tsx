import React from 'react';

function GuestTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex gap-2">
      {tags.map((item, index) => (
        <span key={index} className="block tags">
          {item}
        </span>
      ))}
    </div>
  );
}

export default GuestTags;
