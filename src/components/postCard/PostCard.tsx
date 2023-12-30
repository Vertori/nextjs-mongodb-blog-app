import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = () => {
  return (
    <div className='flex flex-col gap-5 mb-5'>
        {/* Top  */}
        <div className='flex'>
            {/* Image  */}
            <div className='w-[90%] h-[400px] relative'>
                <Image className="object-cover" src="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post image" fill />
            </div>
            {/* Date     */}
            <span className='w-[10%] text-[12px] rotate-[270deg] m-auto'>10.10.2020</span>
        </div>
        {/* Bottom  */}
        <div className='flex flex-col gap-3 w-[90%]'>
            <h1 className='text-2xl'>Title</h1>
            <p className='text-gray-500'>Description</p>
            <Link href="/blog/post"><button className='p-4 bg-blue-500 hover:bg-blue-600 transition text-white rounded-md'>Read More</button></Link>
        </div>
    </div>
  )
}

export default PostCard