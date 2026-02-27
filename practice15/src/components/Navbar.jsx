import { useState, useEffect } from 'react'

function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const [activeItem, setActiveItem] = useState('Главная')

  // Обновляем активный пункт при прокрутке
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'about', name: 'О нас' },
        { id: 'menu', name: 'Меню' },
        { id: 'reviews', name: 'Отзывы' },
        { id: 'order', name: 'Заказать' }
      ]
      
      // Проверяем, находимся ли мы вверху страницы (главная)
      if (window.scrollY < 100) {
        setActiveItem('Главная')
        return
      }
      
      // Иначе проверяем секции
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveItem(section.name)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (itemName) => {
    setActiveItem(itemName)
    // Закрываем бургер-меню после клика
    setIsActive(false)
  }

  return (
    <nav className="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/practice13-16/practice15/" onClick={() => handleNavClick('Главная')}>
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
            <a 
              className={`navbar-item ${activeItem === 'Главная' ? 'active-page' : ''}`} 
              href="/practice13-16/practice15/"
              onClick={() => handleNavClick('Главная')}
            >
              Главная
            </a>
            <a 
              className={`navbar-item ${activeItem === 'О нас' ? 'active-page' : ''}`} 
              href="#about"
              onClick={() => handleNavClick('О нас')}
            >
              О нас
            </a>
            <a 
              className={`navbar-item ${activeItem === 'Меню' ? 'active-page' : ''}`} 
              href="#menu"
              onClick={() => handleNavClick('Меню')}
            >
              Меню
            </a>
            <a 
              className={`navbar-item ${activeItem === 'Отзывы' ? 'active-page' : ''}`} 
              href="#reviews"
              onClick={() => handleNavClick('Отзывы')}
            >
              Отзывы
            </a>
            <a 
              className="navbar-item" 
              href="#order"
              onClick={() => {
                handleNavClick('Заказать')
              }}
            >
              <span className="button is-success is-rounded is-small">Заказать</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar