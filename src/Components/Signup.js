import React from 'react'

export default function Signup() {
  document.title = "Rokto - Signup";  
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
            <h1>Sign Up</h1>
         </div>
         <div className="main">
            <form>
                
              <input type="text" placeholder="First Name" className="form-control mx-auto"/>
                    
              <input type="text" placeholder="Last Name" className="form-control mx-auto"/>

              <input type="email" placeholder="Email" className="form-control mx-auto"/>

              <input type="number" placeholder="Phone No." className="form-control mx-auto"/>

              <input type="number" placeholder="Age" className="form-control mx-auto"/>

              <input type="password" placeholder="Password" className="form-control mx-auto"/>

              <input type="password" placeholder="Confirm Password" className="form-control mx-auto"/>      

              <select class="form-select mx-auto sexs" aria-label="Default select example">
                <option selected>Sex</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
            </select>

                    
              <button className="btn btn-sm  mt-5 loginel">Sign Up</button>
            </form>
            <p className="registersent">
              Already registered? Please sign in
            </p>
         </div>
      </div>
    </div>
  </>
  )
}
