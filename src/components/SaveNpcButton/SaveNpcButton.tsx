interface SaveNpcButtonProps {
  handleSave: () => void;
}

export function SaveNpcButton({ handleSave }: SaveNpcButtonProps) {
  return (
    <button
      role='button'
      onClick={handleSave}
      className='bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer w-24 h-10'
    >
      Save
    </button>
  );
}
