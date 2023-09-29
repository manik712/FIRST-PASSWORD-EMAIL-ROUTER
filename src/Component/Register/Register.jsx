import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "react-router-dom";
import auth from "../../firebase/fairbase.confin";
import { useState } from "react";
import { FaEyeSlash,FaEye } from 'react-icons/fa';


const Register = () => {
const [registerError,setRegistererror] = useState('')
const [sucess,setSucess] = useState('') 
const [showPassword,setShowPassword] = useState(false)


  const handleRegister = e =>{
    e.preventDefault()
    // console.log("form paicha");
    const email = e.target.email.value ;
    const password = e.target.password.value;
    console.log(email,password);

    setRegistererror('')
    setSucess('')
    if(password.length<6){
      setRegistererror("password should be in 6 charecters")
      return
    }
    else if(!/[A-Z]/.test(password)){
      setRegistererror("your password should be at least one upper case")
      return
    }
  
    
    createUserWithEmailAndPassword(auth,email,password)
    .then(result =>{
      console.log(result.user);
      setSucess("user done sucessfully")
    })
    .catch(error =>{
      console.log(error);
      setRegistererror(error.message)
    })
  }
  return (
    <div className="">
       <div className="mx-auto md:w-1/2">
       <h3 className="text-4xl">Register Here</h3>
        <Form  onSubmit={handleRegister}  className=" space-y-1">
        <input className="w-3/4 py-2 text-2xl px-4" placeholder="email Address"   type="email" name="email" required id="" />
        <br />
        <input className="w-3/4 py-2  text-2xl px-4" placeholder="password..."  type={showPassword ? "text": "password"} name="password"  required id="" /><span onClick={ () =>setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
        <br />
        <input className="w-3/4 text-lg btn btn-secondary" type="submit" value="Register" />


        </Form>

         {
        registerError  && <h2>{registerError}     </h2>     //: <h3>wow</h3>

} 


{
  sucess && <h3>{sucess}</h3>

}
{/* 
        {
        registerError && <h2 className="">{registerError} </h2>
} */}
       </div>
       
    </div>
  );
};

export default Register;