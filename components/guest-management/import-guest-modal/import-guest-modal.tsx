import React, { useState } from 'react';
import { AddGuestModal } from '../add-guest-modal/add-guest-modal';
import { Import, FolderIcon } from '@/components/svg-icons/svg-icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SpreadsheetImport from './import-methods/spreadsheet-import';
import ExcelImport from './import-methods/excel-imports';
import CsvImport from './import-methods/csv-import';
import { ArrowLeftIcon } from 'lucide-react';

type imports = 'google_sheets' | 'excel' | 'csv' | '';

enum importTypes {
  GOOGLE = 'google_sheets',
  EXCEL = 'excel',
  CSV = 'csv',
  DEFAULT = '',
}

function ImportGuestModal() {
  const [selectedImport, setSelectedImport] = useState<imports>('');

  return (
    <AddGuestModal
      size="sm"
      modalTitle="Import Guest List"
      Icon={Import}
      triggerBtnText="Import List"
      className="guest-btn"
      titleAlign="center"
    >
      <div className="min-h-[362px] guest-modal-border">
        <button className="absolute">
          {selectedImport !== importTypes.DEFAULT && (
            <ArrowLeftIcon
              size={28}
              onClick={() => setSelectedImport(importTypes.DEFAULT)}
              color="#282828"
              className="absolute left-10 -top-12"
            />
          )}
        </button>
        {selectedImport === importTypes.DEFAULT && (
          <div className="text-[#282828] flex flex-col items-center w-fit mx-auto py-6">
            <h3 className="text-xl font-medium text-center mb-10">Select a means to import your guest list</h3>
            <div className="w-full flex flex-col">
              <Button className="import-btn hover:bg-[#dbd8dd]" onClick={() => setSelectedImport(importTypes.CSV)}>
                <p className="flex justify-end w-2/5">
                  <FolderIcon height="24" width="24" plusColor="#292D32" />
                </p>
                <span className="text-start flex-1">CSV File</span>
              </Button>
              <Button className="import-btn hover:bg-[#dbd8dd]" onClick={() => setSelectedImport(importTypes.EXCEL)}>
                <div className="flex justify-end w-2/5">
                  <Image src="/assets/icon/excel_icon.png" height={20} width={27} alt="Excel Icon" />
                </div>
                <span className="text-start flex-1">Excel</span>
              </Button>
              <Button className="import-btn hover:bg-[#dbd8dd]" onClick={() => setSelectedImport(importTypes.GOOGLE)}>
                <div className="flex justify-end w-2/5">
                  <Image src="/assets/icon/google_sheet_icon.png" height={30} width={24} alt="Google Sheet Icon" />
                </div>
                <span className="text-start flex-1">Google Sheets</span>
              </Button>
            </div>
          </div>
        )}
        <SpreadsheetImport selectedImport={selectedImport} />
        <ExcelImport selectedImport={selectedImport} />
        <CsvImport selectedImport={selectedImport} />
      </div>
    </AddGuestModal>
  );
}

export default ImportGuestModal;
