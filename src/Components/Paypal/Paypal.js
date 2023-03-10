// App.js
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal() {
   return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
    <PayPalButtons
        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: "40",
                        },
                    },
                ],
            });
        }}
        onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
                const name = details.payer.name.given_name;
                alert(`Transaction completed by ${name}`);
            });
        }}
    />
</PayPalScriptProvider>

  );
}
