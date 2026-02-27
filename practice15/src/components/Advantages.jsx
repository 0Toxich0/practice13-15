function Advantages() {
  return (
    <section id="advantages" className="section py-6 has-background-light">
      <div className="container">
        <div className="section-header has-text-centered mb-6">
          <h2 className="title is-2 has-text-dark mt-3">Преимущества</h2>
          <div className="divider"></div>
        </div>
        
        <div className="columns is-multiline">
          <div className="column is-4">
            <div className="box has-text-centered p-5 advantage-card">
              <div className="icon-wrapper mb-4">
                <i className="fas fa-seedling fa-3x has-text-success"></i>
              </div>
              <h3 className="title is-4 mb-3">Натуральные продукты</h3>
              <p>Только свежие овощи, фрукты, мясо и рыба от проверенных поставщиков.</p>
            </div>
          </div>
          
          <div className="column is-4">
            <div className="box has-text-centered p-5 advantage-card">
              <div className="icon-wrapper mb-4">
                <i className="fas fa-clock fa-3x has-text-success"></i>
              </div>
              <h3 className="title is-4 mb-3">Экономия времени</h3>
              <p>Не нужно готовить и считать калории. Всё уже продумано за вас.</p>
            </div>
          </div>
          
          <div className="column is-4">
            <div className="box has-text-centered p-5 advantage-card">
              <div className="icon-wrapper mb-4">
                <i className="fas fa-heartbeat fa-3x has-text-success"></i>
              </div>
              <h3 className="title is-4 mb-3">Здоровье и энергия</h3>
              <p>Сбалансированный рацион улучшает самочувствие и повышает продуктивность.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages