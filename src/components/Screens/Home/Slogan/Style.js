import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    slogan:{
        position:'relative',
        width: '100%',
        height: '250px',
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundSize: 'auto', 
    },
    slogan_text:{
        color: 'white',
        fontSize: '80px',
        textAlign: 'center',
        fontWeight: 'thin',
        fontStyle: 'italic',
        webkitTextStrokeWidth: '0.5px',
        webkitTextStrokeColor: 'black',
        position:'absolute',
    },
    sloganImg:{
        position:'absolute',
        width: '100%',
        height: '250px',
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundSize: 'auto',
    }
}));