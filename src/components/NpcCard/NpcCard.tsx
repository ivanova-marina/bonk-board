import { SaveNpcButton } from '../SaveNpcButton';
import { NpcForm } from '../NpcForm';
import { NpcDisplay } from '../NpcDisplay';
import { useNpcStats } from '../../hooks/useNpcStats';

export function NpcCard() {
  const { onCreate, onDelete, setNpcName, setNpcHp, npcHp, npcName, npcList } =
    useNpcStats();

  return (
    <div className="flex flex-col gap-4">
      <NpcForm
        npcName={npcName}
        npcHp={npcHp}
        onNameChange={(e) => setNpcName(e.target.value)}
        onHpChange={(e) => setNpcHp(e.target.value)}
      />
      <div>
        <SaveNpcButton onSave={onCreate} />
      </div>
      <NpcDisplay npcList={npcList} onDelete={onDelete} />
    </div>
  );
}
