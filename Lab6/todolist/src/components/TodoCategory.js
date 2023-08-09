import React from 'react';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//import TodoForm from './TodoFormClass';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoCategory = (props) => {
    const { title } = props;
    //const tasks = ['Task 1', 'Task 2', 'Task 3'];
    const [tasks, setTasks] = React.useState([]);
    
    const onTaskAdded = (task) => {
        setTasks([...tasks, task]);
    }

    const Example = () => {
        const [startDate, setStartDate] = useState(new Date());
        return (
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        );
    };

    return (
        <>
            <h1>{title}</h1>
            <TodoForm onTaskAdded={onTaskAdded} />
            <TodoList tasks={tasks} />
            <h3>Deadline for this category</h3><Example />
        </>
    );
}

export default TodoCategory;