/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Button from '@/app/components/ui/Button';
import Image from 'next/image';
import { useCRMNoteStore, type NoteCategory } from '@/app/store/zustand/Usecrmnotestore';
import { AddEditNoteModal } from '@/app/components/identification/AddEditNoteModal';

const statusConfig: Record<NoteCategory, { classes: string }> = {
  general: {
    classes: 'bg-green-1200 text-blue-1000',
  },
  support: {
    classes: 'bg-green-1200 text-blue-1000',
  },
};

export default function CRMNotesPage() {
  const {
    filteredNotes,
 
    openAddModal,
    openEditModal,
    deleteNote,
  } = useCRMNoteStore();

  const handleDelete = (id: number, name: string) => {
    if (confirm(`Are you sure you want to delete the note from "${name}"?`)) {
      deleteNote(id);
    }
  };

  return (
    <div className="flex-1 mt-2">
   

      <div className="bg-white border border-solid border-gray-1000 rounded-lg shadow-4xl md:p-6.25 p-4">
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:justify-between sm:mb-6 mb-4 sm:gap-0 gap-4  pb-4">
          <h4 className="text-black13 flex items-center gap-2 font-segoe sm:text-2xl text-xl font-normal leading-6 tracking-[-0.6px]">
            <Image
              src="/images/message-icon.svg"
              width="20"
              height="20"
              alt=""
              className="brightness-0"
            />
            CRM Notes & Contact History
          </h4>
           <Button
            iconSrc="/images/plus-icon.svg"
            label="Add Note"
            onClick={openAddModal}
            className="text-white text-[13.45px] gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue-1100 rounded-md"
          />
        </div>

        {filteredNotes.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-1200 mb-4">No notes found.</p>
            <button
              onClick={openAddModal}
              className="px-4 py-2 bg-blue-1000 text-white rounded-md hover:bg-blue-1100 transition-colors"
            >
              Add First Note
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredNotes.map((item) => (
              <div
                key={item.id}
                className="flex sm:flex-row flex-col sm:items-start items-start sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg p-4.25 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3.5 flex-wrap">
                    <h4 className="text-black13 font-segoe font-normal text-base leading-5">
                      {item.name}
                    </h4>
                    <span
                      className={`px-2 h-6 inline-flex items-center justify-center rounded-full font-segoe text-xs font-normal leading-4 whitespace-nowrap ${
                        statusConfig[item.status].classes
                      }`}
                    >
                      {item.status}
                    </span>
                    {item.author && (
                      <span className="text-xs text-gray-1400 bg-gray-100 px-2 py-1 rounded">
                        {item.author}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-1700 font-segoe font-normal text-[13.89px] leading-5 mb-2">
                    {item.dic}
                  </p>
                
                </div>

                <div className="flex items-center gap-2 ml-auto sm:ml-0">
                  <span className="text-gray-1200 font-segoe font-normal text-[11.81px] leading-4 whitespace-nowrap">
                    {item.date}
                  </span>
                  <button
                    onClick={() => openEditModal(item)}
                    className="flex items-center justify-center hover:bg-gray-1600 transition-all duration-500 ease-in-out rounded-md w-10.5 h-9"
                    title="Edit note"
                  >
                      <Image
                         src={"/images/edit-icon.svg"}
                         width='16'
                         height='16'
                         alt=""
                    />
                  </button>
                  {/* <button
                    onClick={() => handleDelete(item.id, item.name)}
                    className="flex items-center justify-center hover:bg-red-50 transition-all duration-500 ease-in-out rounded-md w-10.5 h-9"
                    title="Delete note"
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modal */}
      <AddEditNoteModal />
    </div>
  );
}