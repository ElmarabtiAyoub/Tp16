// Objet Compte
export function createCompte(id, solde, dateCreation, type) {
  return { id, solde, dateCreation, type };
}

// Objet Transaction
export function createTransaction(id, type, montant, date, compte) {
  return { id, type, montant, date, compte };
}

// Les statistiques
export function createSoldeStats(count, sum, average) {
  return { count, sum, average };
}

export function createTransactionStats(count, sumDepots, sumRetraits) {
  return { count, sumDepots, sumRetraits };
}

// Créer compte et transaction
export function createCompteRequest(solde, type) {
  return { solde, type };
}

export function createTransactionRequest(type, montant, compteId) {
  return { type, montant, compteId };
}
