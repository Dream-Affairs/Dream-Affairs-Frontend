import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

function SpreadsheetImport({ selectedImport }: { selectedImport: string }) {
  return (
    <div
      className={`import-wrapper w-fit ${selectedImport === 'google_sheets' ? 'flex opacity-100' : 'opacity-0 hidden'}`}
    >
      <Image src="/assets/icon/google_sheet_icon.png" height={61} width={48} alt="Google Sheet Icon" className="" />
      <h4 className="import-title">Select List from Google Sheets</h4>
      <p>You need to authenticate with Google Sheets.</p>
      <Button variant="outline" className="w-[95%] border-primary">
        <div className="flex justify-end w-2/5">
          <Image
            src="/assets/icon/devicon_google.svg"
            height={24}
            width={24}
            alt="Google Sheet Icon"
            className="ml-auto"
          />
        </div>
        <span className="text-start flex-1 pl-2 text-[#111]">Sign in with Google</span>
      </Button>
      <p className="text-sm">
        A new page will open to connect your account. <br />
        To disconnect from Google Sheets, click the “Sign Out” button.
      </p>
    </div>
  );
}

export default SpreadsheetImport;
