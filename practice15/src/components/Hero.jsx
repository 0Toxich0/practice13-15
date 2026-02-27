function Hero() {
  return (
    <section className="hero is-success is-fullheight-with-navbar">
      <div className="hero-body" style={{
        background: 'linear-gradient(rgba(72, 199, 142, 0.486), rgba(72, 199, 142, 0.9)), url("https://xn----8sbnnbambfrmllc0aj3a1a.xn--p1ai/wp-content/uploads/2022/12/top-view-healthy-food-for-immunity-boosting-composition-1.jpg") center/cover no-repeat'
      }}>
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8 has-text-centered">
              <div className="mb-4">
                <i className="fas fa-leaf fa-3x has-text-white"></i>
              </div>
              <h1 className="title is-1 is-spaced has-text-white mb-4">
                Здоровое питание с доставкой
              </h1>
              <h2 className="subtitle is-4 has-text-white mb-5">
                Ежедневные рационы от шеф-повара. Без сахара, глютена и консервантов.
              </h2>
              <div className="buttons is-centered">
                <a href="#menu" className="button is-light is-medium is-rounded">
                  <span className="has-text-success">Посмотреть меню</span>
                  <span className="icon"><i className="fas fa-arrow-right has-text-success"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero