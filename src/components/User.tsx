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
    <div className="flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-r from-blue-900 to-purple-900 rounded-md text-lg font-bold">
      <p>ID do usuário {id}</p>
      <img
        src={avatar_url}
        alt={login}
        className="h-52 w-52 rounded-full border-4 border-solid border-purple-700"
      />
      <h2>Nome do usuário: {login}</h2>

      {location && (
        <p className="flex items-center gap-1.5">
          <MdLocationPin className="fill-cyan-200" />
          <span className="text-purple-500">{location}</span>
        </p>
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
