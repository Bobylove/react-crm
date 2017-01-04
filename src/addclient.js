import React, { Component } from 'react';
import './addclient.css';

class Addclient extends Component {


render() {
    return (
      <div className="addClient">
      <h1>Addclient </h1>
      <label for="nom">Nom</label>
      <input type="texte" className="nom" placeholder="Dupont" for="nom" value=""/>

      <label for="prenom">Prénom</label>
      <input type="texte" className="prenom" placeholder="Jean" for="prenom" value=""/>

      <label for="entreprise">Entreprise</label>
      <input type="texte" className="entreprise" placeholder="Simplon" for="entreprise" value=""/>

      <label for="ville">Ville</label>
      <input type="texte" className="ville" placeholder="Toulouse" for="ville" value=""/>

      </div>
      );
  }


}

 export default	Addclient;