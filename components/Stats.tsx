"use client";
import { useEffect } from "react";
export default function Stats() {
  useEffect(() => {
    let counted = false;
    const sio = new IntersectionObserver((es) => {
      if (es[0].isIntersecting && !counted) {
        counted = true;
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((c) => {
          const t = +(c.dataset.count || "0"); const sfx = c.dataset.suffix || "";
          let v = 0; const s = t / 50;
          const iv = setInterval(() => { v += s; if (v >= t) { v = t; clearInterval(iv); } c.textContent = Math.floor(v) + sfx; }, 26);
        });
      }
    }, { threshold: 0.4 });
    const s4 = document.querySelector(".stats");
    if (s4) sio.observe(s4);
    return () => sio.disconnect();
  }, []);
  return (
    <section className="blk">
      <div className="wrap">
        <div className="stats">
          <div className="stat reveal"><div className="n" data-count="100" data-suffix="+">0</div><div className="l">Campuses</div></div>
          <div className="stat reveal"><div className="n" data-count="50" data-suffix="K+">0</div><div className="l">Conversations</div></div>
          <div className="stat reveal"><div className="n" data-count="10" data-suffix="K+">0</div><div className="l">Students</div></div>
        </div>
      </div>
    </section>
  );
}
