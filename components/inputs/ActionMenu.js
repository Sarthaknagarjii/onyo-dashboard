import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

export default function ActionMenu({ row }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="p-2 hover:bg-gray-100 rounded-full">
        <EllipsisHorizontalIcon className="h-5 w-5 text-gray-400" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100" : ""
                  } flex w-full items-center px-4 py-2 text-sm text-gray-700`}
                >
                  <EyeIcon className="h-5 w-5 mr-3 text-gray-400" />
                  View Details
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100" : ""
                  } flex w-full items-center px-4 py-2 text-sm text-gray-700`}
                >
                  <PencilIcon className="h-5 w-5 mr-3 text-gray-400" />
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100" : ""
                  } flex w-full items-center px-4 py-2 text-sm text-gray-700`}
                >
                  <DocumentDuplicateIcon className="h-5 w-5 mr-3 text-gray-400" />
                  Duplicate
                </button>
              )}
            </Menu.Item>
            <div className="border-t border-gray-100">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100" : ""
                    } flex w-full items-center px-4 py-2 text-sm text-red-600`}
                  >
                    <TrashIcon className="h-5 w-5 mr-3 text-red-500" />
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
