import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskInput = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            dispatch(addTask(inputValue));
            setInputValue('');
        }
    };

    return (
        <Form className="d-flex mb-3">
            <Form.Control
                type="text"
                placeholder="Enter a new task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
            />
            <Button variant="primary" onClick={handleAddTask} className="ms-2">
                Add
            </Button>
        </Form>
    );
};

export default TaskInput;
