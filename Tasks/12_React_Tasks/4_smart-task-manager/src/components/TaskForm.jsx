import React, { useId, useActionState } from 'react';
import { Plus, Loader2 } from 'lucide-react';

const TaskForm = ({ onAdd }) => {
  const id = useId();
  
  // useActionState handles pending state and form logic (React 19)
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const title = formData.get('title');
      if (!title || title.length < 3) {
        return "Task must be at least 3 characters long";
      }
      
      try {
        await onAdd(title);
        return null; // Success
      } catch (err) {
        return err.message;
      }
    },
    null // Initial state
  );

  return (
    <form action={submitAction} className="mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="form-group">
        <label htmlFor={`${id}-title`} className="sr-only">Add new task</label>
        <div className="input-container">
          <input
            id={`${id}-title`}
            name="title"
            type="text"
            className="input-field"
            placeholder="What needs to be done?"
            disabled={isPending}
            autoComplete="off"
          />
          <button 
            type="submit" 
            className="btn btn-primary submit-btn" 
            disabled={isPending}
          >
            {isPending ? <Loader2 className="animate-spin" size={18} /> : <Plus size={18} />}
            <span>Add Task</span>
          </button>
        </div>
      </div>
      
      {error && (
        <p className="error-message animate-fade-in" role="alert">
          {error}
        </p>
      )}

      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        .form-group { margin-bottom: 1rem; }
        .input-container {
          display: flex;
          gap: 0.75rem;
        }
        .submit-btn {
          white-space: nowrap;
          min-width: 130px;
          justify-content: center;
        }
        .error-message {
          color: var(--danger);
          font-size: 0.875rem;
          margin-top: 0.5rem;
          padding-left: 0.5rem;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
};

export default TaskForm;
