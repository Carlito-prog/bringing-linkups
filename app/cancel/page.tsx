import { StripeAppRedirect } from "@/components/stripe/StripeAppRedirect";

export default function StripeCancelPage() {
  return (
    <StripeAppRedirect
      appPath="cancel"
      title="Payment Canceled"
      message="Returning you to BLU..."
      fallbackMessage="If the app does not open automatically, tap Open BLU to go back."
      tone="neutral"
    />
  );
}
