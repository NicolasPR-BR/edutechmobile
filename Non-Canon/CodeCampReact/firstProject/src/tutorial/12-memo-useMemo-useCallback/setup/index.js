import React, { useState, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) =>{
  return data.reduce((total,item)=>{ //reduce goes through each item and does something
    const price = item.fields.price;
    if(price >= total){
      total = price;
    }
    return total;
  },0)/100
}

//Main entry point
const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const mostExpensive = useMemo(()=> calculateMostExpensive(products),[products]) //use memo is only called whenever products change
 

  const addToCart = useCallback(() =>{
    setCart(cart + 1);
    console.log('clicked');
  },[cart])

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1>Cart: {cart}</h1>
      <h1>Most expensive item: ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart}/>
    </>
  )
}

const BigList = React.memo(({ products, addToCart }) => { //react memo prevents rerendering unless products is changed, or something inside it changes
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct addToCart={addToCart} key={product.id} {...product}></SingleProduct>
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url


  return (
    <article onClick={addToCart} className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart} className="btn">Buy me</button>
    </article>
  )
}
export default Index;
