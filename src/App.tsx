import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ResourceImport from './pages/ResourceImport';
import VMImport from './pages/VMImport';
import Reports from './pages/Reports';
import DatabaseConfig from './pages/DatabaseConfig';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="resource-import" element={<ResourceImport />} />
          <Route path="vm-import" element={<VMImport />} />
          <Route path="reports" element={<Reports />} />
          <Route path="config" element={<DatabaseConfig />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;