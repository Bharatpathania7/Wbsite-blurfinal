import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms · blur",
  description: "The terms of using blur, the anonymous campus network.",
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="June 2026">
      <p>
        Welcome to blur. By creating an account or using the app, you agree to
        these terms. We&apos;ve kept them short and readable — no walls of legal
        jargon.
      </p>

      <h2>1. Who can use blur</h2>
      <p>
        blur is for verified university students. You must be enrolled at a
        recognised institution and provide a valid university email to join.
        One account per person. You must be old enough to use a social platform
        under the laws of your country.
      </p>

      <h2>2. Your account</h2>
      <p>
        You&apos;re responsible for keeping your access secure. Because blur is
        anonymous, we can&apos;t always recover an account for you, so keep your
        login safe. Don&apos;t share, sell, or transfer your account.
      </p>

      <h2>3. What you post</h2>
      <p>
        You own what you write. By posting, you give blur permission to display
        that content within the app to other verified students. You&apos;re
        responsible for what you share, and you agree not to post anything
        illegal or anything that violates our Community Guidelines.
      </p>

      <h2>4. Anonymity is not a shield for harm</h2>
      <p>
        Being anonymous doesn&apos;t mean being unaccountable. Harassment,
        threats, doxxing, and illegal activity are not allowed and may result in
        removal from the platform. Serious illegal activity may be reported to
        the relevant authorities to the extent the law requires.
      </p>

      <h2>5. Changes &amp; availability</h2>
      <p>
        blur is evolving fast. We may update features, these terms, or pause the
        service for maintenance. If we make significant changes to these terms,
        we&apos;ll let you know in the app.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions? Reach us on Instagram{" "}
        <a href="https://www.instagram.com/joinblur?igsh=c3BnNm5udXFmYmc1" target="_blank" rel="noopener noreferrer">@joinblur</a>.
      </p>
    </LegalPage>
  );
}
