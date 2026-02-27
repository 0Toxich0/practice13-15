function MenuCard({ item, onDelete }) {
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="menu-card-content">
        <h3 className="menu-card-title">{item.name}</h3>
        <p className="menu-card-description">{item.description}</p>
        <div className="menu-card-price">{item.price} ₽/день</div>
        <button 
          className="unified-button unified-button-danger"
          onClick={() => onDelete(item.id)}
        >
          <i className="fas fa-trash-alt"></i>
          Удалить
        </button>
      </div>
    </div>
  )
}

export default MenuCard