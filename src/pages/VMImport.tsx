import React, { useState } from 'react';
import ImportExportPanel from '../components/ImportExportPanel';

interface VMData {
  id: number;
  name: string;
  ip: string;
  cpu: string;
  memory: string;
  disk: string;
  status: string;
}

function VMImport() {
  const [data, setData] = useState<VMData[]>([]);

  const handleImport = (file: File) => {
    // TODO: Implement file import logic
    console.log('Importing file:', file.name);
  };

  const handleExport = () => {
    // TODO: Implement export logic
    console.log('Exporting data');
  };

  const handleSearch = (query: string) => {
    // TODO: Implement search logic
    console.log('Searching:', query);
  };

  return (
    <div className="space-y-6">
      <ImportExportPanel
        title="虚机资源导入"
        onImport={handleImport}
        onExport={handleExport}
        onSearch={handleSearch}
      />

      <div className="bg-white shadow rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  虚机名称
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  IP地址
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CPU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  内存
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  磁盘
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  状态
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ip}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.cpu}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.memory}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.disk}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VMImport;