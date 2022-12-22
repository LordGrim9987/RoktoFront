import React from 'react'


export default function Login() {
  document.title = 'Rokto - Login';
  return (
    <>
    <div className="rounded">
      <img src="./images/signin.png" width="400" height="550" align="left" className="rounded-4 signinimage"/>
    </div>
    <div className="rounded">
      <img src="./images/signin.png" width="400" height="550" align="right" className="rounded-4 signinimage"/>
    </div>
    <div className="container">
     <div className="sign">
         <div className="header">
             <h1>Log In</h1>
         </div>
         <div className="main">
             <form>
                 <input type="text" placeholder="Username/Email" className="form-control mx-auto"/>
                    
                 <input type="password" placeholder="Password" className="form-control mx-auto"/>
                    
                 <button className="btn btn-sm loginel">Log In</button>
             </form>
             <p className="registersent">
                Not yet registered? Please register first
             </p>
         </div>
      </div>
    </div>
  </>
  )
}

