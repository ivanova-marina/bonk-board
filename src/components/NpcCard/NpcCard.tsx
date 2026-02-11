import { SaveNpcButton } from '../SaveNpcButton';
import { NpcForm } from '../NpcForm';
import { NpcDisplay } from '../NpcDisplay';
import { useNpcStats } from '../../hooks/useNpcStats';

export function NpcCard() {
  const { handleCreate, setNpcName, setNpcHp, npcHp, npcName } = useNpcStats();

  return (
    <div className='flex flex-col gap-4'>
      <NpcForm
        npcName={npcName}
        npcHp={npcHp}
        onNameChange={(e) => setNpcName(e.target.value)}
        onHpChange={(e) => setNpcHp(e.target.value)}
      />
      <div>
        <SaveNpcButton handleSave={handleCreate} />
      </div>
      <NpcDisplay />
    </div>
  );
}
