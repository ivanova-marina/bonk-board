import { useState } from 'react';

export function NpcCard() {
  const [npcName, setNpcName] = useState('');
  const [npcHp, setNpcHp] = useState('');
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
      <div>
        <p>Name: {npcName}</p>
        <p>MAX hp: {npcHp}</p>
        <p>current hp: {npcHp}</p>
      </div>
    </>
  );
}
