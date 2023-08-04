import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import logo from './images/logo.svg';

import './App.css';


const App = () => {
  const [tasks, setTasks] = React.useState([]);

  const onTaskAddedCallback = (task) => {
    // Long way:
    /*const newTasks = tasks;

    newTasks.push(task);

    setTasks(newTasks);*/

    // Short way:
    setTasks([...tasks, task]);

  };

  // Long way:
  /*const items = [];

  for (const task of tasks) {
    const item = <li>{task}</li>;
    items.push(item);
  }*/

  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
      <Header title='This is the header'>
        <img src={logo} className="App-logo-left" alt="logo" />
        <img src={logo} className="App-logo-right" alt="logo" />
        <h1 className='App-header'>Shebab Omran's Website</h1>
      </Header>
      <TodoForm onTaskAdded={onTaskAddedCallback} />
      <TodoList>
        {/*items*/}
        {tasks.map((task) => <li>{task}</li>)}
      </TodoList>
      <Footer />
    </>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
//       <div>
//         <Header />
//       </div>
//       <TodoList />
//       <Footer />
//     </div>
//   );
// }

// export default App;
