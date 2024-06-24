import { createStore } from 'redux';
import tasksReducer from './reducers';
import { loadTasks } from './actions';

const store = createStore(tasksReducer);

// Load tasks from local storage
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
store.dispatch(loadTasks(savedTasks));

// Save tasks to local storage whenever they change
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
});

export default store;
