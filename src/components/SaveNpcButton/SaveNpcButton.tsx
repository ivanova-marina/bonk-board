interface SaveNpcButtonProps {
  handleSave: () => void;
}

export function SaveNpcButton({ handleSave }: SaveNpcButtonProps) {
  return (
    <button role='button' onClick={handleSave}>
      Save
    </button>
  );
}
