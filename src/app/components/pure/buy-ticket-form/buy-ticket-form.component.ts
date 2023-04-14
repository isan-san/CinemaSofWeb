import { Component, EventEmitter, Output } from '@angular/core';

export interface FormValues {
  name: string;
  email: string;
  paymentMethod: string;
  cardNumber?: string;
  paypalEmail?: string;
  bitcoinAddress?: string;
}

@Component({
  selector: 'app-buy-ticket-form',
  templateUrl: './buy-ticket-form.component.html',
  styleUrls: ['./buy-ticket-form.component.scss']
})
export class BuyTicketFormComponent {

  name: string = "";
  email: string = "";
  selectedPaymentMethod: string = "";
  cardNumber: string = "";
  paypalEmail: string = "";
  bitcoinAddress: string = "";

  @Output() formSubmitted = new EventEmitter<FormValues>();

  onSubmit() {
    const formValues: FormValues = {
      name: this.name,
      email: this.email,
      paymentMethod: this.selectedPaymentMethod,
      cardNumber: this.selectedPaymentMethod === 'credit' ? this.cardNumber : undefined,
      paypalEmail: this.selectedPaymentMethod === 'paypal' ? this.paypalEmail : undefined,
      bitcoinAddress: this.selectedPaymentMethod === 'bitcoin' ? this.bitcoinAddress : undefined
    };
    this.formSubmitted.emit(formValues);
  }

  selectPaymentMethod(paymentMethod: string) {
    this.selectedPaymentMethod = paymentMethod;
  }
}
