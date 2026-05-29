import { StripeAppRedirect } from "@/components/stripe/StripeAppRedirect";

export default function StripeReturnPage() {
  return (
    <StripeAppRedirect
      appPath="return"
      title="Stripe Connected"
      message="Returning you to BLU..."
      fallbackMessage="If the app does not open automatically, tap Open BLU to continue."
      tone="success"
    />
  );
}
