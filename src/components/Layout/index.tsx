// import React from 'react';
// import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Header from '~/components/Header';
// import Footer from '~/components/Footer';
// import { Grid } from '@material-ui/core';

// const useStyles = makeStyles({
//   root: {
//     margin: '0 25px',
//   },
// });

// interface Props {
//   children: React.ReactNode;
// }

// export default function Layout({ children }: Props) {
//   const classes = useStyles();
//   return (
//     <Container maxWidth="xl" disableGutters>
//       <Header />
//       <Box maxWidth="960px" display="flex">
//         {children}
//       </Box>
//       <Footer />
//     </Container>
//   );
// }
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Header from '~/components/Header';

function FootLinks() {
  return (
    <Typography variant="body2" color="textSecondary">
      Links Rápidos
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function Layout({ children }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="lg">
        {children}
      </Container>
      <footer className={classes.footer}>
        <Container>
          <FootLinks />
        </Container>
      </footer>
    </div>
  );
}
