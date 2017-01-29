import React, { Component } from 'react';

class Block1 extends Component {
  render() {
    return (
      <div className="content-block">
        <div className="content-block-title"> Je ne peux plus me connecter à mon compte</div>
        <div className="content-block-detail">
          Avez-vous:
          <ul>
            <li>vérifier votre connexion internet</li>
            <li>vérifier que votre adresse email était bien la bonne</li>
            <li>vérifier que votre compte n' a pas expiré si vous étiez en version d'essai</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Block1;
