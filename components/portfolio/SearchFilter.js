import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/24/solid";

export default function SearchFilter({ searchQuery, onSearchChange }) {
  return (
    <>
      {/* Desktop layout */}
      <div className="hidden md:flex items-center gap-6 px-6 ml-auto">
        <button className="flex items-center gap-2">
          <FunnelIcon className="h-5 w-5 text-black" />
          <span className="font-medium text-black">Filter</span>
        </button>
        <div className="relative w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects..."
            className="w-full pr-12 pl-4 py-2 border border-gray-300 rounded-lg"
          />
          <div className="absolute right-1 top-1 h-[calc(100%-8px)] aspect-square flex items-center justify-center bg-[#df5532] rounded-full">
            <MagnifyingGlassIcon className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden px-4 py-3">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
    </>
  );
}
