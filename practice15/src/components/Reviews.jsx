import avatar1 from '../assets/avatar/1.avif'
import avatar2 from '../assets/avatar/2.avif'

function Reviews() {
  return (
    <section id="reviews" className="section py-6" style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)' }}>
      <div className="container">
        <div className="section-header has-text-centered mb-6">
          <h2 className="title is-2 has-text-white mt-3">Отзывы наших клиентов</h2>
          <div className="divider" style={{ height: '3px', width: '60px', background: '#48c78e', margin: '1.25rem auto', borderRadius: '3px' }}></div>
        </div>
        
        <div className="columns is-multiline">
          <div className="column is-6">
            <div className="box p-5" style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img className="is-rounded" src={avatar1} alt="Мария" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-5 has-text-white mb-0" style={{ color: 'white' }}>Мария</p>
                  <p className="subtitle is-6 has-text-white" style={{ color: '#ccc' }}>@maria_health</p>
                </div>
              </div>
              <p className="mt-4 has-text-white" style={{ color: 'white', fontSize: '1.1rem' }}>"За месяц на FreshFood сбросила 4 кг без стресса! Очень вкусно и удобно."</p>
            </div>
          </div>
          
          <div className="column is-6">
            <div className="box p-5" style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img className="is-rounded" src={avatar2} alt="Алексей" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-5 has-text-white mb-0" style={{ color: 'white' }}>Алексей</p>
                  <p className="subtitle is-6 has-text-white" style={{ color: '#ccc' }}>@alex_fit</p>
                </div>
              </div>
              <p className="mt-4 has-text-white" style={{ color: 'white', fontSize: '1.1rem' }}>"Пользуюсь 3 месяца. Энергии стало больше, пропала тяжесть после еды."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews