function Advantages() {
  return (
    <section id="advantages" className="section py-6 has-background-light">
      <div className="container">
        <div className="section-header has-text-centered mb-6">
          <h2 className="title is-2 has-text-dark mt-3">Преимущества</h2>
          <div className="divider" style={{ height: '3px', width: '60px', background: '#48c78e', margin: '1.25rem auto', borderRadius: '3px' }}></div>
        </div>
        
        <div className="columns is-multiline">
          <div className="column is-4">
            <div className="box has-text-centered p-5 advantage-card" style={{ height: '100%', borderTop: '4px solid #48c78e', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="icon-wrapper mb-4">
                <i className="fas fa-seedling fa-3x has-text-success"></i>
              </div>
              <h3 className="title is-4 mb-3 has-text-dark">Натуральные продукты</h3>
              <p className="has-text-dark">Только свежие овощи, фрукты, мясо и рыба от проверенных поставщиков.</p>
            </div>
          </div>
          
          <div className="column is-4">
            <div className="box has-text-centered p-5 advantage-card" style={{ height: '100%', borderTop: '4px solid #48c78e', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="icon-wrapper mb-4">
                <i className="fas fa-clock fa-3x has-text-success"></i>
              </div>
              <h3 className="title is-4 mb-3 has-text-dark">Экономия времени</h3>
              <p className="has-text-dark">Не нужно готовить и считать калории. Всё уже продумано за вас.</p>
            </div>
          </div>
          
          <div className="column is-4">
            <div className="box has-text-centered p-5 advantage-card" style={{ height: '100%', borderTop: '4px solid #48c78e', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="icon-wrapper mb-4">
                <i className="fas fa-heartbeat fa-3x has-text-success"></i>
              </div>
              <h3 className="title is-4 mb-3 has-text-dark">Здоровье и энергия</h3>
              <p className="has-text-dark">Сбалансированный рацион улучшает самочувствие и повышает продуктивность.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages