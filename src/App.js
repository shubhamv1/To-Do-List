import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="todo-container p-4 shadow-sm rounded bg-light">
                        <h2 className="text-center mb-4">To-Do List</h2>
                        <TaskInput />
                        <TaskList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
