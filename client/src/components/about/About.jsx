import useFetch from "../../hooks/useFetch";
import "../../styles/_about.scss";

const About = () => {

  return (
    <div className="About">
     <h4 className="About--heading">METRO NZ - AUCKLAND PROPERTY MANAGEMENT COMPANY</h4>

     <div className="About--contents">
      <video controls height="350px" className="video" src={video}></video>
      <p1 className="About--contents1P">We excel in property management tasks, going above and beyond to deliver exceptional service. One of our unique offerings is arranging property staging, which attracts high-quality tenants. Our specialized leasing team implements a rigorous tenant selection process, leaving no room for compromise. Our obligation-free appraisals guarantee the best returns for property owners. With extensive knowledge of the Central Auckland, Auckland suburbs, and other areas in New Zealand, we effectively manage properties and understand the market.</p1>
      </div>

      <div className="About--contents2P">
      <p1>Metro NZ excels in strategy and planning, ensuring that our systems are robust and comprehensive. From the initial contact and agreement to tenant management and long-term property care, we provide exceptional services. Our experienced team in the Auckland region is ready to assist you. Enjoy top-notch property management services by contacting us. We take pride in being finalists for the Westpac Business Awards, highlighting our commitment to excellence.</p1>
      </div>
     </div>
  );
};

export default About;