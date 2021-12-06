import { Button } from '@material-ui/core'
import React from 'react'
import Styles from './Styles.js'


const oneProduct = () => {
    const classes = Styles()
    return (
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    <img className={classes.image} src='https://tranhsondauthaison.com.vn/wp-content/uploads/2020/12/tranh-hoa-hong-22-12-1.jpg'/>
                </div>
                <div className={classes.productInfor}>
                    <div className={classes.productInforItem}>Name: tranh hoa hồng</div>
                    <div className={classes.productInforItem}>Price: 300000</div>
                    <div className={classes.productInforItem}>Desc: tranh hoa hong</div>
                    <div className={classes.productInforItem}>Size: 15*30</div>
                </div>
                <Button className = {classes.btn} variant="contained" color="primary">
                     ADD to Cart
                 </Button>

            </div>
    )
}

export default oneProduct
