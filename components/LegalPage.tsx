/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Background from "@/components/Background";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Background />
      <div className="legal-nav">
        <Link href="/" className="legal-back">
          <img src="/logo.png" alt="blur" />
        </Link>
        <Link href="/" className="legal-home">← Back to home</Link>
      </div>
      <main className="legal">
        <div className="legal-wrap">
          <div className="legal-eye">Legal</div>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-updated">Last updated · {updated}</p>
          <div className="legal-body">{children}</div>
          <div className="legal-foot">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/guidelines">Guidelines</Link>
            <a href="https://www.instagram.com/joinblur?igsh=c3BnNm5udXFmYmc1" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="legal-cp">© 2026 blur · say it. stay unseen.</div>
        </div>
      </main>
    </>
  );
}
