interface SaveNpcButtonProps {
  onSave: () => void;
}

export function SaveNpcButton({ onSave }: SaveNpcButtonProps) {
  return (
    <button
      role="button"
      onClick={onSave}
      className="h-10 w-24 cursor-pointer rounded bg-blue-500 text-white transition hover:bg-blue-600"
    >
      Save
    </button>
  );
}
