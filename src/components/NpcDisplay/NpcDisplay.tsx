import type { NpcData } from '../../utils/npcData';

interface NpcDisplayProps {
  npcList: NpcData[];
  onDelete: (id: string) => void;
}

export function NpcDisplay({ npcList, onDelete }: NpcDisplayProps) {
  return (
    <>
      {npcList.map((npc) => (
        <div key={npc.id}>
          <p>Name: {npc.name}</p>
          <p>Max Hp: {npc.hp}</p>
          <p>Current Hp: {npc.hp}</p>

          <button
            type='button'
            onClick={() => onDelete(npc.id)}
            className='bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer w-24 h-10'
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
