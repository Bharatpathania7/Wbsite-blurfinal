/* eslint-disable @next/next/no-img-element */
export default function Showcase() {
  return (
    <section className="blk showcase-hero" id="explore">
      <div className="sec-eye reveal" style={{ textAlign: "center" }}>The app</div>
      <h2 className="reveal" style={{ textAlign: "center", margin: "0 auto 14px" }}>
        Where campus <span className="it">talks.</span>
      </h2>
      <p className="reveal" style={{ textAlign: "center", maxWidth: 440, margin: "0 auto 70px", color: "var(--mute)", fontSize: 17 }}>
        Real voices, zero names. Drop into your campus feed, react, and say the
        things you&apos;d never say out loud — all completely anonymous.
      </p>

      <div className="stage">
        {/* floating confession cards */}
        <div className="fcard fc-tl reveal">
          <div className="fc-head"><span className="fc-av" style={{ background: "#7C3AED" }}>S</span><div><div className="fc-name">@anon · 0m ago</div><div className="fc-loc">⚲ Mumbai</div></div></div>
          <div className="fc-text">guess who got too drunk last night 😭 #fridaynight</div>
          <div className="fc-acts"><span>♡ 0</span><span>💬 0</span><span>↗</span></div>
        </div>
        <div className="fcard fc-tr reveal">
          <div className="fc-text big">&ldquo;I changed my major and never told my parents.&rdquo;</div>
          <div className="fc-meta">CSE&apos;25 · anonymous</div>
        </div>
        <div className="fcard fc-bl reveal">
          <div className="fc-text big">&ldquo;Anyone else surviving on 3 hours of sleep?&rdquo;</div>
          <div className="fc-meta">#latenight · 2.1k likes</div>
        </div>
        <div className="fcard fc-br reveal">
          <div className="fc-head"><span className="fc-av" style={{ background: "#0EA5E9" }}>M</span><div><div className="fc-name">@anon · placements</div><div className="fc-loc">VIT Vellore</div></div></div>
          <div className="fc-text">finally got the offer 🎉 cried a little ngl</div>
          <div className="fc-acts"><span>♡ 4.1k</span><span>💬 88</span><span>↗</span></div>
        </div>

        {/* small floating bits */}
        <div className="fbit fb-like reveal">♥ <b>+2.4k</b></div>
        <div className="fbit fb-live reveal"><span className="lvd" /> 312 online now</div>
        <div className="fpill fp-anon reveal">🕶️ 100% anonymous</div>
        <div className="freact fr-1 reveal">🔥</div>
        <div className="freact fr-2 reveal">😭</div>
        <div className="freact fr-3 reveal">💀</div>
        <div className="fbadge reveal"><div className="fb-num">50K+</div><div className="fb-lbl">conversations</div></div>

        {/* center phone */}
        <div className="show-phone reveal">
          <div className="device">
            <div className="dnotch" />
            <div className="dscreen">
              <div className="dtop">
                <img className="dlogo" src="/logo.png" alt="blur" />
                <svg className="dsearch" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
              </div>
              <div className="dtabs"><span className="on">All</span><span>My Campus</span><span>Trending</span><span>For You</span></div>
              <div className="dfeed">
                <div className="dpost">
                  <div className="dhead"><span className="dav" style={{ background: "#7C3AED" }}>C</span><div><div className="dname">CSE&apos;24 <em className="dtag" style={{ color: "#A78BFA", background: "rgba(124,58,237,.15)" }}>NIT Trichy</em></div><div className="dmeta">12h · #Confessions</div></div></div>
                  <div className="dttl">I cried in the library and nobody noticed</div>
                  <div className="dbody">Was having a really bad day, sat in the corner and just broke down. Nobody even looked up.</div>
                  <div className="dacts"><span>♡ 2.8k</span><span>💬 312</span><span>↗ Share</span></div>
                </div>
                <div className="dpost">
                  <div className="dhead"><span className="dav" style={{ background: "#0EA5E9" }}>M</span><div><div className="dname">MECH&apos;25 <em className="dtag" style={{ color: "#38BDF8", background: "rgba(14,165,233,.15)" }}>VIT Vellore</em></div><div className="dmeta">1d · #Placement Pressure</div></div></div>
                  <div className="dttl">Rejected by 14 companies in a row — still going</div>
                  <div className="dbody">14 rejections, 3 still pending. Resume reviewed 6 times. I refuse to give up.</div>
                  <div className="dacts"><span>♡ 4.1k</span><span>💬 438</span><span>↗ Share</span></div>
                </div>
              </div>
              <div className="dnav">
                <span className="on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5" /><path d="M5 9.5V20h14V9.5" /></svg><i>Feed</i></span>
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" /></svg><i>Lounges</i></span>
                <span className="dplus"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"><path d="M12 6v12M6 12h12" /></svg></span>
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.7L3 21l1.8-5.8A8.5 8.5 0 1 1 21 11.5Z" /></svg><i>DMs</i></span>
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg><i>Profile</i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
