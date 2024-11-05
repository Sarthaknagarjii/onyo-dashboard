import {
  ArrowUpRightIcon,
  ArrowDownLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const activities = [
  {
    id: 1,
    type: "buy",
    asset: "Tesla Inc.",
    amount: "$12,240.00",
    shares: "25",
    date: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    type: "sell",
    asset: "Apple Inc.",
    amount: "$8,320.50",
    shares: "15",
    date: "5 hours ago",
    status: "completed",
  },
  {
    id: 3,
    type: "buy",
    asset: "Microsoft Corp.",
    amount: "$15,840.75",
    shares: "30",
    date: "1 day ago",
    status: "completed",
  },
];

export default function RecentActivities() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Recent Activities</h2>
            <p className="text-sm text-gray-500">Your latest transactions</p>
          </div>
          <button className="text-orange-600 text-sm font-medium hover:text-orange-700 flex items-center gap-1">
            View All
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="p-6 flex items-center justify-between hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-2 rounded-lg ${
                  activity.type === "buy"
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {activity.type === "buy" ? (
                  <ArrowDownLeftIcon className="h-5 w-5" />
                ) : (
                  <ArrowUpRightIcon className="h-5 w-5" />
                )}
              </div>
              <div>
                <h3 className="font-medium">{activity.asset}</h3>
                <p className="text-sm text-gray-500">
                  {activity.type === "buy" ? "Bought" : "Sold"}{" "}
                  {activity.shares} shares
                </p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-medium ${
                  activity.type === "buy" ? "text-red-600" : "text-green-600"
                }`}
              >
                {activity.type === "buy" ? "-" : "+"}
                {activity.amount}
              </p>
              <p className="text-sm text-gray-500">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
