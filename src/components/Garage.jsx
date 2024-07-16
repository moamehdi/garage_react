import React, { useState } from 'react';
import Voiture from './Voiture';
import Camion from './Camion';
import Moto from './Moto';

export default function Garage() {
  const [vehicules, setVehicules] = useState([]);
  const [marque, setMarque] = useState('');
  const [annee, setAnnee] = useState('');
  const [couleur, setCouleur] = useState('');
  const [type, setType] = useState('voiture');
  const [error, setError] = useState('');

  const ajouterVehicule = (e) => {
    e.preventDefault();
    if (parseInt(annee) <= 0) {
      setError("L'année doit être supérieure à 0");
      return;
    }
    if (marque.trim() === '' || couleur.trim() === '') {
      setError('Tous les champs sont requis');
      return;
    }
    if (/\d/.test(couleur)) {
      setError('La couleur ne doit pas contenir de chiffres');
      return;
    }
    setError('');
    const newVehicule = {
      marque,
      annee: parseInt(annee),
      couleur,
      type,
    };
    setVehicules([...vehicules, { type, details: newVehicule }]);
    setMarque('');
    setAnnee('');
    setCouleur('');
  };

  const handleCouleurChange = (e) => {
    const value = e.target.value;
    if (!/\d/.test(value)) {
      setCouleur(value);
    }
  };

  const supprimerVehicule = (index) => {
    setVehicules(vehicules.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Garage</h2>
      <form onSubmit={ajouterVehicule}>
        <input
          type="text"
          placeholder="Marque"
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Année"
          value={annee}
          onChange={(e) => setAnnee(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Couleur"
          value={couleur}
          onChange={handleCouleurChange}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="voiture">Voiture</option>
          <option value="camion">Camion</option>
          <option value="moto">Moto</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="garage">
        {vehicules.length === 0 ? (
          <p>Le garage est vide</p>
        ) : (
          vehicules.map((vehicule, index) => {
            const { type, details } = vehicule;
            return (
              <div key={index}>
                {type === 'voiture' && <Voiture {...details} />}
                {type === 'camion' && <Camion {...details} />}
                {type === 'moto' && <Moto {...details} />}
                <button onClick={() => supprimerVehicule(index)}>Supprimer</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
