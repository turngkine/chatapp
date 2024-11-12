import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ChatWindow from './components/ChatWindow/ChatWindow';
import SidebarMenu from './components/Sidebar/SidebarMenu';

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar Menu ở bên trái */}
      <SidebarMenu />

      {/* Danh sách bạn bè */}
      <Sidebar />

      {/* Cửa sổ chat */}
      <ChatWindow />
    </div>
  );
}


export default App;
