export {};

enum PaymentStatus {
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
}

enum PaymentMethod {
    CASH = "CASH",
    CARD = "CARD",
    TRANSFER = "TRANSFER",
}

const MAX_PAYMENT_AMOUNT = 10000;

interface Payment {
    id: number;
    amount: number;
    status: PaymentStatus;
    method: PaymentMethod;
}

const apiResponse = {
  status: PaymentStatus.SUCCESS,
  data: {
    id: 101,
    amount: 500,
    status: PaymentStatus.SUCCESS,
    method: PaymentMethod.CARD
  }
};

const payment: Payment = apiResponse.data

if (payment.amount > MAX_PAYMENT_AMOUNT) {
    console.log("Amount too high");
} else {
    const paymentStatusMessage =
    payment.status === PaymentStatus.SUCCESS
        ? "Payment successful"
        : "Payment failed";
    console.log(paymentStatusMessage);
}