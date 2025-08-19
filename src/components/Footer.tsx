import React from 'react'

type FooterProps = {
    className?: string,

}

export default function Footer({className}: FooterProps) {
  return (
    <footer className={`text-white/30 text-center fixed bottom-3 w-full ${className}`}>
        Made By Eli & Andreh Daher
    </footer>
  )
}
