"use client";
import { useState } from "react";
const faqs = [
  { q: "Is blur really anonymous?", a: "Completely. Your .edu email is only used once to verify you're a real student, then hashed beyond recovery. Nothing you post can be traced back to you." },
  { q: "Who can see my posts?", a: "Only verified students from your campus. Every lounge is filled with people who actually share your college — no outsiders, no bots." },
  { q: "How do I get in?", a: "Access is by invitation as we roll out campus by campus. Drop your university email and you'll get your invite when your campus goes live." },
  { q: "Do you sell my data?", a: "Never. No tracking, no shadow profiles, no data for sale — that would break the entire promise." },
];
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="blk center">
      <div className="wrap">
        <div className="sec-eye reveal">Questions</div>
        <h2 className="reveal">Everything you <span className="it">want to know.</span></h2>
        <div className="faq">
          {faqs.map((f, i) => (
            <div className={"fitem" + (open === i ? " open" : "")} key={i}>
              <button className="fq" onClick={() => setOpen(open === i ? null : i)}>{f.q}<span className="fic">+</span></button>
              <div className="fa" style={{ maxHeight: open === i ? 240 : 0 }}><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
