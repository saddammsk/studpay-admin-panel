"use client";

import * as React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { type DateRange, type DayButton } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Plain button — bypasses the shadcn Button that swallows clicks
function RangeDayButton({ day, modifiers, className, ...props }: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <button
      ref={ref}
      type="button"
      data-range-start={modifiers.range_start || undefined}
      data-range-end={modifiers.range_end || undefined}
      data-range-middle={modifiers.range_middle || undefined}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle || undefined
      }
      className={cn(
        "relative isolate z-10 flex aspect-square size-auto w-full min-w-[var(--cell-size)] items-center justify-center rounded-md text-sm font-normal hover:bg-accent hover:text-accent-foreground",
        "data-[range-start]:bg-primary data-[range-start]:text-primary-foreground data-[range-start]:rounded-md",
        "data-[range-end]:bg-primary data-[range-end]:text-primary-foreground data-[range-end]:rounded-md",
        "data-[range-middle]:bg-muted data-[range-middle]:text-foreground data-[range-middle]:rounded-none",
        "data-[selected-single]:bg-primary data-[selected-single]:text-primary-foreground",
        modifiers.disabled && "opacity-50 cursor-not-allowed",
        modifiers.outside && "opacity-30",
        modifiers.today && !modifiers.selected && "bg-muted font-semibold",
        className
      )}
      {...props}
    />
  );
}

export function DateRangePicker({ className }: { className?: string }) {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  const [open, setOpen] = React.useState(false);

  const handleSelect = (selected: DateRange | undefined) => {
    setDate(selected);
    if (selected?.from && selected?.to) {
      setTimeout(() => setOpen(false), 150);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "relative flex items-center gap-2 bg-gray-1800 pl-10 pr-3 border border-solid border-gray1600 rounded-md font-neulis-sans font-normal text-sm leading-5 h-9 cursor-pointer outline-0 focus:ring-0 focus:ring-transparent whitespace-nowrap",
            !date?.from && "text-muted-foreground",
            className
          )}
        >
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none">
            <Image src="/images/calendar.svg" alt="" width={16} height={16} />
          </span>
          {date?.from ? (
            date.to ? (
              <>{format(date.from, "LLL dd, y")} – {format(date.to, "LLL dd, y")}</>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Select date range</span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 bg-white"
        align="end"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={() => setOpen(false)}
      >
        <Calendar
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={handleSelect}
          numberOfMonths={2}
          components={{ DayButton: RangeDayButton }}
        />
      </PopoverContent>
    </Popover>
  );
}