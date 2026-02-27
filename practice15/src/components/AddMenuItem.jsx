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
    <div className="box mb-5" style={{ background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', padding: '2rem', borderRadius: '8px' }}>
      <h3 className="title is-4 has-text-dark mb-4" style={{ fontWeight: '600', color: '#333' }}>Добавить новую позицию в меню</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="columns is-multiline">
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-dark" style={{ color: '#333', fontWeight: '500' }}>Название</label>
              <input 
                className="input" 
                type="text" 
                placeholder="Лёгкий" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                required 
                style={{ borderColor: '#dbdbdb', color: '#333' }}
              />
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-dark" style={{ color: '#333', fontWeight: '500' }}>Категория</label>
              <div className="select is-fullwidth">
                <select 
                  value={formData.category} 
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  style={{ color: '#333', borderColor: '#dbdbdb' }}
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
              <label className="label has-text-dark" style={{ color: '#333', fontWeight: '500' }}>Описание</label>
              <textarea 
                className="textarea" 
                placeholder="Описание рациона..." 
                value={formData.description} 
                onChange={(e) => setFormData({...formData, description: e.target.value})} 
                required 
                style={{ borderColor: '#dbdbdb', color: '#333' }}
                rows="3"
              />
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-dark" style={{ color: '#333', fontWeight: '500' }}>Цена (₽/день)</label>
              <input 
                className="input" 
                type="number" 
                placeholder="1200" 
                value={formData.price} 
                onChange={(e) => setFormData({...formData, price: e.target.value})} 
                required 
                style={{ borderColor: '#dbdbdb', color: '#333' }}
              />
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-dark" style={{ color: '#333', fontWeight: '500' }}>URL изображения</label>
              <input 
                className="input" 
                type="url" 
                placeholder="https://..." 
                value={formData.image} 
                onChange={(e) => setFormData({...formData, image: e.target.value})} 
                required 
                style={{ borderColor: '#dbdbdb', color: '#333' }}
              />
            </div>
          </div>
        </div>
        
        <div className="field is-grouped mt-4">
          <button type="submit" className="button is-success" style={{ background: '#48c78e', color: 'white', border: 'none' }}>Добавить в меню</button>
          <button 
            type="button" 
            className="button is-light" 
            onClick={() => setFormData({
              name: '', description: '', price: '', category: 'Стандартный', image: ''
            })}
            style={{ background: '#f5f5f5', color: '#333', border: '1px solid #dbdbdb' }}
          >
            Очистить
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddMenuItem