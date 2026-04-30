import { useState, useEffect, useCallback } from 'react';
import { mockApi } from '../api/mockApi';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await mockApi.fetchTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Failed to load tasks');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = async (title) => {
    // This will be handled by useOptimistic in the component, 
    // but we need the actual API call here
    try {
      const newTask = await mockApi.addTask(title);
      setTasks(prev => [newTask, ...prev]);
      return newTask;
    } catch (err) {
      throw err;
    }
  };

  const toggleStatus = async (id) => {
    try {
      const updated = await mockApi.toggleTaskStatus(id);
      setTasks(prev => prev.map(t => t.id === id ? updated : t));
    } catch (err) {
      console.error('Failed to toggle status');
    }
  };

  const deleteTask = async (id) => {
    try {
      await mockApi.deleteTask(id);
      setTasks(prev => prev.filter(t => t.id !== id));
    } catch (err) {
      console.error('Failed to delete task');
    }
  };

  return {
    tasks,
    setTasks, // Exposed for useOptimistic
    isLoading,
    error,
    addTask,
    toggleStatus,
    deleteTask,
    refresh: fetchTasks
  };
};
