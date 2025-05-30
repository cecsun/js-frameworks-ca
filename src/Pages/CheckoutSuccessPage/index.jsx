import React from "react";
import * as S from "./index.styles";

/**
 * CheckoutSuccessPage component displays a confirmation message
 * after a successful checkout and provides a link to return to the store.
 *
 * @component
 * @returns {JSX.Element} The rendered checkout success page.
 */
function CheckoutSuccessPage() {
  return (
    <S.CheckoutSuccessPageContainer>
      <h1>Checkout Successful</h1>
      <p>Thank you for your purchase!</p>
      <S.StyledLink to="/">Go back to the store</S.StyledLink>
    </S.CheckoutSuccessPageContainer>
  );
}

export default CheckoutSuccessPage;
