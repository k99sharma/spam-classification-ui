function Info({ text }: { text: string }) {
  return (
    <div className="info text-center text-xs p-1 bg-amber-300 text-neutral-900">
      {text}
    </div>
  );
}

export default Info;
