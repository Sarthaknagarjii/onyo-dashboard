import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function Notification({ type, message, onClose }) {
  return (
    <div
      className={`fixed top-4 right-4 flex items-center p-4 rounded-lg shadow-lg ${
        type === "success"
          ? "bg-green-50 text-green-800"
          : "bg-red-50 text-red-800"
      }`}
    >
      {type === "success" ? (
        <CheckCircleIcon className="h-5 w-5 mr-2" />
      ) : (
        <XCircleIcon className="h-5 w-5 mr-2" />
      )}
      <p>{message}</p>
      <button
        onClick={onClose}
        className="ml-4 text-gray-500 hover:text-gray-700"
      >
        <XCircleIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
