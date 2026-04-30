import React, { memo } from 'react';
import { Check, Trash2, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TaskItem = memo(({ task, onToggle, onDelete }) => {
  // Step 9: In a real React 19 environment with experimental features, 
  // we would use useEffectEvent for stable references.
  // Here we use standard useCallback or direct props since they are memoized by the parent.

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}
    >
      <div 
        className={`checkbox ${task.status === 'completed' ? 'checked' : ''}`}
        onClick={() => onToggle(task.id)}
      >
        {task.status === 'completed' && <Check size={14} />}
      </div>
      
      <div className="task-title">
        {task.title}
        {task.isOptimistic && (
          <span className="text-xs ml-2 opacity-50 italic">(Syncing...)</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <span className={`badge badge-${task.status}`}>
          {task.status}
        </span>
        
        <button 
          className="btn btn-icon text-danger hover:bg-danger/10"
          onClick={() => onDelete(task.id)}
        >
          <Trash2 size={16} />
        </button>
      </div>

      <style jsx>{`
        .text-xs { font-size: 0.75rem; }
        .ml-2 { margin-left: 0.5rem; }
        .opacity-50 { opacity: 0.5; }
        .italic { font-style: italic; }
        .hover\:bg-danger\/10:hover { background: rgba(239, 68, 68, 0.1); }
      `}</style>
    </motion.div>
  );
});

TaskItem.displayName = 'TaskItem';

export default TaskItem;
