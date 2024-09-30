interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

function Search({ searchTerm, setSearchTerm }: SearchProps) {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar Usuarios"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
