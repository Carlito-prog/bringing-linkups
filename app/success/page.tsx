import { StripeAppRedirect } from "@/components/stripe/StripeAppRedirect";

export default function StripeSuccessPage() {
  return (
    <StripeAppRedirect
      appPath="success"
      title="Payment Complete"
      message="Returning you to BLU..."
      fallbackMessage="If the app does not open automatically, tap Open BLU to view your purchase."
      tone="success"
    />
  );
}
