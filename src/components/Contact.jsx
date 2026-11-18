import { useState } from "react";
import { NAME_RE, hasLetter } from "../validation";

const EMPTY = { name: "", email: "", company: "", message: "" };

// Returns an object of error messages (empty object = valid).
function validate(v) {
  const e = {};
  if (!NAME_RE.test(v.name.trim())) e.name = "Enter a valid name (letters only, no numbers).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email, like name@company.com.";
  if (v.company.trim().length < 2 || !hasLetter(v.company)) e.company = "Enter a valid company name.";
  if (v.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setSent(false);
    if (Object.keys(found).length === 0) {
      setSent(true); // demo only: no backend
      setValues(EMPTY);
    }
  };

  const field = (name, label, type = "text") => (
    <div className="mb-3">
      <label className="form-label fw-semibold" htmlFor={name}>{label}</label>
      {name === "message"
        ? <textarea id={name} name={name} rows="4" className={`form-control ${errors[name] ? "is-invalid" : ""}`} value={values[name]} onChange={onChange} />
        : <input id={name} name={name} type={type} className={`form-control ${errors[name] ? "is-invalid" : ""}`} value={values[name]} onChange={onChange} />}
      <div className="invalid-feedback">{errors[name]}</div>
    </div>
  );

  return (
    <section id="contact" className="nx-section nx-alt">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <div className="nx-head"><h2>Request a demo</h2><p>Tell us about your team and we’ll reply within one business day.</p></div>
            <p><i className="bi bi-envelope me-2 text-primary" />hello@nexora.example</p>
            <p><i className="bi bi-telephone me-2 text-primary" />+91 00000 00000</p>
            <p><i className="bi bi-geo-alt me-2 text-primary" />Guntur, Andhra Pradesh</p>
          </div>
          <div className="col-lg-7">
            <form className="nx-card" onSubmit={onSubmit} noValidate>
              {field("name", "Full name")}
              {field("email", "Email address", "email")}
              {field("company", "Company name")}
              {field("message", "Message")}
              <button className="btn btn-nx" type="submit">Request demo</button>
              {sent && <div className="alert alert-success mt-3 mb-0" role="status">Thanks! Your request is in. We’ll reply within one business day.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
