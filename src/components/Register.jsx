import React ,{useState}from 'react'
import  {useForm} from 'react-hook-form'
const Register = () => {
  const {register,handleSubmit,formState:{errors}} = useForm();
  const [iswhatsapp,setWhatsApp]=useState(false);
  const onSubmit = (data)=>{
    console.log(data);
  }
  return (
    <div>
      Register Here
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder='Enter Your First Name' className="form-control"/>
      <input type="text" placeholder='Enter Your Last Name' className="form-control"/>
      <input type="text" placeholder='Enter Your Gmail' className="form-control"/>
     
      <input type="number" placeholder='Enter your phone number' className="form-control"/>
     <br/>
      <div className="d-flex flex-column align-items-start" style={{width:"100%"}}><p>Is WhatsApp same as your Phone Number ?</p> 
      <div className="d-flex">
      <label className="form-check-label">Yes <input className="form-check-input" type="radio" name="option" onChange={()=>{setWhatsApp(false)}}/></label>&nbsp;&nbsp;&nbsp;&nbsp;  <label className="form-check-label">No <input className="form-check-input" type="radio" name="option" onChange={()=>{setWhatsApp(true)}}/></label> 
      </div>
        </div>
        <br/>
      { iswhatsapp ? <input type="number" placeholder='Enter WhatsApp number' className="form-control"/>:""}
      <div><label className="form-check-label">Select GuruPetam &nbsp;<input  className="form-check-input" type="radio"  name="option"/></label>&nbsp;
      <label className="form-check-label">Select Home &nbsp; <input className="form-check-input" type="radio" name="option"/></label></div>
     
      </form>
    </div>
  )
}

export default Register