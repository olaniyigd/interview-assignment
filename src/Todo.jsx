// components/ToDoList.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ToDoContainer = styled.div`
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  margin-bottom: 20px;

  input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input[type="checkbox"] {
    margin-right: 10px;
  }

  .completed {
    text-decoration: line-through;
  }

  button {
    padding: 5px 10px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: auto;
  }
`;

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
    setTasks(updatedTasks);
  };

  const handleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <ToDoContainer>
      <h2>To-Do List</h2>
      <Form onSubmit={(e) => {
        e.preventDefault();
        const taskInput = e.target.elements.task;
        if (taskInput.value.trim() !== '') {
          handleAddTask(taskInput.value);
          taskInput.value = '';
        }
      }}>
        <input type="text" name="task" placeholder="Add a new task" />
        <button type="submit">Add Task</button>
      </Form>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={index}>
            <input type="checkbox" checked={task.completed} onChange={() => handleTaskCompletion(index)} />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </TaskItem>
        ))}
      </TaskList>
    </ToDoContainer>
  );
}

export default ToDoList;
