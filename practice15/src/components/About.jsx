function About() {
  return (
    <section id="about" className="section py-6" style={{
      background: 'linear-gradient(90deg, rgba(72, 199, 142, 0.9) 0%, rgba(72, 199, 142, 0.7) 100%), url("https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80") center/cover no-repeat',
      color: 'white'
    }}>
      <div className="container">
        <div className="section-header has-text-centered mb-6">
          <h2 className="title is-2 has-text-white mt-3">Почему FreshFood?</h2>
          <div className="divider"></div>
        </div>
        
        <div className="columns is-vcentered">
          <div className="column is-half">
            <p className="is-size-5 mb-4 has-text-white">
              Мы создаём рационы, которые не только полезны, но и невероятно вкусны. Наши блюда готовятся из свежих продуктов, доставляются прямо к вашей двери и помогают поддерживать энергию в течение всего дня.
            </p>
            <p className="is-size-5 has-text-white">
              Наша миссия — сделать здоровое питание доступным и удобным для каждого. Мы учитываем ваши предпочтения и цели: похудение, поддержание формы, набор мышечной массы или просто здоровая привычка.
            </p>
            
            <div className="mt-5">
              <div className="columns is-mobile">
                <div className="column">
                  <div className="has-text-centered">
                    <span className="icon is-large has-text-white"><i className="fas fa-heart fa-2x"></i></span>
                    <p className="has-text-white mt-2">Без ГМО</p>
                  </div>
                </div>
                <div className="column">
                  <div className="has-text-centered">
                    <span className="icon is-large has-text-white"><i className="fas fa-leaf fa-2x"></i></span>
                    <p className="has-text-white mt-2">Натурально</p>
                  </div>
                </div>
                <div className="column">
                  <div className="has-text-centered">
                    <span className="icon is-large has-text-white"><i className="fas fa-clock fa-2x"></i></span>
                    <p className="has-text-white mt-2">Свежее</p>
                  </div>
                </div>
                <div className="column">
                  <div className="has-text-centered">
                    <span className="icon is-large has-text-white"><i className="fas fa-truck fa-2x"></i></span>
                    <p className="has-text-white mt-2">Доставка</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="column is-half">
            <div className="card about-image-card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="https://images.apteka.ru/kak-sostavit-ratsion-dlya-zdorovogo-pitaniya-bez-zhstkikh-ogranicheniy_DetailPicture_-1922120651.webp" alt="Свежие продукты" />
                </figure>
              </div>
              <div className="card-content has-background-light">
                <div className="content has-text-centered">
                  <i className="fas fa-check-circle has-text-success mr-2"></i>
                  <span className="has-text-dark has-text-weight-bold">100% натуральные ингредиенты</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About