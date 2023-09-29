import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    emailjs.init("wprxy5IfLB3zRbbj9");
  }, []);

  const [checked, setChecked] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setEmailValid(emailRegex.test(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('input[type="submit"]');
    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_75zmo4n";

    emailjs.sendForm(serviceID, templateID, e.target).then(
      () => {
        btn.value = "Send Email";
        alert("Sent!");

        // Clear form fields
        setFormData({ name: "", email: "", message: "" });
        setChecked(false);
        setEmailValid(false);
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  };
  const buttonClass = checked && emailValid ? "bg-green-500" : "bg-gray-200";
  return (
    <div className="justify-center items-center">
      {/* Heading */}
      <div className="text-center">
        <h1 className="most-font md:text-5xl text-3xl">Contact Us</h1>
      </div>

      {/* Mother Form Div */}
      <div className="grid grid-cols-3 mobile:grid-cols-1 gap-4">
        {/* Form Div */}
        <div className="md:container col-start-2 grid-cols-1 place-content-center grounded">
          <form onSubmit={handleSubmit} id="form" className="rounded">
            <div className="mb-4 field">
              <label
                className="members-subhead block text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block min-w-64"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4 field">
              <label
                className="members-subhead block text-gray-700 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block min-w-64"
                type="text"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => {
                  handleEmailChange(e);
                  handleInputChange(e);
                }}
              />
            </div>

            <div className="mb-6 field">
              <label
                className="members-subhead block text-gray-700 text-sm mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block min-w-64"
                name="message"
                id="message"
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <p className="monst-font mobile:text-left mobile:text-xs">
                <input
                  type="checkbox"
                  required
                  onChange={handleChange}
                  color="green"
                />{" "}
                I have read and agree with the{" "}
                <Link
                  to="/privacypolicy"
                  className="monst-font text-blue-600 hover:text-amber-500 visited:text-purple-700"
                >
                  data privacy policy
                </Link>{" "}
                and the processing of my personal data*
              </p>
            </div>

            <div className="justify-center">
              <input
                className={`monst-font text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline block ${buttonClass}`}
                type="submit"
                id="button"
                value="Submit"
                disabled={!checked || !emailValid}
              />
            </div>
          </form>
        </div>
      </div>

      {/* GMap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6 items-center">
        <div className="text-center">
          <h1 className="monst-font text-3xl md:text-5xl">
            Lab Location
          </h1>
        </div>
        <div className="col-span-1 md:container place-content-center">
          <iframe
            className="w-full h-56 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.1821154978984!2d6.9864337766158355!3d51.43644927179727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c2de2e687307%3A0x1ac25e006ad27840!2sEssen%20University%20Hospital%20Department%20of%20Hematology!5e0!3m2!1sen!2sde!4v1691880146400!5m2!1sen!2sde"
            loading="lazy"
            title="Lab Location Map"
            allowFullScreen=""
            style={{ border: 0 }}
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
