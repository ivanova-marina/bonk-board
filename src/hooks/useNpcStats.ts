import { useState } from "react";
import { getSavedNpc, storeSavedNpc } from '../utils/npcData'

import type { NpcData } from '../utils/npcData';
/**
 * Custom React hook for managing NPC stats.
 *
 * Provides state and handlers for NPC name, HP, and a list of saved NPCs.
 * Handles creation and persistent storage of NPC data using localStorage.
 *
 * @returns {Object} An object containing:
 *   - handleCreate: Function to add a new NPC to the list and storage.
 *   - setNpcName: Setter for the NPC name input.
 *   - setNpcHp: Setter for the NPC HP input.
 *   - npcName: Current value of the NPC name input.
 *   - npcHp: Current value of the NPC HP input.
 *   - npcList: Array of saved NPCs.
 */
export function useNpcStats() {
  const [npcName, setNpcName] = useState('');
  const [npcHp, setNpcHp] = useState('');
  const [npcList, setNpcList] = useState<NpcData[]>(getSavedNpc());

  const handleCreate = () => {
    storeSavedNpc([{ name: npcName, hp: npcHp }]);
    setNpcList(getSavedNpc());
    setNpcName('');
    setNpcHp('')
  }

  return {
    handleCreate,
    setNpcName,
    setNpcHp,
    npcName,
    npcHp,
    npcList
  }
}