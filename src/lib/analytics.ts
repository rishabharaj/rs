import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (measurementId) {
    console.log('🚀 Initializing Google Analytics with ID:', measurementId);
    
    ReactGA.initialize(measurementId, {
      testMode: false,
      gaOptions: {
        send_page_view: true,
        debug_mode: import.meta.env.DEV // Enable debug mode in development
      }
    });
    
    console.log('✅ Google Analytics initialized successfully');
  } else {
    console.warn('⚠️ Google Analytics Measurement ID not found in environment variables');
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
