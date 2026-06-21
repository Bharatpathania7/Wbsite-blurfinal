"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
  const launchDate = new Date("2026-06-22T00:00:00");
  const now = new Date();

  const daysPassed = Math.floor(
    (now.getTime() - launchDate.getTime()) /
    (1000 * 60 * 60 * 24)
  );

  let target = 0;

  if (daysPassed <= 0) target = 0;
  else if (daysPassed === 1) target = 25;
  else if (daysPassed === 2) target = 50;
  else if (daysPassed === 3) target = 100;
  else target = 100 + (daysPassed - 3) * 20;

  const counter = document.getElementById("count");

  let current = 0;

  const iv = setInterval(() => {
    current += Math.ceil(target / 30);

    if (current >= target) {
      current = target;
      clearInterval(iv);
    }

    if (counter) counter.textContent = `${current}+`;
  }, 30);

  return () => clearInterval(iv);
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
