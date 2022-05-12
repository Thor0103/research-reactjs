import React from 'react';
import { Router, Link } from '@reach/router';
import Address from '../components/Address';
import Password from '../components/Password';
import { getCustomer, addCustomer } from '../services/api.service';

const SettingsPage = () => {
  const [customers, setCustomer] = React.useState([]);
  const [type, setType] = React.useState('');

  const addType = async () => {
    await addCustomer(type);
    const respone = await getCustomer();
    setCustomer(respone.data);
  };

  const onChangeType = (event) => {
    console.log('event: ', event.target.value);
    setType(event.target.value);
  };

  React.useEffect(() => {
    console.log('Type update: ', type);

  }, [type]);

  React.useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await getCustomer();
        setCustomer(response.data);
      } catch (err) {
        console.log('fetch customer failed with err: ', err);
      }
    };
    fetchCustomer();
  }, []);

  return (
    <div className="flex">
      <div className="text-left">
        <Link to="/settings/password">Home</Link> |{ ' ' }
        <Link to="/settings/address">Dashboard</Link>

        <table border="1" cellPadding={ 0 } cellSpacing={ 0 }>
          <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
          </tr>
          </thead>

          <tbody>
          {
            customers.map((element, index) => {
              return (
                <tr key={ index }>
                  <td>{ index }</td>
                  <td>{ element.TypeName }</td>
                  <td>{ element.Status }</td>
                </tr>
              );
            })
          }
          </tbody>
        </table>
        <br/>
        <div>
          <label>Type: </label>
          <input onChange={ onChangeType } value={ type } type="text"/>
          <button onClick={ addType } type="button">Add Type</button>
        </div>

      </div>
      <div>
        <Router>
          <Address path="/settings/address"/>
          <Password path="/settings/password"/>
        </Router>
      </div>
    </div>

  );
};

export default SettingsPage;