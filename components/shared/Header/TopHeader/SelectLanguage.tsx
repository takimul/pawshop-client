import { useColorClasses } from '@/lib/styles';
import React from 'react'

export default function SelectLanguage() {
  const { textPrice } = useColorClasses();
  return (
    // <div>SelectLanguage</div>
    <div className={textPrice}>English</div>
  )
}
