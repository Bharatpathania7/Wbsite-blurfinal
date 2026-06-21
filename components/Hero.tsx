"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const t = setTimeout(() => {
      const bar = document.getElementById("barFill");
      if (bar) bar.style.width = "72%";
    }, 200);
    const t2 = setTimeout(() => {
      let v = 0;
      const c = document.getElementById("count");
      const iv = setInterval(() => {
        v += 11;
        if (v >= 500) { v = 500; clearInterval(iv); }
        if (c) c.textContent = v + "+";
      }, 20);
    }, 900);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <section className="hero">
      <img className="logo" src="/logo.png" alt="blur" />
      <div className="tagline">Say it. Stay unseen.</div>
      <div className="divider">
        <span className="ln" />
        <span className="tx">By Invitation</span>
        <span className="ln" />
      </div>
      <h1 className="hero-h">
        Your campus&apos;s<br />
        <span className="it">anonymous</span><br />
        social network.
      </h1>
      <p className="sub">
        blur is a student-only network built around real people, real campuses,
        and real moments — completely anonymous.
      </p>
      <a href="#join" className="cta">Request invite →</a>
      <div className="card">
        <div className="card-row">
          <span className="lt"><span className="d" /> Exclusive access</span>
          <span className="rt">Limited spots</span>
        </div>
        <div className="pcount">
          <span className="n"><em id="count">0</em></span>
          <span className="lb">students already in</span>
        </div>
        <div className="bar"><i id="barFill" /></div>
        <div className="applynote">Don&apos;t worry — <b>you can still apply.</b></div>
      </div>
    </section>
  );
}
