import Image from "next/image";
type Props = {
      label: string
      value: string
      color: string
      icon: string
}

export default function FactorRow({ label, value, color, icon }: Props) {
      return (
            <div className="flex items-center justify-between mb-2 last:mb-0">
                  <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center"> 
                              <Image
                                    src={icon}
                                    width={16}
                                    height={16}
                                    alt=""
                              />
                              </span>
                        <span className="text-blue-1300 text-sm leading-5 font-normal block">{label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                        <span className="text-blue-1300 text-sm leading-5 font-JetBrainsMono font-normal block">{value}</span>
                        <span className={`w-2.5 h-2.5 rounded-full flex items-center ${color}`} />
                  </div>
            </div>
      )
}