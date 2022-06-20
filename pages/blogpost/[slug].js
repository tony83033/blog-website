import React, { useEffect,useState } from 'react'

import { useRouter } from 'next/router';

 const slug = (props) => {
     
     const [blog, setblog] = useState(props.myblog)
     
     
    
    
  return (
    <>
      <div className="container mt-4">
        <h2 className='text-center'>Title of this Blog is {blog && blog.title}</h2>
        <hr />
        <p>{blog && blog.contant}</p>
      </div>
    </>
  )
};

export async function getServerSideProps(context) {
  
    const {slug} = context.query;
    

   let data = await fetch(`http://localhost:3000/api/blog?slug=${slug}`)
   let myblog = await data.json()
      

  return {
    props: {myblog}, // will be passed to the page component as props
  }
}

export default slug;
