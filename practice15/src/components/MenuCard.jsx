function MenuCard({ item, onDelete }) {
  return (
    <div className="card menu-card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={item.image} alt={item.name} />
        </figure>
      </div>
      <div className="card-content">
        <h3 className="title is-4 has-text-white">{item.name}</h3>
        <p className="has-text-white mb-4">{item.description}</p>
        <p className="has-text-weight-bold is-size-4 mb-4 has-text-success">{item.price} ₽/день</p>
        <button className="button is-danger is-fullwidth" onClick={() => onDelete(item.id)}>
          Удалить
        </button>
      </div>
    </div>
  )
}

export default MenuCard