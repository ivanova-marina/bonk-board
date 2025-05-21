/** Save NPC's data to local storage */
export function storeSavedNpc(name: string, hp: string) {
  const npcData = { name: name, hp: hp }
  const serializedData = JSON.stringify(npcData);
  localStorage.setItem('npcData', serializedData);
  return serializedData
}

/** Get NPC's data from local storage */
export function getSavedNpc() {
  const savedNpc = localStorage.getItem('npcData');
  return savedNpc ? JSON.parse(savedNpc) : { name: '', hp: '' }
}