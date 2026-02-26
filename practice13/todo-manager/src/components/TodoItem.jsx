import { useState } from 'react';

function TodoItem({ task, onToggle, onDelete, onEdit, theme }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setEditText(task.text);
  };

  const handleBlur = () => {
    if (editText.trim()) {
      onEdit(task.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  // Стили в зависимости от темы
  const liStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px',
    borderBottom: theme === 'dark' ? '1px solid #555' : '1px solid #eee',
  };

  const spanStyle = {
    flex: 1,
    textDecoration: task.completed ? 'line-through' : 'none',
    color: task.completed
      ? theme === 'dark'
        ? '#aaa'
        : '#999'
      : theme === 'dark'
      ? '#fff'
      : '#333',
    cursor: 'text',
  };

  const inputStyle = {
    flex: 1,
    padding: '4px',
    backgroundColor: theme === 'dark' ? '#444' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    border: theme === 'dark' ? '1px solid #777' : '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    background: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '4px 8px',
    cursor: 'pointer',
  };

  return (
    <li style={liStyle}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          style={inputStyle}
        />
      ) : (
        <span onDoubleClick={handleDoubleClick} style={spanStyle}>
          {task.text}
        </span>
      )}
      <button onClick={() => onDelete(task.id)} style={buttonStyle}>
        Удалить
      </button>
    </li>
  );
}

export default TodoItem;