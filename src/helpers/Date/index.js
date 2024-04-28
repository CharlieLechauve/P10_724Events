export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// Résolution de l'erreur en ajoutant +1 aux mois (autre solution aurait été d'indiquer les mois de 0 à 11)

export const getMonth = (date) => MONTHS[date.getMonth() + 1];
