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
    <button
      className="block px-2 py-4 overflow-hidden text-left rounded-xl hover:bg-gray-200"
      onClick={() => archiveMessage(id)}
    >
      <p className="block truncate font-bold text-[#4E4E4E] text-sm">
        {heading}
      </p>
      <p className="block text-xs font-normal truncate text-zinc-500">
        {description}
      </p>
    </button>
  );
}
