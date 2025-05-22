import React from 'react';
import ReactDOM from 'react-dom/client';
import SidePanel from './sidepanel/sidePanel.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(<SidePanel />);

const root = document.getElementById('root');
root.render(
  <React.StrictMode>
    <SidePanel />
  </React.StrictMode>
);