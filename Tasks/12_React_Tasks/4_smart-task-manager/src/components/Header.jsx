import React from 'react';
import { Sparkles, Moon, Sun } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary rounded-xl bg-opacity-20 border border-primary border-opacity-30">
          <Sparkles className="text-primary w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-text-muted bg-clip-text text-transparent">
            Smart Task Manager
          </h1>
          <p className="text-sm text-text-muted">AI-Powered Workflow</p>
        </div>
      </div>
      
      <button className="btn btn-icon rounded-full">
        <Moon size={20} />
      </button>
      
      <style jsx>{`
        .flex { display: flex; }
        .justify-between { justify-content: space-between; }
        .items-center { align-items: center; }
        .mb-8 { margin-bottom: 2rem; }
        .gap-3 { gap: 0.75rem; }
        .p-2 { padding: 0.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .text-primary { color: var(--primary); }
        .w-6 { width: 1.5rem; }
        .h-6 { height: 1.5rem; }
        .text-2xl { font-size: 1.5rem; }
        .font-bold { font-weight: 700; }
        .text-sm { font-size: 0.875rem; }
        .text-text-muted { color: var(--text-muted); }
        .rounded-full { border-radius: 9999px; }
      `}</style>
    </header>
  );
};

export default Header;
