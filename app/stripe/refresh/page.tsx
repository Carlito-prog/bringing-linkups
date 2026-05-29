import { StripeAppRedirect } from "@/components/stripe/StripeAppRedirect";

export default function StripeRefreshPage() {
  return (
    <StripeAppRedirect
      appPath="refresh"
      title="Complete Stripe Setup"
      message="Sending you back to BLU to finish setup..."
      fallbackMessage="If the app does not open automatically, tap Open BLU and continue from there."
      tone="warning"
    />
  );
}
