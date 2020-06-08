import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Footer() {
  return (
    <Grid container>
      <Grid item container>
        <Typography>Links rápidos</Typography>
        <>
          <Link href="#">Sobre</Link>
          <Link href="#">Nosso Blog</Link>
          <Link href="#">FAQ</Link>
        </>
      </Grid>
    </Grid>
  );
}
