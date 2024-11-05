import { PlusIcon } from "@heroicons/react/24/outline";

export default function InputsHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">Inputs</h1>
        <p className="text-gray-500 mt-1">Manage your data inputs</p>
      </div>

      <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
        <PlusIcon className="h-5 w-5" />
        <span>Add New Input</span>
      </button>
    </div>
  );
}
