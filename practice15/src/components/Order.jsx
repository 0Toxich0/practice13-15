function Order() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.')
    e.target.reset()
  }

  return (
    <section id="order" className="section py-6 has-background-success">
      <div className="container has-text-centered">
        <h2 className="title is-2 has-text-white mb-4">Готовы начать?</h2>
        <p className="subtitle is-5 has-text-white mb-6">
          Закажите пробный день прямо сейчас и получите скидку 20% на первую неделю!
        </p>
        
        <form onSubmit={handleSubmit} className="box is-inline-block p-5" style={{ maxWidth: '500px', width: '100%' }}>
          <div className="field">
            <div className="control has-icons-left">
              <input className="input is-medium" type="text" placeholder="Ваше имя" required />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          
          <div className="field">
            <div className="control has-icons-left">
              <input className="input is-medium" type="email" placeholder="Ваш email" required />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          
          <div className="field">
            <div className="control has-icons-left">
              <input className="input is-medium" type="tel" placeholder="Ваш телефон" required />
              <span className="icon is-small is-left">
                <i className="fas fa-phone"></i>
              </span>
            </div>
          </div>
          
          <button className="button is-success is-medium is-fullwidth mt-4">
            <strong>Заказать пробный день</strong>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Order