import { render, screen, fireEvent } from '@testing-library/react';
import App, {replaceCamelCaseWithBlankSpaces} from './App';

test('button has correct initial color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'})

  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed'})

  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue'})
  expect(colorButton.textContent).toBe('Change to Medium Violet Red')
});

test('button is disabled when checkbox is checked', () => {
  render (<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'})
  expect(colorButton).toBeEnabled()

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()

  fireEvent.click(checkbox)

  expect(checkbox).toBeChecked()
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' })
})

test('button is enabled when checkbox is unchecked', () => {
  render (<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'})
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button'})

  // Disable the button
  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()
  expect(colorButton).not.toBeEnabled()
  
  // Enable the button
  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked()
  expect(colorButton).toBeEnabled()
})

describe('Spaces before camel-case',() => {
  test('Works for no inner capital letter', () => {
    expect(replaceCamelCaseWithBlankSpaces('Violet')).toBe('Violet')
  })

  test('Works for one inner capital letter', () => {
    expect(replaceCamelCaseWithBlankSpaces('MidnightBlue')).toBe('Midnight Blue')
  })  

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelCaseWithBlankSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })    
})