import React from 'react'

type FooterProps = {
    className?: string,

}

export default function Footer({className}: FooterProps) {
  return (
    <footer className={`text-white/30 text-center fixed bottom-1 w-full font-Tinos ${className}`}>
        Made By Eli & Andreh Daher
    </footer>
  )
}
