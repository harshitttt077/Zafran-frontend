import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router-dom'

const CONTACT_EMAIL = 'teamzafran@zafranrestaurant.com'

const actionMessages: Record<string, string> = {
  order:
    'Online ordering will be connected inside this Zafran site soon. For now, please call +91 98110 45808.',
  delivery:
    'Delivery links will be connected here soon. For now, please call +91 98110 45808 to order.',
  giftCard:
    'Gift cards will be available from this Zafran site soon. Please contact the restaurant for now.',
}

function toMailtoLink(form: HTMLFormElement) {
  const formData = new FormData(form)
  const entries = Array.from(formData.entries()).filter(
    ([, value]) => typeof value === 'string' && value.trim().length > 0,
  )
  const name =
    (formData.get('Name') as string | null) ??
    (formData.get('name') as string | null) ??
    'Guest'

  const lines = entries.map(([field, value]) => {
    const normalizedField = field.replace(/[-_]/g, ' ').replace(/\b\w/g, (char) =>
      char.toUpperCase(),
    )

    return `${normalizedField}: ${String(value).trim()}`
  })

  const subject = encodeURIComponent(
    `${form.dataset.name ?? 'Website'} inquiry from ${name.trim() || 'Guest'}`,
  )
  const body = encodeURIComponent(lines.join('\n'))

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

export default function FrontendOnlyEnhancements() {
  const location = useLocation()

  useEffect(() => {
    const cleanup: Array<() => void> = []

    document.querySelectorAll<HTMLAnchorElement>('a[href="#"]').forEach((link) => {
      const emailText = link.textContent?.trim().replace(/\s+/g, '') ?? ''
      const action = link.dataset.frontendAction

      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailText)) {
        link.href = `mailto:${emailText.toLowerCase()}`
        return
      }

      const onClick = (event: MouseEvent) => {
        event.preventDefault()
        toast(action && actionMessages[action]
          ? actionMessages[action]
          : 'This link is part of the frontend-only demo and will be connected later.')
      }

      link.addEventListener('click', onClick)
      cleanup.push(() => link.removeEventListener('click', onClick))
    })

    document.querySelectorAll<HTMLFormElement>('.w-form form').forEach((form) => {
      const wrapper = form.closest('.w-form')
      const successMessage = wrapper?.querySelector<HTMLElement>('.w-form-done')
      const errorMessage = wrapper?.querySelector<HTMLElement>('.w-form-fail')

      const onSubmit = (event: Event) => {
        event.preventDefault()

        if (!form.reportValidity()) {
          return
        }

        window.location.href = toMailtoLink(form)
        form.reset()

        if (form instanceof HTMLElement) {
          form.style.display = 'none'
        }

        if (errorMessage) {
          errorMessage.style.display = 'none'
        }

        if (successMessage) {
          successMessage.style.display = 'block'
        }

        toast.success('Your email app has been opened with this inquiry.')

        window.setTimeout(() => {
          if (form instanceof HTMLElement) {
            form.style.display = ''
          }

          if (successMessage) {
            successMessage.style.display = 'none'
          }
        }, 4000)
      }

      form.addEventListener('submit', onSubmit)
      cleanup.push(() => form.removeEventListener('submit', onSubmit))
    })

    return () => {
      cleanup.forEach((dispose) => dispose())
    }
  }, [location.pathname])

  return null
}
