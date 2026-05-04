import { useState, useEffect } from 'react';
import { 
  User, 
  Users, 
  UserPlus, 
  Edit2, 
  Trash2, 
  Save, 
  X,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import './App.css';

const API_URL = 'http://localhost:5000/users';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [mode, setMode] = useState('list'); // 'list', 'create', 'editFull', 'editPartial'
  const [formData, setFormData] = useState({ name: '', age: '', role: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Initial Fetch - TASK 1: VIEW USER PROFILE (GET)
  useEffect(() => {
    fetchUsers();
  }, []);

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      showMessage('error', 'Error connecting to backend server. Make sure json-server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // TASK 2: CREATE USER PROFILE (POST)
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const newUser = {
      name: formData.name,
      age: Number(formData.age),
      role: formData.role
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });
      
      if (!response.ok) throw new Error('Failed to create user');
      
      const createdUser = await response.json();
      setUsers(prev => [...prev, createdUser]);
      showMessage('success', 'User profile created successfully! (POST)');
      setMode('list');
      setFormData({ name: '', age: '', role: '' });
    } catch (error) {
      showMessage('error', error.message);
    } finally {
      setLoading(false);
    }
  };

  // TASK 3: UPDATE FULL PROFILE (PUT)
  const handleUpdateFull = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedUser = {
      id: selectedUser.id,
      name: formData.name,
      age: Number(formData.age),
      role: formData.role
    };

    try {
      const response = await fetch(`${API_URL}/${selectedUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser)
      });

      if (!response.ok) throw new Error('Failed to update user');

      const data = await response.json();
      setUsers(prev => prev.map(u => u.id === data.id ? data : u));
      showMessage('success', 'Full profile updated! (PUT)');
      setMode('list');
    } catch (error) {
      showMessage('error', error.message);
    } finally {
      setLoading(false);
    }
  };

  // TASK 4: UPDATE ONLY ONE FIELD (PATCH)
  const handleUpdatePartial = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Using spread operator correctly as per task requirement
    // Only send the field that was changed
    const partialData = {
      ...((formData.role !== selectedUser.role) && { role: formData.role }),
      ...((Number(formData.age) !== selectedUser.age) && { age: Number(formData.age) })
    };

    if (Object.keys(partialData).length === 0) {
      showMessage('error', 'No changes made');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${selectedUser.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(partialData)
      });

      if (!response.ok) throw new Error('Failed to update field');

      const data = await response.json();
      setUsers(prev => prev.map(u => u.id === data.id ? data : u));
      showMessage('success', 'Specific field(s) updated! (PATCH)');
      setMode('list');
    } catch (error) {
      showMessage('error', error.message);
    } finally {
      setLoading(false);
    }
  };

  // TASK 5: DELETE USER PROFILE (DELETE)
  const handleDelete = async (id) => {
    // Optimistic UI Update instantly
    const previousUsers = [...users];
    setUsers(prev => prev.filter(u => u.id !== id));
    
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });

      if (response.status === 404) {
        showMessage('error', 'User already deleted or not found');
        // Restore if it was a real 404 mismatch, though in this case it means it's gone
      } else if (!response.ok) {
        throw new Error('Failed to delete');
      } else {
        showMessage('success', 'Profile deleted permanently! (DELETE)');
      }
    } catch (error) {
      setUsers(previousUsers); // Revert if actual error
      showMessage('error', 'Error deleting user: ' + error.message);
    }
  };

  const startCreate = () => {
    setFormData({ name: '', age: '', role: '' });
    setMode('create');
  };

  const startEditFull = (user) => {
    setSelectedUser(user);
    setFormData({ name: user.name, age: user.age, role: user.role });
    setMode('editFull');
  };

  const startEditPartial = (user) => {
    setSelectedUser(user);
    setFormData({ name: user.name, age: user.age, role: user.role });
    setMode('editPartial');
  };

  return (
    <div className="container">
      <header className="header">
        <h1>User Management <span className="method-badge">HTTP Methods</span></h1>
        <p>Master GET, POST, PUT, PATCH, and DELETE operations</p>
      </header>

      {message.text && (
        <div className={`alert alert-${message.type}`}>
          {message.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
          {message.text}
        </div>
      )}

      <div className="dashboard-layout">
        {/* Left Panel: User List */}
        <div className="glass-panel">
          <div className="panel-title" style={{ justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={24} /> Users <span className="method-badge">GET</span>
            </span>
            <button className="icon-btn" onClick={fetchUsers} title="Refresh">
               {loading && mode === 'list' ? <span className="loading-spinner"></span> : <Users size={18} />}
            </button>
          </div>

          <button 
            className="btn btn-primary" 
            style={{ width: '100%', marginBottom: '1rem' }}
            onClick={startCreate}
          >
            <UserPlus size={18} /> Add New User
          </button>

          {users.length === 0 && !loading ? (
            <div className="empty-state">
              <User size={48} />
              <p>No users found</p>
            </div>
          ) : (
            <div className="users-list">
              {users.map(user => (
                <div key={user.id} className={`user-card ${selectedUser?.id === user.id ? 'active' : ''}`}>
                  <div className="user-info">
                    <h3>{user.name}</h3>
                    <p>{user.role} • {user.age} yrs</p>
                  </div>
                  <div className="user-actions">
                    <button className="icon-btn" title="Edit Full Profile (PUT)" onClick={() => startEditFull(user)}>
                      <Edit2 size={16} />
                    </button>
                    <button className="icon-btn" title="Edit Partial (PATCH)" onClick={() => startEditPartial(user)}>
                      <Save size={16} />
                    </button>
                    <button className="icon-btn delete" title="Delete Profile (DELETE)" onClick={() => handleDelete(user.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Panel: Forms */}
        <div className="glass-panel">
          {mode === 'list' && (
            <div className="empty-state" style={{ padding: '5rem 1rem' }}>
              <Users size={64} />
              <h2>Select an action</h2>
              <p>Click "Add New User" to POST, or select a user to PUT/PATCH</p>
            </div>
          )}

          {mode === 'create' && (
            <div>
              <div className="panel-title">
                Create User Profile <span className="method-badge">POST</span>
              </div>
              <form onSubmit={handleCreate}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-input" required placeholder="e.g. Manish" />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input type="number" name="age" value={formData.age} onChange={handleInputChange} className="form-input" required min="1" max="120" placeholder="e.g. 25" />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <input type="text" name="role" value={formData.role} onChange={handleInputChange} className="form-input" required placeholder="e.g. Developer" />
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary" onClick={() => setMode('list')}>Cancel</button>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? <span className="loading-spinner"></span> : 'Save User'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {mode === 'editFull' && (
            <div>
              <div className="panel-title">
                Update Full Profile <span className="method-badge">PUT</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Replaces the entire user object with new data.
              </p>
              <form onSubmit={handleUpdateFull}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input type="number" name="age" value={formData.age} onChange={handleInputChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <input type="text" name="role" value={formData.role} onChange={handleInputChange} className="form-input" required />
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary" onClick={() => setMode('list')}>Cancel</button>
                  <button type="submit" className="btn btn-warning" disabled={loading}>
                    {loading ? <span className="loading-spinner"></span> : 'Update Profile'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {mode === 'editPartial' && (
            <div>
              <div className="panel-title">
                Update Single Field <span className="method-badge">PATCH</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Only sends the fields that have been modified. Name is disabled for this test.
              </p>
              <form onSubmit={handleUpdatePartial}>
                <div className="form-group">
                  <label>Full Name (Read-only)</label>
                  <input type="text" name="name" value={formData.name} readOnly className="form-input" style={{ opacity: 0.5 }} />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input type="number" name="age" value={formData.age} onChange={handleInputChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <input type="text" name="role" value={formData.role} onChange={handleInputChange} className="form-input" required />
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary" onClick={() => setMode('list')}>Cancel</button>
                  <button type="submit" className="btn btn-success" style={{ background: 'var(--success)', color: '#fff', flex: 1, padding: '0.75rem', border: 'none', borderRadius: '8px', cursor: 'pointer' }} disabled={loading}>
                    {loading ? <span className="loading-spinner"></span> : 'Patch Field(s)'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
