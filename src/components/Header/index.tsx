import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import logo from '~/assets/images/logo.png';
import Avatar from '@material-ui/core/Avatar';
import { AuthContext } from '~/hooks/AuthContext';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  userInfo: {
    marginLeft: 'auto',
  },
  links: {
    fontWeight: 'bold',
  },
  textPadding: {
    paddingTop: 10,
    paddingBottom: 10,
    margin: '0 10px',
    color: '#35393',
  },
}));

const MenuLinks = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="flex-end" spacing={1}>
      <Grid item>
        <Link href="#" color="inherit" className={classes.links}>
          Dê um kudo
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" color="inherit" className={classes.links}>
          Timeline
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" color="inherit" className={classes.links}>
          Meus kudos
        </Link>
      </Grid>
    </Grid>
  );
};

export default function Header() {
  const { state, dispatch } = useContext<any>(AuthContext);
  const classes = useStyles();
  // const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar disableGutters>
        <div>
          <img src={logo} alt="log" />
        </div>
        <Divider
          orientation="vertical"
          light
          classes={{ root: classes.textPadding }}
        />

        {state.isLoggedIn && <MenuLinks />}
        {state.isLoggedIn && (
          <div className={classes.userInfo}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt={state?.me?.name} src={state?.me?.avatar_url} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
