import { useNpcStats } from '../../hooks/useNpcStats';

export function NpcDisplay() {
  const { npcList } = useNpcStats();

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
