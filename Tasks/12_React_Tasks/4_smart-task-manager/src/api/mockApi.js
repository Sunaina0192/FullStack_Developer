// Simulate a real backend with delays and potential failures
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let tasks = [
  { id: '1', title: 'Design System Architecture', status: 'completed', createdAt: Date.now() - 100000 },
  { id: '2', title: 'Implement Optimistic UI', status: 'pending', createdAt: Date.now() - 50000 },
  { id: '3', title: 'Accessibility Audit', status: 'pending', createdAt: Date.now() },
];

export const mockApi = {
  fetchTasks: async () => {
    await sleep(1500); // Simulate network delay
    return [...tasks];
  },
  
  addTask: async (title) => {
    await sleep(1000);
    // Simulate random failure (10% chance)
    if (Math.random() < 0.1) throw new Error('Network error: Failed to add task');
    
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      status: 'pending',
      createdAt: Date.now(),
    };
    tasks = [newTask, ...tasks];
    return newTask;
  },
  
  toggleTaskStatus: async (id) => {
    await sleep(500);
    tasks = tasks.map(t => 
      t.id === id ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t
    );
    return tasks.find(t => t.id === id);
  },
  
  deleteTask: async (id) => {
    await sleep(800);
    tasks = tasks.filter(t => t.id !== id);
    return id;
  }
};
