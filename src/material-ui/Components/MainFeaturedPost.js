import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {

    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
        [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      height: '40vh',

    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
      height: '10vh',
    },

  },
  overlay: {

    backgroundColor: 'rgba(0,0,0,.3)',

  },
  primaryTyphography:
  {
    padding: theme.spacing(2),

  },
  mainFeaturedPostContent: {
    justifyContent: 'center',
  },
  button:
  {
    marginBottom: theme.spacing(2),
  }

}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;
  const CustomLink = props => <Link to={"/Hakkinda"} {...props}></Link>;

   
  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Grid container justify='left' className={classes.mainFeaturedPostContent}>
        <div className={classes.overlay}>
          <Typography className={classes.primaryTyphography} align="center" color="inherit" gutterBottom>
            {post.title}
          </Typography>
          <Typography className={classes.secondaryTyphography} align="center" color="inherit" paragraph>
            {post.description}
          </Typography>
          {
            post.btnName === '' ? null :
              <Typography align="center">
                <Button
                  component={CustomLink}
                  color="inherit"
                  name={post.btnUrl}
                  key={"Klubumuz"}
                  variant="outlined"
                  className={classes.button}
                  
                >
                  {post.btnName}
                </Button>
              </Typography>
          }
        </div>
      </Grid>
    </Paper>
  );
};


MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
