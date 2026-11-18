import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAME_RE } from "../validation";

const EMPTY = { name: "", email: "", password: "" };

function validate(v, login) {
  const e = {};
  if (!login && !NAME_RE.test(v.name.trim())) e.name = "Enter a valid name (letters only, no numbers).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email, like name@company.com.";
  if (v.password.length < 8) e.password = "Use at least 8 characters.";
  return e;
}

// Sign-up / log-in dialog. Nothing is sent anywhere: it only validates and shows success.
export default function RegisterModal({ mode, onMode, onClose }) {
  const login = mode === "login";
  const [v, setV] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  const switchMode = () => { setErrors({}); setDone(false); onMode(login ? "register" : "login"); };
  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(v, login);
    setErrors(found);
    if (Object.keys(found).length === 0) setDone(true);
  };
  const goDashboard = () => { onClose(); document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" }); };

  const field = (name, text, type = "text", auto) => (
    <div className="mb-3">
      <label className="form-label fw-semibold" htmlFor={`m-${name}`}>{text}</label>
      <input id={`m-${name}`} type={type} autoComplete={auto} className={`form-control ${errors[name] ? "is-invalid" : ""}`} value={v[name]} onChange={(e) => setV({ ...v, [name]: e.target.value })} />
      <div className="invalid-feedback">{errors[name]}</div>
    </div>
  );

  return (
    <>
      <div className="modal d-block" role="dialog" aria-modal="true" aria-labelledby="m-title" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content nx-modal p-2">
            <div className="modal-header border-0 pb-0">
              <div><div className="mb-3"><Logo size={26} /></div><h2 className="modal-title h4 fw-bold" id="m-title">{done ? (login ? "Welcome back" : "You’re all set") : login ? "Log in to Nexora" : "Create your free account"}</h2></div>
              <button className="btn-close" aria-label="Close" onClick={onClose} />
            </div>
            <div className="modal-body">
              {done ? (
                <div className="text-center py-3">
                  <i className="bi bi-check-circle-fill text-success display-4" />
                  <p className="mt-3">{login ? "You’re logged in." : "Account created. Welcome to Nexora!"}</p>
                  <button className="btn btn-nx" onClick={goDashboard}>Go to dashboard</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  {!login && field("name", "Full name", "text", "name")}
                  {field("email", "Work email", "email", "email")}
                  {field("password", "Password", "password", login ? "current-password" : "new-password")}
                  <button className="btn btn-nx w-100" type="submit">{login ? "Log in" : "Create account"}</button>
                  <p className="small text-center mt-3 mb-0">
                    {login ? "New to Nexora? " : "Already have an account? "}
                    <button type="button" className="btn btn-link p-0 align-baseline" onClick={switchMode}>{login ? "Create an account" : "Log in"}</button>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show" />
    </>
  );
}
