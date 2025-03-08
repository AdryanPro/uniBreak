import React, { useState, useEffect } from 'react';
import uniBreakHeader from '../assets/homePage/uniBreakHeader.png'
import "../css/home.css"
import emailjs from 'emailjs-com';
import Lloret from "../assets/homePage/LloretCard.png"
import Amsterdam from "../assets/homePage/amsterdamCard.png"
import Salou from "../assets/homePage/salouCard.png"
import Ski from "../assets/homePage/SkiCard.png"


export default function HomePage() {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        school: '',
        email: '',
        phone: '',
        destination: '',
        customDestination: '',
        peopleCount: '',
      });
    const destinations = ["Lloret del Mar", "Amsterdam", "Salou", "Ski"];

    useEffect(() => {
    if (showPopup) {
        document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    return () => {
        document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
    }, [showPopup]);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_ez54gqi', 
        'template_t1tqxc9', 
        e.target, 
        '4ls3WPwzx9ngx5LaZ'
    ).then((result) => {
        alert('Email envoyé avec succès ! ✅');
        setShowPopup(false); // Close the form after submission
        setFormData({ 
            school: '', 
            email: '', 
            phone: '', 
            destination: '', 
            customDestination: '', 
            peopleCount: '' 
        }); // Reset form
    }).catch((error) => {
        alert('Erreur lors de l’envoi. ❌');
    });
    };

  return (
    <div className={`homeWrapper`}>
        <header className={`headerHomePage ${showPopup ? "blur" : ""}`}>
            <div className="txtWrapper">
                <div className="titleScrollDownWrapper">
                    <h1 className="titleScrollDown first">UNI BREAK</h1>
                    <h1 className="titleScrollDown second">UNI BREAK</h1>
                    <h1 className="titleScrollDown third">UNI BREAK</h1>
                    <h1 className="titleScrollDown fourth">UNI BREAK</h1>
                </div>
                <h3 className="subtitle">By Soummane</h3>
                <h2 className="titleSlogant">Juste des mecs fun qui vous <br /> font faire des trucs fun</h2>
            </div>
            <div className="imgWrapper">
                <img src={uniBreakHeader} alt="header image" className='headerImg' />
                <button className="go" onClick={() => setShowPopup(true)}>On y va</button>
            </div>
        </header>
        {/* Pop-up Form */}
        {showPopup && (
            <div className="popupOverlay" onClick={() => setShowPopup(false)}>
            <div className="popupForm" onClick={(e) => e.stopPropagation()}>
                <h2>Demande d'Information</h2>
                <form onSubmit={sendEmail}>

                    {/* Text input for School/Enterprise */}
                    <label>École ou Entreprise :</label>
                    <input type="text" name="school" placeholder="Entrez votre école ou entreprise" value={formData.school} onChange={handleChange} required />

                    {/* Email Input */}
                    <label>Email :</label>
                    <input type="email" name="email" placeholder="Entrez votre email" value={formData.email} onChange={handleChange} required />

                    {/* Phone Number Input */}
                    <label>Numéro de téléphone :</label>
                    <input type="tel" name="phone" placeholder="Entrez votre numéro de téléphone" value={formData.phone} onChange={handleChange} required />

                    {/* Dropdown for Destination */}
                    <label>Destination :</label>
                    <div className="selectWrapper">
                        <select name="destination" value={formData.destination} onChange={handleChange} required>
                            <option value="">Sélectionnez une destination</option>
                            {destinations.map((dest, index) => (
                                <option className='dropDown' key={index} value={dest}>{dest}</option>
                            ))}
                        </select>
                    </div>


                    {/* Custom Destination Input */}
                    <label>Autre destination en tête (optionnel) :</label>
                    <input type="text" name="customDestination" placeholder="Entrez une autre destination" value={formData.customDestination} onChange={handleChange} />

                    {/* Number of People */}
                    <label>Nombre de personnes (approximativement) :</label>
                    <input type="number" name="peopleCount" placeholder="Nombre de participants" value={formData.peopleCount} onChange={handleChange} required />

                    {/* Submit Button */}
                    <button type="submit">Envoyer</button>
                </form>

                {/* Close Button */}
                <button className="closePopup" onClick={() => setShowPopup(false)}>X</button>
            </div>
            </div>
        )}
        <section className={`eventWrapper ${showPopup ? "blur" : ""}`}>
            <div className="titleWrapper">
                <h1 className="eventTitle">Events</h1>
                <h2 className='subtitleEvent'>Allez viens on t'emmène</h2>
            </div>
            <div className="cardSection">
                <div className="card firstCard">
                    <img src={Lloret} className='imgCardEvent' alt="" />
                    <h1 className='cardTitle'>Lloret del mar</h1>
                    <p className="cardTxt">Hotel piscine boite de nuit transfert</p>
                </div>

                <div className="card">
                    <img src={Amsterdam} className='imgCardEvent' alt="" />
                    <h1 className='cardTitle'>Amsterdam</h1>
                    <p className="cardTxt">Hotel piscine boite de nuit transfert</p>
                </div>

                <div className="card">
                    <img src={Salou} className='imgCardEvent' alt="" />
                    <h1 className='cardTitle'>Salou</h1>
                    <p className="cardTxt">Hotel piscine boite de nuit transfert</p>
                </div>

                <div className="card lastCard">
                    <img src={Ski} className='imgCardEvent' alt="" />
                    <h1 className='cardTitle'>SKI</h1>
                    <p className="cardTxt">Hotel piscine boite de nuit transfert</p>
                </div>
            </div>
        </section>

        <section className="Option">
            <div className="package">
                <h1>Package</h1>
                <ul>
                    <li>Hébergement : Des hotels partenaires bien placés, proches de l’action.</li>
                    <li>Transport : Notre flotte de bus t’emmène et te ramène sans stress.</li>
                    <li>Activités : Plage, soirées, excursions… On a tout prévu.</li>
                    <li>Soirées : Accès VIP aux meilleurs clubs et événements.</li>
                </ul>
            </div>
            <div className="personnalisable">
                <h1>Personnalisable</h1>
                <ul>
                    <li>Destinations : Lloret, Amsterdam, Salou… ou ailleurs, si tu veux.</li>
                    <li>Hébergement : Hôtel, appartement, auberge… À toi de choisir.</li>
                    <li>Activités : Détente, aventure, fête… Ou un mix de tout ça.</li>
                    <li>Budget : On s’adapte à tes moyens, sans compromis sur le fun.</li>
                </ul>
            </div>
        </section>

        <section className="pkNous">
            <h1 className="pkNousTitle">POURQUOI NOUS <br /> CHOISIR ? <span className="pkNousSubtitle">(Parce qu’on est les meilleurs mais a part ça)</span> </h1>
            <div className="cardPkNous">
                <ul>
                    <li>Hébergements qui de fouGrace à nos partenaires, on a deds hébergements de qualité : auberges, hôtels ou villa.</li>
                    <li>Jet ski, soirées privées, limousines… On vous mets bien avec des expériences de folie."</li>
                </ul>
                <ul>
                    <li>Transport sans galèreNotre flotte = moins cher, plus sûr, plus flexible</li>
                    <li>Expérience : À la base, on est transporteurs. On a travaillé avec des boîtes d’événementiel et des grands groupes de tourisme, ce qui nous a donné des années d’expérience et d’observation pour savoir ce qui marche vraiment</li>
                </ul>
            </div>
        </section>
    </div>
  )
}
