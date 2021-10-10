import React from "react";

import { Container, StyledLoader } from "./styles";


const Loader = () => {
  return (
      <Container>
        <StyledLoader size={64} />
      </Container>
  );
};

export default Loader;