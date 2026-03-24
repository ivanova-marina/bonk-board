import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SaveNpcButton } from './SaveNpcButton';

describe('SaveNpcButton', () => {
  it('calls onSave when clicked', () => {
    const onSaveMock = vi.fn();
    render(<SaveNpcButton onSave={onSaveMock} />);

    const button = screen.getByRole('button', { name: /save/i });
    fireEvent.click(button);

    expect(onSaveMock).toHaveBeenCalledTimes(1);
  });

  it('renders a button with the correct text', () => {
    render(<SaveNpcButton onSave={() => {}} />);

    const button = screen.getByRole('button', { name: /save/i });

    expect(button).toBeInTheDocument();
  });
});
