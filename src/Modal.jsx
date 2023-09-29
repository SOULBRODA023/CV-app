
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Modal = ({ onSubmit }) => {
 
  const form = useForm();
  const { register, control, handleSubmit } = form;

  
  const handleFormSubmit = (data) => {
    onSubmit(data)
    console.log('form submitted', data);
  };

  return (
    <div className="modalContainer">
      <div className="modal">
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
          <button type="submit">Submit</button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default Modal;
