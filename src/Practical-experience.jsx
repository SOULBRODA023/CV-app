const Practical = ({formData}) => {
    return ( 
        <section className="practicals">
            <div className="name">
            <h4 className="title">EXPERIENCE</h4>
            <button>edit</button>
            </div>
            <div className="companyName">
                <b>{formData.company}</b>
            </div>
            <div className="positionTitle">
                <p>{formData.role}</p>
            </div>
            <div className="role">
                <ul>
                <li className="role1">{formData.responsibilites}</li>
                <li className="role2">{formData.responsibilities2}</li>
                <li className="role3">{formData.responsibilities3}</li>
                </ul>
            </div>
            <div className="date">
                <p className="datebegan">{formData.datebegan}</p>- <p className="dateexpired">{formData.dateend}</p>
            </div>

        </section>
    );
}
 
export default Practical;