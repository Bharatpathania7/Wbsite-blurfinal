const cats = ["Confessions","Placement Pressure","Engineering Lounge","Campus gossip","Relationships","Academics","Late-night thoughts"];
export default function Categories() {
  return (
    <section className="blk center">
      <div className="wrap">
        <div className="sec-eye reveal">What&apos;s inside</div>
        <h2 className="reveal">The side of campus you <span className="it">don&apos;t see online.</span></h2>
        <div className="cats">
          {cats.map((c) => (<div className="cat" key={c}><span className="dot" /> {c}</div>))}
        </div>
      </div>
    </section>
  );
}
