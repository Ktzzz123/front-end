import React from 'react'
import useStyles from './Styles'
import { Grid } from '@material-ui/core'

// ---------
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = () => {
    const classes=useStyles();
    return (
        <div className={classes.header}>
            
            <div className={classes.NavbarList}>
              
                {/* <img className = {classes.Navbar__logo} src={logo} alt="text"/> */}
                <div className={classes.Navbar__listItem_home} >JELLY'S WEBSITE</div>
                
                <div className={classes.Navbar__listItem}>Tranh</div>
               
            </div>
            <div className={classes.search}>
                    <input className = {classes.searchInput}type='text'></input>
                    <SearchIcon className={classes.searchIcon}/>
                    
                </div>
            <div className={classes.NavbarList}>
            <div className={classes.Navbar__listItem}>Log in</div>
            <div className={classes.Navbar__listItem}>Giỏ hàng
            <ShoppingCartIcon/>
            </div>
            </div>
        </div>
    )
}

export default Navbar
