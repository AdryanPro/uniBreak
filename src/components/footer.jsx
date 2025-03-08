import React from 'react'
import "../css/footerCss.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@unibreak.com</p>
          <p>Téléphone: +33 6 12 34 56 78</p>
        </div>
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>À propos</h3>
          <p>Nous organisons des voyages fun et mémorables pour étudiants et entreprises. Vivez l’expérience Uni Break !</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='copyright'>© {new Date().getFullYear()} Uni Break. Tous droits réservés.</p>
        <p className="dev-signature">Dev by Adryan</p>
      </div>
    </footer>
  )
}
