import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container:{
        // position: 'sticky ',
        left: 0,
        // bottom: 0,
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        display:'flex',
        paddingBottom:'30px'
        
    },
    ul:{
        listStyle: 'none',
        padding: 0,
    },
    footer_introduce:{
        width: '40%',
        marginLeft: '50px',
    },
    introduceText:{
        marginTop: 0,
        fontSize: '14px',
    },
    
    footer_contact:{
        display: 'flex',
        textAlign: 'left',
        paddingLeft: '20px',
    
    },
    contact_name:{
        width: '150px',
        fontSize: '15px',
        padding: '0 0px 5px 0px',
        textAlign: 'left',
        marginLeft: 0,
        marginBottom: 0,
        fontWeight: 'bold',
    },
    footer_contact__contact:{
        width: '50px',
    },
    contact_name_item:{
        margin: 0,
        alignContent:'flex-start',
        listStyle: 'none',
        width: '50%',
    },
    
    h5:{
        alignContent:'flex-start',
        padding: 0,
    }

}))
