import { BellIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function PortfolioHeader() {
  return (
    <div className="bg-white shadow-sm">
      {/* Mobile header */}
      <div className="md:hidden px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Portfolio</h1>
          <div className="flex items-center space-x-4">
            <button className="text-[#df5532]">
              <ShoppingBagIcon className="h-6 w-6" />
            </button>
            <button className="text-[#df5532]">
              <BellIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden md:block px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
      </div>
    </div>
  );
}
