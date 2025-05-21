import type React from 'react';

interface NpcFormProps {
  npcName: string;
  npcHp: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHpChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function NpcForm({
  npcName,
  npcHp,
  onNameChange,
  onHpChange,
}: NpcFormProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label>
        NPC name:
        <input
          name='npc-name'
          value={npcName}
          onChange={onNameChange}
          className='border rounded-sm ml-2 border-gray-600'
        />
      </label>
      <label>
        NPC hp:
        <input
          name='npc-hp'
          value={npcHp}
          onChange={onHpChange}
          className='border rounded-sm ml-2 border-gray-600'
        />
      </label>
    </div>
  );
}
