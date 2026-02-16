'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { NoteCategory, useCRMNoteStore } from '@/app/store/zustand/Usecrmnotestore';

export const AddEditNoteModal = () => {
  const {
    selectedNote,
    isAddModalOpen,
    isEditModalOpen,
    closeAddModal,
    closeEditModal,
    addNote,
    updateNote,
  } = useCRMNoteStore();

  const [formData, setFormData] = useState({
    name: selectedNote?.name || '',
    dic: selectedNote?.dic || '',
    status: (selectedNote?.status || 'general') as NoteCategory,
    author: selectedNote?.author || '',
    date: selectedNote?.date || new Date().toLocaleDateString(),
    tags: selectedNote?.tags?.join(', ') || '',
  });

  const isOpen = isAddModalOpen || isEditModalOpen;
  const isEditing = isEditModalOpen;

  const handleClose = () => {
    if (isEditing) {
      closeEditModal();
    } else {
      closeAddModal();
    }
    setFormData({
      name: '',
      dic: '',
      status: 'general',
      author: '',
      date: new Date().toLocaleDateString(),
      tags: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.dic.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    const noteData = {
      name: formData.name,
      dic: formData.dic,
      status: formData.status,
      author: formData.author,
      date: formData.date,
      EditIcon: '/images/edit-icon.svg',
      tags: formData.tags
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t),
    };

    if (isEditing && selectedNote) {
      updateNote(selectedNote.id, noteData);
    } else {
      addNote(noteData);
    }

    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-99 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-1000 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-segoe font-semibold text-black13">
            {isEditing ? 'Edit Note' : 'Add New Note'}
          </h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Admin User, Support Team"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as NoteCategory,
                  })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              >
                <option value="general">General</option>
                <option value="support">Support</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Author
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Date
              </label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Note <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Enter your note here..."
                value={formData.dic}
                onChange={(e) =>
                  setFormData({ ...formData, dic: e.target.value })
                }
                rows={5}
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000 resize-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                placeholder="visa, documentation, approved"
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              />
            </div>
          </div>
        </form>

        <div className="border-t border-gray-1000 p-6 flex gap-3 justify-end ">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium border border-gray-1000 rounded-md hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium bg-blue-1000 text-white rounded-md hover:bg-blue-1100 transition-colors"
          >
            {isEditing ? 'Update Note' : 'Add Note'}
          </button>
        </div>
      </div>
    </div>
  );
};