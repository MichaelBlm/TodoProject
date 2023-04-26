/**
 * Create a Todo list application where a user can enter any string on the task input textfield and clicks add to add an entry to the to-do list.
 *
 */
import { useState } from "react";
import Todo from "./Todo";
import styled from "styled-components";

const StyledForm = styled.div`
  label {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
  }

  form > button {
    margin-left: 0.75rem;
    background-color: #026cdf;
    color: #fff;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    padding: 0.5rem 0.75rem;
  }

  input {
    padding: 0.5rem;
  }

  li {
    margin: 0.5rem;
  }

  li > button {
    margin-left: 1.5rem;
    background-color: transparent;
    color: #ff0000;
    border: 1px solid #ff0000;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
  }
`;

export default function Form() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Wash the dishes" },
    { id: 2, task: "Clean the bathroom" },
    { id: 3, task: "Buy milk" },
    { id: 4, task: "Pick up the kids from school" }
    // more todos...
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "")
      setTodos([...todos, { id: todos.length + 1, task: input }]);
    setInput("");
  };

  const handleReset = () => {
    setTodos([]);
    setInput("");
  };

  const handleRemove = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Task: </label>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          id="todo"
        />
        <button type="submit">Add</button>
        <button onClick={handleReset}>Reset</button>
      </form>
      <ol>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            handleRemove={handleRemove}
          />
        ))}
      </ol>
    </StyledForm>
  );
}
