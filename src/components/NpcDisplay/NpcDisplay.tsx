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
            type="button"
            onClick={() => onDelete(npc.id)}
            className="h-10 w-24 cursor-pointer rounded bg-blue-500 text-white transition hover:bg-blue-600"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
