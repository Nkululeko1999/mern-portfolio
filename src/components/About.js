import resumeData from '../resumeData';
import profileUrl from '../assets/profile-1.jpg';

export default function About() {
  return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={profileUrl} alt="profile" />
            </div>

            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>{resumeData.aboutme}</p>

               <div className="row">
                  <div className="columns contact-details">
                  <h2>Address Details</h2>
                  <p className="address">
                     <span>{resumeData.name}</span>
                     <br></br>
                     <span>{resumeData.address}</span>
                     <br></br>
                     <span>{resumeData.website}</span>
       				</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    )
}
