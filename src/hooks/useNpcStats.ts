import { useEffect, useState } from "react";
import { getSavedNpc, storeSavedNpc } from '../utils/npcData'

export function useNpcStats() {
  const [npcName, setNpcName] = useState('');
  const [npcHp, setNpcHp] = useState('');
  const [npcList, setNpcList] = useState(getSavedNpc());

  const handleCreate = () => {
    storeSavedNpc([{ name: npcName, hp: npcHp }]);
    const updatedList = getSavedNpc();
    setNpcList(updatedList);
    setNpcName('');
    setNpcHp('')
  }

  useEffect(() => {
    setNpcList(getSavedNpc())
  }, [])

  return {
    handleCreate,
    setNpcName,
    setNpcHp,
    npcName,
    npcHp,
    npcList
  }
}