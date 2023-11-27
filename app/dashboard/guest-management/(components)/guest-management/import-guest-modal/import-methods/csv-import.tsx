import { FolderIcon } from '../../../svg-icons/svg-icons';
import React from 'react';

function CsvImport({ selectedImport }: { selectedImport: string }) {
  return (
    <div
      className={`import-wrapper h-full px-14 ${selectedImport === 'csv' ? 'flex opacity-100' : 'opacity-0 hidden'}`}
    >
      <div className="border border-dashed rounded-lg w-full py-14">
        <label htmlFor="upload-csv" className=" h-16 w-16 grid place-content-center bg-[#E8E8E8] mx-auto rounded-full ">
          <FolderIcon height="40" width="40" plusColor="#292D32" />
        </label>
        <input type="file" id="upload-csv" className="hidden" accept=".csv" />
        <h4 className="import-title py-6">Select CSV File to upload</h4>
        <p>or Drag and Drop, Copy and Paste CSV file</p>
      </div>
    </div>
  );
}

export default CsvImport;
