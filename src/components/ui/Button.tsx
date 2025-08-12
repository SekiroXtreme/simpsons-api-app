

export default function Button({ text }: { text: string }) {
  return (
    <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 hover:click transition">
      {text}
    </button>
  );
}