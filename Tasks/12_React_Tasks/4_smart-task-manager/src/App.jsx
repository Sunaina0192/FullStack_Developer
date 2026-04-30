import React, { useState, useMemo, useDeferredValue } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import SearchBar from './components/SearchBar';
import FilterSection from './components/FilterSection';
import TaskList from './components/TaskList';
import { useTaskManager } from './hooks/useTaskManager';
import { useDebounce } from './hooks/useDebounce';
import { Loader2 } from 'lucide-react';

function App() {
  const { tasks, isLoading, error, addTask, toggleStatus, deleteTask } = useTaskManager();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  // Step 7: useDeferredValue prevents UI lag while typing
  const deferredSearchQuery = useDeferredValue(searchQuery);

  // Step 8: useMemo optimizes heavy filtering logic
  const filteredTasks = useMemo(() => {
    console.log('%c Filtering tasks...', 'color: #6366f1; font-weight: bold;');
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(deferredSearchQuery.toLowerCase());
      
      const matchesFilter = 
        filter === 'all' || 
        (filter === 'completed' && task.status === 'completed') ||
        (filter === 'pending' && task.status === 'pending');

      return matchesSearch && matchesFilter;
    });
  }, [tasks, deferredSearchQuery, filter]);

  const [isTyping, setIsTyping] = useState(false);
  const [status, setStatus] = useState('Idle');
  const debouncedStatus = useDebounce(status, 2000);

  // Update status when tasks change
  useMemo(() => {
    if (tasks.length > 0) setStatus('Synced');
  }, [tasks]);

  return (
    <div className="glass-panel animate-fade-in">
      <Header />
      
      <TaskForm onAdd={addTask} />
      
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      
      <FilterSection currentFilter={filter} onFilterChange={setFilter} />

      {isLoading && tasks.length === 0 ? (
        <div className="flex justify-center py-12">
          <Loader2 className="animate-spin text-primary" size={40} />
        </div>
      ) : (
        <TaskList 
          tasks={filteredTasks} 
          onToggle={toggleStatus} 
          onDelete={deleteTask} 
        />
      )}

      {error && (
        <div className="mt-4 p-4 bg-danger/10 border border-danger/20 rounded-xl text-danger text-sm text-center">
          {error}
        </div>
      )}

      <footer className="mt-8 pt-6 border-t border-glass-border flex justify-between items-center text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-success"></div>
          {searchQuery !== deferredSearchQuery ? 'Processing...' : 'Systems Nominal'}
        </div>
        <div className="flex gap-3 items-center">
          <span className="opacity-50">Last Update: {debouncedStatus}</span>
          <span>{filteredTasks.length} Tasks Found</span>
          <span className="opacity-30">|</span>
          <span>AI-UX Engine</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
