import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type MesssageItemProps = {
  id: number;
  heading: string;
  description: string;
  selectMessage: (id: number) => void;
  selectedMessages: Number[];
};

export default function MesssageItem({
  id,
  heading,
  description,
  selectMessage,
  selectedMessages,
}: MesssageItemProps) {
  const isMessageSelected = selectedMessages.includes(id);
  return (
    <motion.li
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{
        type: "spring",
        bounce: 0.5,
        duration: 1,
        opacity: { duration: 0.2 },
      }}
      className="list-none"
      exit={{ opacity: 0, height: 0 }}
    >
      <div className="py-0.5">
        <button
          className={cn(
            "block w-full px-2 py-4 overflow-hidden text-left rounded-xl hover:bg-gray-200",
            isMessageSelected && "bg-gray-200"
          )}
          onClick={() => selectMessage(id)}
        >
          <p className="block truncate font-bold text-[#4E4E4E] text-sm overflow-hidden">
            {heading}
          </p>
          <p className="block text-xs font-normal truncate text-zinc-500">
            {description}
          </p>
        </button>
      </div>
    </motion.li>
  );
}
