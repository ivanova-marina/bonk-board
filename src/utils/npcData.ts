export interface NpcData {
  id: string;
  name: string;
  hp: string;
}

export const NPC_STORAGE_KEY = 'npcData'

/** Get NPC list from local storage */
export function getSavedNpc(): NpcData[] {
  const savedNpc = localStorage.getItem(NPC_STORAGE_KEY);
  if (!savedNpc) return [];

  try {
    const parsed = JSON.parse(savedNpc);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Save NPC list to local storage (appends) */
export function storeSavedNpc(npcData: NpcData[]) {
  const savedNpcArray = getSavedNpc();
  savedNpcArray.push(...npcData);

  const serializedData = JSON.stringify(savedNpcArray);
  localStorage.setItem(NPC_STORAGE_KEY, serializedData);
  return serializedData;
}

/** Delete NPC from local storage by ID */
export function deleteSavedNpc(id: string) {
  const savedNpcArray = getSavedNpc();
  const updatedNpcArray = savedNpcArray.filter(npc => npc.id !== id)
  const serializedData = JSON.stringify(updatedNpcArray)
  localStorage.setItem(NPC_STORAGE_KEY, serializedData)
}