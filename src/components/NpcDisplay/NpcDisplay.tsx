interface NpcDisplayProps {
  name: string;
  maxHp: string;
  currentHp: string;
}

export function NpcDisplay({ name, maxHp, currentHp }: NpcDisplayProps) {
  return (
    <div className='flex flex-col gap-2'>
      <p>Name: {name}</p>
      <p>Max Hp: {maxHp}</p>
      {/** TODO: Handle current hp*/}
      <p>Current Hp: {currentHp}</p>
    </div>
  );
}
