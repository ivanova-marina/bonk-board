import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useNpcStats } from './useNpcStats';

// Mock localStorage
const mockLocalStorage = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();
Object.defineProperty(global, 'localStorage', { value: mockLocalStorage });

describe('useNpcStats', () => {
  it('initializes with default values', () => {
    const { result } = renderHook(() => useNpcStats());

    expect(result.current.npcName).toBe('');
    expect(result.current.npcHp).toBe('');
    expect(result.current.submittedNpc).toEqual({ name: '', hp: '' });
  });

  it('updates npcName and npcHp correctly', () => {
    const { result } = renderHook(() => useNpcStats());

    act(() => {
      result.current.setNpcName('Goblin');
      result.current.setNpcHp('30');
    });

    expect(result.current.npcName).toBe('Goblin');
    expect(result.current.npcHp).toBe('30');
  });

  it('handles creating and saving NPC data', () => {
    const { result } = renderHook(() => useNpcStats());

    act(() => {
      result.current.setNpcName('Orc');
      result.current.setNpcHp('50');
    });

    act(() => { result.current.handleCreate(); })

    expect(result.current.submittedNpc).toEqual({ name: 'Orc', hp: '50' });
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'npcData',
      JSON.stringify({ name: 'Orc', hp: '50' })
    );
  });
});