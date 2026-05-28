window.BMK_CONTENT_FR = {
  title: "Dossier Complet Unifie - BMK",
  clientName: "Societe BMK",
  clientContact: "+243 820 001 470 / +243 852 554 135",
  projectAmount: 1700,
  designScope: `Dossier Complet Unifie
Projet : Systeme integre de gestion d'une menuiserie moderne
(version fonctionnelle, non technique, sans code)
________________________________________
1) Contexte et vision
L'entreprise veut gerer tout le cycle d'une commande client dans un seul systeme, de la vente jusqu'a la livraison/montage, avec :
- suivi des etapes en temps reel,
- controle des delais,
- gestion stock liee a la production,
- suivi financier (acomptes/solde),
- portail client pour suivre l'avancement.
________________________________________
2) Objectifs du projet
- Centraliser toutes les informations de commande.
- Eviter les pertes d'information entre commercial, usine, stock et finance.
- Donner au client une visibilite claire sur son dossier.
- Mesurer precisement l'avancement reel (quantites realisees).
- Produire des rapports fiables de fin de journee (stock + finance).
________________________________________
3) Perimetre global
Inclus
- Clients, devis, commandes
- Validation client + paiement
- Validation technique des mesures
- Cutting list
- Cutting, edging, montage usine
- Livraison et montage chez client
- Gestion stock (demandes/sorties/restes)
- Finance (encaissements, soldes, rapports)
- Chat/commentaires par etape
- Historique/archivage
- Portail client
Exclu (phase ulterieure)
- Paie RH
- Comptabilite legale complete
- E-commerce public
- Multi-entreprises complexes
________________________________________
4) Profils utilisateurs (roles)
- Admin
- Commercial
- Metreur / Technique
- Chef Usine
- Operateur Cutting
- Operateur Edging
- Monteur Usine
- Livreur
- Monteur Chantier (peut etre le meme profil que monteur usine)
- Magasinier
- Comptable / Finance
- Client (suivi uniquement de sa commande)
________________________________________
5) Workflow metier complet (ordre officiel)
1. Vente / Devis
2. Acceptation client
3. Paiement (100% ou acompte 70%)
4. Mesures techniques validees
5. Cutting list
6. Cutting (decoupe des pieces)
7. Edging (garniture/finition des pieces decoupees)
8. Montage usine
9. Livraison
10. Montage chez client
11. Reception
12. Cloture et archivage
________________________________________
6) Donnees obligatoires par commande
Informations client
- Nom
- Telephone
- Adresse du chantier/livraison
Informations commande
- Numero de commande unique
- Modele (standard ou personnalise)
- Matieres (bois, granit, marbre, etc.)
- Couleur
- Dimensions (volume, diametre, etc.)
- Design / imagerie de reference
- Devis/cotation
- Delai promis au client
________________________________________
7) Suivi operationnel par etape (obligatoire)
Chaque etape doit stocker :
- quantite prevue
- quantite realisee
- date debut prevue
- date fin prevue
- date debut reelle
- date fin reelle
- responsable
- statut (a faire, en cours, termine, bloque, en retard)
- commentaire d'avancement
Exemple : Cutting prevu 15 pieces, realise 5 puis 10 puis 15.
________________________________________
8) Gestion des delais et retards
- Chaque etape a un delai planifie.
- Le systeme compare automatiquement prevu vs reel.
- Si depassement : statut en retard.
- En cas de retard :
- motif obligatoire,
- nouvelle date estimee obligatoire,
- information interne immediate,
- information client selon regles de communication.
________________________________________
9) Portail client
Quand le devis est accepte :
- le compte client est cree automatiquement,
- le client se connecte pour suivre sa commande,
- il voit les etapes et l'etat actuel,
- il voit les documents valides (devis, paiement, livraison, reception),
- il recoit les mises a jour officielles.
________________________________________
10) Production usine (detail attendu)
Cutting list
- etude du modele demande,
- simulation des pieces necessaires,
- definition des mesures exactes,
- estimation du nombre de planches et accessoires.
Execution atelier
- Cutting (decoupe),
- Edging (garnissage/finitions bord),
- Montage usine (controle de conception/assemblage).
________________________________________
11) Stock et magasin
- La cutting list genere automatiquement les besoins matiere :
- planches,
- poignees,
- charnieres,
- autres accessoires.
- Une demande de sortie stock est creee.
- Le magasinier prepare et valide la sortie.
- Le stock se met a jour (sortie et reste).
- Rapport depot fin de journee :
- total entrees,
- total sorties,
- stock restant.
________________________________________
12) Finance et comptabilite operationnelle
- Suivi encaissements lies aux commandes :
- acompte,
- paiement total,
- solde restant.
- Journal de caisse/banque par jour.
- Rapport fin de journee finance :
- ventes du jour,
- encaisse du jour,
- restes a payer,
- commandes soldees/non soldees.
________________________________________
13) Chatbox et commentaires a chaque niveau
Chaque etape dispose de :
- fil de discussion,
- auteur + horodatage,
- pieces jointes (photos/documents),
- historique conserve.
Deux canaux :
- interne (equipes),
- client (messages valides).
________________________________________
14) Regles metier essentielles
- Numero commande unique obligatoire.
- Acceptation devis = creation compte client.
- Pas de saut d'etape sans autorisation admin.
- Sortie stock obligatoire pour consommer matiere.
- Encaissement non rattache a commande interdit.
- Retard sans justification interdit.
- Historique non supprimable.
________________________________________
15) Tableaux de bord attendus
- Direction : commandes en cours, retards, CA, alertes.
- Usine : charge par etape (cutting/edging/montage).
- Stock : demandes en attente, sorties, rupture potentielle.
- Finance : encaissements, soldes, impayes.
- Client : avancement de sa commande uniquement.
________________________________________
16) Criteres d'acceptation
Le systeme est valide si :
1. Une commande peut aller de la vente a la cloture sans rupture.
2. Le client suit sa commande en autonomie.
3. Les etapes cutting/edging/montage affichent prevu/realise.
4. Les sorties stock suivent la cutting list.
5. Les encaissements sont visibles en finance.
6. Les rapports de fin de journee sont disponibles.
7. Les retards sont traces et justifies.
8. Les permissions par role sont respectees.
17) Plan de deploiement (lots)
Lot 1 (4-6 semaines)
- Client, devis, commande, paiement, suivi etapes de base, portail client simple.
Lot 2 (4-6 semaines)
- Cutting list, cutting, edging, montage usine, stock magasin.
Lot 3 (3-5 semaines)
- Livraison, montage client, finance avancee, dashboards, chat/commentaires complet.
________________________________________
18) Risques et mesures de controle
- Mesures incompletes -> check-list obligatoire terrain.
- Retards non remontes -> statut auto "en retard" + commentaire obligatoire.
- Rupture stock -> reservation matiere des cutting list validee.
- Mauvaise separation des responsabilites -> roles/permissions stricts.
- Faible adoption -> formation ciblee par profil.
________________________________________
19) Tableau RACI (resume)
- Direction : valide le cadre et les arbitrages.
- Commercial : gere devis/commande client.
- Technique : valide mesures et contraintes.
- Chef Usine : pilote production.
- Cutting/Edging/Montage : executent et declarent avancement.
- Magasinier : prepare et valide sorties stock.
- Livreur : execute livraison.
- Finance : enregistre encaissements et rapports.
- Client : suit et confirme reception.
________________________________________
20) Gouvernance et signatures
- Reunion hebdomadaire de pilotage.
- Validation de fin de lot par proces-verbal.
- Gestion des changements par demandes formelles.
- Formation avant mise en production.
Signataires recommandes :
- Direction
- Chef Usine
- Responsable Finance
- Responsable Projet`,
  contractTerms: `CONTRAT DE PRESTATION (Modele)
Entre les soussignes :
- Prestataire : [toto MULUMBA / societe/ ASOFES], [Maman Yemo 267 ], [Telephone : 0995178105], [totoasofes22@gmail.com]
- Client : [DG / societe : BMK], [Adresse : De la revolution ], [Telephone : +243 820 001 470/ +243 852 554 135], [Email :                         ]
Il est convenu ce qui suit :
Article 1 - Objet
Le prestataire s'engage a concevoir et livrer une application de gestion pour menuiserie moderne (vente, production, stock, finance, portail client), selon les lots definis dans le cahier des charges ci-joint.
Article 2 - Duree
Duree previsionnelle : 4 a 5 semaines a compter de la date de demarrage.
Article 3 - Perimetre et lots
Le projet est decoupe en 3 lots avec livraisons successives et validation par le client a la fin de chaque lot.
Article 4 - Prix du projet
Montant total developpement : 1 700 USD
- Lot 1 : 750 USD
- Lot 2 : 375 USD
- Lot 3 : 375 USD

Article 5 - Modalites de paiement
- 50% a la signature : 750 USD
- 25% apres validation Lot 1 : 375USD
- 25% a la livraison finale : 375USD
Tout travail hors perimetre valide fera l'objet d'un devis complementaire.
Article 6 - Maintenance et hebergement
- Maintenance corrective et support : 150 USD / mois
- Hebergement : 50 USD / mois
- Total mensuel recurrent : 200 USD / mois
Article 7 - Ce qui est inclus en maintenance
- correction de bugs,
- assistance utilisateur raisonnable,
- petites adaptations mineures (non structurelles).
Article 8 - Ce qui n'est pas inclus en maintenance
- nouvelles fonctionnalites majeures,
- refonte complete UI/UX,
- integrations tierces nouvelles,
- extensions de perimetre non prevues. Ces elements sont factures via devis separe.
Article 9 - Obligations du client
Le client s'engage a :
- fournir les informations metier et validations dans les delais,
- designer un interlocuteur principal,
- valider ou commenter chaque lot sous 3 a 5 jours ouvrables.
Article 10 - Recette et validation
Chaque lot est valide via demonstration + proces-verbal de recette.
Sans retour bloquant sous 5 jours ouvrables, le lot est repute accepte.
Article 11 - Propriete intellectuelle
La propriete de la solution livree est transferee au client apres paiement integral du projet.
Article 12 - Confidentialite
Les deux parties s'engagent a conserver confidentielles toutes les donnees et informations echangees.
Article 13 - Resiliation
En cas de resiliation anticipee, les travaux deja realises et valides restent dus proportionnellement.
Article 14 - Litiges
En cas de litige, les parties privilegieront un reglement amiable avant toute action judiciaire.
Fait a [Ville], le [Date]
Signatures :
- Prestataire : Toto asofes
- Client : Societe BMK`
};
