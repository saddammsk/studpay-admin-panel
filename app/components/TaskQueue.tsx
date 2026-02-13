'use client'
import CustomSelect from "@/app/components/CustomSelect";
import { useState } from "react";

function TaskQueue() {

     const [tasks, setTasks] = useState([
          {
               id: "AVI-2024-001",
               name: "Sarah Johnson",
               university: "University of London",
               amount: "$15,400",
               time: "4h 23m",
               priority: "high",
               priorityClass: "text-yellow-1100 bg-yellow-1200",
               status: "all",
          },
          {
               id: "AVI-2024-002",
               name: "Sarah Johnson",
               university: "University of London",
               amount: "$15,400",
               time: "4h 23m",
               priority: "medium",
               priorityClass: "text-gray-2600 bg-gray-1600",
               status: "all",
          },
          {
               id: "AVI-2024-003",
               name: "Sarah Johnson",
               university: "University of London",
               amount: "$15,400",
               time: "4h 23m",
               priority: "urgent",
               priorityClass: "text-red-1300 bg-gray-3500",
               status: "all",
          },
     ]);

     const handleStatusChange = (index: number, value: string) => {
          const updatedTasks = [...tasks];
          updatedTasks[index].status = value;
          setTasks(updatedTasks);
     };

     return (
          <div className="space-y-3">
               {tasks.map((task, index) => (
                    <div
                         key={task.id}
                         className="border border-gray-1000 bg-white rounded-lg shadow-4xl p-3"
                    >
                         <div className="flex items-center justify-between">
                              <div>
                                   <h6 className="text-sm font-normal leading-5 text-gray-2500">
                                        {task.id}
                                   </h6>
                                   <span className="text-xs font-normal leading-4 block text-gray-2600">
                                        {task.name}
                                   </span>
                              </div>

                              <div
                                   className={`text-xs font-bold leading-4 py-0.5 px-2.5 rounded-full ${task.priorityClass}`}
                              >
                                   {task.priority}
                              </div>
                         </div>

                         <span className="text-xs my-2 font-normal leading-4 block text-gray-2600">
                              {task.university}
                         </span>

                         <div className="flex items-center justify-between mb-2">
                              <h6 className="text-xs font-normal leading-4 text-gray-2500">
                                   {task.amount}
                              </h6>
                              <span className="text-xs font-normal leading-4 block text-gray-2600">
                                   {task.time}
                              </span>
                         </div>

                         <CustomSelect
                              className="h-7!"
                              value={task.status}
                              onChange={(e) => handleStatusChange(index, e.target.value)}
                              options={[
                                   { label: "All Status", value: "all" },
                                   { label: "Active", value: "active" },
                                   { label: "Inactive", value: "inactive" },
                              ]}
                         />
                    </div>
               ))}
          </div>
     );
}

export default TaskQueue;