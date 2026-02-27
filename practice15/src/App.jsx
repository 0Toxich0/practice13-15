import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Advantages from './components/Advantages'
import MenuManager from './components/MenuManager'
import Reviews from './components/Reviews'
import Order from './components/Order'
import Footer from './components/Footer'

function App() {
  const [menuItems, setMenuItems] = useState(() => {
    const saved = localStorage.getItem('freshfood-menu')
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        name: 'Лёгкий',
        description: '1500 ккал в день. Идеально для похудения и детокса.',
        price: 1200,
        image: 'https://optim.tildacdn.com/stor6632-3138-4534-b765-326636336138/-/format/webp/11023158.jpg',
        category: 'Лёгкий'
      },
      {
        id: 2,
        name: 'Стандартный',
        description: '2000 ккал в день. Сбалансированное питание для поддержания формы.',
        price: 1500,
        image: 'https://static.tildacdn.com/stor3861-6230-4333-b434-363137393833/53858849.jpg',
        category: 'Стандартный'
      },
      {
        id: 3,
        name: 'Силовой',
        description: '2500 ккал в день. Для спортсменов и активного образа жизни.',
        price: 1800,
        image: 'https://optim.tildacdn.com/stor3833-3932-4365-a135-336237373362/-/format/webp/82643418.jpg',
        category: 'Силовой'
      }
    ]
  })

  useEffect(() => {
    localStorage.setItem('freshfood-menu', JSON.stringify(menuItems))
  }, [menuItems])

  const addMenuItem = (newItem) => {
    setMenuItems([...menuItems, { ...newItem, id: Date.now() }])
  }

  const deleteMenuItem = (id) => {
    if (window.confirm('Удалить позицию из меню?')) {
      setMenuItems(menuItems.filter(item => item.id !== id))
    }
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Advantages />
      <MenuManager 
        menuItems={menuItems} 
        onAdd={addMenuItem} 
        onDelete={deleteMenuItem}
      />
      <Reviews />
      <Order />
      <Footer />
    </>
  )
}

export default App