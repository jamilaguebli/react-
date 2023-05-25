export const ajouterEtudiant = (etudiant) => {
    return {
      type: 'AJOUTER_ETUDIANT',
      payload: etudiant
    };
  }
    export const updateEtudiant = (etudiant) => {
      return {
        type: 'UPDATE_ETUDIANT',
        payload: etudiant
      };

  };
  export const deleteEtudiant = (id) => {
    return {type:"RESET_CONTACT", payload:id}
}