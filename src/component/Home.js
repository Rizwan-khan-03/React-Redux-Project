import React from 'react'
import image from '../img/iphon-img.jpg'
import cart from '../img/shopping-cart.png';
import '../App.css'
function Home(props) {
   console.warn('home.js data from homecontainer',props)
  console.warn('home.js data from homecontainer', props.data.cardItems.length)
  // const style = {
  //   position: 'absolute',
  //   right: '21px',
  //   top: '20px',
  //   width: '20px',
  //   borderRadius:'50%',
  //   backgroundColor: 'black',
  //   color:'white'
    
  // }
  return (
    <div className='main_container'>
           {/* <span style={style}>{props.data.cardItems.length }</span> */}
      <div className='wrapper'>
        <div className='wrapper_child'>
          <img className="img" src={image} alt='img'/>
        </div>
        <div className='wrapper_child'>
          <div className='wrapper_child_info'>
            <h3>iphone mobile</h3>
            <h5>price $10000</h5>
            <button onClick={() => { props.addToCartHandler({ price: 100, name: 'iphon' }) }}>Add to Cart</button>
            <div></div>
            <button onClick={()=>{props.removeToCartHandler({price:100,name:'iphon'})}}>Add to Cart</button>
          </div>
        </div>
      </div>
        {/* <div className='add_to_cart'>
          <img className="cart" src={cart} alt='img'/>
        </div> */}
    </div>
  )
}
export default Home;
