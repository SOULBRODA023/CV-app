const Practical = () => {
    return ( 
        <section className="practicals">
            <div className="name">
            <h4 className="title">EXPERIENCE</h4>
            <button>edit</button>
            </div>
            <div className="companyName">
                <b>{FormData.company}</b>
            </div>
            <div className="positionTitle">
                <p>{FormData.role}</p>
            </div>
            <div className="role">
                <ul>
                <li className="role1">{FormData.responsibilites}</li>
                <li className="role2">{FormData.responsibilities2}</li>
                <li className="role3">{FormData.responsibilities3}</li>
                </ul>
            </div>
            <div className="date">
                <p className="datebegan">{FormData.datebegan}</p>- <p className="dateexpired">{FormData.dateend}</p>
            </div>

        </section>
    );
}
 
export default Practical;