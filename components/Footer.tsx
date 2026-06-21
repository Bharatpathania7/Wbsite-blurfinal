/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <img src="/logo.png" alt="blur" />
        <div className="fl">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/guidelines">Guidelines</Link>
          <a
            href="https://www.instagram.com/joinblur?igsh=c3BnNm5udXFmYmc1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="cp">© 2026 blur · say it. stay unseen.</div>
      </div>
    </footer>
  );
}
