import React, { useState } from 'react';
import { Upload, Download, Search, Plus } from 'lucide-react';

interface ImportExportPanelProps {
  title: string;
  onImport: (file: File) => void;
  onExport: () => void;
  onSearch: (query: string) => void;
}

function ImportExportPanel({ title, onImport, onExport, onSearch }: ImportExportPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImport(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <div className="flex space-x-4">
          <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
            <Upload className="h-4 w-4 mr-2" />
            导入Excel
            <input type="file" className="hidden" accept=".xlsx,.xls" onChange={handleFileChange} />
          </label>
          <button
            onClick={onExport}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            <Download className="h-4 w-4 mr-2" />
            导出Excel
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            新增
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="max-w-lg">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-10 py-2 sm:text-sm border-gray-300 rounded-md"
              placeholder="搜索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && onSearch(searchQuery)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Search
                className="h-5 w-5 text-gray-400 cursor-pointer"
                onClick={() => onSearch(searchQuery)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportExportPanel;