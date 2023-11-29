import React, { useState, ChangeEvent } from 'react';
import DynamicTextarea from './dynamicTextarea';
import RolesData from './rolesdata';

const Permission: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [small, setSmall] = useState<boolean>(false);

  // const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   setInputValue(e.target.value);
  // };
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  // Dynamically calculate the number of rows based on the content
  // const calculateRows = (): number => {
  //   const rows = inputValue.split('\n').length;
  //   return Math.min(10, rows); // Limit to a maximum of 10 rows
  // };

  const autoResizeL = (element: HTMLTextAreaElement) => {
    element.style.height = '55px';
    element.style.height = element.scrollHeight + 'px';
  };
  const autoResizeX = (element: HTMLTextAreaElement) => {
    element.style.height = '2.75rem';
    element.style.height = element.scrollHeight + 'px';
  };

  return (
    <div className="p-5 lg:py-10 lg:px-16 lg:pe-20">
      {/* <DynamicTextarea
        value={content}
        label='Comment'
        labelFor='come'
        name='come'
        placeholder='Write something...'
        InputId='come'
        onChange={handleInputChange}
        onInputL={(e) => autoResizeL(e.target as HTMLTextAreaElement)}
        onInputX={(e) => autoResizeX(e.target as HTMLTextAreaElement)}
        hasValue={true}
        error={true}
      /> */}
      <RolesData visible={true} />
    </div>
  );
};

export default Permission;
