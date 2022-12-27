import { styled } from "../../styles"

export const WeatherCardContainer = styled('div', {
  width: '12.5rem',
  height: '14.56rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$gray800',
  padding: '2.81rem 1.56rem',
  borderRadius: 8,

  '@bp1': {
    padding: '2.81rem 1rem',
  },

  span: {
    fontSize: '1rem',
    color: '$gray300'
  }
})

export const WeatherInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  gap: '0.75rem',

  svg: {
    width: '2.82rem',
    height: '2.82rem',

    backgroundColor: '$violet500',
    padding: '0.5rem',
    borderRadius: 8,
  }
})

export const DegreeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',
  justifyContent: 'center',
  textAlign: "center",

  span: {


    '&:first-child': {
      fontSize: '1rem',
      color: '$gray100',
      fontWeight: 700,

      marginBottom: 2,
    },

    '&:last-child': {
      fontSize: '0.875rem',
      color: '$gray300',
      marginLeft: 8,
    }
  }
})