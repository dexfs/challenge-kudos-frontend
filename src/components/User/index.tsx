import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 200,
    objectFit: 'cover',
  },
});

interface IUser {
  id: string;
  login: string;
  avatar_url: string;
  github_profile: string;
  name: string;
  kudo_id: string;
  comment: string;
}

export default function User({ user }: { user: IUser }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          image={user.avatar_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
