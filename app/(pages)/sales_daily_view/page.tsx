"use client";

import { useState } from "react";

import Button from '@/app/components/ui/Button'
import InputField from '@/app/components/InputField'
import DailyTimeline from '@/app/components/DailyTimeline'

const Modal = ({ onClose, title, children }: { onClose: () => void; title: string; children: React.ReactNode }) => (
  <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ background: "white", padding: "24px", borderRadius: "12px", minWidth: "400px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h3 className="text-black-1200 font-neulis-sans text-xl leading-7 tracking-[-0.5] font-normal">{title}</h3>
        <button onClick={onClose} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}>×</button>
      </div>
      {children}
    </div>
  </div>
);


const TYPE_CONFIG = { call: { label: "Call" }, followup: { label: "Follow-up" }, meeting: { label: "Meeting" }, demo: { label: "Demo" }, other: { label: "Other" } };
const STATUS_STYLES = { scheduled: { label: "Scheduled" }, completed: { label: "Completed" }, pending: { label: "Pending" } };



const page = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [tasks, setTasks] = useState<any[]>([]);
  const [nextId, setNextId] = useState(1);
  const [newTask, setNewTask] = useState({ time: "", title: "", type: "call", status: "scheduled" });

  const addTask = () => {
    if (!newTask.time || !newTask.title) return;
    setTasks([...tasks, { ...newTask, id: nextId }].sort((a, b) => a.time.localeCompare(b.time)));
    setNextId(nextId + 1);
    setNewTask({ time: "", title: "", type: "call", status: "scheduled" });
    setShowAddModal(false);
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between">
        <div>
          <h4 className="text-black12 font-bold md:text-[30px] text-2xl leading-9">
            Sales Daily View
          </h4>
          <p className="text-gray-1100 font-normal md:text-[15.88px] text-sm leading-6">
            Daily control center for sales operations
          </p>
        </div>
        <div className="md:w-auto w-full">
          <ul className="flex items-cente gap-4">
            <li className="sale-date md:flex-0 flex-1 w-full">
              <InputField
                ClassName='bg-white rounded-lg! h-11 border-gray20! px-4! w-42'
                type="date"
                placeholder="05/30/2025"
              />
            </li>
            <li>
              <Button onClick={() => setShowAddModal(true)}
                iconSrc="/images/plus-icon.svg"
                label="New Task"
                className="text-white text-sm gap-4 pt-3.25 h-10 px-4! bg-blue-1000 hover:bg-blue800 rounded-lg m-0!"
              />
            </li>
          </ul>
        </div>
      </div>
      <DailyTimeline />


      {/* Add Task Modal */}
      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)} title="Add New Task">
          <div className="mb-4">
            <label className="text-gray1800 font-normal text-sm leading-5 block mb-2.5">Time</label>
            <input type="time" className="border border-solid border-gray-1000 w-full px-5 rounded-md bg-white h-10 text-gray-1400 placeholder:text-gray-1400 text-sm font-normal font-segoe" value={newTask.time} onChange={e => setNewTask({ ...newTask, time: e.target.value })} />
          </div>
          <div className="mb-4">
            <label className="text-gray1800 font-normal text-sm leading-5 block mb-2.5">Title</label>
            <input className="border border-solid border-gray-1000 w-full px-5 rounded-md bg-white h-10 text-gray-1400 placeholder:text-gray-1400 text-sm font-normal font-segoe" type="text" placeholder="Task title..." value={newTask.title} onChange={e => setNewTask({ ...newTask, title: e.target.value })} />
          </div>
          <div className="mb-4">
            <label className="text-gray1800 font-normal text-sm leading-5 block mb-2.5">Type</label>
            <select className="border border-solid border-gray-1000 w-full px-5 rounded-md bg-white h-10 text-gray-1400 placeholder:text-gray-1400 text-sm font-normal font-segoe" value={newTask.type} onChange={e => setNewTask({ ...newTask, type: e.target.value })}>
              {Object.entries(TYPE_CONFIG).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label className="text-gray1800 font-normal text-sm leading-5 block mb-2.5">Status</label>
            <select className="border border-solid border-gray-1000  w-full rounded-md px-5 bg-white h-10 text-gray-1400 placeholder:text-gray-1400 text-sm font-normal font-segoe" value={newTask.status} onChange={e => setNewTask({ ...newTask, status: e.target.value })}>
              {Object.keys(STATUS_STYLES).map(s => <option key={s} value={s}>{STATUS_STYLES[s as keyof typeof STATUS_STYLES].label}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">

            <Button onClick={addTask}
              label="Add Task"
              className="bg-blue-1000 rounded-md h-10 flex items-center justify-center text-white font-normal text-sm w-full"
            />
            <Button onClick={() => setShowAddModal(false)}
              label="Cancel"
              className="border border-solid border-gray1600 rounded-md h-10 flex items-center justify-center text-black13 w-full font-normal text-sm"
            />
          </div>
        </Modal>
      )}
    </div>
  )
}

export default page
