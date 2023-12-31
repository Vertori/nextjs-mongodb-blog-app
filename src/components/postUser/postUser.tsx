import { getUser } from "@/lib/data";
import Image from "next/image";
import React from "react";

const PostUser = async ({ userId }: { userId: string }) => {
  const user = await getUser(userId);
  return (
    <div className="flex items-center gap-[20px]">
      <Image
        className="object-cover rounded-[50%]"
        src={user.img ? user.img : "/noavatar.png"}
        alt="user avatar"
        width={50}
        height={50}
      />
      <div className="flex flex-col gap-[10px]">
        <span className="font-bold">Author</span>
        <span className="text-gray-300">{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
