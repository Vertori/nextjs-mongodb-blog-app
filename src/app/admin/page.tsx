import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import { auth } from "@/lib/auth";
import React, { Suspense } from "react";

const AdminPage = async () => {
  const session = await auth();
  return (
    <div>
      {/* first row  */}
      <div className="row">
        <div className="col">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="col">
          <AdminPostForm userId={session?.user.id} />
        </div>
      </div>
      {/* second row  */}
      <div className="row">
        <div className="col">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="col">
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
