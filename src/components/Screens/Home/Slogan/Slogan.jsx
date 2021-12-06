import React from 'react'
import useStyles from './Style.js'
import slogan from './Slogan1.png'
const Slogan = () => {
    const classes=useStyles();
    return (
        <div class={classes.slogan}>
            <img src={slogan} alt="Slogan" className={classes.sloganImg}/>
            <div class={classes.slogan_text}>
                Tiệm Tranh Jelly
                <br/>
                Mua thì mua không mua thì mua
            </div>
           
        </div>
    )
}

export default Slogan
