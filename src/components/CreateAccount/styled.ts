import { styled } from "~/theme";

export const StyledForm = styled.form`
  margin: ${({ theme }) => theme.rem(40)} auto 0;
  text-align: center;
  width: ${({ theme }) => theme.rem(450)};
`;
