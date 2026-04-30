import React, { useOptimistic, useTransition } from 'react';
import TaskItem from './TaskItem';
import { AnimatePresence } from 'framer-motion';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  // useOptimistic is used to show updates instantly
  // It takes the current state and a reducer-like function
  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (state, { type, payload }) => {
      switch (type) {
        case 'TOGGLE':
          return state.map(t => t.id === payload ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t);
        case 'DELETE':
          return state.filter(t => t.id !== payload);
        case 'ADD':
          return [{ ...payload, isOptimistic: true }, ...state];
        default:
          return state;
      }
    }
  );

  if (optimisticTasks.length === 0) {
    return (
      <div className="text-center py-12 text-text-muted animate-fade-in">
        <p>No tasks found. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <AnimatePresence mode="popLayout">
        {optimisticTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={(id) => {
              addOptimisticTask({ type: 'TOGGLE', payload: id });
              onToggle(id);
            }}
            onDelete={(id) => {
              addOptimisticTask({ type: 'DELETE', payload: id });
              onDelete(id);
            }}
          />
        ))}
      </AnimatePresence>
      
      <style jsx>{`
        .task-list {
          display: flex;
          flex-direction: column;
        }
        .text-center { text-align: center; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
      `}</style>
    </div>
  );
};

export default TaskList;
