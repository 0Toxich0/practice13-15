function TodoFilters({ filter, onFilterChange, activeCount, theme }) {
  const filterTypes = ['all', 'active', 'completed'];

  const buttonBaseStyle = {
    margin: '0 5px',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        paddingBottom: '10px',
        borderBottom: theme === 'dark' ? '2px solid #555' : '2px solid #eee',
        color: theme === 'dark' ? '#fff' : '#333',
      }}
    >
      <span>Осталось задач: {activeCount}</span>
      <div>
        {filterTypes.map((filterType) => (
          <button
            key={filterType}
            onClick={() => onFilterChange(filterType)}
            style={{
              ...buttonBaseStyle,
              background:
                filter === filterType
                  ? '#007bff'
                  : theme === 'dark'
                  ? '#555'
                  : '#f0f0f0',
              color:
                filter === filterType
                  ? 'white'
                  : theme === 'dark'
                  ? '#fff'
                  : '#333',
            }}
          >
            {filterType === 'all'
              ? 'Все'
              : filterType === 'active'
              ? 'Активные'
              : 'Выполненные'}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TodoFilters;