import General from './GeneralInfo';
import Education from './Education';
import Practical from './Practical-experience'
import Modal from './Modal';
import { useState } from "react";


const Resume = () => {
    const [formData, setFormData] = useState({})
    const handleFormSubmit=(data)=>{
        setFormData(data)

    }
    return (  
        <>
         <General formData={formData}/>
         <Education formData= {formData}/>
         <Practical formData={formData}/>
         <Modal onSubmit = {handleFormSubmit}/>
        </>
    );
}
 
export default Resume;