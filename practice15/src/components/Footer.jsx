function Footer() {
  return (
    <footer className="footer has-background-dark has-text-white">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3 className="title is-4 has-text-white mb-4">FreshFood</h3>
            <p className="mb-3 has-text-light">Здоровое питание с доставкой по Москве и области.</p>
            <p className="mb-2 has-text-light">
              <i className="fas fa-phone mr-2"></i> +7 (999) 123-45-67
            </p>
            <p className="has-text-light">
              <i className="fas fa-envelope mr-2"></i> hello@freshfood.ru
            </p>
          </div>
          
          <div className="column">
            <h4 className="title is-5 has-text-white mb-4">Навигация</h4>
            <p><a href="#about" className="has-text-light">О нас</a></p>
            <p><a href="#menu" className="has-text-light">Меню</a></p>
            <p><a href="#add" className="has-text-light">Добавить позицию</a></p>
          </div>
          
          <div className="column">
            <h4 className="title is-5 has-text-white mb-4">Мы в соцсетях</h4>
            <div className="social-icons mb-4">
              <a className="has-text-light mr-3" href="#"><i className="fab fa-vk fa-2x"></i></a>
              <a className="has-text-light mr-3" href="#"><i className="fab fa-telegram fa-2x"></i></a>
              <a className="has-text-light mr-3" href="#"><i className="fab fa-instagram fa-2x"></i></a>
              <a className="has-text-light" href="#"><i className="fab fa-youtube fa-2x"></i></a>
            </div>
            <p className="is-size-7 has-text-light">© 2025 FreshFood. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer