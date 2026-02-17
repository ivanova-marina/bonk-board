import type { NpcData } from '../../utils/npcData';

export function NpcDisplay({ npcList }: { npcList: NpcData[] }) {
  return (
    <>
      {npcList.map((npc: NpcData) => (
        <div key={npc.id}>
          <p>Name: {npc.name}</p>
          <p>Max Hp: {npc.hp}</p>
          <p>Current Hp: {npc.hp}</p>
        </div>
      ))}
    </>
  );
}
