import './index.css'
const Education = ({formData, onEditClick}) => {
    return ( 
        <section className="education">
            <div className="name">
            <h4 className="title">EDUCATIONAL EXPERIENCE</h4>
            <button  onClick={()=>onEditClick("course")}>edit</button>
            </div>

            <div className="school">
                <p className="schoolName">{formData.education}</p>
            </div>
            <div className="course">
                <p>{formData.course}</p>
            </div>
            <div className="date">
                <p>{formData.date}</p>
            </div>
        </section>

    );
}
 
export default Education;