import { deleteUser } from "@/lib/action";
import { getUsers } from "@/lib/data";
import Image from "next/image";
import React from "react";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div className="post" key={user.id}>
          <div className="detail">
            <Image
              src={user.img || "/noAvatar.png"}
              alt="user avatar"
              width={50}
              height={50}
            />
            <span className="postTitle">{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className="postButton">Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
