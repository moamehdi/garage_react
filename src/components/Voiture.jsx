import React from 'react';
import Vehicule from './Vehicule';

export default function Voiture(props) {
  const klaxonner = () => alert('Klaxon de voiture');
  return <Vehicule {...props} klaxonner={klaxonner} type="Voiture" />;
}