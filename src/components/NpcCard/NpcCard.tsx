import { useEffect, useState } from 'react';
import { getSavedNpc } from '../../utils/npcData';
import { storeSavedNpc } from '../../utils/npcData';

export function NpcCard() {
  const [npcName, setNpcName] = useState('');
  const [npcHp, setNpcHp] = useState('');
  const [submittedNpc, setSubmittedNpc] = useState(getSavedNpc());

  const handleCreate = () => {
    const newNpc = { name: npcName, hp: npcHp };
    setSubmittedNpc(newNpc);
    storeSavedNpc(npcName, npcHp);
  };

  useEffect(() => {
    const savedNpc = localStorage.getItem('npcData');
    if (savedNpc) {
      setSubmittedNpc(JSON.parse(savedNpc));
    }
  }, [submittedNpc]);
  return (
    <>
      <label>
        NPC name:
        <input
          name='npc-name'
          value={npcName}
          onChange={(e) => setNpcName(e.target.value)}
        />
      </label>
      <label>
        NPC hp:
        <input
          name='npc-hp'
          value={npcHp}
          onChange={(e) => setNpcHp(e.target.value)}
        />
      </label>
      <button onClick={() => handleCreate()}>Create</button>
      <div>
        <p>Name: {submittedNpc.name}</p>
        <p>MAX hp: {submittedNpc.hp}</p>
        <p>current hp: {submittedNpc.hp}</p>
      </div>
    </>
  );
}
