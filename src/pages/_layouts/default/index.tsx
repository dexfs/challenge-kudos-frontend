import React from 'react';
import Layout from '~/components/Layout';

interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return <Layout>{children}</Layout>;
}
