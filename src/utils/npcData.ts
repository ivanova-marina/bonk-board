export interface NpcData {
  name: string;
  hp: string;
}

/** Get NPC list from local storage */
export function getSavedNpc(): NpcData[] {
  const savedNpc = localStorage.getItem('npcData');
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
  localStorage.setItem('npcData', serializedData);
  return serializedData;
}
