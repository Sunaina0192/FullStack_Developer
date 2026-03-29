import React from 'react'

const Project = () => {
  return (
        <div class="projects">
        <input type="radio" name="select" id="p1" checked/>
        <input type="radio" name="select" id="p2"/>
        <input type="radio" name="select" id="p3"/>

        <div class="cards">
            <label class="card c1" for="p1">
                <h1>CURRENT WEATHER</h1>
                <p> A React project that shows current weather (humidity, temperature, etc.)
                    for any city using a Weather API.</p>
                    <a href="https://current-weatherdata.onrender.com/">Current Weather Link</a>
            </label>
            <label class="card c2" for="p2">
                <h1>TO-DO LIST</h1>
                <p> A simple To-Do List built with React. Add, update, and manage daily tasks
                    with a clean responsive design.</p>
                    <a href="https://todolist-website-3x1p.onrender.com/">TO-DO LIST Link</a>
            </label>
            <label class="card c3" for="p3">
                <h1>TOP 10 TOURIST PLACES IN HP</h1>
                <p>A React-based website showcasing Himachal Pradesh’s top tourist destinations
                    with beautiful visuals and descriptions.</p>
                    <a href="https://tourist-y60l.onrender.com/"> TOURIST TRAVEL Link</a>
            </label>
        </div>
    </div>
  )
}

export default Project
