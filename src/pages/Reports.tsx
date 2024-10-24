import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

type ReportType = 'weekly' | 'monthly' | 'detail';

function Reports() {
  const [activeTab, setActiveTab] = useState<ReportType>('weekly');

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('weekly')}
              className={`${
                activeTab === 'weekly'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <Calendar className="h-4 w-4 mr-2" />
              周报
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={`${
                activeTab === 'monthly'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <Calendar className="h-4 w-4 mr-2" />
              月报
            </button>
            <button
              onClick={() => setActiveTab('detail')}
              className={`${
                activeTab === 'detail'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <Calendar className="h-4 w-4 mr-2" />
              明细查询
            </button>
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === 'weekly' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">周报表</h3>
              {/* Add weekly report content here */}
            </div>
          )}

          {activeTab === 'monthly' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">月报表</h3>
              {/* Add monthly report content here */}
            </div>
          )}

          {activeTab === 'detail' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">明细查询</h3>
              {/* Add detailed query content here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reports;