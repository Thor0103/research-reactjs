import React from 'react';

const Study = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [product, setPro] = React.useState([]);

  console.log('Name product: ', name);
  console.log('Price product: ', price);

  const handleSubmit = () => {
    setPro([...product, {
      name: name,
      price: +price
    }]);

  };

  return (
    <div style={ {margin: '100px 100px'} }>
      <input onChange={ e => setName(e.target.value) } type="text"/>
      <br/>
      <input onChange={ event => setName(event.target.value) } type="text"/>
      <br/>
      <button onClick={handleSubmit}>Add</button>
      <br/>
      <ul>
        { product.map((element, index) => (
          <li key={ index }>{ element.name }-{ element.price }</li>
        )) }
      </ul>
    </div>
  );
};


export default Study;
