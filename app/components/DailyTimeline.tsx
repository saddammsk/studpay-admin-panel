import { useState } from "react";
import Image from "next/image";
import Button from '@/app/components/ui/Button'

const ICONS = {
  call: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.69A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  video: (
    <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 6.50001L10.6115 8.24101C10.6491 8.26606 10.6929 8.28043 10.7381 8.2826C10.7832 8.28476 10.8281 8.27463 10.868 8.25328C10.9079 8.23194 10.9412 8.20018 10.9644 8.16139C10.9877 8.1226 11 8.07823 11 8.03301V3.93501C11 3.89102 10.9884 3.84781 10.9664 3.80973C10.9444 3.77166 10.9127 3.74007 10.8745 3.71816C10.8364 3.69625 10.7931 3.68479 10.7492 3.68494C10.7052 3.68509 10.662 3.69684 10.624 3.71901L8 5.25001" stroke="#020817" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 3H2C1.44772 3 1 3.44772 1 4V8C1 8.55228 1.44772 9 2 9H7C7.55228 9 8 8.55228 8 8V4C8 3.44772 7.55228 3 7 3Z" stroke="#020817" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  follow: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 7V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H11.6667" stroke="#020817" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 7.33317L8 9.33317L14.6667 2.6665" stroke="#020817" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  team: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  note: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),

  plus: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
};

const TYPE_CONFIG = {
  call: { border: "#93C5FD", bg: "#DBEAFE", icon: "call", label: "Call" },
  follow: { border: "#FDE047", bg: "#FEF9C3", icon: "follow", label: "Follow-up" },
  video: { border: "#86EFAC", bg: "#DBEAFE", icon: "video", label: "Video" },
  team: { border: "#D8B4FE", bg: "#F3E8FF", icon: "team", label: "Meeting" },
  note: { border: "#FDE047", bg: "#FEF9C3", icon: "note", label: "Note" },
};

const STATUS_STYLES = {
  completed: { color: "#15803D", bg: "#DBEAFE", label: "Completed" },
  pending: { color: "#A16207", bg: "#FEF9C3", label: "Pending" },
  scheduled: { color: "#0D8CFF", bg: "#DBEAFE", label: "Scheduled" },
};

const initialTasks = [
  { id: 1, time: "09:00", title: "Call - John Doe", type: "call", status: "completed" },
  { id: 2, time: "09:30", title: "Follow up on 5 applications", type: "follow", status: "pending" },
  { id: 3, time: "10:00", title: "Video Interview - Sarah Chen", type: "video", status: "scheduled" },
  { id: 4, time: "11:00", title: "Call - Mike Johnson", type: "call", status: "completed" },
  { id: 5, time: "11:30", title: "Team Meeting - Pipeline Review", type: "team", status: "scheduled" },
  { id: 6, time: "14:00", title: "Demo Call - Lisa Wang", type: "video", status: "scheduled" },
  { id: 7, time: "15:30", title: "Update CRM records", type: "follow", status: "pending" },
  { id: 8, time: "16:00", title: "Follow-up Call - David Smith", type: "call", status: "scheduled" },
];

const TABS = ["Agenda", "Call Tracking", "Interview Reports"];

export default function DailyTimeline() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTab, setActiveTab] = useState("Agenda");
  const [showNoteModal, setShowNoteModal] = useState<typeof initialTasks[0] | null>(null);
  const [noteText, setNoteText] = useState("");


  const totalScheduled = tasks.length;
  const completed = tasks.filter(t => t.status === "completed").length;
  const pending = tasks.filter(t => t.status !== "completed").length;

  const markDone = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: "completed" } : t));
  };

  const cycleStatus = (id: number) => {
    const statuses = ["scheduled", "pending", "completed"];
    setTasks(tasks.map(t => {
      if (t.id !== id) return t;
      const next = statuses[(statuses.indexOf(t.status) + 1) % statuses.length];
      return { ...t, status: next };
    }));
  };

  const startCall = (task: { id?: number; time?: string; title: any; type?: string; status?: string; }) => alert(`📞 Starting call: ${task.title}`);
  const startVideo = (task: { id?: number; time?: string; title: any; type?: string; status?: string; }) => alert(`🎥 Starting video call: ${task.title}`);

  return (
    <div>
      {/* Tab Bar */}
      <div className="bg-gray-1000 rounded-lg p-1 grid grid-cols-3 mb-4 md:mt-8 mt-4">
        {TABS.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className="py-1.5 rounded-sm sm:text-[13px] text-[11px]"
            style={{
              background: activeTab === tab ? "white" : "transparent",
              color: activeTab === tab ? "gray-1400" : "gray-1200",
              transition: "all 0.2s",
            }}>{tab}</button>
        ))}
      </div>

      <div className="flex items-start gap-6 flex-wrap">
        {/* Timeline */}
        <div className="flex-1 w-full bg-white rounded-xl border border-solid border-gray-1000 md:p-6 p-4">
          <div className="flex items-center justify-between">
            <h4 className="mb-6 flex items-center gap-2 text-black13 font-segoe font-normal text-2xl leading-6">
              <Image
                src="/images/calendar-icon.svg"
                width='20'
                height='20'
                alt=""
                className="brightness-0"
              />
              Daily Timeline
            </h4>
          </div>

          {tasks.map(task => {
            const typeConf = TYPE_CONFIG[task.type as keyof typeof TYPE_CONFIG];
            const statusConf = STATUS_STYLES[task.status as keyof typeof STATUS_STYLES];
            return (
              <div key={task.id}
                className="border-l-4 border-s-indigo-50 border-[${typeConf.border}]
               bg-[typeConf.bg] rounded-lg py-3 px-4 mb-3 flex sm:flex-row flex-col sm:items-center items-start justify-between
               gap-3"
                style={{
                  borderColor: typeConf.border,
                  backgroundColor: typeConf.bg,
                }}
              >
                <div className="flex items-center gap-3 flex-1 w-full">
                  <span className="text-gray-1200 max-w-9 w-full font-segoe font-normal text-sm leading-5 block">{task.time}</span>
                  <span style={{ color: "#020817" }}>{ICONS[typeConf.icon as keyof typeof ICONS]}</span>
                  <span className="flex items-center gap-3 text-black13 font-segoe font-normal md:text-base text-sm leading-6">
                    {task.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Status badge — click to cycle */}
                  <button onClick={() => cycleStatus(task.id)} title="Click to change status"
                    className="h-6 px-2 font-segoe font-normal text-[11.63px] rounded-full leading-4 flex items-center justify-center"
                    style={{
                      background: statusConf.bg, color: statusConf.color,
                    }}>
                    {statusConf.label}
                  </button>
                </div>
              </div>
            );
          })}


        </div>

        {/* Summary Panel */}
        <div className="2xl:max-w-130.5 xl:max-w-87.5 max-w-full w-full bg-white border border-solid border-gray-1000 md:p-6.25 p-4 rounded-lg">
          <h4 className="text-black13 mb-7.5 font-segoe font-normal text-lg leading-4.5 tracking-[-0.45px]">Today's Summary</h4>
          {[
            { value: totalScheduled, label: "Scheduled Items", color: "#0D8CFF" },
            { value: completed, label: "Completed", color: "#16A34A" },
            { value: pending, label: "Pending", color: "#CA8A04" },
          ].map(s => (
            <div key={s.label} className="text-center mb-5 last:mb-0">
              <span
                className="font-segoe font-normal text-2xl leading-8 block"
                style={{ color: s.color }}
              >
                {s.value}
              </span>
              <p className="text-gray-1100 font-segoe font-normal text-sm leading-8">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Action Bar */}
      <div className="flex items-center justify-center mt-6">
        <div className="sm:w-auto w-full sm:flex grid grid-cols-2 gap-4 border border-solid border-gray-1000 bg-white shadow-4xl p-4 rounded-lg">
          {[
            { label: "Start Call", icon: ICONS.call, action: () => { const t = tasks.find(t => t.type === "call" && t.status !== "completed"); if (t) startCall(t); else alert("No pending calls!"); } },
            { label: "Video Call", icon: ICONS.video, action: () => { const t = tasks.find(t => t.type === "video" && t.status !== "completed"); if (t) startVideo(t); else alert("No pending video calls!"); } },
            { label: "Add Note", icon: ICONS.note, action: () => { if (tasks.length) setShowNoteModal(tasks[0]); } },
            { label: "Mark Done", icon: ICONS.check, action: () => { const t = tasks.find(t => t.status !== "completed"); if (t) markDone(t.id); else alert("All tasks done! 🎉"); } },
          ].map(btn => (
            <button key={btn.label} onClick={btn.action}
             className="flex items-center justify-center gap-2 px-4 h-10 border border-solid
             border-gray20 rounded-lg bg-white cursor-pointer text-[13px] text-black13"
              onMouseEnter={e => { e.currentTarget.style.background = "#16A34A"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#16A34A"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#111"; e.currentTarget.style.borderColor = "#D1D5DB"; }}
            >
              {btn.icon} {btn.label}
            </button>
          ))}
        </div>
      </div>



      {/* Note Modal */}
      {showNoteModal && (
        <Modal onClose={() => setShowNoteModal(null)} title={`Note: ${showNoteModal.title}`}>
          <textarea
            placeholder="Write your note here..."
            value={noteText}
            onChange={e => setNoteText(e.target.value)}
            className="border border-solid border-gray1600 h-25 w-full p-4 text-black-1200 font-normal font-segoe text-sm"
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Button onClick={() => { alert(`Note saved: "${noteText}"`); setShowNoteModal(null); }}
              label="Save Note"
              className="bg-blue-1000 rounded-md h-10 flex items-center justify-center text-white font-normal text-sm w-full"
            />
            <Button onClick={() => setShowNoteModal(null)}
              label="Cancel"
              className="border border-solid border-gray1600 rounded-md h-10 flex items-center justify-center text-black13 w-full font-normal text-sm"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({ onClose, title, children }: { onClose: () => void; title: string; children: React.ReactNode }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
      <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", width: "360px", maxWidth: "90vw", boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "#111" }}>{title}</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#6B7280" }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}


