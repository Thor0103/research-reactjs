import * as React from 'react';
import HelloWord from '../components/HelloWord';
import Layout from '../components/Layout';

const usePage = () => {
  return (
    <Layout>
      <h1>user page</h1>
      <HelloWord>
        <p>Khang</p>
      </HelloWord>
    </Layout>
  );
};

export default usePage;