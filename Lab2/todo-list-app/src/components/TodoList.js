import React from 'react';
import useState from 'react';

const TodoList = ({ children }) => {
  return (
    <ul>
      {children}
    </ul>
  );
};

export default TodoList;


// const TodoList = () => {
//     return (
//       <ul>
//         <li>Learn React</li>
//         <li>Complete Lab 1</li>
//         <li>Complete Lab 2</li>
//         <li>Complete Lab 3</li>
//         <li>Complete Lab 4</li>
//         <li>Complete Lab 5</li>
//         <li>Complete Lab 6</li>
//         <li>Complete Project</li>
//         {/* Add more tasks as needed */}
//       </ul>
//     );
//   };

// export default TodoList;