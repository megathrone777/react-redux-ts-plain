import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledCol = styled.div`
  flex: 0 1 40%;
  text-align: center;
  width: 40%;
`;

export const StyledColTitle = styled.h2`
  font-size: ${({ theme }) => theme.rem(18)};
  font-weight: 600;
  margin: ${({ theme }) => theme.rem(7)} 0;
`;
