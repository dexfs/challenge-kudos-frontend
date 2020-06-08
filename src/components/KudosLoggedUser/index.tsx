import React, { useContext, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { AuthContext } from '~/hooks/AuthContext';
import { AxiosResponse } from 'axios';
import { PacmanLoader } from 'react-spinners';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import api from '~/services/api';

const useKudoStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  })
);

const KudosLoggedUser = () => {
  const classes = useKudoStyles();
  const { state, dispatch } = useContext<any>(AuthContext);
  const [expanded, setExpanded] = React.useState(false);
  const [loading, setLoading] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    function loadLoggedUser() {
      api
        .post<AxiosResponse>('/me')
        .then((response) => response.data)
        .then((data) => {
          console.log('ME', { data });

          dispatch({
            type: 'ME',
            payload: { me: data.data },
          });
          setLoading(false);
        });
    }
    loadLoggedUser();
  }, []);

  if (loading) return <></>;
  console.log({ state });
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title="Selos disponíveis"
        subheader="Atualizado em 01/04/2020"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {state.me.userKudos.map((kudo: any, key: any) => (
            <p key={key}>
              <Chip
                avatar={<Avatar>{kudo.quantity}</Avatar>}
                label={kudo.kudo_name}
                clickable
                color="secondary"
              />
            </p>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default KudosLoggedUser;
