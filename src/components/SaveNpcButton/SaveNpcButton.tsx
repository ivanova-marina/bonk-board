interface SaveNpcButtonProps {
  handleSave: () => void;
}

export function SaveNpcButton({ handleSave }: SaveNpcButtonProps) {
  return <button onClick={handleSave}>Save</button>;
}
