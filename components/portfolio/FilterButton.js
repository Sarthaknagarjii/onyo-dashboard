import { FunnelIcon } from "@heroicons/react/24/outline";

export default function FilterButton({ onClick }) {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 md:hidden">
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-6 py-3 bg-[#df5532] text-white rounded-full shadow-lg"
      >
        <FunnelIcon className="h-5 w-5" />
        <span>Filter</span>
      </button>
    </div>
  );
}
