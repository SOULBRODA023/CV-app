
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Modal = ({ onSubmit , style, modalCont}) => {
 
  const form = useForm();
  const { register, control, handleSubmit } = form;

  
  const handleFormSubmit = (data) => {
    onSubmit(data)
    console.log('form submitted', data);
  };
 

  return (
    <div className="modalContainer" style={modalCont}>
      <div className="modal" style={style}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <section className="personalModal">
            <label htmlFor="fullname">Name</label>
            <input type="text" {...register("fullname")} id="fullname" autoComplete="off" placeholder="John Doe" />

            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} id="email" autoComplete="on" required placeholder="JohnDOe@email.com" />

            <label htmlFor="telephone">Telephone No</label>
            <input type="tel" {...register("telephone")} id="telephone" autoComplete="off" required placeholder="01-234-5678" />
            
            <textarea {...register("summary")} placeholder=" give a brief summary about yourself" rows={10} cols={35} className="textarea"/>
          </section>

          <section className="educationalModal">
            <label htmlFor="education">School Name</label>
            <input type="text" {...register("education")} id="Educational Institute" autoComplete="off" placeholder="University" required />

            <label htmlFor="course">Title of Study</label>
            <input type="text" {...register("course")} id="course" required placeholder="Course of study..." />

            <label htmlFor="date">Date of Study</label>
            <input type="date" {...register("date")} id="date" />
          </section>
          <section className="experience">
            <label htmlFor="company">Company worked for?<small><i>write nil if none</i></small></label>
            <input type="text" id="company"  {...register("company")} placeholder="Alphabet Inc..."/>

            <label htmlFor="role">Title</label>
            <input type="text" id="role" {...register("role")} placeholder="title while working..."/>

            <label htmlFor="responsibilities">responsibility</label>
            <input type="text" id="responsibilities" {...register("responsibilities")} placeholder="reponsibility in the company..." />
            <input type="text" id="responsibilities2" {...register("responsibilities2")} placeholder="reponsibility in the company..." />
            <input type="text" id="responsibilities3" {...register("responsibilities3")} placeholder="reponsibility in the company..." />

            <label htmlFor="datebegan" className="datebegan"> date start- end</label>
            <input type="date" {...register ("datebegan")}id=" datebegan" />
            <input type="date" {...register ("dateend")}id=" datebegan" />
          </section>
          <button type="submit">Submit</button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default Modal;
