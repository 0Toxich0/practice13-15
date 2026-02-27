function MenuCard({ item, onDelete }) {
  return (
    <div className="card" style={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      borderRadius: '12px', 
      overflow: 'hidden', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s'
    }}>
      <div className="card-image">
        <figure className="image is-4by3" style={{ margin: 0 }}>
          <img 
            src={item.image} 
            alt={item.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </figure>
      </div>
      <div className="card-content" style={{ background: 'white', padding: '1.5rem' }}>
        <h3 className="title is-4 has-text-dark mb-2" style={{ color: '#333', fontWeight: '600' }}>{item.name}</h3>
        <p className="has-text-dark mb-3" style={{ color: '#4a4a4a' }}>{item.description}</p>
        <p className="has-text-weight-bold is-size-4 mb-4" style={{ color: '#48c78e' }}>{item.price} ₽/день</p>
        <button 
          className="button is-danger is-fullwidth" 
          onClick={() => onDelete(item.id)}
          style={{ background: '#f14668', color: 'white', border: 'none' }}
        >
          Удалить
        </button>
      </div>
    </div>
  )
}

export default MenuCard