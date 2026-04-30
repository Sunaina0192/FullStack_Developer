import React from 'react'
import TaskForm from './components/TaskForm'
import SearchBar from './components/SearchBar'
import TaskList from './components/TaskList'
import Filters from './components/Filters'

const App = () => {
  return (
    <div>
      <h1>Smart Task Manager</h1>
      <TaskForm />
      <SearchBar />
      <Filters />
      <TaskList />
    </div>
  )
}

export default App
