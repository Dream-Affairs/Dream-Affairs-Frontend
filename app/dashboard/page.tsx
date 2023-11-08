'use client';
import React from 'react';
import withAuth from '../auth/(helpers)/withAuth';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section>
      <p>Dashboard</p>
    </section>
  );
};

export default withAuth(Dashboard);
