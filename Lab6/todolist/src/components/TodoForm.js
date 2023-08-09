import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import tasksData from '../data/tasks.json';

const TodoForm = (props) => {
  const { onTaskAdded } = props;

  const [errors, setErrors] = React.useState([]);
  //const [task, setTask] = React.useState('');

  const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };

  const onFormSubmitted = (event) => {
    event.preventDefault();

    const value = event.target.task.value;

    const newErrors = [];

    // Testing logic
    if (value == '') {
      newErrors.push('Task cannot be empty.');
    } else if (value.trim() == '') {
      newErrors.push('Task cannot be whitespaces.');
    }

    setErrors(newErrors);
    
    if (newErrors.length == 0) {
      onTaskAdded(value);

    }
  };

  const ulStyles = {
    color: 'red'
  };

  const hasErrors = errors.length > 0 ? true : false;

  const errorEls = errors.map(
    (error, index) => <li key={index}>{error}</li>
  );
  

  const onTaskChanged = (event) => {
    const value = event.target.value;

    //setTask(value);

    const newErrors = [];

    // Testing logic
    if (value == '') {
      newErrors.push('Task cannot be empty.');
    } else if (value.trim() == '') {
      newErrors.push('Task cannot be whitespaces.');
    }

    setErrors(newErrors);
  }

  const generateRandomTask = () => {
    const tasksAry = tasksData.tasks;

    const randomIndex = (Math.random() * (tasksAry.length - 1)).toFixed(0);

    const randomTask = tasksAry[randomIndex];

    inputRef.current.value = randomTask;

    //alert(randomTask);
  }

  const inputRef = React.createRef();

  return (
    <form onSubmit={onFormSubmitted}>
      <InputGroup>
        <Button type='button' onClick={generateRandomTask}>Random Task</Button>
        <input ref={inputRef} type="text" name="task" id="task" /*value={task}*/ onChange={onTaskChanged} />
        <Button type="submit" disabled={hasErrors}>Add Task</Button>
      </InputGroup>

      <ul style={ulStyles}>
        {errorEls}
      </ul>
    </form>
  );
};

export default TodoForm;
