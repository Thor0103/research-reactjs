import clientApi from '../api';

export const getCustomer = () => {
  return clientApi.get('/product-type');
};

export const addCustomer = (type) => {
  return clientApi.post('/add-react', {type});
};




