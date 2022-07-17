import React from 'react'
import image from '../img/iphon-img.jpg'
import cart from '../img/shopping-cart.png';
import '../App.css'
function Header(props) {
   console.warn('Header.js data from Header comonent',props)
  console.warn('Header.js data from Header comonent', props.data.cardItems.length)
  const style = {
    position: 'absolute',
    right: '21px',
    top: '20px',
    width: '20px',
    borderRadius:'50%',
    backgroundColor: 'black',
    color:'white'
    
  }
  return (
    <div className='main_container_header'>
      <span style={style}>{props.data.cardItems.length}</span>
        <div className='add_to_cart'>
          <img className="cart" src={cart} alt='img'/>
        </div> 
    </div>
  )
}
export default Header;
