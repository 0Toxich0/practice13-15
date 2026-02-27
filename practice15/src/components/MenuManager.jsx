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
        <div className="section-header has-text-centered mb-6">
          <h2 className="title is-2 has-text-dark mt-3" style={{ color: '#333333' }}>Популярные рационы</h2>
          <div className="divider" style={{ height: '3px', width: '60px', background: '#48c78e', margin: '1.25rem auto', borderRadius: '3px' }}></div>
        </div>

        <AddMenuItem onAdd={onAdd} />

        {/* Фильтры и сортировка в светлом стиле */}
        <div className="box mb-5 p-4" style={{ 
          background: '#ffffff', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)', 
          borderRadius: '8px',
          border: '1px solid #cacaca'
        }}>
          <div className="columns">
            <div className="column">
              <label className="label" style={{ fontWeight: '600', color: '#333333' }}>Фильтр по категории</label>
              <div className="field has-addons">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className="button"
                    onClick={() => setFilterCategory(cat)}
                    style={filterCategory === cat ? 
                      { background: '#48c78e', color: 'white', border: 'none', fontWeight: '500' } : 
                      { background: '#f5f5f5', color: '#333333', border: '1px solid #dbdbdb', fontWeight: '500' }
                    }
                  >
                    {cat === 'all' ? 'Все' : cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="column">
              <label className="label" style={{ fontWeight: '600', color: '#333333' }}>Сортировка</label>
              <div className="select is-fullwidth">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)} 
                  style={{ 
                    color: '#333333', 
                    borderColor: '#dbdbdb',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="default">По умолчанию</option>
                  <option value="name">По названию</option>
                  <option value="price-asc">По цене (возрастание)</option>
                  <option value="price-desc">По цене (убывание)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Сетка карточек меню */}
        {sortedAndFilteredItems.length === 0 ? (
          <div className="notification" style={{ 
            background: '#fff3cd', 
            color: '#856404', 
            border: '1px solid #ffeeba',
            borderRadius: '8px'
          }}>
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