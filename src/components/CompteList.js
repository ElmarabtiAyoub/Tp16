import { useQuery } from "@apollo/client";
import { GET_ALL_COMPTES } from "../graphql/queries"; 

const CompteList = () => {
// Utilisation de la requête GraphQL
const { loading, error, data } = useQuery(GET_ALL_COMPTES);

if (loading) return <p>Chargement des comptes...</p>;
if (error) return <p></p>;
if (!data || !data.allComptes || data.allComptes.length === 0)
return <p>Aucun compte disponible.</p>;

return ( <div> <h2 className="text-xl font-semibold mb-4">Liste des Comptes</h2>
{data.allComptes.map((compte) => ( <div
       key={compte.id}
       className="p-4 mb-2 border rounded shadow bg-white"
     > <p><strong>ID :</strong> {compte.id}</p> <p><strong>Solde :</strong> {compte.solde}€</p> <p> <strong>Date de création :</strong>{" "}
{compte.dateCreation
? new Date(compte.dateCreation).toLocaleDateString()
: "Non renseignée"} </p> <p><strong>Type :</strong> {compte.type}</p> </div>
))} </div>
);
};

export default CompteList;