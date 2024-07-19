/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/counter';

describe('Counter', () => {
  it('renders correctly', () => {
    render(<Counter />);
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });

  it('increments the count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });

  it('decrements the count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByText('Counter: -1')).toBeInTheDocument();
  });

  it('resets the count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });
});