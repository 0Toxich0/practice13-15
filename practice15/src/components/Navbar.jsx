import { useState } from 'react'

function Navbar() {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/practice13-16/practice15/">
            <i className="fas fa-leaf fa-lg has-text-success"></i>
            <span className="ml-2 has-text-weight-bold">FreshFood</span>
          </a>
          <a 
            role="button" 
            className={`navbar-burger ${isActive ? 'is-active' : ''}`} 
            aria-label="menu" 
            aria-expanded="false"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a className="navbar-item active-page" href="/practice13-16/practice15/">Главная</a>
            <a className="navbar-item" href="#about">О нас</a>
            <a className="navbar-item" href="#menu">Меню</a>
            <a className="navbar-item" href="#add">Добавить</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar