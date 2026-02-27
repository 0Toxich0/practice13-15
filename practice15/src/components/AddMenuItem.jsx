import { useState } from 'react'

function AddMenuItem({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Стандартный',
    image: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.description || !formData.price || !formData.image) {
      alert('Пожалуйста, заполните все поля')
      return
    }

    onAdd({
      ...formData,
      price: Number(formData.price)
    })

    setFormData({
      name: '',
      description: '',
      price: '',
      category: 'Стандартный',
      image: ''
    })
  }

  return (
    <div className="box mb-5" style={{ 
      background: '#ffffff', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
      padding: '2rem', 
      borderRadius: '12px',
      border: '1px solid #e0e0e0'
    }}>
      <h3 className="title is-4 mb-4" style={{ 
        color: '#333',
        borderBottom: '3px solid #48c78e',
        paddingBottom: '0.75rem',
        fontWeight: '600'
      }}>
        Добавить новую позицию в меню
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="columns is-multiline">
          <div className="column is-6">
            <div className="field">
              <label className="label" style={{ color: '#333', fontWeight: '500' }}>Название</label>
              <input 
                className="input" 
                type="text" 
                placeholder="Лёгкий, Спортивный, Вегетарианский" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                required 
                style={{ 
                  borderColor: '#dbdbdb', 
                  color: '#333',
                  backgroundColor: '#fff',
                  borderRadius: '6px'
                }}
              />
              <p className="help" style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                Например: Лёгкий, Спортивный, Вегетарианский
              </p>
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="label" style={{ color: '#333', fontWeight: '500' }}>Категория</label>
              <div className="select is-fullwidth">
                <select 
                  value={formData.category} 
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  style={{ 
                    color: '#333', 
                    borderColor: '#dbdbdb',
                    backgroundColor: '#fff',
                    borderRadius: '6px'
                  }}
                >
                  <option>Лёгкий</option>
                  <option>Стандартный</option>
                  <option>Силовой</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="column is-12">
            <div className="field">
              <label className="label" style={{ color: '#333', fontWeight: '500' }}>Описание</label>
              <textarea 
                className="textarea" 
                placeholder="Опишите состав, калорийность, особенности..." 
                value={formData.description} 
                onChange={(e) => setFormData({...formData, description: e.target.value})} 
                required 
                style={{ 
                  borderColor: '#dbdbdb', 
                  color: '#333',
                  backgroundColor: '#fff',
                  borderRadius: '6px'
                }}
                rows="3"
              />
              <p className="help" style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                Например: 1500 ккал, курица с овощами, без глютена
              </p>
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="label" style={{ color: '#333', fontWeight: '500' }}>Цена (₽/день)</label>
              <input 
                className="input" 
                type="number" 
                placeholder="1200" 
                value={formData.price} 
                onChange={(e) => setFormData({...formData, price: e.target.value})} 
                required 
                style={{ 
                  borderColor: '#dbdbdb', 
                  color: '#333',
                  backgroundColor: '#fff',
                  borderRadius: '6px'
                }}
              />
              <p className="help" style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                Укажите стоимость в рублях за один день
              </p>
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="label" style={{ color: '#333', fontWeight: '500' }}>URL изображения</label>
              <input 
                className="input" 
                type="url" 
                placeholder="https://example.com/image.jpg" 
                value={formData.image} 
                onChange={(e) => setFormData({...formData, image: e.target.value})} 
                required 
                style={{ 
                  borderColor: '#dbdbdb', 
                  color: '#333',
                  backgroundColor: '#fff',
                  borderRadius: '6px'
                }}
              />
              <p className="help" style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                Вставьте прямую ссылку на изображение блюда
              </p>
            </div>
          </div>
        </div>
        
        <div className="field is-grouped mt-4">
          <button 
            type="submit" 
            className="button is-success"
            style={{ background: '#48c78e', color: 'white', border: 'none', borderRadius: '6px' }}
          >
            <i className="fas fa-plus-circle mr-2"></i>
            Добавить в меню
          </button>
          <button 
            type="button" 
            className="button is-light"
            style={{ background: '#f5f5f5', color: '#333', border: '1px solid #dbdbdb', borderRadius: '6px' }}
            onClick={() => setFormData({
              name: '', description: '', price: '', category: 'Стандартный', image: ''
            })}
          >
            <i className="fas fa-undo-alt mr-2"></i>
            Очистить
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddMenuItem