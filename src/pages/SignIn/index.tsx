import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { GithubLoginButton } from 'react-social-login-buttons';
import { AuthContext } from '~/hooks/AuthContext';
import axios from 'axios';

export default function SignIn() {
  const { state, dispatch } = useContext<any>(AuthContext);
  const [data, setData] = useState({ errorMessage: '', isLoading: false });
  const { client_id, redirect_uri } = state;

  const handleLoginGithub = () => {
    setData({ ...data, errorMessage: '' });
    window.location.href = `https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`;
    // window.location.href = `https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=http://localhost:3000/login`;
  };

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes('?code=');

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split('?code=');
      window.history.pushState({}, '', newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        client_id: state.client_id,
        redirect_uri: state.redirect_uri,
        client_secret: state.client_secret,
        code: newUrl[1],
      };

      const proxy_url = state.proxy_url;

      // Use code parameter and other parameters to make POST request to proxy_server
      axios
        .post(proxy_url, requestData)
        .then((response) => response.data)
        .then((data) => {
          console.log('FRONT', { data });
          dispatch({
            type: 'LOGIN',
            payload: { user: data, isLoggedIn: true },
          });
        })
        .catch((error) => {
          console.log('FRONT', { error });
          setData({
            isLoading: false,
            errorMessage: 'Sorry! Login failed',
          });
        });
    }
  }, [state, dispatch, data]);

  if (state.isLoggedIn) {
    return <Redirect to="/" />;
  }
  if (data.isLoading) return <h1>Loading!</h1>;

  return (
    <Grid container justify="center">
      <Grid item>
        <GithubLoginButton onClick={handleLoginGithub}></GithubLoginButton>
      </Grid>
    </Grid>
  );
}
