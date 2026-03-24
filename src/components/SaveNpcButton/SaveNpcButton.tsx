interface SaveNpcButtonProps {
  onSave: () => void;
}

export function SaveNpcButton({ onSave }: SaveNpcButtonProps) {
  return (
    <button
      role='button'
      onClick={onSave}
      className='bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer w-24 h-10'
    >
      Save
    </button>
  );
}
