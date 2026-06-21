import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Community Guidelines · blur",
  description: "The rules that keep blur a safe, honest, anonymous campus space.",
};

export default function Guidelines() {
  return (
    <LegalPage title="Community Guidelines" updated="June 2026">
      <p>
        blur works because people feel safe being honest. That only stays true
        if everyone treats the space with respect. These guidelines keep blur a
        place worth being part of.
      </p>

      <h2>Be real, not cruel</h2>
      <p>
        Speak your mind, vent, confess, joke — but never target, harass, or
        bully another person. Anonymity is for honesty, not for hurting people.
      </p>

      <h2>Protect anonymity — yours and others&apos;</h2>
      <p>
        Don&apos;t try to identify, expose, or doxx anyone. Don&apos;t post
        someone&apos;s name, photos, contact details, or private information.
        Outing a person breaks the single most important promise of blur.
      </p>

      <h2>No hate, no threats</h2>
      <p>
        Hate speech, threats of violence, and content that attacks people based
        on who they are have no place here. This is a zero-tolerance area.
      </p>

      <h2>Keep it legal &amp; safe</h2>
      <p>
        No illegal content, no sexual content involving minors, no promotion of
        self-harm or dangerous activity, no spam or scams. If someone seems to
        be in danger, encourage them toward real help.
      </p>

      <h2>No spam or manipulation</h2>
      <p>
        Don&apos;t flood the feed, run bots, fake engagement, or advertise. Keep
        the space genuine for actual students.
      </p>

      <h2>How we enforce this</h2>
      <p>
        Posts can be reported by anyone. Content that breaks these guidelines
        may be removed, and accounts that repeatedly or seriously violate them
        may lose access — anonymity included. We aim to be fair, but we will
        always act to protect the community.
      </p>

      <h2>Report something</h2>
      <p>
        See something that crosses the line? Use the report option in the app,
        or reach us on Instagram{" "}
        <a href="https://www.instagram.com/joinblur?igsh=c3BnNm5udXFmYmc1" target="_blank" rel="noopener noreferrer">@joinblur</a>.
      </p>
    </LegalPage>
  );
}
