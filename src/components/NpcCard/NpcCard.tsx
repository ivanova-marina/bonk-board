import { useEffect, useState } from 'react';
import { getSavedNpc } from '../../utils/npcData';
import { storeSavedNpc } from '../../utils/npcData';
import { SaveNpcButton } from '../SaveNpcButton';
import { NpcForm } from '../NpcForm';
import { NpcDisplay } from '../NpcDisplay';

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
    <div className='flex flex-col gap-4'>
      <NpcForm
        npcName={npcName}
        npcHp={npcHp}
        onNameChange={(e) => setNpcName(e.target.value)}
        onHpChange={(e) => setNpcHp(e.target.value)}
      />
      <div>
        <SaveNpcButton handleSave={handleCreate} />
      </div>
      <NpcDisplay
        name={submittedNpc.name}
        maxHp={submittedNpc.hp}
        currentHp={submittedNpc.hp}
      />
    </div>
  );
}
