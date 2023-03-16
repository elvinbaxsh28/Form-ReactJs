import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import UserForm from '../components/UserForm';



const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const ShoppingCart = () => {
  const [items, setItems] = useLocalStorage('cart', []);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [color, setColor] = useState('#ccc')
  

  const addItem = () => {
    setItems([...items, { name, price, quantity }]);
    setName('');
    setPrice(0);
    setQuantity(1);
    setColor(color);
  };

  const editItem = (index) => {
    const newItems = [...items];
    newItems[index] = { name, price, quantity };
    setItems(newItems);
    setName('');
    setPrice(0);
    setQuantity(1);
    setColor(color);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const increaseQuantity = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  const decreaseQuantity = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
      setItems(newItems);
    }
  };

  const totalPrice = items.reduce(
    (accumulator, currentItem) => accumulator + currentItem.price * currentItem.quantity,
    0
  );

  return (
    <div>
        <UserForm color={color}/>
      <h1>Shopping Cart</h1>
      <div>
        <input type="text" value={name} style={{ color }} onChange={(e) => setName(e.target.value)} />
        <input type="number" value={price} style={{ color }} onChange={(e) => setPrice(Number(e.target.value))} />
        <input type="number" value={quantity} style={{ color }} onChange={(e) => setQuantity(Number(e.target.value))} />
        <input type="color" value={color} style={{ color }} onChange={(e) => setColor(e.target.value)} />
        <button onClick={addItem}>Add Item</button>
      </div>
      <table >
        <thead >
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
          {items.map((item, index) => (
            <tr key={index}>
              <td style={{ color }}>{item.name} {item.name}</td>
              <td style={{ color }}>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => decreaseQuantity(index)}>-</button>
               <span style={{ color }}> {item.quantity}</span>
                <button onClick={() => increaseQuantity(index)}>+</button>
              </td>
              <td>
                <button onClick={() => editItem(index)}>Edit</button>
                <button onClick={() => removeItem(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
      </div>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <div>
        <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
    </div>
    </div>
  );
};

export default ShoppingCart;
