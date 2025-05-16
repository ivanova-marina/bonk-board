/** Save NPC's data to local storage */
export function storeSavedNpc(name: string, hp: string) {
  const npcData = { name: name, hp: hp }
  const storeSavedNpc = localStorage.setItem('npcData', JSON.stringify(npcData))

  return storeSavedNpc
}

/** Get NPC's data from local storage */
export function getSavedNpc() {
  const savedNpc = localStorage.getItem('npcData');
  return savedNpc ? JSON.parse(savedNpc) : { name: '', hp: '' }
}