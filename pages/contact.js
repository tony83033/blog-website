
import React,{useState} from 'react'

export default function contact() {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')  
  const [no, setno] = useState('')

  const onhandlesubmit = (e)=>{
    e.preventDefault()
    const data = {name,email,phone,desc}
    
    fetch('http://localhost:3000/api/postcontact', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                alert("Thanks for contacting us");
                setphone('')
                setname('')
                setdesc('')
                setemail('')
            })
            .catch((error) => {
                console.error('Error:', error);
            });
   
  }

  const onhandlechange = (e)=>{
    if(e.target.name=='name'){
      setname(e.target.value)
    }

    else if(e.target.name=='phone'){
      setphone(e.target.value)
    }
    
    else if(e.target.name='email'){
      setemail(e.target.value)
    }
    
    
  }

  const changedesc = (e)=>{
    setdesc(e.target.value)
  }

  
  return (
    <>
    <div className="container mt-2">
      <div className="container p-5">
      <form onSubmit={onhandlesubmit}>
      <div className="mb-3">
    <label htmlFor="name"  className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="name"
      name="name"
      value={name}
      onChange={onhandlechange}
      
    />
   
  </div>

  <div className="mb-3">
    <label htmlFor="email"  className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      name="email"
      aria-describedby="emailHelp"
      onChange={onhandlechange}
      value={email}
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Phone
    </label>
    <input
      type="phone"
      className="form-control"
      id="phone"
      name="phone"
      value={phone}
      onChange={onhandlechange}
    />
  </div>
  <div className="mb-3">
                <label htmlFor="desc">Elaborate your concern</label>
                <textarea value={desc} onChange={changedesc} className="form-control" placeholder="Write your concern here" name='desc' id="desc" />
            </div>
<br />
  <button type="submit"  className="btn btn-primary">
    Submit
  </button>
</form>

      </div>
    </div>
    </>
  )
}
