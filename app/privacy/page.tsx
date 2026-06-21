import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy · blur",
  description: "How blur protects your anonymity. We never link you to what you post.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        blur exists for one reason: so students can speak freely without being
        seen. Privacy isn&apos;t a feature we added on top — it&apos;s the
        foundation everything else is built on. This page explains, in plain
        language, what we collect, what we don&apos;t, and how your anonymity is
        protected.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>We never attach your real identity to anything you post.</li>
        <li>Your university email is used once to verify you&apos;re a student, then it is hashed beyond recovery.</li>
        <li>We do not sell, rent, or share your data with advertisers — ever.</li>
        <li>No tracking pixels, no shadow profiles, no selling your activity.</li>
      </ul>

      <h2>What we collect</h2>
      <p>
        To keep blur a real, students-only space, we verify that each account
        belongs to an actual university student. During sign-up we ask for a
        valid <strong>.edu (or recognised university) email address</strong>.
        The moment verification succeeds, that email is converted into an
        irreversible cryptographic hash. We cannot read it back, and it is never
        stored alongside your posts.
      </p>
      <p>
        We store the content you choose to share (posts, reactions, messages)
        and basic technical data needed to run the service securely — but none
        of it is linked to your real-world identity.
      </p>

      <h2>What we never do</h2>
      <p>
        We never sell your data. We never build advertising profiles about you.
        We never reveal which posts came from which account to other users. If
        a government or third party requests information, we can only ever
        provide what we actually hold — which, by design, cannot identify you
        from your posts.
      </p>

      <h2>Your control</h2>
      <p>
        You can delete your posts or your entire account at any time. When you
        delete your account, your content and verification hash are removed from
        our active systems.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about your privacy? Reach us on Instagram{" "}
        <a href="https://www.instagram.com/joinblur?igsh=c3BnNm5udXFmYmc1" target="_blank" rel="noopener noreferrer">@joinblur</a>.
      </p>
    </LegalPage>
  );
}
