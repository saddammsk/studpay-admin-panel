'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CandidateType, ReportPriority, useInterviewReportStore } from '@/app/store/zustand/UseInterviewReportStore';

export const AddEditReportModal = () => {
  const {
    selectedReport,
    isAddModalOpen,
    isEditModalOpen,
    closeAddModal,
    closeEditModal,
    addReport,
    updateReport,
  } = useInterviewReportStore();

  const isOpen = isAddModalOpen || isEditModalOpen;
  const isEditing = isEditModalOpen;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rating: 5,
    priority: 'High Priority' as ReportPriority,
    candidateType: 'Premium Candidate' as CandidateType,
    author: '',
    date: new Date().toLocaleDateString(),
    tags: '',
  });

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen && isEditing && selectedReport) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        title: selectedReport.title || '',
        description: selectedReport.description || '',
        rating: selectedReport.rating || 5,
        priority: selectedReport.priority || 'High Priority',
        candidateType: selectedReport.candidateType || 'Premium Candidate',
        author: selectedReport.author || '',
        date: selectedReport.date || new Date().toLocaleDateString(),
        tags: selectedReport.tags?.join(', ') || '',
      });
    } else if (isAddModalOpen) {
      setFormData({
        title: '',
        description: '',
        rating: 5,
        priority: 'High Priority',
        candidateType: 'Premium Candidate',
        author: '',
        date: new Date().toLocaleDateString(),
        tags: '',
      });
    }
  }, [isOpen, isAddModalOpen, isEditModalOpen, selectedReport]);

  const handleClose = () => {
    if (isEditing) {
      closeEditModal();
    } else {
      closeAddModal();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    const reportData = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      rating: formData.rating,
      priority: formData.priority,
      candidateType: formData.candidateType,
      author: formData.author.trim(),
      date: formData.date,
      tags: formData.tags
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t.length > 0),
    };

    try {
      if (isEditing && selectedReport) {
        updateReport(selectedReport.id, reportData);
      } else {
        addReport(reportData);
      }
      handleClose();
    } catch (error) {
      console.error('Error saving report:', error);
      alert('Error saving report. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-99 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-1000 p-6 flex items-center justify-between">
          <h2 className="text-xl font-segoe font-semibold text-black13">
            {isEditing ? 'Edit Interview Report' : 'Add Interview Report'}
          </h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form id="reportForm" onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Interview Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Initial Assessment Interview"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Describe the interview findings and assessment..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={5}
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000 resize-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Rating (1-5 Stars) <span className="text-red-500">*</span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.rating}
                onChange={(e) =>
                  setFormData({ ...formData, rating: parseInt(e.target.value) })
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-1000"
              />
              <div className="text-center mt-2 text-sm text-gray-1200">
                {formData.rating} {'⭐'.repeat(formData.rating)}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Priority <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    priority: e.target.value as ReportPriority,
                  })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              >
                <option value="High Priority">High Priority</option>
                <option value="Medium Priority">Medium Priority</option>
                <option value="Low Priority">Low Priority</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Candidate Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.candidateType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    candidateType: e.target.value as CandidateType,
                  })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              >
                <option value="Premium Candidate">Premium Candidate</option>
                <option value="Standard Candidate">Standard Candidate</option>
                <option value="Follow-up Required">Follow-up Required</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Interviewer Name
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
                Interview Date
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
                Tags (comma-separated)
              </label>
              <input
                type="text"
                placeholder="excellent, premium, recommended"
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              />
            </div>
          </div>
        </form>

        <div className="border-t border-gray-1000 p-6 flex gap-3 justify-end">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium border border-gray-1000 rounded-md hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="reportForm"
            className="px-4 py-2 text-sm font-medium bg-blue-1000 text-white rounded-md hover:bg-blue-1100 transition-colors"
          >
            {isEditing ? 'Update Report' : 'Add Report'}
          </button>
        </div>
      </div>
    </div>
  );
};