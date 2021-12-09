import * as styled from "styled-components";
import reset from "styled-reset";

export default styled.createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Roboto Slab", serif;
  }
`;
