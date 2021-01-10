import { styled } from "~/theme";

export const StyledWrapper = styled.div``;

export const StyledTable = styled.table`
  border-collapse: collapse;
`;

export const StyledThead = styled.thead``;

export const StyledRow = styled.tr`
  height: ${({ theme }) => theme.rem(45)};
`;

export const StyledCell = styled.th`
  border: ${({ theme }) => theme.rem(2)} solid black;
  vertical-align: middle;
`;
