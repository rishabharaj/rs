// Google Analytics Debug Helper
// Add this to browser console to check if GA is working

// Check if Google Analytics is loaded
console.log('🔍 Google Analytics Debug Check:');

// 1. Check if gtag function exists
if (typeof gtag !== 'undefined') {
  console.log('✅ gtag function is loaded');
} else {
  console.log('❌ gtag function NOT found');
}

// 2. Check dataLayer
if (window.dataLayer) {
  console.log('✅ dataLayer exists:', window.dataLayer.length, 'events');
  console.log('📊 dataLayer contents:', window.dataLayer);
} else {
  console.log('❌ dataLayer NOT found');
}

// 3. Check GA script loading
const gaScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
if (gaScript) {
  console.log('✅ GA script tag found');
} else {
  console.log('❌ GA script tag NOT found');
}

// 4. Send test event
if (typeof gtag !== 'undefined') {
  gtag('event', 'debug_test', {
    event_category: 'debugging',
    event_label: 'manual_test',
    value: 1
  });
  console.log('🧪 Test event sent!');
}

// 5. Check environment variables
console.log('🔧 Environment check:');
console.log('GA_MEASUREMENT_ID:', import.meta?.env?.VITE_GA_MEASUREMENT_ID || 'Not found');

console.log('✨ Debug complete! Check Network tab for gtag requests.');
