import HeroArt from "./HeroArt";

export default function Hero({ onOpen }) {
  return (
    <header className="nx-hero text-white">
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <span className="badge rounded-pill nx-pill mb-3"><i className="bi bi-stars me-1" />AI-powered lead management</span>
            <h1 className="display-4 fw-bold mb-3">Turn Every Connection Into Your Next Opportunity.</h1>
            <p className="lead text-white-50 mb-4">
              Nexora finds prospects, keeps every lead in one place, and drafts follow-ups for you.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-nx btn-lg" onClick={() => onOpen("register")}>Start free trial <i className="bi bi-arrow-right ms-1" /></button>
              <a href="#dashboard" className="btn btn-outline-light btn-lg">Explore platform</a>
            </div>
            <small className="d-block mt-3 text-white-50"><i className="bi bi-check2-circle me-1" />Free plan. No credit card.</small>
          </div>
          <div className="col-lg-7"><HeroArt /></div>
        </div>
      </div>
    </header>
  );
}
