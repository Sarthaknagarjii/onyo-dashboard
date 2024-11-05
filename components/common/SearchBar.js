import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg
                 bg-white placeholder-gray-500 focus:outline-none focus:ring-2
                 focus:ring-blue-500 focus:border-transparent"
        placeholder="Search..."
      />
    </div>
  );
}
