import { User } from "@prisma/client";

import Image from "next/image";

interface AvatarProps {
  user?: User;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ user, size = 40 }) => {
  return (
    <div>
      <Image
        width={size}
        height={size}
        className="rounded-full"
        src={user?.image || "/images/placeholder.jpg"}
        alt="Avatar"
      />
      {/* {isActive ? (
        <span
          className="
            absolute 
            right-0 
            top-0 
            block 
            h-2 
            w-2 
            rounded-full 
            bg-green-500
            ring-2 
            ring-white 
            md:h-3 
            md:w-3
          "
        />
      ) : null} */}
    </div>
  );
};

export default Avatar;
