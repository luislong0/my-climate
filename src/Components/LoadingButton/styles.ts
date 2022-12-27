import { styled } from "../../styles";

export const Button = styled('button', {
  width: '7rem',
  padding: '0.75rem 1.25rem',
  border: 'none',
  borderRadius: 8,
  backgroundColor: '$violet500',
  color: '$gray100',
  transition: 'all ease-in-out 0.2s',

  fontWeight: 500,
  fontSize: '1rem',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: '$violet500',
  },

  '&:disabled': {
    opacity: 0.7,
  }
})