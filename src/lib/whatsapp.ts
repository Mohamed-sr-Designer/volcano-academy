/** Central WhatsApp destination for bookings & course enquiries. */
export const WHATSAPP_NUMBER = "201154430545"; // +20 11 5443 0545
export const WHATSAPP_DISPLAY = "+20 11 5443 0545";

/** Build a wa.me link with a pre-filled, URL-encoded message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
