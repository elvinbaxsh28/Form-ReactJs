import './App.css';
// import CardGenerator from './components/CardGenerator';
import UserForm from './components/UserForm';
import ShoppingCart from './components/ShoppingCart';
import MyComponent from './components/MyComponent';





function App() {
  return (
    <div className="App container-fluid">
      {/* <CardGenerator/> */}
      {/* <InputComponent/> */}
      {/* <UserForm/> */}
      <MyComponent/>


    </div>
  );
}

export default App;



// import { useState } from "react";
// import { Card } from "react-bootstrap";

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     const lastChar = value.charAt(value.length - 1);
//     // 12-dən böyük rəqəmlər yazıldıqda inputu təmizləyirik
//     if (parseInt(lastChar) > 12) {
//       setInputValue("");
//     } else {
//       setInputValue(value);
//     }
//   };

//   const renderCards = () => {
//     const cards = [];
//     // inputValue-dəki hər bir rəqəm üçün yeni bir card yaradırıq
//     for (let i = 0; i < inputValue.length; i++) {
//       const cardTitle = `Card ${i + 1}`;
//       cards.push(
//         <Card key={i} className="m-3">
//           <Card.Body>
//             <Card.Title>{cardTitle}</Card.Title>
//             <Card.Text>Some quick example text to build on the card.</Card.Text>
//           </Card.Body>
//         </Card>
//       );
//     }
//     return cards;
//   };

//   return (
//     <div>
//       <input value={inputValue} onChange={handleInputChange} />
//       <div className="d-flex flex-wrap">{renderCards()}</div>
//     </div>
//   );
// }

// export default App;
