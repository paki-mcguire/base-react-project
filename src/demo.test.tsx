import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Demo from './demo';

describe('Demo component tests', () => {
  test('renders the Demo component', () => {
    render(<Demo />);

    const demoElement = screen.getByTestId('Demo');

    expect(demoElement).toBeInTheDocument();
    expect(demoElement).toHaveTextContent('Demo Component');
  });
});
