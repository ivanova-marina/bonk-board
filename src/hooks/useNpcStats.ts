import { useState } from "react";
import { loadNpcs, saveNpcs } from '../utils/npcData'

import type { NpcData } from '../utils/npcData';
import { generateNpcId } from "../utils/generateNpcId";
/**
 * Custom React hook for managing NPC stats.
 *
 * Provides state and handlers for NPC name, HP, and a list of saved NPCs.
 * Handles creation and persistent storage of NPC data using localStorage.
 *
 * @returns {Object} An object containing:
 *   - onCreate: Function to add a new NPC to the list and storage.
 *   - onDelete: Function to remove an NPC from the list and storage by ID.
 *   - setNpcName: Setter for the NPC name input.
 *   - setNpcHp: Setter for the NPC HP input.
 *   - npcName: Current value of the NPC name input.
 *   - npcHp: Current value of the NPC HP input.
 *   - npcList: Array of saved NPCs.
 */
export function useNpcStats() {
  const [npcName, setNpcName] = useState('');
  const [npcHp, setNpcHp] = useState('');
  const [npcList, setNpcList] = useState<NpcData[]>(loadNpcs());

  const onCreate = () => {
    setNpcList(prev => { const newList = [...prev, { id: generateNpcId(), name: npcName, hp: npcHp }]; saveNpcs(newList); return newList })
  }

  const onDelete = (id: string) => {
    setNpcList(prev => { const newList = prev.filter(npc => npc.id !== id); saveNpcs(newList); return newList })
  }

  return {
    onCreate,
    onDelete,
    setNpcName,
    setNpcHp,
    npcName,
    npcHp,
    npcList
  }
}