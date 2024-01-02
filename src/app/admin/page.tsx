import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import { auth } from "@/lib/auth";
import React, { Suspense } from "react";

const AdminPage = async () => {
  const session = await auth();
  return (
    <div className="my-10 xl:mt-0 flex flex-col gap-[100px]">
      {/* first row  */}
      <div className="flex flex-col md:flex-row gap-[100px]">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminPostForm userId={session?.user.id} />
        </div>
      </div>
      {/* second row  */}
      <div className="flex flex-col md:flex-row gap-[100px]">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
