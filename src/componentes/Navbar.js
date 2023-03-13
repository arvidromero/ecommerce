import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Badge,  CssBaseline } from "@material-ui/core";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../assets/cuttevents.png"
import { ShoppingCart } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider'
import { actionTypes } from "../reducer";
import { auth } from "../firebase";
import {signOut} from 'firebase/auth'
import { useNavigate } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "7rem",
    },
    appBar: {
      backgroundColor: "whitesmoke",
      boxShadow: "none",
    },
    grow: {
      flexGrow: 1,
    },
    button: {
      marginLeft: theme.spacing(2),
    },
    image: {
      marginRight: "10px",
      height : "2rem",
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [{basket, user}, dispatch] =useStateValue();
    const navigate = useNavigate();

    const handleAuth = () => {
      if (user) {
        auth.signOut();
        dispatch({
          type: actionTypes.EMPTY_BASKET,
          basket: [],
        });
        navigate('/')
      }
    };

  return (
    <AppBar position='relative' color="inherit" className={classes.appBar}>
      <Toolbar>
        <Link to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label='menu'>
                <img src={logo} className={classes.image}/> 
          </IconButton>
        </Link>
        

        <div className={classes.grow} />

        <Typography variant="h6" color="textPrimary" component="p" >
          Hola {user ? user.email : " invitado" }
        </Typography>
        <div className={classes.button}>
        <Link to= "signin">
          <Button onClick={handleAuth} color="inherit" variant="outlined">
              <strong>{ user ? "Sign Out" : "Sign In" }</strong>
          </Button>
        </Link>

          <Link to= "checkout-page">
            <IconButton aria-label="show cart items" color="inherit" >
              <Badge badgeContent={basket?.length} color="secondary">
                <ShoppingCart fontSize='large' color="primary"  /> 
              </Badge>
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
