import * as React from 'react';
import Layout from '../components/Layout';
import Input from '../components/Input';

const IndexPage = () => {

  return (
    <Layout>
      <div>
        <Input lablename='User Name' type='text' name='username' />
        <Input lablename='First Name' type='text' name='firstname' />
        <Input lablename='Email' type='eamil' name='email' />
        <Input lablename='Birthday' type='date' name='brithdar' />
      </div>
    </Layout>
  );
};

export default IndexPage;
