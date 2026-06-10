import StaticPageShell from '@/components/StaticPageShell'

export default function PrivacyPolicy() {
  return (
    <StaticPageShell
      title="Privacy Policy"
      eyebrow="Frontend-only website policy"
    >
      <p>
        This website is deployed as a frontend-only experience. We do not run a
        custom backend for storing inquiries, accounts, or payment details
        through this app.
      </p>
      <p style={{ marginTop: '1rem' }}>
        If you choose to use a contact form on this site, your browser opens
        your local email app with a prefilled draft instead of sending data to a
        server. Information you include in that draft is only sent if you decide
        to send the email yourself.
      </p>
      <p style={{ marginTop: '1rem' }}>
        Third-party services linked from this site, including online ordering,
        maps, fonts, and externally hosted media, may collect their own usage
        data under their respective privacy policies.
      </p>
      <p style={{ marginTop: '1rem' }}>
        If you have privacy questions about this website or want information
        removed from public-facing content, contact
        {' '}
        <a href="mailto:teamzafran@zafranrestaurant.com">
          teamzafran@zafranrestaurant.com
        </a>
        .
      </p>
    </StaticPageShell>
  )
}
