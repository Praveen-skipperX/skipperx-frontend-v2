import type { ContactFormValues } from '../data/contact';

const ENQUIRY_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxIn1J4p9yjt_XPLy_JpmuBvX-FvRdoZrhTYJYAxAGhnHMXQX8zuAfsKmtWV4x6joMJ/exec';

export async function submitEnquiry(values: ContactFormValues) {
  // A form-encoded POST avoids a cross-origin preflight with Apps Script.
  const response = await fetch(ENQUIRY_ENDPOINT, {
    method: 'POST',
    body: new URLSearchParams({
      name: values.firstName.trim(),
      firstName: values.firstName.trim(),
      email: values.email.trim(),
      phone: values.phone,
      interest: values.interest,
      source: window.location.pathname,
    }),
    signal: AbortSignal.timeout(30000),
    redirect: 'follow',
    credentials: 'omit',
  });
  if (!response.ok) throw new Error('Enquiry request failed');
  const result: unknown = await response.json();
  if (!result || typeof result !== 'object' || !('result' in result) || result.result !== 'success') {
    throw new Error('The sheet did not confirm this enquiry');
  }
}
