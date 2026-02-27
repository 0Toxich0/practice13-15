function MenuCard({ item, onDelete }) {
  return (
    <div className="card menu-card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={item.image} alt={item.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media mb-2">
          <div className="media-content">
            <p className="title is-4 has-text-white">{item.name}</p>
            <p className="subtitle is-6 has-text-grey-light">{item.category}</p>
          </div>
        </div>
        <div className="content">
          <p className="has-text-white">{item.description}</p>
          <p className="has-text-weight-bold is-size-4 has-text-success mt-3">
            {item.price} ₽/день
          </p>
          <button 
            className="button is-danger is-small mt-3"
            onClick={() => onDelete(item.id)}
          >
            <span className="icon"><i className="fas fa-trash"></i></span>
            <span>Удалить</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard