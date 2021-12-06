import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Container:{
        padding: '30px 30px',
        backgroundColor: 'grey',
        maxWidth: '300px'
    },
    image:{
        position: 'relative',
        width: '100%',
        height: '310px',
        overflow: 'hidden',
    },
    name:{
        fontSize: '1.2rem',
        fontFamily: '"Poppins", sans-serif',
    }
}));