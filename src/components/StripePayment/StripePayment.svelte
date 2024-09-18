<script lang="ts">
  import { fade } from "svelte/transition";
  import { loadStripe, type Stripe } from "@stripe/stripe-js";

  export let showModal = false; // Controls visibility of the modal
  let stripe: Stripe | null = null;

  // Stripe public key
  const stripePublicKey = "your-publishable-key-from-stripe";

  // Initialize Stripe
  loadStripe(stripePublicKey).then((loadedStripe) => {
    stripe = loadedStripe;
  });

  // Function to open the modal
  const openPaymentModal = async () => {
    showModal = true;
  };

  // Close the modal
  const closeModal = () => {
    showModal = false;
  };

  // Function to open Google Calendar
  const openGoogleCalendar = (calendarEmail: string) => {
    const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(calendarEmail)}`;
    window.open(googleCalendarUrl, "_blank");
  };

  // Handle Stripe Checkout
  const handleStripePayment = async () => {
    if (stripe) {
      // Create a checkout session from your backend (this should be an API call)
      const response = await fetch("/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error("Stripe Checkout error:", error);
      }
    }
  };
</script>

<!-- Button to open the Stripe payment modal -->
<button on:click={openPaymentModal}>Pay with Stripe and Open Calendar</button>

{#if showModal}
  <div class="modal" transition:fade>
    <div class="modal-content fade-in">
      <h2>Proceed to Payment</h2>
      <p>Click below to complete the payment via Stripe.</p>
      <button on:click={handleStripePayment}>Pay Now</button>

      <h3 style="margin-top: 20px;">Or</h3>
      <p>Open Google Calendar:</p>
      <button on:click={() => openGoogleCalendar("user@example.com")}
        >Open Google Calendar</button
      >

      <button on:click={closeModal} style="margin-top: 10px;">Close</button>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
  }

  .fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
