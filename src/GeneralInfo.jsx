import './index.css';


const GeneralInfo = ({ formData,  onEditClick}) => {
    
  
    
    return ( 
        <header className="header">
          <section className="edit">
           <section className="personals"> 
                <div className="image__container">
                    <img src={formData.profilepic} alt="Profile pics" />
                </div>
                <div className="personalInfo">
                    <h1 className="name">{formData.fullname}</h1>
                    <p className="email">{formData.email}</p>
                    <p className="tel">{formData.telephone}</p>
                </div>
            </section>
            <div className="name">
            <button onClick={()=>onEditClick(fullname)}>edit</button>
            </div>
            </section>
            <div className="summaryText">
                    <h4 className="title">SUMMARY</h4>
                    <p className="text">{formData.summary} </p>
            </div>
        </header>  
     );
}
 
export default GeneralInfo;