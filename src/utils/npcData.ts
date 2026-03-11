export interface NpcData {
  id: string;
  name: string;
  hp: string;
}

export const NPC_STORAGE_KEY = 'npcData'

function isNpcData(obj: unknown): obj is NpcData {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof (obj as NpcData).id === 'string' &&
    typeof (obj as NpcData).name === 'string' &&
    typeof (obj as NpcData).hp === 'string'
  )
}
/** Get NPC list from local storage */
export function loadNpcs(): NpcData[] {
  const savedNpc = localStorage.getItem(NPC_STORAGE_KEY);
  if (!savedNpc) return [];

  try {
    const parsed = JSON.parse(savedNpc);
    return Array.isArray(parsed) ? parsed.filter(isNpcData) : [];
  } catch {
    return [];
  }
}

export function saveNpcs(npcs: NpcData[]): void {
  localStorage.setItem(NPC_STORAGE_KEY, JSON.stringify(npcs))
}