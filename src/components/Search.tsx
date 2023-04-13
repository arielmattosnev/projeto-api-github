import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchProps {
  loadUser: (userName: string) => Promise<void>;
}

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className="text-black">
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className="bg-white text-black h-6 "
          onClick={() => loadUser(userName)}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
