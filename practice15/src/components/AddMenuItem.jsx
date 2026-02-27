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
    if (!formData.name || !formData.description || !formData.price || !formData.image) return

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
    <div className="box mb-5">
      <h3 className="title is-4 has-text-dark mb-4">Добавить новую позицию в меню</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="columns is-multiline">
          <div className="column is-6">
            <div className="field">
              <label className="label">Название</label>
              <input className="input" type="text" placeholder="Лёгкий" 
                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="label">Категория</label>
              <div className="select is-fullwidth">
                <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                  <option>Лёгкий</option>
                  <option>Стандартный</option>
                  <option>Силовой</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="column is-12">
            <div className="field">
              <label className="label">Описание</label>
              <textarea className="textarea" placeholder="Описание рациона..." 
                value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required />
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="label">Цена (₽/день)</label>
              <input className="input" type="number" placeholder="1200" 
                value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required />
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="label">URL изображения</label>
              <input className="input" type="url" placeholder="https://..." 
                value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} required />
            </div>
          </div>
        </div>
        
        <div className="field is-grouped mt-4">
          <button type="submit" className="button is-success">Добавить в меню</button>
          <button type="button" className="button is-light" onClick={() => setFormData({
            name: '', description: '', price: '', category: 'Стандартный', image: ''
          })}>Очистить</button>
        </div>
      </form>
    </div>
  )
}

export default AddMenuItem