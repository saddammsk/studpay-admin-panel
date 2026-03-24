"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { useContentCMSStore, FAQCategory } from "@/app/store/zustand/useContentCMSStore";

const getHelpfulnessColor = (value: number) => {
  if (value >= 90) return "text-green-1600";
  if (value >= 85) return "text-blue-3000";
  return "text-yellow-1100";
};

const categoryConfig: Record<FAQCategory, { classes: string }> = {
  Payments: { classes: "bg-blue-3000/10 text-blue-3000" },
  Account: { classes: "bg-skyblue23/10 text-skyblue23" },
  Security: { classes: "bg-yellow-1100/10 text-yellow-1100" },
  Transfers: { classes: "bg-green-1600/10 text-green-1600" },
  Promotions: { classes: "bg-purple-2000/10 text-purple-2000" },
};

const FAQ_CATEGORIES: FAQCategory[] = ["Payments", "Account", "Security", "Transfers", "Promotions"];

export default function ManagerTable() {
  const {
    faqs,
    editingFAQId, faqForm, faqFormErrors, faqSaveSuccess,
    startEditFAQ, cancelEditFAQ, setFAQField, saveFAQ,
  } = useContentCMSStore();

  return (
    <div className="border border-gray-1000 overflow-x-auto">
      <table className="xl:w-full w-[1199px]">
        <thead>
          <tr className="border-b border-gray-1000">
            {["Category", "Question", "Last Updated", "Helpfulness", "Actions"].map((h) => (
              <th key={h} className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {faqs.map((item) => {
            const isEditing = editingFAQId === item.id;
            return (
              <tr key={item.id} className={`border-b border-gray-3600 ${isEditing ? "bg-blue-50/40" : ""}`}>
                <td className="px-5 py-4 text-sm">
                  {isEditing ? (
                    <select
                      value={faqForm.category}
                      onChange={(e) => setFAQField("category", e.target.value)}
                      className={`h-8 px-2 text-xs border rounded-md outline-none focus:ring-1 focus:ring-blue-1000 bg-white text-black-2600 ${faqFormErrors.category ? "border-red-1300" : "border-gray-1000"}`}
                    >
                      <option value="">Select</option>
                      {FAQ_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  ) : (
                    <span className={`px-3 h-5.5 rounded-full text-xs inline-flex items-center justify-center ${categoryConfig[item.category].classes}`}>
                      {item.category}
                    </span>
                  )}
                </td>
                <td className="px-5 py-4 text-sm">
                  {isEditing ? (
                    <div>
                      <input
                        type="text"
                        value={faqForm.question}
                        onChange={(e) => setFAQField("question", e.target.value)}
                        className={`w-full h-8 px-2 text-sm border rounded-md outline-none focus:ring-1 focus:ring-blue-1000 bg-white text-black-2600 ${faqFormErrors.question ? "border-red-1300" : "border-gray-1000"}`}
                      />
                      {faqFormErrors.question && <p className="text-xs text-red-1300 mt-0.5">{faqFormErrors.question}</p>}
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <span className="text-black-2600">{item.question}</span>
                      <span className="text-xs text-gray-1200 mt-1">{item.views}</span>
                    </div>
                  )}
                </td>
                <td className="px-5 py-4 text-sm text-black-2600">{item.lastUpdated}</td>
                <td className="px-5 py-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Image src="/images/thumb-green.svg" alt="thumb" width={16} height={16} />
                    <span className={`text-sm font-medium w-8 ${getHelpfulnessColor(item.helpfulness)}`}>{item.helpfulness}%</span>
                    <div className="w-24">
                      <ProgressBar
                        value={item.helpfulness}
                        className="h-1.5"
                        barColor={item.helpfulness >= 90 ? "bg-lightgreen17" : item.helpfulness >= 80 ? "bg-blue-3000" : "bg-yellow-1100"}
                        bgColor="bg-white/80"
                      />
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  {isEditing ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={saveFAQ}
                        className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${faqSaveSuccess ? "bg-green-1600/10 text-green-1600" : "bg-blue-1000 text-white hover:bg-blue-1000/90"}`}
                      >
                        {faqSaveSuccess ? "Saved!" : "Save"}
                      </button>
                      <button onClick={cancelEditFAQ} className="text-xs px-2.5 py-1 rounded-md border border-gray-1000 text-black-2600 hover:bg-gray-50 transition-colors">
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => startEditFAQ(item.id)} className="hover:opacity-70 transition-opacity">
                      <Image src="/images/pencile-icon2.svg" alt="edit" width={16} height={16} />
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}