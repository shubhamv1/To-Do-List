import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskCompletion } from '../redux/actions';
import { ListGroup, Button, Modal, Form } from 'react-bootstrap';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [editText, setEditText] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (task) => {
        setCurrentTask(task);
        setEditText(task.text);
        setShow(true);
    };

    const handleEditSubmit = () => {
        dispatch(editTask(currentTask.id, editText));
        handleClose();
    };

    return (
        <>
            <ListGroup>
                {tasks.map(task => (
                    <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
                        <span
                            style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                            onClick={() => dispatch(toggleTaskCompletion(task.id))}
                        >
                            {task.text}
                        </span>
                        <div>
                            <Button variant="warning" onClick={() => handleShow(task)} className="me-2">Edit</Button>
                            <Button variant="danger" onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEditSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TaskList;
