import type { NpcData } from '../../utils/npcData';

export function NpcDisplay({
  npcList,
  handleDelete,
}: {
  npcList: NpcData[];
  handleDelete: (id: string) => void;
}) {
  return (
    <>
      {npcList.map((npc: NpcData) => (
        <div key={npc.id}>
          <p>Name: {npc.name}</p>
          <p>Max Hp: {npc.hp}</p>
          <p>Current Hp: {npc.hp}</p>

          <button
            role='button'
            onClick={() => handleDelete(npc.id)}
            className='bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer w-24 h-10'
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
