import General from './GeneralInfo';
import Education from './Education';
import Practical from './Practical-experience';
import Modal from './Modal';
import { useState } from "react";

const Resume = () => {
   

    const [formData, setFormData] = useState({});
    const handleFormSubmit = (data) => {
        setFormData(data);
       
          
    };
    
    const [modalOpen, setModalOpen] = useState(false); 

    const handleModalOpening = () => {
        setModalOpen(!modalOpen)
      
    };
    const changeName = modalOpen?  "+" : "-";
   

    return (
        <>
            <div className="title">
                <h1>CV-APPLICATION</h1>
                <strong className={changeName} onClick={handleModalOpening}>{changeName}</strong>
            </div>
            <div className="more__info">
                <General formData={formData} />
                <Education formData={formData} />
                <Practical formData={formData} />
                
                <Modal onSubmit={handleFormSubmit} style={ {display: !modalOpen ? "block" : "none"}} modalCont= {{display: !modalOpen? "grid" : "none"}} click= {handleModalOpening}/>
            </div>
        </>
    );
};

export default Resume;
