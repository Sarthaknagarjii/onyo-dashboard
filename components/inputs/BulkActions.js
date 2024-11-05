import { useState } from "react";
import {
  TrashIcon,
  DocumentDuplicateIcon,
  ShareIcon,
  ArchiveBoxIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

export default function BulkActions({ selectedCount, onAction }) {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
      <div className="flex items-center gap-6">
        <span className="text-sm font-medium text-gray-600">
          {selectedCount} items selected
        </span>

        <div className="h-4 w-px bg-gray-300" />

        <div className="flex gap-4">
          <button
            onClick={() => onAction("tag")}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
          >
            <TagIcon className="h-4 w-4" />
            Tag
          </button>

          <button
            onClick={() => onAction("archive")}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
          >
            <ArchiveBoxIcon className="h-4 w-4" />
            Archive
          </button>

          <button
            onClick={() => onAction("share")}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
          >
            <ShareIcon className="h-4 w-4" />
            Share
          </button>

          <button
            onClick={() => onAction("delete")}
            className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
          >
            <TrashIcon className="h-4 w-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
