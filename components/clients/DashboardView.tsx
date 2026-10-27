// app/components/DashboardView.tsx
export default function DashboardView() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Welcome back, Dominic</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Active Subscriptions</p>
          <p className="text-3xl font-extrabold mt-2">1,482</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Monthly Recurring Revenue</p>
          <p className="text-3xl font-extrabold mt-2 text-emerald-500">$24,950</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Churn Rate</p>
          <p className="text-3xl font-extrabold mt-2 text-indigo-500">1.2%</p>
        </div>
      </div>
    </div>
  );
}