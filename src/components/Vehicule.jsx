import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

export default function Vehicule({ marque, annee, couleur, klaxonner, type }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const afficherDétails = () => {
      setIsModalOpen(true);
    };
  
    return (
      <div className="vehicule">
        <h2>{marque}</h2>
        <p>Type: {type}</p>
        <p>Année: {annee}</p>
        <p>Couleur: {couleur}</p>
        <button onClick={afficherDétails}>Afficher Détails</button>
        <button onClick={klaxonner}>Klaxonner</button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Détails du Véhicule</h2>
          <p><strong>Marque:</strong> {marque}</p>
          <p><strong>Type:</strong> {type}</p>
          <p><strong>Année:</strong> {annee}</p>
          <p><strong>Couleur:</strong> {couleur}</p>
        </Modal>
      </div>
    );
  }
  
  Vehicule.propTypes = {
    marque: PropTypes.string.isRequired,
    annee: PropTypes.number.isRequired,
    couleur: PropTypes.string.isRequired,
    klaxonner: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};
