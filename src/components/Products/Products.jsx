import React from 'react'
import Product from './Product/Product'
import  {Grid}  from '@material-ui/core'
// import { Grid3x3 } from '@mui/icons-material'
import data from '../../data'
import useStyle from './styles'

const Products = () => {
    const classes = useStyle();
    return (
        <div className={classes.Container}>
             <main>
        
        <Grid container justify='center' spacing={4}>
        {data.products.map((product)=>(
            
            <Grid item key={product.id} >
                <a href={`/product/${product.id}`}/>
                <Product product={product}/>
            </Grid>
        ))}

        </Grid>
    </main>
        </div>
       
     
    )
}

export default Products
