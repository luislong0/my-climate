import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
  display: 'flex',
  padding: '2rem 4.69rem 0',

  width: '100%',

  '@bp1': {
    padding: '1.5rem 1rem 0',
  },
})

export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '0.5rem',

  span: {
    color: "$gray100",
    fontSize: '2.25rem',
    fontWeight: 700,
  },

  svg: {
    color: "$violet600",
  }
})