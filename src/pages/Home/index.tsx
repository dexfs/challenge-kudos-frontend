import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { PacmanLoader } from 'react-spinners';

import CardUsers from '~/components/CardUsers';
import KudosLoggedUser from '~/components/KudosLoggedUser';

import api from '~/services/api';

import { IUser } from '~/interfaces/users';

const useStyles = makeStyles({
  container: {
    marginTop: 40,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

const Home: React.FC = (props) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    function loadUsers() {
      api.get<AxiosResponse>('/users/all').then((response) => {
        setUsers(response.data.data);
        setLoading(false);
      });
    }

    loadUsers();
  }, []);
  if (loading) return <PacmanLoader />;
  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Dê um Kudo!
      </Typography>
      <KudosLoggedUser />

      <CardUsers users={users} />
    </div>
  );
};

export default Home;
