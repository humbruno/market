import type { Tab } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { ButtonHTMLAttributes } from "react";

type Props = {
  tab: Tab;
  active: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function TabButton({ tab, active, className, ...props }: Props) {
  return (
    <span className="relative">
      {active && (
        <motion.div
          layoutId="bg"
          transition={{ type: "spring", duration: 0.5, bounce: 0.5 }}
          className="absolute bg-white inset-0"
        />
      )}
      <button
        {...props}
        className={cn(
          className,
          "px-4 flex gap-2 items-center font-mono py-2 relative",
          {
            "text-black bg-transparent": active,
            "hover:text-gray-400": !active,
          },
        )}
      >
        <img src={`/${tab}.png`} alt={`${tab} icon`} className="size-10" />
        {tab}
      </button>
    </span>
  );
}
