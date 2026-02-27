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
    <section id="menu" className="section py-6" style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)' }}>
      <div className="container">
        <div className="section-header has-text-centered mb-6">
          <h2 className="title is-2 has-text-white mt-3">Популярные рационы</h2>
          <div className="divider"></div>
        </div>

        <AddMenuItem onAdd={onAdd} />

        <div className="box mb-5 p-4">
          <div className="columns">
            <div className="column">
              <label className="label has-text-dark">Фильтр по категории</label>
              <div className="field has-addons">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`button ${filterCategory === cat ? 'is-success' : 'is-light'}`}
                    onClick={() => setFilterCategory(cat)}
                  >
                    {cat === 'all' ? 'Все' : cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="column">
              <label className="label has-text-dark">Сортировка</label>
              <div className="select is-fullwidth">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="default">По умолчанию</option>
                  <option value="name">По названию</option>
                  <option value="price-asc">По цене (возрастание)</option>
                  <option value="price-desc">По цене (убывание)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {sortedAndFilteredItems.length === 0 ? (
          <div className="notification is-warning has-text-centered">
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