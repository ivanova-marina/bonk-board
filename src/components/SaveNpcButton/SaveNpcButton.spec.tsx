import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SaveNpcButton } from './SaveNpcButton';

describe('SaveNpcButton', () => {
  it('calls handleSave when clicked', () => {
    const handleSaveMock = vi.fn();
    render(<SaveNpcButton handleSave={handleSaveMock} />);

    const button = screen.getByRole('button', { name: /save/i });
    fireEvent.click(button);

    expect(handleSaveMock).toHaveBeenCalledTimes(1);
  });

  it('renders a button with the correct text', () => {
    render(<SaveNpcButton handleSave={() => {}} />);

    const button = screen.getByRole('button', { name: /save/i });

    expect(button).toBeInTheDocument();
  });
});
