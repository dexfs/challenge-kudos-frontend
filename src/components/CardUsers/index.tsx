import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import User from '~/components/User';
import { IUsers } from '~/interfaces/users';

const useGridUsersStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginTop: 20,
    },
    gridList: {
      width: 500,
      height: 500,
    },
  })
);

const CardUsers = ({ users }: IUsers) => {
  const classes = useGridUsersStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={250}
        className={classes.gridList}
        cols={4}
        spacing={0}
      >
        {users.map((user, k) => (
          <GridListTile key={k} cols={1}>
            <User user={user} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default CardUsers;
