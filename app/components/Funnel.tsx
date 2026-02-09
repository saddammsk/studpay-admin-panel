'use client';

type FunnelStep = {
     label: string;
     percentage: number; // 0–100
     count: number;
     conversion?: number;
     color: string;
};

const steps: FunnelStep[] = [
     {
          label: 'Started Onboarding',
          percentage: 100,
          count: 10000,
          color: '#1185FF',
     },
     {
          label: 'Completed KYC',
          percentage: 85,
          count: 8500,
          conversion: 85,
          color: '#3B82F6',
     },
     {
          label: 'AVI Account Created',
          percentage: 72,
          count: 7200,
          conversion: 85,
          color: '#60A5FA',
     },
     {
          label: 'Active Users',
          percentage: 68,
          count: 6800,
          conversion: 94,
          color: '#10B981',
     },
];

export default function Funnel() {
     return (
          <div >
               {steps.map((step, index) => (
                    <div key={index} style={{ marginBottom: 24 }}>
                         {/* Header */}
                         <div
                              style={{
                                   display: 'flex',
                                   justifyContent: 'space-between',
                                   marginBottom: 6,
                                   fontSize: 14,
                                   fontWeight: 500,
                              }}
                         >
                              <span>{step.label}</span>
                              <span>
                                   {step.count.toLocaleString()} ({step.percentage}%)
                              </span>
                         </div>

                         {/* Bar */}
                         <div
                              style={{
                                   background: '#E5E7EB',
                                   borderRadius: 6,
                                   height: 28,
                                   overflow: 'hidden',
                              }}
                         >
                              <div
                                   style={{
                                        width: `${step.percentage}%`,
                                        background: step.color,
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: 12,
                                        fontWeight: 600,
                                   }}
                              >
                                   {step.percentage}%
                              </div>
                         </div>

                         {/* Conversion */}
                         {step.conversion && (
                              <div style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>
                                   {step.conversion}% conversion
                              </div>
                         )}
                    </div>
               ))}
          </div>
     );
}
