import React from "react";
import * as S from "./index.styles";

function CheckoutSuccessPage() {
    return (
      <S.CheckoutSuccessPageContainer>
        <h1>Checkout Successful</h1>
        <p>Thank you for your purchase!</p>
        <S.StyledLink to="/">Go back to the store</S.StyledLink>
      </S.CheckoutSuccessPageContainer>
    )
  }

export default CheckoutSuccessPage;