import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service_id: "w@motoService",
    template_id: "wamoto_template",
    user_id: "tikmJa68SrB2qjfjG",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.sendForm(
        formData.service_id,
        formData.template_id,
        event.target,
        formData.user_id
      );

      if (response.status === 200) {
        alert("Your mail is sent!");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setError("Oops... " + error.message);
      console.log("Owayeeeeeee", formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mailto:w4wamoto@gmail.com</h5>
            <a href="mailto:w4wamoto@gmail.com">Send a message</a>
          </article>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {loading ? (
            <button type="submit" className="btn btn-primary">
              Sending....
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          )}
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </section>
  );
};

export default Contacts;

// import React from "react";
// import "./contacts.css";
// import { MdOutlineEmail } from "react-icons/md";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { useState } from "react";

// const Contacts = () => {
//   const [formData, setFormData] = useState({
//     service_id: "w@motoService",
//     template_id: "wamoto_template",
//     user_id: "9SS1dbElkHUJnyn7e",
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://api.emailjs.com/api/v1.0/email/send-form",
//         new FormData(event.target)
//       );

//       if (response.status !== 200) {
//         throw new Error("Failed to send email");
//       }

//       alert("Your mail is sent!");
//     } catch (error) {
//       alert("Oops... " + error.message);
//     }
//   };

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="hidden" name="service_id" value={formData.service_id} />
//       <input type="hidden" name="template_id" value={formData.template_id} />
//       <input type="hidden" name="user_id" value={formData.user_id} />
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         onChange={handleChange}
//       />
//       <textarea
//         name="message"
//         placeholder="Message"
//         onChange={handleChange}
//       ></textarea>
//       <button type="submit">Send Message</button>
//     </form>
//   );
//   const form = useRef();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [stateMessage, setStateMessage] = useState(null);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm("w@motoService", "wamoto_template", form.current).then(
//       (response) => {
//         console.log("SUCCESS!", response.status, response.text);
//       },
//       (error) => {
//         console.log("FAILED...", error);
//       }
//     );
//     e.target.reset();
//   };

//   return (
//     <section id="contacts">
//       <h5>Get in touch</h5>
//       <h2>Contact Me</h2>

//       <div className="container contact__container">
//         <div className="contact__options">
//           <article className="contact__option">
//             <MdOutlineEmail className="contact__option-icon" />
//             <h4>Email</h4>
//             <h5>w4wamoto@gmail.com</h5>
//             <a href="mailto:w4wamoto@gmail.com">Send a message</a>
//           </article>
//         </div>

//         <form ref={form} onSubmit={sendEmail}>
//           <label>Name</label>
//           <input type="text" name="user_name" />
//           <label>Email</label>
//           <input type="email" name="user_email" />
//           <label>Message</label>
//           <textarea name="message" />
//           <input type="submit" value="Send" disabled={isSubmitting} />
//           {stateMessage && <p>{stateMessage}</p>}
//         </form>
//       </div>
//     </section>
//     // <section id="contacts">
//     //   <h5>Get in touch</h5>
//     //   <h2>Contact Me</h2>

//     //   <div className="container contact__container">
//     //     <div className="contact__options">
//     //       <article className="contact__option">
//     //         <MdOutlineEmail className="contact__option-icon" />
//     //         <h4>Email</h4>
//     //         <h5>wamototimothy@gmail.com</h5>
//     //         <a href="mailto:wamototimothy@gmail.com">Send a message</a>
//     //       </article>
//     //     </div>

//     //     <form onSubmit={sendEmail}>
//     //       <input
//     //         type="text"
//     //         name="name"
//     //         placeholder="Your Full Name"
//     //         required
//     //       />{" "}
//     //       {/* client side validation */}
//     //       <input type="email" name="email" placeholder="Your Email" required />
//     //       <textarea
//     //         name="message"
//     //         rows="7"
//     //         placeholder="Your Message"
//     //         required
//     //       ></textarea>
//     //       <button type="submit" className="btn btn-primary">
//     //         Send Message
//     //       </button>
//     //     </form>
//     //   </div>
//     // </section>
//   );
// };

// export default Contacts;
