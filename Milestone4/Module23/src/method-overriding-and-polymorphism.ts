class PaymentGateway {
  processPayment(amount: number): void {
    console.log(`Processing generic payment of $${amount}`);
  }
}

class BkashPayment extends PaymentGateway {
  // Overriding the parent's processPayment method
  override processPayment(amount: number): void {
    console.log(`Processing bKash payment of $${amount} via mobile banking...`);
  }
}

class NagadPayment extends PaymentGateway {
  override processPayment(amount: number): void {
    console.log(`Processing Nagad payment of $${amount}...`);
  }
}

// Polymorphic behavior in action
const gateways: PaymentGateway[] = [
  new PaymentGateway(),
  new BkashPayment(),
  new NagadPayment()
];

gateways.forEach((gateway) => {
  // Calls the specific overridden processPayment for each instance
  gateway.processPayment(100);
});