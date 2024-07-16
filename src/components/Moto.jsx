import React from 'react';
import Vehicule from './Vehicule';

export default function Moto(props) {
    const klaxonner = () => alert('Klaxon de moto');
    return <Vehicule {...props} klaxonner={klaxonner} type="Moto" />;
  }