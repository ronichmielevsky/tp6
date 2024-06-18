import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/quienes-somos">¿Quienes Somos?</Link>
              </li>
              <li className="nav-item">
                <Link href="/contacto">Ayuda</Link>
              </li>
              <li className="nav-item">
                <Link href="/reservas">Reservas</Link>
              </li>
            </ul>
          </nav>
        </header>
  )
}
