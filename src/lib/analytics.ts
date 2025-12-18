// Google Analytics event tracking utility

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Specific event tracking functions
export const trackPhoneClick = (location: string) => {
  trackEvent('phone_click', 'contact', location)
}

export const trackEmailClick = (location: string) => {
  trackEvent('email_click', 'contact', location)
}

export const trackSocialClick = (platform: string, location: string) => {
  trackEvent('social_click', 'social', `${platform}_${location}`)
}

export const trackNavigationClick = (section: string) => {
  trackEvent('navigation_click', 'navigation', section)
}

export const trackServiceClick = (serviceName: string) => {
  trackEvent('service_click', 'services', serviceName)
}

export const trackGalleryClick = (type: 'before' | 'after', index: number) => {
  trackEvent('gallery_click', 'gallery', `${type}_${index}`)
}
