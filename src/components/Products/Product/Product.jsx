import { Typography } from '@material-ui/core';
import React from 'react'
import useStyle from './styles'

export const Product = (props) => {
    const classes = useStyle();
    return (
        <div className={classes.Container}>
           <img className={classes.image} src={props.product.image}/>
           <div className={classes.name}>{props.product.name}</div>
           <div className={classes.price}>{props.product.price}</div>
           <div className={classes.price}>Size: {props.product.size}</div>
        </div>
    )
}
export default Product;