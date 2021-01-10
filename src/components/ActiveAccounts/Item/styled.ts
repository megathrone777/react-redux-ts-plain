import { styled } from "~/theme";

export const StyledCell = styled.td`
  border: ${({ theme }) => theme.rem(1)} solid black;
  padding: ${({ theme }) => theme.rem(5)};
  vertical-align: middle;
`;
