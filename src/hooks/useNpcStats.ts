import { useEffect, useState } from "react";
import { getSavedNpc } from '../utils/npcData'
import { storeSavedNpc } from '../utils/npcData';

export function useNpcStats() {
  const [npcName, setNpcName] = useState('');
  const [npcHp, setNpcHp] = useState('');
  const [submittedNpc, setSubmittedNpc] = useState(getSavedNpc());

  const handleCreate = () => {
    const newNpc = { name: npcName, hp: npcHp };
    setSubmittedNpc(newNpc);
    storeSavedNpc(npcName, npcHp)
  }

  useEffect(() => {
    const savedNpc = localStorage.getItem('npcData');
    if (savedNpc) {
      setSubmittedNpc(JSON.parse(savedNpc))
    }
  }, [])

  return {
    handleCreate,
    setNpcName,
    setNpcHp,
    npcName,
    npcHp,
    submittedNpc
  }
}