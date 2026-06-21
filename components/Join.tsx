"use client";
import { useState } from "react";
export default function Join() {
  const [joined, setJoined] = useState(false);
  const [email, setEmail] = useState("");
  const submit = () => { if (email && email.includes("@")) setJoined(true); };
  return (
    <section className="blk center" id="join">
      <div className="wrap">
        <div className="sec-eye reveal">Request access</div>
        <h2 className="reveal">Be unseen <span className="it">first.</span></h2>
        <p className="sub reveal" style={{ opacity: 1, animation: "none", marginTop: 18 }}>
          Founding members get a permanent mark when their campus goes live.
        </p>
        <div style={{ marginTop: 30 }}>
          {!joined ? (
            <div className="form" style={{ animation: "none" }}>
              <input type="email" placeholder="your.name@university.edu" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button onClick={submit}>Request invite</button>
            </div>
          ) : (
            <div className="done">✓ You&apos;re on the list. Welcome to the quiet.</div>
          )}
        </div>
      </div>
    </section>
  );
}
