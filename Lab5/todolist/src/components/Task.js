import React from 'react';
import { ListGroupItem, Badge } from 'reactstrap';

const Task = (props) => {
    const { children } = props;

    const [completed, setCompleted] = React.useState(false);

    const onCompletedChanged = (event) => {
        //console.log(event);

        const isChecked = event.target.checked;

        setCompleted(isChecked);
    };

    console.log(completed);

    const taskStyle = completed ? 'success' : 'info'


    return (
        <>
            <ListGroupItem>
                <span><Badge color={taskStyle}>{children}</Badge></span>
                <input type='checkbox' name='completed' onChange={onCompletedChanged} />
            </ListGroupItem> 
        </>
    );
}

export default Task;