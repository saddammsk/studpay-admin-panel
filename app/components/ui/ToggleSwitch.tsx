// components/ToggleSwitch.tsx
'use client'
import { Switch } from '@headlessui/react'

interface ToggleSwitchProps {
     enabled: boolean
     setEnabled: (value: boolean) => void
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ enabled, setEnabled }) => {
     return (
          <Switch
               checked={enabled}
               onChange={setEnabled}
               className="group relative flex h-6 w-11 cursor-pointer rounded-full bg-gray1600 p-0.5 ease-in-out focus:outline-none data-checked:bg-blue-1000"
          >
               <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block h-5 w-5 translate-x-0 rounded-full bg-white shadow-7xl ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-5"
               />
          </Switch>
     )
}

export default ToggleSwitch
