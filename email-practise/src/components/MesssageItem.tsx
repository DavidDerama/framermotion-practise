import { motion } from "motion/react";

type MesssageItemProps = {
  id: number;
  heading: string;
  description: string;
  archiveMessage: (id: number) => void;
};

export default function MesssageItem({
  id,
  heading,
  description,
  archiveMessage,
}: MesssageItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="list-none"
    >
      <button
        className="block w-full px-2 py-4 overflow-hidden text-left rounded-xl hover:bg-gray-200"
        onClick={() => archiveMessage(id)}
      >
        <p className="block truncate font-bold text-[#4E4E4E] text-sm overflow-hidden">
          {heading}
        </p>
        <p className="block text-xs font-normal truncate text-zinc-500">
          {description}
        </p>
      </button>
    </motion.li>
  );
}
