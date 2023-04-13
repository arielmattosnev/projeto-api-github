import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchProps {
  loadUser: (userName: string) => Promise<void>;
}

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 mb-4 bg-gradient-to-r from-blue-900  to-purple-900 text-white p-8 rounded-lg">
      <h2>Busque por um usuário:</h2>
      <p className="text-purple-500">Conheça seus melhores repositórios</p>
      <div className="flex gap-2 text-black">
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          className="p-2.5 rounded-lg border-none"
        />
        <button
          className="p-2.5 rounded-lg bg-white text-black hover:bg-purple-800 hover:text-white"
          onClick={() => loadUser(userName)}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
