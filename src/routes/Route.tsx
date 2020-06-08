import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '~/hooks/AuthContext';
import DefaultLayout from '~/pages/_layouts/default';

type RouteWrapperType = {
  isPrivate?: boolean;
  exact?: boolean;
  component: React.FC | React.ElementType;
  path: string;
};

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}: RouteWrapperType) {
  const { state, dispatch } = useContext<any>(AuthContext);

  const signed = state.isLoggedIn;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }
  const Layout = DefaultLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
