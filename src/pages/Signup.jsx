import { useRef } from "react";
import { auth } from "../firebase/firebase-config"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()

  const handleSignIn = async() => {
    try{
      await createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      navigate('/')
    }
    catch(error){
      alert(error)
    }
  }
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h3 style={{ marginBottom: "1em" }}>
        Welcome to the SignUp page !
      </h3>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={password}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSignIn}>
          SignIn
        </button>
      </div>
    </div>
  );
};
export default Signup;
