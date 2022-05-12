import * as React from 'react';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Avatar from '../components/Avatar';
import Img1 from '../assets/images/avata1.jpg';

const IndexPage = () => {

  return (
    <Layout>
      <div>
        <Input lablename="User Name" type="text" name="username"/>
        <Input lablename="First Name" type="text" name="firstname"/>
        <Input lablename="Email" type="eamil" name="email"/>
        <Input lablename="Birthday" type="date" name="brithdar"/>
      </div>
      <Avatar src={ Img1 }/>
    </Layout>
  );
};

export default IndexPage;
