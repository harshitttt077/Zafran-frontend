import StaticPageShell from '@/components/StaticPageShell'

export default function TermsAndConditions() {
  return (
    <StaticPageShell
      title="Terms of Service"
      eyebrow="Frontend-only website terms"
    >
      <p>
        This website is a static frontend application intended to present
        Zafran&apos;s menus, spaces, and contact paths. Content may change without
        notice as the restaurant updates pricing, offers, hours, and seasonal
        availability.
      </p>
      <p style={{ marginTop: '1rem' }}>
        Online ordering, gift cards, maps, and any third-party destinations are
        handled outside this frontend app. When you leave this site, the terms
        and policies of the external provider apply.
      </p>
      <p style={{ marginTop: '1rem' }}>
        Contact and inquiry forms on this site do not post to a custom backend.
        They open your local email client with a draft message so you can review
        and send the inquiry yourself.
      </p>
      <p style={{ marginTop: '1rem' }}>
        By using this website, you agree not to misuse the content, branding, or
        assets presented here. If you need clarification about any offer or
        policy, please contact the restaurant directly before placing an order
        or making plans.
      </p>
    </StaticPageShell>
  )
}
