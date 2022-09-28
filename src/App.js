import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List with React</h1>
      </header>
      <body>
        <h2>Please Add a Task</h2>
        <input type="text" />
        <button type='submit'>Submit</button>
        <hr />
        <h2>Tasks To Accomplish</h2>
        <p>Take Shower</p>
        <p>Exercise - 1 hour</p>
        <p>Code - 4 hours</p>
      </body>
    </div>
  );
}

export default App;
