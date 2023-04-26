export default function Todo({ id, task, handleRemove }) {
  return (
    <li>
      {task}
      <button onClick={() => handleRemove(id)}>Remove</button>
    </li>
  );
}
