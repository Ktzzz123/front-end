import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header:{
    height: '50px' ,
    // backgroundImage: 'linear-gradient(0,rgb(56, 99, 163),rgb(33, 44, 61))',
    // backgroundColor:'rgb(56 99 164 / 1)',
    backgroundColor:'black',
    display: 'flex',
    justifyContent:'space-between',
    position:'sticky',
    top:0,
    zIndex:100,
    margin:'auto',
    alignItems:'center'
  },
  Navbar__listItem_home:{
 // position: 'absolute',
 display: 'inline-block',
 fontSize: '20px',
 color: 'white',
 /* margin: 0 10px; */
 // position: 'relative',
 fontWeight: 'bold',
 margin:'auto',
 padding: '0 20px 0 20px'
  },
  header__navList:{
    // position: 'relative',
      listStyle: 'none',
      paddingLeft: 0,
      display:'flex',
      margin:'auto'
  },
  Navbar__logo:{
    width: '30px',
    height:'30px',
    borderRadius:"20px",
    margin:'auto',
  },
  Navbar__Home:{
    display:'flex',
    margin:'auto'

  },
  Navbar__listItem:{
    // position: 'absolute',
      // display: 'inline-block',
      fontSize: '20px',
      color: 'white',
      /* margin: 0 10px; */
      // position: 'relative',
      // fontWeight: 'bold',
      margin:'auto',
      padding: '0 20px 0 20px',
      display:'flex'
  },
  search:{
      display:'flex',
      flex:1,
      margin:'auto',
      height:'30px !important',
      
  },
  searchIcon:{
    color:'white',
    // border:'solid 0.1rem',
    borderRadius:'5px'
  },
  searchInput:{width:'500px'},

  NavbarList:{
    display:'flex',
    // flexDirection:'column',
    marginLeft:'10px',
    marginRight:'10px'
    
  },
  button :{
    border: 'none',
    color: 'white',
    padding: '13px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    /* float: left, */
    marginTop: '-15px',
  },
  hover: {
    "&:hover":{
    backgroundColor: 'rgb(175, 175, 175)',
    color: 'black'}
  }
}));
