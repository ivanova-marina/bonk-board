import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NpcCard } from './NpcCard';
import { NPC_STORAGE_KEY } from '../../utils/npcData';

vi.mock('../../utils/generateNpcId', () => ({ generateNpcId: () => 'npc-1' }));

describe('NpcCard', () => {
  beforeEach(() => localStorage.clear());

  it('creates and persists an NPC', async () => {
    render(<NpcCard />);

    fireEvent.change(screen.getByLabelText(/npc name/i), {
      target: { value: 'Goblin' },
    });
    fireEvent.change(screen.getByLabelText(/npc hp/i), {
      target: { value: '10' },
    });

    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(await screen.findByText('Name: Goblin')).toBeInTheDocument();

    await waitFor(() => {
      expect(JSON.parse(localStorage.getItem(NPC_STORAGE_KEY)!)).toEqual([
        { id: 'npc-1', name: 'Goblin', hp: '10' },
      ]);
    });
  });

  it('deletes and persists removal', async () => {
    localStorage.setItem(
      NPC_STORAGE_KEY,
      JSON.stringify([{ id: 'npc-1', name: 'Goblin', hp: '10' }]),
    );

    render(<NpcCard />);
    expect(screen.getByText('Name: Goblin')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /delete/i }));

    await waitFor(() => {
      expect(screen.queryByText('Name: Goblin')).toBeNull();
      expect(JSON.parse(localStorage.getItem(NPC_STORAGE_KEY)!)).toEqual([]);
    });
  });
});
