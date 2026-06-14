// Types for Google Analytics
interface GTagEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

interface Window {
  gtag?: (...args: any[]) => void;
  dataLayer?: any[];
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Safely access the gtag function
 * @returns The gtag function or null if not available
 */
const getGtag = (): ((...args: any[]) => void) | null => {
  if (typeof window === 'undefined') return null;
  return window.gtag || null;
};

/**
 * Log a pageview to Google Analytics
 * @param url - The URL to log
 * @returns void
 */
export const pageview = (url: string): void => {
  try {
    if (!url) {
      console.warn('GA pageview: URL is required');
      return;
    }

    const gtag = getGtag();
    if (!gtag) {
      console.warn('GA pageview: gtag is not available');
      return;
    }

    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
    if (!GA_MEASUREMENT_ID) {
      console.warn('GA pageview: Measurement ID is not configured');
      return;
    }

    gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } catch (error) {
    console.error('GA pageview error:', error);
  }
};

/**
 * Log a custom event to Google Analytics
 * @param event - The event object containing action and optional parameters
 * @returns void
 */
export const event = ({ action, ...params }: GTagEvent): void => {
  try {
    if (!action) {
      console.warn('GA event: Action is required');
      return;
    }

    const gtag = getGtag();
    if (!gtag) {
      console.warn('GA event: gtag is not available');
      return;
    }

    gtag('event', action, params);
  } catch (error) {
    console.error('GA event error:', error);
  }
};
