import './index.css'
const Education = () => {
    return ( 
        <section className="education">
            <div className="name">
            <h4 className="title">EDUCATIONAL EXPERIENCE</h4>
            <button>edit</button>
            </div>

            <div className="school">
                <p className="schoolName">{FormData.education}</p>
            </div>
            <div className="course">
                <p>{FormData.course}</p>
            </div>
            <div className="date">
                <p>{FormData.date}</p>
            </div>
        </section>

    );
}
 
export default Education;