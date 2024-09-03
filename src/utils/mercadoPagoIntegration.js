export const createMercadoPagoPayment = async (amount) => {
    const response = await fetch('/api/mercadopago/create-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });
    return response.json();
  };
  