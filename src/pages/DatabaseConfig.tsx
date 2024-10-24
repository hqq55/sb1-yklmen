import React, { useState } from 'react';
import { Save } from 'lucide-react';

interface DatabaseConfig {
  host: string;
  port: string;
  username: string;
  password: string;
  sid: string;
}

function DatabaseConfig() {
  const [config, setConfig] = useState<DatabaseConfig>({
    host: '',
    port: '',
    username: '',
    password: '',
    sid: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement save configuration logic
    console.log('Saving configuration:', config);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">数据库配置</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="host" className="block text-sm font-medium text-gray-700">
              主机地址
            </label>
            <input
              type="text"
              name="host"
              id="host"
              value={config.host}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="port" className="block text-sm font-medium text-gray-700">
              端口
            </label>
            <input
              type="text"
              name="port"
              id="port"
              value={config.port}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              用户名
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={config.username}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              密码
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={config.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="sid" className="block text-sm font-medium text-gray-700">
              SID
            </label>
            <input
              type="text"
              name="sid"
              id="sid"
              value={config.sid}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Save className="h-4 w-4 mr-2" />
              保存配置
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DatabaseConfig;