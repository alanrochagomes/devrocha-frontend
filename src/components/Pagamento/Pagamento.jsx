import React from "react";
import "../Pagamento/Pagamento.css";

const Pagamento = () => {
  const mp = new window.MercadoPago(
    process.env.REACT_APP_MERCADO_PAGO_ACCESS_TOKEN
  );

  const handlePayment = async () => {
    const preference = {
      items: [
        {
          title: "Produto Exemplo",
          unit_price: 100,
          quantity: 1,
        },
      ],
      back_urls: {
        success: "http://www.your-site.com/success",
        failure: "http://www.your-site.com/failure",
        pending: "http://www.your-site.com/pending",
      },
      auto_return: "approved",
    };

    const response = await mp.preferences.create(preference);
    const { id } = response.body;

    window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${id}`;
  };

  return (
    <div>
      <h2>Realizar Pagamento</h2>
      <button onClick={handlePayment}>Pagar com Mercado Pago</button>
    </div>
  );
};

export default Pagamento;
