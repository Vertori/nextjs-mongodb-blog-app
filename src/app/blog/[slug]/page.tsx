import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";
import Image from "next/image";
import React, { Suspense } from "react";

interface SinglePostPageProps {
  params: { slug: string };
}

const SinglePostPage = async ({ params }: SinglePostPageProps) => {
  const { slug } = params;

  const post = await getPost(slug);
  return (
    <div className="flex flex-col-reverse xl:flex-row justify-center items-center gap-[50px] my-10 ">
      {/* Image container  */}
      {post.img && (
        <div className="flex-1">
          <Image
            className=""
            src={post?.img}
            alt="blog image"
            width={500}
            height={500}
          />
        </div>
      )}
      {/* Text container  */}
      <div className="flex flex-[2] flex-col gap-[50px]">
        <h1 className="text-[48px] md:text-[64px] text-blue-500 font-semibold">
          {post?.title}
        </h1>
        {/* Details container*/}
        <div className="flex gap-[20px]">
          {/* Author details text  */}
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )}

          {/* Author details published at */}
          <div className="flex flex-col gap-[10px]">
            <span className="font-bold">Published</span>
            <span className="text-gray-300">
              {post?.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        {/* Description  */}
        <div className="text-lg font-light">{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
