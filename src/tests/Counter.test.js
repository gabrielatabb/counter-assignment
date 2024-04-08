// import necessary react testing library helpers here
import { render, screen, fireEvent} from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const renderMessage = screen.getByText(/Counter/i);
  expect(renderMessage).toBeInTheDocument(); 
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText('0');
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const incrementButton = screen.getByText('+');
  const countDisplay = screen.getByText('0');
  
  fireEvent.click(incrementButton);
  
  expect(countDisplay.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  const countDisplay = screen.getByText('0');
  
  fireEvent.click(decrementButton);
  
  expect(countDisplay.textContent).toBe('-1');
});
