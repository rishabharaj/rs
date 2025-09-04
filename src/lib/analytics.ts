import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (measurementId) {
    ReactGA.initialize(measurementId);
  }
};

// Track page views
export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  ReactGA.event({
    action,
    category,
    label,
    value,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, section?: string) => {
  trackEvent('click', 'Button', `${section ? section + ' - ' : ''}${buttonName}`);
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  trackEvent('submit', 'Form', formName);
};

// Track downloads
export const trackDownload = (fileName: string) => {
  trackEvent('download', 'File', fileName);
};

// Track external links
export const trackExternalLink = (url: string) => {
  trackEvent('click', 'External Link', url);
};
