import styled from "styled-components";

const StyledImage = styled.img`
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || ""};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.borderRadius || ""};
  border: ${(props) => props.border || "none"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  opacity: ${(props) => props.opacity || ""};
`;

export default StyledImage;
