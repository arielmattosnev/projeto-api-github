import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";

const User = ({
  id,
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-lg">
      <p>ID do usuário {id}</p>
      <img src={avatar_url} alt={login} className="rounded-lg" />
      <h2>Nome do usuário: {login}</h2>

      {location && (
        <div className="flex"><MdLocationPin />: {location}</div>
      )}

      <div>
        <p>Seguidores: {followers}</p>
      </div>

      <div>
        <p>Seguindo: {following}</p>
      </div>
    </div>
  );
};

export default User;
