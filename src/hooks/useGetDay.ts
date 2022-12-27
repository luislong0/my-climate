import { useState, useEffect } from 'react';

const week = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sábado',
]

export default function useGetDay() {

  const [day, setDay] = useState('')

  useEffect(() => {
    setDay(week[new Date().getDay()])
  }, []);

  return day;
}