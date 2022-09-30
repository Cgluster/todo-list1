import React, { useState } from 'react';
import { Activity } from './Activity';
import { AddActivityForm } from './AddActivityForm';
import { generateId } from './utilities';
import './App.css';

function App() {
  const [ activities, setActivities ] = useState([
    {
      id: generateId(),
      text: 'Brush teeth.'
    },
    {
      id: generateId(),
      text: 'Exercise - 30 minutes.'
    },
    {
      id: generateId(),
      text: 'Code - 3 hours.'
    }
  ]);

  const addActivity = (activity) => {
    setActivities((prev) => {
      return [activity, ...prev];
    });
  };

  const removeActivity = (activityToRemove) => {
    setActivities((activities) => activities.filter((task) => task.id !== activityToRemove));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List with React</h1>
      </header>
      <main>
        <AddActivityForm addActivity={addActivity} />
        <ul className='activities'>
          {activities.map((activity) => (
            <Activity key={activity.id} activity={activity}
            removeActivity={removeActivity} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
