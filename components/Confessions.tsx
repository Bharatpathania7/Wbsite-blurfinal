const posts = [
  { who: "@anon · CSE'24 · NIT Trichy", text: "I cried in the library and nobody noticed." },
  { who: "@anon · MECH'25 · VIT Vellore", text: "Rejected by 14 companies in a row — still going." },
  { who: "@anon · CSE'26 · IIIT Hyderabad", text: "I've been pretending to understand DSA for 2 years." },
];
export default function Confessions() {
  return (
    <section className="blk">
      <div className="wrap">
        <div className="sec-eye reveal">Real posts, real campuses</div>
        <h2 className="reveal">Some thoughts were never meant to <span className="it">stay silent.</span></h2>
        <div className="confs">
          {posts.map((p, i) => (
            <div className="conf reveal" key={i}>
              <div className="qu">{p.who}</div>
              <p>&ldquo;{p.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
