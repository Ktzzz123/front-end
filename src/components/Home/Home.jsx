import React from 'react'
import Products from '../Products/Products'
import Slogan from './Slogan/Slogan'
const Home = () => {
    return (
       <>  
        <Slogan/>
        <div className='home'>
                <Products/>
        </div>
       </>
    )
}
export default Home
