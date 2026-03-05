import { useState, useRef, useEffect } from "react";
import { Filter, ChevronDown } from "lucide-react";

const filterOptions: Record<string, string[]> = {
     City: ["All Cities", "Berlin", "Munich", "Frankfurt", "Hamburg"],
     Status: ["All Statuses", "Verified", "Pending", "Rejected"],
     Campaign: ["All Campaigns", "Univ-Promotion", "Summer-Special", "Early-Bird"],
};

const FilterDropdown = ({ label, icon }: { label: string; icon?: boolean }) => {
     const [open, setOpen] = useState(false);
     const [selected, setSelected] = useState<string>(filterOptions[label][0]);
     const ref = useRef<HTMLDivElement>(null);

     useEffect(() => {
          const handler = (e: MouseEvent) => {
               if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
          };
          document.addEventListener("mousedown", handler);
          return () => document.removeEventListener("mousedown", handler);
     }, []);

     const isDefault = selected === filterOptions[label][0];

     return (
          <div ref={ref} className="relative">
               <button
                    onClick={() => setOpen((p) => !p)}
                    className={`flex items-center gap-1.5 px-3 py-2 border rounded-lg text-xs font-medium transition-colors ${open
                         ? "bg-blue-50 border-blue-300 text-blue-700"
                         : isDefault
                              ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                              : "bg-blue-50 border-blue-200 text-blue-700"
                         }`}
               >
                    {icon && <Filter size={11} />}
                    <span>{isDefault ? label : selected}</span>
                    <ChevronDown
                         size={11}
                         className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    />
               </button>

               {open && (
                    <div className="absolute right-0 top-full mt-1.5 w-44 bg-white border border-slate-200 rounded-xl shadow-lg z-50 overflow-hidden py-1">
                         {filterOptions[label].map((opt) => (
                              <button
                                   key={opt}
                                   onClick={() => { setSelected(opt); setOpen(false); }}
                                   className={`w-full text-left px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between ${selected === opt ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"
                                        }`}
                              >
                                   {opt}
                                   {selected === opt && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                              </button>
                         ))}
                    </div>
               )}
          </div>
     );
};

export default FilterDropdown;
