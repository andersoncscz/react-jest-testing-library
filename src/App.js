import React, { useState } from 'react';
import './App.css';

const blueState = {
  backgroundColor: 'MidnightBlue',
  text: 'Change to Medium Violet Red',
}

const redState = {
  backgroundColor: 'MediumVioletRed',
  text: 'Change to Midnight Blue'
}

export function replaceCamelCaseWithBlankSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonState, setButtonState] = useState(redState)
  const [isDisabled, toggleIsDisabled] = useState(false)
  const {backgroundColor, text} = buttonState

  const buttonStyle = { backgroundColor: isDisabled ? 'grey' : backgroundColor }

  function handleOnClick() {
    if (buttonState.backgroundColor === 'MediumVioletRed') {
      setButtonState({...blueState})
    }
    else {
      setButtonState({...redState})
    }
  }

  function handleOnToggleCheckbox() {
    toggleIsDisabled(isDisabled => !isDisabled)
  }

  return (
    <div style={{flex: 1, flexDirection: 'column'}}>
      <button disabled={isDisabled} name="colorButton" style={buttonStyle} onClick={handleOnClick}>
        {text}
      </button>
      <label htmlFor="disable-button-checkbox">Disable Button</label>
      <input id="disable-button-checkbox" type="checkbox" checked={isDisabled} onChange={handleOnToggleCheckbox} />
    </div>
  );
}

export default App;
