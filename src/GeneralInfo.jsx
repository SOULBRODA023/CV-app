import './index.css'

const GeneralInfo = ({ formData }) => {
    return ( 
        <header className="header">
            <div className="name">
            <button>edit</button>
            </div>
           <section className="personals"> 
                <div className="image__container">
                    <img src="" alt="" />
                </div>
                <div className="personalInfo">
                    <h1 className="name">{formData.fullname}</h1>
                    <p className="email">{formData.email}</p>
                    <p className="tel">{formData.telephone}</p>
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