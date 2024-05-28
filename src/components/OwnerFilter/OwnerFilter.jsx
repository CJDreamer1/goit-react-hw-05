export default function OwnerFilter({ filter, onSearch }) {
  return (
    <div>
      Filter by owner
      <input
        type="text"
        value={filter}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
