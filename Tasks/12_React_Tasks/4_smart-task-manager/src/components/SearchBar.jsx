import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="relative">
        <Search className="absolute-left text-text-muted" size={18} />
        <input
          type="text"
          className="input-field pl-10"
          placeholder="Search tasks..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      
      <style jsx>{`
        .relative { position: relative; }
        .absolute-left {
          position: absolute;
          left: 0.875rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }
        .pl-10 { padding-left: 2.75rem; }
      `}</style>
    </div>
  );
};

export default SearchBar;
