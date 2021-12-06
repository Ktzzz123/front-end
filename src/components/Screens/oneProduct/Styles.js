import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container:{
        backgroundColor:'white',
        margin:'auto',
        width:'85%',
        minHeight:'auto',
        paddingTop:'10px',
        // display:'flex',
        paddingBottom:'10px'
        
    },
  
    imageContainer:{
        // position: 'relative',
        // backgroundColor:'grey',
        // margin: 'auto',
        maxHeight:'500px',
        alignItems:'center',
        paddingLeft:'50px'
    } ,
     image:{
        // position: 'absolute',
        width: 'auto',
        height: '500px',
        overflow: 'hidden',
        // margin:'auto',
        paddingBottom:'10px'

    },
    productInfor:{
        // backgroundColor:'grey',
        // paddingTop:'10px',
        fontSize:'30px',
        // border:'solid 1px'
    },
    productInforItem:{
        padding:'10px',

    },
   
}))