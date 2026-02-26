'use client';

type FunnelStep = {
     label: string;
     count: number;
     change?: string; // e.g. "-21.3%"
     width: number; // percentage width of bar
     gradient: string;
};

const steps: FunnelStep[] = [
     {
          label: 'Sign-up',
          count: 12450,
          width: 100,
          gradient: 'linear-gradient(to right, #3B82F6, #06B6D4)',
     },
     {
          label: 'KYC Verification',
          count: 9800,
          change: '-21.3%',
          width: 78,
          gradient: 'linear-gradient(to right, #3B82F6, #EF4444)',
     },
     {
          label: 'First Deposit',
          count: 7200,
          change: '-26.5%',
          width: 58,
          gradient: 'linear-gradient(to right, #3B82F6, #EF4444)',
     },
     {
          label: 'Housing Search',
          count: 4800,
          change: '-33.3%',
          width: 38,
          gradient: 'linear-gradient(to right, #3B82F6, #06B6D4)',
     },
     {
          label: 'Insurance Purchase',
          count: 2400,
          change: '-50%',
          width: 20,
          gradient: 'linear-gradient(to right, #3B82F6, #06B6D4)',
     },
];

export default function Funnel() {
     return (
          <div style={{ width: '100%', }}>
               {steps.map((step, index) => (
                    <div
                         key={index}
                         style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginBottom: 18,
                         }}
                    >
                         {/* Step Number */}
                         <div
                              style={{
                                   width: 28,
                                   height: 28,
                                   borderRadius: '50%',
                                   background: '#E5E7EB',
                                   display: 'flex',
                                   alignItems: 'center',
                                   justifyContent: 'center',
                                   fontSize: 13,
                                   fontWeight: 600,
                                   marginRight: 12,
                                   color: '#6B7280',
                              }}
                         >
                              {index + 1}
                         </div>

                         {/* Bar Container */}
                         <div style={{ flex: 1 }}>
                              <div
                                   style={{
                                        position: 'relative',
                                        height: 48,
                                        background: '#F3F4F6',
                                        borderRadius: 12,
                                        overflow: 'hidden',
                                   }}
                              >
                                   {/* Gradient Bar */}
                                   <div
                                        style={{
                                             width: `${step.width}%`,
                                             height: '100%',
                                             background: step.gradient,
                                             borderRadius: 12,
                                             display: 'flex',
                                             alignItems: 'center',
                                             justifyContent: 'space-between',
                                             padding: '0 20px',
                                             color: 'white',
                                             fontWeight: 600,
                                             fontSize: 14,
                                        }}
                                   >
                                        <span>{step.label}</span>
                                        <span>{step.count.toLocaleString()}</span>
                                   </div>

                                   {/* Change % */}
                                   {step.change && (
                                        <div
                                             style={{
                                                  position: 'absolute',
                                                  right: 20,
                                                  top: '50%',
                                                  transform: 'translateY(-50%)',
                                                  color: '#EF4444',
                                                  fontSize: 13,
                                                  fontWeight: 600,
                                             }}
                                        >
                                             ● {step.change}
                                        </div>
                                   )}
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     );
}