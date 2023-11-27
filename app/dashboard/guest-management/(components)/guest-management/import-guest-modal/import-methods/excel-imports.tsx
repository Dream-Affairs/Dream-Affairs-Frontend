import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

function ExcelImport({ selectedImport }: { selectedImport: string }) {
  return (
    <div
      className={`import-wrapper w-fit pt-10 ${selectedImport === 'excel' ? 'flex opacity-100' : 'opacity-0 hidden'}`}
    >
      <Image src="/assets/icon/excel_icon.png" height={61} width={48} alt="Excel Icon" />
      <h4 className="import-title">Select File from Microsoft Excel</h4>
      <p>You need to authenticate with Google Sheets.</p>
      <Button variant="outline" className="w-[95%] border-primary">
        <Image src="/assets/icon/excel_icon.png" height={24} width={24} alt="Excel Icon" />
        <span className=" pl-2 text-[#111]">Click to open Microsoft Excel</span>
      </Button>
    </div>
  );
}

export default ExcelImport;
