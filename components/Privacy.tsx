/* eslint-disable @next/next/no-img-element */
"use client";
export default function Privacy() {
  return (
    <section className="blk">
      <div className="wrap priv">
        <div>
          <div className="sec-eye reveal">Privacy first</div>
          <h2 className="reveal">Your name stays hidden.<br />Your voice <span className="it">doesn&apos;t.</span></h2>
        </div>
        <div className="privacy-photo reveal">
          <img
            src="/privacy.jpg"
            alt="Anonymous silhouette in blue light"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              e.currentTarget.parentElement?.classList.add("noimg");
            }}
          />
          <div className="pp-overlay">
            <div className="pp-lock">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="46" height="46"><rect x="5" y="11" width="14" height="9" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
            </div>
            <div className="pp-cap">100% anonymous</div>
          </div>
        </div>
      </div>
    </section>
  );
}
