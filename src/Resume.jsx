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
    const [sectionToScroll, setSectionToScroll] =useState(null)

    const handleModalOpening = (fieldId) => {
        
        const sectionId = `${fieldId}`;
        setSectionToScroll(sectionId);
        setModalOpen(!modalOpen);
        
        // Scroll to the section when the modal opens
        if (modalOpen) {
            scrollToSection(sectionId);
        }
    };

    const scrollToSection = (sectionId) => {
        if (sectionId) {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    const changeName = modalOpen?  "+" : "-";
   


    return (
        <>
            <div className="title">
                <h1>CV-APPLICATION</h1>
                <strong className={changeName} onClick={handleModalOpening}>{changeName}</strong>
            </div>
            <div className="more__info">
                <General formData={formData} onEditClick = {handleModalOpening} />
                <Education formData={formData}  onEditClick = {handleModalOpening}/>
                <Practical formData={formData}  onEditClick = {handleModalOpening}/>
                
                <Modal onSubmit={handleFormSubmit} style={ {display: !modalOpen ? "block" : "none"}} modalCont= {{display: !modalOpen? "grid" : "none"}} click= {handleModalOpening}/>
            </div>
        </>
    );
};

export default Resume;
