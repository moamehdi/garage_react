import React from 'react';
import Vehicule from './Vehicule';

export default function Camion(props) {
  const klaxonner = () => alert('Klaxon de camion');
  return <Vehicule {...props} klaxonner={klaxonner} type="Camion" />;
}