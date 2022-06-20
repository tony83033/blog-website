import React, { useEffect ,useState} from 'react'
import Link from 'next/link'

const blog = (props) => {
  const [blogs, setblog] = useState(props.allblogs)
 

  return (
    <> {/* Show Blog post */}
    <div className="container mt-4">
     
        {blogs.map((blogitem)=>{

          return <div className="row" key={blogitem.title}>
          <div
    className="card shadow p-3 mb-5 bg-white rounded "
    style={{ width: "100%" }}
  >
    <h5 className="card-header bg-white">Author {blogitem.author}</h5>
    <div className="card-body">
      <h5 className="card-title">{blogitem.title}</h5>
      <p className="card-text text-dark">
        {blogitem.contant.substr(0,250)}...
      </p>
      <Link href={`/blogpost/${blogitem.title}`}>  
        <a className="btn btn-primary">Read more</a>
        
       </Link>
     
    </div>
  </div>
  
          </div>
        })}
    </div>
    {/* End Show Blog post */}
    </>
  )
}

export async function getServerSideProps(context) {

  
   let data = await fetch('http://localhost:3000/api/blogs')
   let allblogs = await data.json()
    
  
  return {


    props: {allblogs}, // will be passed to the page component as props
  }
}

export default blog