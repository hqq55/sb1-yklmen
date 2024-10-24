import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Database, Server, FileSpreadsheet, Settings } from 'lucide-react';

function Layout() {
  const location = useLocation();
  
  const menuItems = [
    { path: '/resource-import', icon: Database, text: '资源导入' },
    { path: '/vm-import', icon: Server, text: '虚机资源导入' },
    { path: '/reports', icon: FileSpreadsheet, text: '报表查询' },
    { path: '/config', icon: Settings, text: '配置信息' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Server className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">资源管理系统</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {menuItems.map(({ path, icon: Icon, text }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`${
                      location.pathname === path
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;