import type { NpcData } from '../../utils/npcData';

export function NpcDisplay({ npcList }: { npcList: NpcData[] }) {
  return (
    <>
      <ul>
        {npcList.map((npc: { name: string; hp: string }, index: number) => (
          <li key={index}>
            <p>Name: {npc.name}</p>
            <p>Max Hp: {npc.hp}</p>
            <p>Current Hp: {npc.hp}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
