export function NpcCard() {
  return (
    <>
      <label>
        NPC name: <input name='npc-name' />
      </label>
      <label>
        NPC hp: <input name='npc-hp' />
      </label>
      <div>
        <p>MAX hp: </p>
        <p>current hp: </p>
      </div>
    </>
  );
}
