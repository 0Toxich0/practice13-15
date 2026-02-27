function About() {
  return (
    <section id="about" className="section py-6" style={{ 
      background: '#2c5a3a',  // Тёмно-зелёный однородный фон
      color: 'white' 
    }}>
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-2 has-text-white mt-3">Почему FreshFood?</h2>
          <div className="divider" style={{ height: '3px', width: '60px', background: '#48c78e', margin: '1.25rem auto', borderRadius: '3px' }}></div>
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
            <div className="box" style={{ 
              background: 'rgba(255,255,255,0.15)', 
              borderRadius: '12px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div className="content has-text-centered">
                <i className="fas fa-check-circle has-text-success fa-3x mb-3"></i>
                <h3 className="title is-3 has-text-white">100%</h3>
                <p className="has-text-white is-size-5">натуральные ингредиенты</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About