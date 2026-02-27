import React from 'react';
import StatsCard from './RevenueCard';

const RevenuePage: React.FC = () => {
  // Mock Data
  const transactions = [
    { id: 1, type: 'Subscription', store: 'Luisa Via Roma', country: 'Kuwait', value: '$16,500.00', status: 'Completed' },
    { id: 2, type: 'Referral', store: 'Revolve', country: 'Kazakhstan', value: '$1,878.50', status: 'Pending' },
    { id: 3, type: 'Subscription', store: 'Marks and Spencer', country: 'South Korea', value: '$102.00', status: 'Refunded' },
    { id: 4, type: 'Subscription', store: 'MyTheresa', country: 'Indonesia', value: '$15,000,000.00', status: 'Canceled' },
    // Add more rows as needed...
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-50 text-emerald-600';
      case 'Pending': return 'bg-slate-100 text-slate-500';
      case 'Refunded': return 'bg-amber-50 text-amber-500';
      case 'Canceled': return 'bg-rose-50 text-rose-500';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-indigo-950">All Revenue</h1>
        <nav className="text-sm text-gray-400 mt-1">
          Home <span className="mx-2 text-rose-500">&gt;</span> <span className="text-rose-500">Revenue</span>
        </nav>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Subscriptions" value="5,424,326" percentage="5%" trend="up" trendText="Increased from last month" icon="📅" />
        <StatsCard title="Subscription Revenue" value="5,424,326" percentage="5%" trend="up" trendText="Increased from last month" icon="$" />
        <StatsCard title="Referral Payout" value="5,424,326" percentage="5%" trend="down" trendText="Decreased from last month" icon="💸" />
      </div>

      {/* Transactions Section */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h3 className="text-lg font-bold text-indigo-950">Recent Transactions</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              Show 
              <select className="border rounded px-2 py-1 outline-none">
                <option>8</option>
              </select> 
              Entries
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Search transaction..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 outline-none">
              <option>All Status</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 outline-none">
              <option>All Types</option>
            </select>
          </div>

          {/* Table - Responsive Wrap */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-indigo-50/50 text-indigo-950 text-sm font-semibold">
                <tr>
                  <th className="p-4 rounded-l-lg"><input type="checkbox" className="rounded border-gray-300" /></th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Store</th>
                  <th className="p-4">Country</th>
                  <th className="p-4">Value</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 rounded-r-lg text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-50">
                {transactions.map((t) => (
                  <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4"><input type="checkbox" className="rounded border-gray-300" /></td>
                    <td className="p-4 text-gray-600">{t.type}</td>
                    <td className="p-4 font-medium text-gray-900">{t.store}</td>
                    <td className="p-4 text-gray-600">{t.country}</td>
                    <td className="p-4 font-bold text-gray-900">{t.value}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyles(t.status)}`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button className="text-gray-400 hover:text-gray-600 font-bold">⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-6">
            <p className="text-sm text-gray-500">Showing 1 to 8 of 32 entries</p>
            <div className="flex gap-1">
              <button className="px-4 py-2 border rounded-lg text-sm text-gray-500 hover:bg-gray-50">Previous</button>
              <button className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-bold">1</button>
              <button className="px-4 py-2 border rounded-lg text-sm text-gray-500 hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border rounded-lg text-sm text-gray-500 hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenuePage;