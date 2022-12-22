import React from 'react'

export default function Signup() {
  document.title = "Rokto - Signup";  
  return (
    <>
      <div className="rounded">
        <img src="./images/signin.png" width="500" height="790" align="left" className="rounded-4 signupimage"/>
      </div>
      <div className="container-signup">
        <div className="sign">
          <div className="header-signup">
            <h1>Sign Up</h1>
         </div>
         <div className="main my-5">
            <form>
                
              <input type="text" placeholder="Name" className="form-control mx-auto"/>
                    
              {/* <input type="text" placeholder="Last Name" className="form-control mx-auto"/> */}

              <input type="email" placeholder="Email" className="form-control mx-auto"/>

              <input type="number" placeholder="Phone No." className="form-control mx-auto"/>

              <input type="number" placeholder="Age" className="form-control mx-auto"/>

              <input type="password" placeholder="Password" className="form-control mx-auto"/>

              <input type="password" placeholder="Confirm Password" className="form-control mx-auto"/>      

              {/* <select class="form-select mx-auto sexs" aria-label="Default select example">
                <option selected>Sex</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select> */}

              <button className="btn btn-sm  mt-4 loginel">Sign Up</button>
            </form>
            <p className="registersent-signup">
              <strong>Already registered? Please sign in:</strong><br/>
              <a className="reglink" href="/"><strong>Login</strong></a>
            </p>
         </div>
      </div>
    </div>
  </>
  )
}
