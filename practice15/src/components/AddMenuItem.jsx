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
    <div className="unified-card mb-5">
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
              <label className="unified-label">Название</label>
              <input 
                className="unified-input" 
                type="text" 
                placeholder="Лёгкий, Спортивный, Вегетарианский" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                required 
              />
              <p className="unified-help">Например: Лёгкий, Спортивный, Вегетарианский</p>
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="unified-label">Категория</label>
              <div className="select is-fullwidth">
                <select 
                  className="unified-select"
                  value={formData.category} 
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
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
              <label className="unified-label">Описание</label>
              <textarea 
                className="unified-input" 
                placeholder="Опишите состав, калорийность, особенности..." 
                value={formData.description} 
                onChange={(e) => setFormData({...formData, description: e.target.value})} 
                required 
                rows="3"
              />
              <p className="unified-help">Например: 1500 ккал, курица с овощами, без глютена</p>
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="unified-label">Цена (₽/день)</label>
              <input 
                className="unified-input" 
                type="number" 
                placeholder="1200" 
                value={formData.price} 
                onChange={(e) => setFormData({...formData, price: e.target.value})} 
                required 
              />
              <p className="unified-help">Укажите стоимость в рублях за один день</p>
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="unified-label">URL изображения</label>
              <input 
                className="unified-input" 
                type="url" 
                placeholder="https://example.com/image.jpg" 
                value={formData.image} 
                onChange={(e) => setFormData({...formData, image: e.target.value})} 
                required 
              />
              <p className="unified-help">Вставьте прямую ссылку на изображение блюда</p>
            </div>
          </div>
        </div>
        
        <div className="field is-grouped mt-4">
          <button 
            type="submit" 
            className="unified-button unified-button-primary"
          >
            <i className="fas fa-plus-circle"></i>
            Добавить в меню
          </button>
          <button 
            type="button" 
            className="unified-button unified-button-secondary"
            onClick={() => setFormData({
              name: '', description: '', price: '', category: 'Стандартный', image: ''
            })}
          >
            <i className="fas fa-undo-alt"></i>
            Очистить
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddMenuItem