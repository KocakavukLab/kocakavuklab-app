import { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import LocationMap from "../common/LocationMap";
import GoToTopButton from "../common/GoToTopButton";
import coverImg from "../../assets/covers/maincover.optimized.webp";
import "../../App.css";

// ---- Theme (light) ----
const T = { page: "#F6F2EC", surface: "#FFFFFF", ink: "#14181F", muted: "#5B6472", line: "#E4DCD1", field: "#FBFAF8" };
const DISPLAY = '"Space Grotesk", system-ui, sans-serif';
const BODY = '"DM Sans", system-ui, -apple-system, sans-serif';
const MONO = "ui-monospace, 'SF Mono', Menlo, monospace";
const ORANGE = "#FF914D";

const Contact = () => {
  useEffect(() => {
    emailjs.init("wprxy5IfLB3zRbbj9");
  }, []);

  const [checked, setChecked] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(e.target.value));
    setEmailTouched(true);
    handleInputChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('input[type="submit"]');
    btn.value = "Sending...";
    emailjs.sendForm("default_service", "template_75zmo4n", e.target).then(
      () => {
        btn.value = "Send Message";
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
        setChecked(false);
        setEmailValid(false);
        setEmailTouched(false);
      },
      (err) => {
        btn.value = "Send Message";
        alert("Error sending message: " + JSON.stringify(err));
      }
    );
  };

  const label = "mb-2 block text-sm font-semibold";
  const input = "w-full rounded-xl border px-4 py-4 text-base outline-none focus:border-[#FF914D]";

  return (
    <div className="min-h-screen" style={{ background: T.page, fontFamily: BODY }}>
      {/* Header band */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coverImg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ORANGE, fontFamily: MONO }}>Contact</p>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: DISPLAY, letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,.5)" }}>Get in Touch</h1>
          <p className="mt-2 text-white/85">We'd love to hear from you.</p>
        </div>
      </header>

      <div className="contact-section mx-auto w-full max-w-[1440px] px-6 py-14">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border bg-white shadow-sm md:grid-cols-2" style={{ borderColor: T.line }}>
          {/* 01 Message */}
          <div className="p-6 md:p-8 md:border-r" style={{ borderColor: T.line }}>
            <div className="flex items-center gap-2.5">
              <span className="text-lg font-extrabold" style={{ fontFamily: DISPLAY, color: ORANGE }}>01</span>
              <span className="text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: T.ink }}>Message</span>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="mt-5">
              <div className="mb-4">
                <label className={label} style={{ color: T.ink }} htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required className={input} style={{ borderColor: T.line, background: T.field, color: T.ink }} />
              </div>
              <div className="mb-4">
                <label className={label} style={{ color: T.ink }} htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleEmailChange} required className={input} style={{ borderColor: emailTouched && !emailValid ? "#D14343" : T.line, background: T.field, color: T.ink }} />
                {emailTouched && !emailValid && <p className="mt-1.5 text-[12px] text-[#D14343]">⚠ Please enter a valid email address.</p>}
              </div>
              <div className="mb-4">
                <label className={label} style={{ color: T.ink }} htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6" value={formData.message} onChange={handleInputChange} required className={input} style={{ borderColor: T.line, background: T.field, color: T.ink }} />
              </div>
              <label className="mb-4 flex items-start gap-2.5 text-[12.5px]" style={{ color: T.muted }}>
                <input type="checkbox" required checked={checked} onChange={() => setChecked(!checked)} className="mt-0.5 h-4 w-4 accent-[#FF914D]" />
                <span>I have read and agree to the <Link to="/privacypolicy" className="font-semibold" style={{ color: ORANGE }}>data privacy policy</Link> and the processing of my personal data.</span>
              </label>
              <input
                type="submit"
                value="Send Message"
                disabled={!checked || !emailValid}
                className={`rounded-xl px-6 py-3 text-sm font-bold transition ${checked && emailValid ? "cursor-pointer hover:brightness-95" : "cursor-not-allowed opacity-60"}`}
                style={{ background: ORANGE, color: "#14181F" }}
              />
            </form>
          </div>

          {/* 02 Location */}
          <div className="flex flex-col p-6 md:p-8">
            <div className="flex items-center gap-2.5">
              <span className="text-lg font-extrabold" style={{ fontFamily: DISPLAY, color: ORANGE }}>02</span>
              <span className="text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: T.ink }}>Location</span>
            </div>
            <div className="mt-5 flex gap-3 text-sm" style={{ color: T.muted }}>
              <FaMapMarkerAlt className="mt-0.5 flex-none" style={{ color: ORANGE }} />
              <span>West German Cancer Center<br />University Hospital Essen (AöR)<br />Hufelandstrasse 55, D-45147 Essen</span>
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm" style={{ color: T.muted }}>
              <FaEnvelope className="flex-none" style={{ color: ORANGE }} />
              <a href="mailto:emre.kocakavuk@uk-essen.de" className="hover:text-[#14181F]">emre.kocakavuk@uk-essen.de</a>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Universit%C3%A4tsklinikum%20Essen%20H%C3%A4matologie%20Hufelandstra%C3%9Fe%2055%20Essen"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center self-start text-sm font-semibold underline underline-offset-4"
              style={{ color: T.ink }}
            >
              Open Hematology location in Google Maps ↗
            </a>
            <LocationMap />
          </div>
        </div>
      </div>

      <GoToTopButton />
    </div>
  );
};

export default Contact;
