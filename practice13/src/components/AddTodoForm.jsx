import { useState } from 'react';

function AddTodoForm({ onAdd, theme }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  const inputStyle = {
    padding: '8px',
    width: '300px',
    marginRight: '10px',
    borderRadius: '4px',
    border: theme === 'dark' ? '1px solid #555' : '1px solid #ddd',
    backgroundColor: theme === 'dark' ? '#444' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
  };

  const buttonStyle = {
    padding: '8px 16px',
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Добавить новую задачу..."
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Добавить
      </button>
    </form>
  );
}

export default AddTodoForm;