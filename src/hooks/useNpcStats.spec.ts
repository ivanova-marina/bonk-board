import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useNpcStats } from './useNpcStats';
import { NPC_STORAGE_KEY } from '../utils/npcData';

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

let id = 0;
vi.mock('../utils/generateNpcId', () => ({
  generateNpcId: () => `npc-${++id}`,
}));

describe('useNpcStats', () => {
  beforeEach(() => {
    id = 0;
    mockLocalStorage.clear();
    mockLocalStorage.getItem.mockClear();
    mockLocalStorage.setItem.mockClear();
  });

  it('initializes with default values', () => {
    const { result } = renderHook(() => useNpcStats());

    expect(result.current.npcName).toBe('');
    expect(result.current.npcHp).toBe('');
    expect(result.current.npcList).toEqual([]);
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
    act(() => {
      result.current.onCreate();
    });
    const calls = mockLocalStorage.setItem.mock.calls;
    const lastCall = calls[calls.length - 1];
    expect(lastCall[0]).toBe(NPC_STORAGE_KEY);

    const stored = JSON.parse(lastCall[1]);
    expect(stored).toHaveLength(1);
    expect(stored[0]).toMatchObject({
      name: 'Orc',
      hp: '50',
      id: expect.any(String),
    });
  });

  it('appends multiple NPCs', () => {
    const { result } = renderHook(() => useNpcStats());

    act(() => {
      result.current.setNpcName('Orc');
      result.current.setNpcHp('50');
    });

    act(() => {
      result.current.onCreate();
    });

    act(() => {
      result.current.setNpcName('Goblin');
      result.current.setNpcHp('30');
    });

    act(() => {
      result.current.onCreate();
    });

    expect(result.current.npcList).toHaveLength(2);
    expect(result.current.npcList[0]).toMatchObject({
      name: 'Orc',
      hp: '50',
      id: 'npc-1',
    });
    expect(result.current.npcList[1]).toMatchObject({
      name: 'Goblin',
      hp: '30',
      id: 'npc-2',
    });

    const calls = mockLocalStorage.setItem.mock.calls;
    const stored = JSON.parse(calls[calls.length - 1][1]);
    expect(stored).toHaveLength(2);
  });
});
