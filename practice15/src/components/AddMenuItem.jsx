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
    <div id="add" className="box mb-5">
      <h3 className="title is-4 has-text-dark mb-4">
        <i className="fas fa-plus-circle has-text-success mr-2"></i>
        Добавить новую позицию
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="columns is-multiline">
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-dark">Название</label>
              <div className="control">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Например: Лёгкий"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-dark">Категория</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select 
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
          </div>
          
          <div className="column is-12">
            <div className="field">
              <label className="label has-text-dark">Описание</label>
              <div className="control">
                <textarea 
                  className="textarea" 
                  placeholder="Подробное описание рациона..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-dark">Цена (₽/день)</label>
              <div className="control">
                <input 
                  className="input" 
                  type="number" 
                  placeholder="1200"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-dark">URL изображения</label>
              <div className="control">
                <input 
                  className="input" 
                  type="url" 
                  placeholder="https://example.com/image.jpg"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="field is-grouped mt-4">
          <div className="control">
            <button type="submit" className="button is-success">
              <span className="icon"><i className="fas fa-check"></i></span>
              <span>Добавить в меню</span>
            </button>
          </div>
          <div className="control">
            <button 
              type="button" 
              className="button is-light"
              onClick={() => setFormData({
                name: '',
                description: '',
                price: '',
                category: 'Стандартный',
                image: ''
              })}
            >
              Очистить
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddMenuItem