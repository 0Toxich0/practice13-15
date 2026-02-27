function Reviews() {
  return (
    <section id="reviews" className="section py-6" style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)' }}>
      <div className="container">
        <div className="section-header has-text-centered mb-6">
          <h2 className="title is-2 has-text-white mt-3">Отзывы наших клиентов</h2>
          <div className="divider" style={{ height: '3px', width: '60px', background: '#48c78e', margin: '1.25rem auto' }}></div>
        </div>
        
        <div className="columns is-multiline">
          <div className="column is-6">
            <div className="box p-5" style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white' }}>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img className="is-rounded" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Мария" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-5 has-text-white">Мария</p>
                  <p className="subtitle is-6 has-text-white">@maria_health</p>
                </div>
              </div>
              <p className="mt-4 has-text-white">"За месяц на FreshFood сбросила 4 кг без стресса! Очень вкусно и удобно."</p>
            </div>
          </div>
          
          <div className="column is-6">
            <div className="box p-5" style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white' }}>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img className="is-rounded" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Алексей" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-5 has-text-white">Алексей</p>
                  <p className="subtitle is-6 has-text-white">@alex_fit</p>
                </div>
              </div>
              <p className="mt-4 has-text-white">"Пользуюсь 3 месяца. Энергии стало больше, пропала тяжесть после еды."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews