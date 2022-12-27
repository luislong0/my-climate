import { styled } from "..";

export const ConsultContainer = styled('main', {
  maxWidth: '1440px',
  width: '100%',

  padding: '0 150px',
  margin: '-2rem auto 0',
  display: 'flex',

  flexDirection: 'column',

  '@bp1': {
    padding: '0 1rem',
    margin: '-2rem auto 0',
  },

  '@bp2': {
    padding: '0 3.5rem',
  },
})

export const VerificationContainer = styled('div', {
  backgroundColor: '$gray800',
  marginTop: '4rem',
  marginBottom: '4rem',

  padding: '2.5rem 3.125rem',
  borderRadius: '8px',

  '@bp1': {
    padding: '2.5rem 2.125rem',
  },

  h2: {
    fontSize: '2.25rem',
    fontWeight: 700,
    marginBottom: '2rem',

    '@bp1': {
      fontSize: '1.5rem',
    },


  },

  span: {
    fontSize: '1.25rem',
    color: '$gray300',

    '@bp1': {
      fontSize: '1rem',
    },

    span: {
      color: "$violet500",
    }
  },

  strong: {
    color: '$red500',
    fontSize: "small",
    marginTop: -10,
  }
})

export const Form = styled('form', {
  marginTop: '2rem',
  marginBottom: '3rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',

  input: {
    maxWidth: '32.125rem',
    padding: '1rem 1.25rem',
    backgroundColor: '$gray900',
    border: 'none',
    borderRadius: 8,
    color: '$gray100',
    fontSize: '1rem',

    '&:focus': {
      outline: '2px solid $violet500'
    }
  },

  button: {
    width: '7rem',
    padding: '0.75rem 1.25rem',
    border: 'none',
    borderRadius: 8,
    backgroundColor: '$violet500',
    color: '$gray100',
    transition: 'all ease-in-out 0.2s',

    fontWeight: 500,
    fontSize: '1rem',

    '&:hover': {
      backgroundColor: '$violet600',
    }
  }
})

export const CurrentWeatherContainer = styled('div', {
  span: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '$gray300',

    '@bp1': {
      fontSize: '1rem',
    },

    span: {
      color: "$violet500",
      fontWeight: 400,
    }
  }
})

export const CurrentWeatherInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '1rem',

  marginTop: '1.25rem',

  svg: {
    maxWidth: '3.75rem',
    maxHeight: '3.75rem',
    width: '100%',
    height: '100%',

    backgroundColor: '$violet500',
    padding: '0.625rem',
    borderRadius: 8,
  }
})

export const DegreeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    '&:first-child': {
      fontSize: '1.5rem',
      color: '$gray100',
      fontWeight: 700,

      marginBottom: 2,



    },

    '&:last-child': {
      fontSize: '1rem',
      color: '$gray100',
      fontWeight: 400,

      span: {
        fontSize: '0.875rem',
        color: '$gray300',
        marginLeft: '0.5rem',
      }
    }
  }
})

export const CarouselCards = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  marginBottom: '2rem',
  // width: '100%',
})