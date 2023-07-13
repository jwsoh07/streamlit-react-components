import React, { useEffect, useState, ChangeEvent } from "react";
import {
  Streamlit, withStreamlitConnection
} from "streamlit-component-lib";

interface ICustomSlider {
  args: {
    name: String;
  }
}

/**
 * Called by <CustomSlider />, renders the return value on screen.
 *
 * (props) => {code} is an arrow function, a shorter syntax for JS functions
 * equivalent to : function (props) { code; return <h1>Hello world</h1>};
 * or in Python, lambda props : return <h1>Hello world</h1>.
 *
 * When called, it will run then render on the browser the returned JSX block
 */
const CustomSlider = (props: ICustomSlider) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log('Button clicked!');
    // Trigger sending of data to Python here.
    Streamlit.setComponentValue(inputValue);
  };

  // useEffect is a specific React hook which calls its input after the component has been rendered on the browser.
  // The callback function properly sets the height of the HTML block wrapping the component. By default it checks the scrollable height of the returned block after rendering and sets it as the iframe height.
  useEffect(() => Streamlit.setFrameHeight());

  return (
    <>
      <h1>Hello, {props.args.name}. You are seeing a Streamlit custom component</h1>
      <p>Nice to meet you</p>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input value: {inputValue}</p>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

// Link the component to Streamlit JS events.
export default withStreamlitConnection(CustomSlider);
