import { useState } from 'react'
import MenuCard from './MenuCard'
import AddMenuItem from './AddMenuItem'

function MenuManager({ menuItems, onAdd, onDelete }) {
  const [sortBy, setSortBy] = useState('default')
  const [filterCategory, setFilterCategory] = useState('all')

  const categories = ['all', 'Лёгкий', 'Стандартный', 'Силовой']

  const sortedAndFilteredItems = [...menuItems]
    .filter(item => filterCategory === 'all' ? true : item.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })

  return (
    <section id="menu" className="section py-6" style={{ background: '#f5f5f5' }}>
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="section-title">Популярные рационы</h2>
        </div>

        <AddMenuItem onAdd={onAdd} />

        {/* Фильтры и сортировка */}
        <div className="unified-card mb-5">
          <div className="columns">
            <div className="column">
              <label className="unified-label">
                <i className="fas fa-filter has-text-success mr-2"></i>
                Фильтр по категории
              </label>
              <div className="unified-filter-group">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`unified-filter-button ${
                      filterCategory === cat 
                        ? 'unified-filter-button-active' 
                        : 'unified-filter-button-inactive'
                    }`}
                    onClick={() => setFilterCategory(cat)}
                  >
                    {cat === 'all' ? 'Все' : cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="column">
              <label className="unified-label">
                <i className="fas fa-sort has-text-success mr-2"></i>
                Сортировка
              </label>
              <select 
                className="unified-select"
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">📋 По умолчанию</option>
                <option value="name">🔤 По названию</option>
                <option value="price-asc">💰 По цене (возрастание)</option>
                <option value="price-desc">💰 По цене (убывание)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Сетка карточек меню */}
        {sortedAndFilteredItems.length === 0 ? (
          <div className="unified-notification notification-warning">
            <i className="fas fa-exclamation-triangle mr-2"></i>
            Нет позиций в этой категории. Добавьте новую!
          </div>
        ) : (
          <div className="columns is-multiline">
            {sortedAndFilteredItems.map(item => (
              <div key={item.id} className="column is-4">
                <MenuCard item={item} onDelete={onDelete} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default MenuManager