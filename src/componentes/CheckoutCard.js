import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { red } from '@mui/material/colors';
import DeleteIcon from '@material-ui/icons/Delete'
import { actionTypes } from "../reducer";
import { useStateValue } from '../StateProvider'

import { AddShoppingCart, Delete, FormatAlignJustify } from '@material-ui/icons';
import accounting from 'accounting';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  cardRating: {
    display: "flex",
  },
}));

export default function CheckoutCard({
    product : {id, name, productType, image, price, rating, description}}) {
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] =useStateValue();
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id:id,
  })

  return (
    <Card className={classes.root}>
      <CardHeader
        
        action={
          <Typography
              className={classes.action}    
              variant='h5'
              color='textSecondary'
            >
              { accounting.formatMoney(price,'$') }
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardActions disableSpacing  className={classes.cardActions}>
        <div className={classes.cardRating}>
            {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>              
        <IconButton>
            <DeleteIcon fontSize='large' onClick={removeItem}/>
        </IconButton>

      </CardActions>


    </Card>
  );
}