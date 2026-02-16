/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { AppointmentStatus, useAppointmentStore } from '@/app/store/zustand/useAppointmentStore';

export const AddEditAppointmentModal = () => {
  const {
    selectedAppointment,
    isAddModalOpen,
    isEditModalOpen,
    closeAddModal,
    closeEditModal,
    addAppointment,
    updateAppointment,
  } = useAppointmentStore();

  const isOpen = isAddModalOpen || isEditModalOpen;
  const isEditing = isEditModalOpen;

  const [formData, setFormData] = useState({
    name: '',
    date: new Date().toLocaleDateString(),
    time: '10:00',
    type: 'video' as 'video' | 'phone' | 'in-person',
    status: 'scheduled' as AppointmentStatus,
    description: '',
    attendee: '',
  });

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen && isEditing && selectedAppointment) {
      setFormData({
        name: selectedAppointment.name || '',
        date: selectedAppointment.date || new Date().toLocaleDateString(),
        time: selectedAppointment.time || '10:00',
        type: selectedAppointment.type || 'video',
        status: selectedAppointment.status || 'scheduled',
        description: selectedAppointment.description || '',
        attendee: selectedAppointment.attendee || '',
      });
    } else if (isAddModalOpen) {
      setFormData({
        name: '',
        date: new Date().toLocaleDateString(),
        time: '10:00',
        type: 'video',
        status: 'scheduled',
        description: '',
        attendee: '',
      });
    }
  }, [isOpen, isAddModalOpen, isEditModalOpen, selectedAppointment]);

  const handleClose = () => {
    if (isEditing) {
      closeEditModal();
    } else {
      closeAddModal();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.date || !formData.time) {
      alert('Please fill in all required fields');
      return;
    }

    const appointmentData = {
      name: formData.name.trim(),
      date: formData.date,
      time: formData.time,
      type: formData.type,
      status: formData.status,
      description: formData.description.trim(),
      attendee: formData.attendee.trim(),
    };

    try {
      if (isEditing && selectedAppointment) {
        updateAppointment(selectedAppointment.id, appointmentData);
      } else {
        addAppointment(appointmentData);
      }
      handleClose();
    } catch (error) {
      console.error('Error saving appointment:', error);
      alert('Error saving appointment. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-99 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-1000 p-6 flex items-center justify-between">
          <h2 className="text-xl font-segoe font-semibold text-black13">
            {isEditing ? 'Edit Appointment' : 'Schedule Appointment'}
          </h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form id="appointmentForm" onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Appointment Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., KYC Document Review"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="MM/DD/YYYY"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Appointment Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    type: e.target.value as 'video' | 'phone' | 'in-person',
                  })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              >
                <option value="video">Video Call</option>
                <option value="phone">Phone Call</option>
                <option value="in-person">In-Person</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as AppointmentStatus,
                  })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              >
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Attendee Name
              </label>
              <input
                type="text"
                placeholder="e.g., Sarah Admin"
                value={formData.attendee}
                onChange={(e) =>
                  setFormData({ ...formData, attendee: e.target.value })
                }
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Description
              </label>
              <textarea
                placeholder="Appointment details..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={4}
                className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000 resize-none"
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
            form="appointmentForm"
            className="px-4 py-2 text-sm font-medium bg-blue-1000 text-white rounded-md hover:bg-blue-1100 transition-colors"
          >
            {isEditing ? 'Update Appointment' : 'Schedule'}
          </button>
        </div>
      </div>
    </div>
  );
};