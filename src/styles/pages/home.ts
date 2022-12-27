import { styled } from "..";

export const HomeContainer = styled('main', {
  maxWidth: '1440px',

  padding: '0 75px',
  marginTop: '5.25rem',
  margin: '5.25rem auto 0',
  display: 'flex',

  flexDirection: 'column',

  '@bp1': {
    padding: '0 1rem',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '10rem',
    height: '3.75rem',
    marginTop: '3.25rem',
    padding: '1rem 2rem',
    backgroundColor: '$violet500',
    border: 'none',
    borderRadius: '8px',

    fontSize: '1.5rem',
    color: '$gray100',
    transition: 'all ease-in-out 0.2s',
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: '$violet600',
    },

    '@bp1': {
      marginTop: '1.5rem',
      fontSize: '1.25rem',

      width: '7.5rem',
      height: '3rem',
    },

  }
})

export const InfoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  gap: '3.75rem',

  img: {
    '@bp2': {
      display: 'none'
    },
  }
})

export const ContentBox = styled('div', {
  // maxWidth: '750px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.50rem',

  '@bp1': {
    marginTop: '-2rem',
  },

  h2: {
    fontSize: '3rem',

    '@bp1': {
      fontSize: '2rem',
    },

    '@bp2': {
      fontSize: '2rem',
    },

    span: {
      color: "$violet600",
    }
  },

  p: {
    color: '$gray300',
    margin: 0,
    padding: 0,
    fontSize: '1.5rem',
    fontWeight: 100,

    '@bp1': {
      fontSize: '1.25rem',
    },

    '@bp2': {
      fontSize: '1.35rem',
    },

    span: {
      color: "$violet600",
      fontWeight: 400,
    }
  }
})