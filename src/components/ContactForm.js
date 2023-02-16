import React, { useRef } from "react";
import styled from "styled-components";



const Contact = () => {
  const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "replace with service id",
//         "replace with template id",
//         form.current,
//         "replace with user id"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

  return (
    <section className="skill" id="services">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Services</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <StyledContactForm>
                            <form ref={form} >
                                <label style={{marginLeft:'10%'}}>Name</label>
                                <input type="text" name="user_name" placeholder="Enter Your Name"/>
                                <label style={{marginLeft:'10%'}}>Email</label>
                                <input type="email" name="user_email" placeholder="Enter Your Email"/>
                                <label style={{marginLeft:'10%'}}>Message</label>
                                <textarea  name="message" placeholder="Description"/>
                                <input type="submit" value="Send" />
                            </form>
                        </StyledContactForm>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: '80%';
  
  form {
    label{
      marginLeft:'40px'
    }
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 22px;
    input {
      display: flex;
      align-self: center;
      width: 80%;
      height: 45px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      display: flex;
      align-self: center;
      max-width: 80%;
      min-width: 80%;
      width: 80%;
      max-height: 80;
      min-height: 80;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
