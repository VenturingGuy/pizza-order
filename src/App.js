import './App.css';
import { useState } from "react";


const PIZZA_TOPPINGS = ['Pepperoni', 'Sausage', 'Peppers', 'Onions', 'Pineapple']

function App() {
  const [name, setName] = useState('')
  const [toppings, setToppings] = useState(PIZZA_TOPPINGS.map(() => false))
  // Define list of toppings
  // Make function to output individual inputs
    // checkmark input type, name, checked or not?
    // call function on check
  const ToppingCheckbox = (props) => {
    const {name, label, toppingChange, index} = props
    return (
        <label>
            <input
                type="checkbox"
                name={name}
                checked={toppings[index]}
                onChange={toppingChange}
            />
        {label}</label>
    )}
  // Make function to render input component
    // name and checkmark
  const renderToppingCheckbox = (name, label, toppingChange, indexer) => (
      <ToppingCheckbox
          name={name}
          label={label}
          toppingChange={toppingChange}
          index={indexer}
      />
  )
  // Make function to render an input component for every topping defined in the list
  const ToppingCheckboxes = PIZZA_TOPPINGS.map((_, index) => {
      const name="topping"
      const label=`${PIZZA_TOPPINGS[index]}`
      const indexer=index
      const toppingChange = () => changeToppings(index)
      return renderToppingCheckbox(name, label, toppingChange, indexer)
  })

  const changeToppings = (index) => {
    const toppingsCopy = [...toppings]
    toppingsCopy[index] = !toppingsCopy[index]
    setToppings(toppingsCopy)
  }

  const outputToppings=PIZZA_TOPPINGS.map((_, index) => {
    return <p>{toppings[index] ? PIZZA_TOPPINGS[index] : null}</p>
  })
  

  return (
    <div className="App">
      <h1>Pizza Order</h1>
      <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
      />
      <div className="toppingSelections">{ToppingCheckboxes}</div>
      <button type="submit">Submit</button>
      <h1>Your Order</h1>
      <h2>{name}</h2>
      <div className="toppingOutput">{outputToppings}</div>
    </div>
  );
}

export default App;
