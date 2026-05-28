const USERS_KEY = "client_portal_users_v1";
const SESSION_KEY = "client_portal_session_v1";
const DB_KEY = "client_company_db_v1";
const LANGUAGE_KEY = "client_portal_language_v1";

const els = {
  authScreen: document.getElementById("auth-screen"),
  appScreen: document.getElementById("app-screen"),
  authForm: document.getElementById("auth-form"),
  authTitle: document.getElementById("auth-title"),
  authSubtitle: document.getElementById("auth-subtitle"),
  authCompanyLabel: document.getElementById("auth-company-label"),
  authFullnameWrap: document.getElementById("auth-fullname-wrap"),
  authFullnameLabel: document.getElementById("auth-fullname-label"),
  authEmailLabel: document.getElementById("auth-email-label"),
  authPasswordLabel: document.getElementById("auth-password-label"),
  authSubmitBtn: document.getElementById("auth-submit-btn"),
  authTogglePrefix: document.getElementById("auth-toggle-prefix"),
  authToggleBtn: document.getElementById("auth-toggle-btn"),
  languageSwitch: document.getElementById("language-switch"),
  appTitle: document.getElementById("app-title"),
  languageLabel: document.getElementById("language-label"),
  sharedNote: document.getElementById("shared-note"),
  editorTitle: document.getElementById("editor-title"),
  editorPanel: document.getElementById("editor-panel"),
  closeEditorBtn: document.getElementById("close-editor-btn"),
  contractTitleLabel: document.getElementById("contract-title-label"),
  clientNameLabel: document.getElementById("client-name-label"),
  clientContactLabel: document.getElementById("client-contact-label"),
  projectAmountLabel: document.getElementById("project-amount-label"),
  signatureDateLabel: document.getElementById("signature-date-label"),
  designScopeLabel: document.getElementById("design-scope-label"),
  contractTermsLabel: document.getElementById("contract-terms-label"),
  publishBtn: document.getElementById("publish-btn"),
  translateProjectBtn: document.getElementById("translate-project-btn"),
  publishedTitle: document.getElementById("published-title"),
  authCompany: document.getElementById("auth-company"),
  authFullname: document.getElementById("auth-fullname"),
  authEmail: document.getElementById("auth-email"),
  authPassword: document.getElementById("auth-password"),
  sessionInfo: document.getElementById("session-info"),
  subtitle: document.getElementById("topbar-subtitle"),
  logoutBtn: document.getElementById("logout-btn"),
  form: document.getElementById("contract-form"),
  title: document.getElementById("title"),
  clientName: document.getElementById("clientName"),
  clientContact: document.getElementById("clientContact"),
  projectAmount: document.getElementById("projectAmount"),
  signatureDate: document.getElementById("signatureDate"),
  designScope: document.getElementById("designScope"),
  contractTerms: document.getElementById("contractTerms"),
  contractsList: document.getElementById("contracts-list"),
  saveTemplateBtn: document.getElementById("save-template-btn"),
  newContractBtn: document.getElementById("new-contract-btn"),
  exportBtn: document.getElementById("export-btn"),
  exportA4Btn: document.getElementById("export-a4-btn"),
  readingMenuTitle: document.getElementById("reading-menu-title"),
  readingMenuHelp: document.getElementById("reading-menu-help"),
  readingMenuList: document.getElementById("reading-menu-list"),
  cardTemplate: document.getElementById("contract-card-template")
};

let currentSession = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "fr";
let authMode = "login";

const i18n = {
  fr: {
    appTitle: "ASOFES - Publication de Contrats",
    languageLabel: "Langue",
    topbarLoggedOut: "Portail ASOFES avec espace partagé par société",
    topbarLoggedIn: (company) => `Société active : ${company}`,
    newContractBtn: "Nouveau contrat depuis modèle",
    logoutBtn: "Déconnexion",
    loginTitle: "Connexion client",
    registerTitle: "Créer un compte client",
    authSubtitleLogin: "Accédez à votre espace contrat ASOFES",
    authSubtitleRegister: "Créez votre accès client en quelques secondes",
    authCompanyLabel: "Nom de la société",
    authFullnameLabel: "Votre nom complet",
    authEmailLabel: "E-mail",
    authPasswordLabel: "Mot de passe",
    authSubmitLogin: "Se connecter",
    authSubmitRegister: "Créer mon compte",
    authTogglePrefixLogin: "Première visite ?",
    authToggleActionLogin: "Créer un compte",
    authTogglePrefixRegister: "Déjà inscrit ?",
    authToggleActionRegister: "Se connecter",
    sharedNote: "Meme societe = meme apercu profil, contrats, projet et commentaires.",
    editorTitle: "Editeur de contrat",
    contractTitleLabel: "Titre du contrat",
    clientNameLabel: "Nom client",
    clientContactLabel: "Contact client",
    projectAmountLabel: "Montant projet (USD)",
    signatureDateLabel: "Date de signature",
    designScopeLabel: "Contenu conception / engagement",
    contractTermsLabel: "Clauses du contrat",
    publishBtn: "Publier le contrat",
    saveTemplateBtn: "Enregistrer comme modele",
    translateProjectBtn: "Traduire en anglais",
    closeEditorBtn: "Fermer",
    exportBtn: "Exporter en texte",
    exportA4Btn: "Exporter A4 (PDF)",
    publishedTitle: "Contrats publiés",
    readingMenuTitle: "Menu de lecture",
    readingMenuHelp: "Ouvrez un contrat puis utilisez ce sommaire latéral.",
    readingIndex: "Index de lecture",
    loadBtn: "Charger",
    viewContent: "Voir le contenu",
    conception: "Conception",
    contract: "Contrat",
    commentsTitle: "Commentaires client (texte + photo)",
    commentName: "Nom",
    commentText: "Commentaire",
    commentPhoto: "Joindre une photo (optionnel)",
    commentBtn: "Ajouter commentaire",
    commentNamePlaceholder: "Client ou responsable",
    commentTextPlaceholder: "Votre retour...",
    noContracts: "Aucun contrat publié pour le moment.",
    noComments: "Pas encore de commentaire client.",
    dateUnknown: "Date non précisée",
    templateSaved: "Modèle enregistré. Vous pourrez le réutiliser pour le prochain contrat.",
    requiredContract: "Remplis au minimum le titre, la conception et les clauses.",
    contractPublished: "Contrat publie avec succes.",
    requiredComment: "Le nom et le commentaire sont obligatoires.",
    requiredFields: "Tous les champs sont obligatoires.",
    accountExists: "Ce compte existe deja pour cette societe.",
    badCredentials: "Informations de connexion invalides.",
    bmkLoaded: "Projet BMK precharge dans ce profil (modele + contrat publie).",
    companyExample: "Ex: Societe Client",
    fullnameExample: "Ex: Jean Kasongo",
    exportFileFallback: "contrat"
  },
  en: {
    appTitle: "ASOFES - Contract Publishing Portal",
    languageLabel: "Language",
    topbarLoggedOut: "Client portal with shared company workspace",
    topbarLoggedIn: (company) => `Active company: ${company}`,
    newContractBtn: "New contract from template",
    logoutBtn: "Log out",
    loginTitle: "Client login",
    registerTitle: "Create client account",
    authSubtitleLogin: "Access your ASOFES contract workspace",
    authSubtitleRegister: "Create your client access in seconds",
    authCompanyLabel: "Company name",
    authFullnameLabel: "Your full name",
    authEmailLabel: "Email",
    authPasswordLabel: "Password",
    authSubmitLogin: "Sign in",
    authSubmitRegister: "Create account",
    authTogglePrefixLogin: "First visit?",
    authToggleActionLogin: "Create account",
    authTogglePrefixRegister: "Already registered?",
    authToggleActionRegister: "Sign in",
    sharedNote: "Same company = same profile view, contracts, project and comments.",
    editorTitle: "Contract editor",
    contractTitleLabel: "Contract title",
    clientNameLabel: "Client name",
    clientContactLabel: "Client contact",
    projectAmountLabel: "Project amount (USD)",
    signatureDateLabel: "Signature date",
    designScopeLabel: "Design / engagement content",
    contractTermsLabel: "Contract terms",
    publishBtn: "Publish contract",
    saveTemplateBtn: "Save as template",
    translateProjectBtn: "Translate to French",
    closeEditorBtn: "Close",
    exportBtn: "Export as text",
    exportA4Btn: "Export A4 (PDF)",
    publishedTitle: "Published contracts",
    readingMenuTitle: "Reading menu",
    readingMenuHelp: "Open a contract then use this side index.",
    readingIndex: "Reading index",
    loadBtn: "Load",
    viewContent: "View content",
    conception: "Design",
    contract: "Contract",
    commentsTitle: "Client comments (text + photo)",
    commentName: "Name",
    commentText: "Comment",
    commentPhoto: "Attach a photo (optional)",
    commentBtn: "Add comment",
    commentNamePlaceholder: "Client or manager",
    commentTextPlaceholder: "Your feedback...",
    noContracts: "No published contracts yet.",
    noComments: "No client comments yet.",
    dateUnknown: "Date not specified",
    templateSaved: "Template saved. You can reuse it for the next contract.",
    requiredContract: "Fill at least title, design content and contract terms.",
    contractPublished: "Contract published successfully.",
    requiredComment: "Name and comment are required.",
    requiredFields: "All fields are required.",
    accountExists: "This account already exists for this company.",
    badCredentials: "Invalid login credentials.",
    bmkLoaded: "BMK project preloaded in this profile (template + published contract).",
    companyExample: "Ex: Client Company",
    fullnameExample: "Ex: John Doe",
    exportFileFallback: "contract"
  }
};

function t(key) {
  return i18n[currentLanguage][key];
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  els.languageSwitch.value = currentLanguage;
  els.appTitle.textContent = t("appTitle");
  els.languageLabel.textContent = t("languageLabel");
  els.newContractBtn.textContent = t("newContractBtn");
  els.logoutBtn.textContent = t("logoutBtn");
  applyAuthModeText();
  els.authCompanyLabel.textContent = t("authCompanyLabel");
  els.authFullnameLabel.textContent = t("authFullnameLabel");
  els.authEmailLabel.textContent = t("authEmailLabel");
  els.authPasswordLabel.textContent = t("authPasswordLabel");
  els.sharedNote.textContent = t("sharedNote");
  els.editorTitle.textContent = t("editorTitle");
  els.contractTitleLabel.textContent = t("contractTitleLabel");
  els.clientNameLabel.textContent = t("clientNameLabel");
  els.clientContactLabel.textContent = t("clientContactLabel");
  els.projectAmountLabel.textContent = t("projectAmountLabel");
  els.signatureDateLabel.textContent = t("signatureDateLabel");
  els.designScopeLabel.textContent = t("designScopeLabel");
  els.contractTermsLabel.textContent = t("contractTermsLabel");
  els.publishBtn.textContent = t("publishBtn");
  els.saveTemplateBtn.textContent = t("saveTemplateBtn");
  els.translateProjectBtn.textContent = t("translateProjectBtn");
  els.closeEditorBtn.textContent = t("closeEditorBtn");
  els.exportBtn.textContent = t("exportBtn");
  els.exportA4Btn.textContent = t("exportA4Btn");
  els.publishedTitle.textContent = t("publishedTitle");
  els.readingMenuTitle.textContent = t("readingMenuTitle");
  els.readingMenuHelp.textContent = t("readingMenuHelp");
  els.authCompany.placeholder = t("companyExample");
  els.authFullname.placeholder = t("fullnameExample");
  updateVisibilityBySession();
  if (currentSession) renderContracts();
}

function applyAuthModeText() {
  const isRegister = authMode === "register";
  els.authTitle.textContent = isRegister ? t("registerTitle") : t("loginTitle");
  els.authSubtitle.textContent = isRegister ? t("authSubtitleRegister") : t("authSubtitleLogin");
  els.authSubmitBtn.textContent = isRegister ? t("authSubmitRegister") : t("authSubmitLogin");
  els.authTogglePrefix.textContent = isRegister
    ? t("authTogglePrefixRegister")
    : t("authTogglePrefixLogin");
  els.authToggleBtn.textContent = isRegister
    ? t("authToggleActionRegister")
    : t("authToggleActionLogin");
  els.authFullnameWrap.classList.toggle("hidden", !isRegister);
  els.authFullname.required = isRegister;
}

const defaultDesignScope = [
  "Objectif: centraliser vente, production, stock, finance et suivi client.",
  "- Workflow: devis -> validation -> paiement -> production -> livraison -> cloture",
  "- Etapes de production: cutting, edging, montage usine",
  "- Portail client avec suivi d'avancement",
  "- Historique et commentaires par etape"
].join("\n");

const defaultContractTerms = [
  "Article 1 - Objet: conception et livraison de la solution.",
  "Article 2 - Duree: selon lot defini.",
  "Article 3 - Lots: livraisons successives valides par le client.",
  "Article 4 - Prix total: 1700 USD.",
  "Article 5 - Paiement: 50% signature, 25% Lot 1, 25% livraison finale.",
  "Article 6 - Maintenance/Hebergement: selon tarif convenu.",
  "Article 7 - Validation lot sous 3 a 5 jours ouvrables.",
  "Article 8 - Confidentialite et propriete intellectuelle."
].join("\n");

const bmkDesignScope = `Dossier Complet Unifie
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
- Responsable Projet`;

const bmkContractTerms = `CONTRAT DE PRESTATION (Modele)
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
- Client : Societe BMK`;

const bmkDesignScopeEn = `Unified Master Dossier
Project: Integrated management system for a modern joinery business
(functional version, non-technical, without code)
________________________________________
1) Context and vision
The company wants to manage the full lifecycle of a customer order in one system, from sales to delivery/installation, with:
- real-time stage tracking,
- deadline control,
- stock management linked to production,
- financial tracking (deposit/balance),
- customer portal for progress follow-up.
________________________________________
2) Project objectives
- Centralize all order information.
- Prevent information loss between sales, factory, stock, and finance.
- Give customers clear visibility on their case.
- Measure real progress accurately (completed quantities).
- Produce reliable end-of-day reports (stock + finance).
________________________________________
3) Global scope
Included
- Customers, quotations, orders
- Customer approval + payment
- Technical measurement validation
- Cutting list
- Cutting, edging, factory assembly
- Delivery and on-site installation
- Stock management (requests/outflow/remaining)
- Finance (collections, balances, reports)
- Stage comments/chat
- History/archive
- Customer portal
Excluded (later phase)
- HR payroll
- Full legal accounting
- Public e-commerce
- Complex multi-company setup
________________________________________
4) User roles
- Admin
- Sales representative
- Surveyor / Technical
- Factory manager
- Cutting operator
- Edging operator
- Factory assembler
- Delivery agent
- On-site installer
- Storekeeper
- Accountant / Finance
- Customer (viewing only own order)
________________________________________
5) Full business workflow (official order)
1. Sales / quotation
2. Customer acceptance
3. Payment (100% or 70% deposit)
4. Technical measurements validated
5. Cutting list
6. Cutting (panel cutting)
7. Edging (edge finishing)
8. Factory assembly
9. Delivery
10. Customer-site installation
11. Reception
12. Closure and archiving
________________________________________
6) Mandatory data per order
Customer information
- Name
- Phone
- Worksite/delivery address
Order information
- Unique order number
- Model (standard or custom)
- Materials (wood, granite, marble, etc.)
- Color
- Dimensions (volume, diameter, etc.)
- Design / reference images
- Quotation
- Promised delivery timeline
________________________________________
7) Mandatory operational tracking by stage
Each stage must store:
- planned quantity
- completed quantity
- planned start date
- planned end date
- actual start date
- actual end date
- owner
- status (to do, in progress, completed, blocked, delayed)
- progress note
Example: Cutting planned 15 pieces, completed 5 then 10 then 15.
________________________________________
8) Deadline and delay management
- Each stage has a planned timeline.
- The system compares planned vs actual automatically.
- If exceeded: delayed status.
- In case of delay:
- reason is mandatory,
- new estimated date is mandatory,
- immediate internal notification,
- customer notification according to communication rules.
________________________________________
9) Customer portal
When quotation is accepted:
- customer account is created automatically,
- customer logs in to track order,
- sees stages and current status,
- sees validated documents (quotation, payment, delivery, reception),
- receives official updates.
________________________________________
10) Factory production (expected details)
Cutting list
- analyze requested model,
- simulate required parts,
- define exact dimensions,
- estimate number of boards and accessories.
Workshop execution
- Cutting,
- Edging,
- Factory assembly (design/assembly control).
________________________________________
11) Stock and store
- Cutting list automatically generates material needs:
- boards,
- handles,
- hinges,
- other accessories.
- A stock-out request is generated.
- Storekeeper prepares and validates release.
- Stock is updated (outflow and remaining).
- End-of-day warehouse report:
- total inputs,
- total outputs,
- remaining stock.
________________________________________
12) Finance and operational accounting
- Collection tracking linked to orders:
- deposit,
- full payment,
- remaining balance.
- Daily cash/bank journal.
- End-of-day finance report:
- daily sales,
- daily collections,
- outstanding payments,
- paid/unpaid orders.
________________________________________
13) Chatbox and comments at each level
Each stage includes:
- discussion thread,
- author + timestamp,
- attachments (photos/documents),
- preserved history.
Two channels:
- internal (teams),
- customer (approved messages).
________________________________________
14) Core business rules
- Unique order number is mandatory.
- Quotation acceptance = customer account creation.
- No stage skipping without admin authorization.
- Stock-out is mandatory for material consumption.
- Collection not linked to an order is forbidden.
- Delay without justification is forbidden.
- History cannot be deleted.
________________________________________
15) Expected dashboards
- Management: ongoing orders, delays, revenue, alerts.
- Factory: workload by stage (cutting/edging/assembly).
- Stock: pending requests, outflows, potential shortages.
- Finance: collections, balances, unpaid items.
- Customer: own order progress only.
________________________________________
16) Acceptance criteria
System is validated if:
1. An order can flow from sales to closure without break.
2. Customer tracks their order autonomously.
3. Cutting/edging/assembly stages show planned vs completed.
4. Stock outputs follow cutting list.
5. Collections are visible in finance.
6. End-of-day reports are available.
7. Delays are tracked and justified.
8. Role permissions are respected.
17) Deployment plan (batches)
Batch 1 (4-6 weeks)
- Customer, quotation, order, payment, base stage tracking, simple customer portal.
Batch 2 (4-6 weeks)
- Cutting list, cutting, edging, factory assembly, stock store.
Batch 3 (3-5 weeks)
- Delivery, on-site installation, advanced finance, dashboards, full comments/chat.
________________________________________
18) Risks and control measures
- Incomplete measurements -> mandatory field checklist.
- Delays not reported -> auto "delayed" status + mandatory note.
- Stock shortage -> reserve material once cutting list is validated.
- Poor role separation -> strict roles/permissions.
- Low adoption -> profile-based training.
________________________________________
19) RACI summary
- Management: validates framework and arbitrations.
- Sales: handles quotation/order.
- Technical: validates measurements and constraints.
- Factory manager: drives production.
- Cutting/Edging/Assembly: execute and report progress.
- Storekeeper: prepares and validates stock releases.
- Delivery agent: executes delivery.
- Finance: records collections and reports.
- Customer: tracks and confirms reception.
________________________________________
20) Governance and signatures
- Weekly steering meeting.
- End-of-batch validation via formal minutes.
- Change management via formal requests.
- Training before go-live.
Recommended signatories:
- Management
- Factory manager
- Finance lead
- Project lead`;

const bmkContractTermsEn = `SERVICE AGREEMENT (Template)
Between the undersigned:
- Provider: [toto MULUMBA / company / ASOFES], [Maman Yemo 267], [Phone: 0995178105], [totoasofes22@gmail.com]
- Client: [CEO / company: BMK], [Address: De la revolution], [Phone: +243 820 001 470 / +243 852 554 135], [Email:                         ]
The following is agreed:
Article 1 - Purpose
The provider agrees to design and deliver a management application for modern joinery (sales, production, stock, finance, customer portal), according to the batches defined in the attached specification.
Article 2 - Duration
Estimated duration: 4 to 5 weeks from project start date.
Article 3 - Scope and batches
The project is split into 3 batches with successive deliveries and client validation at the end of each batch.
Article 4 - Project price
Total development amount: 1,700 USD
- Batch 1: 750 USD
- Batch 2: 375 USD
- Batch 3: 375 USD

Article 5 - Payment terms
- 50% at signature: 750 USD
- 25% after Batch 1 validation: 375 USD
- 25% at final delivery: 375 USD
Any validated work outside the agreed scope will be billed through an additional quotation.
Article 6 - Maintenance and hosting
- Corrective maintenance and support: 150 USD / month
- Hosting: 50 USD / month
- Total recurring monthly fee: 200 USD / month
Article 7 - Included in maintenance
- bug fixing,
- reasonable user support,
- minor adaptations (non-structural).
Article 8 - Not included in maintenance
- major new features,
- complete UI/UX redesign,
- new third-party integrations,
- unplanned scope extensions. These items are billed through separate quotation.
Article 9 - Client obligations
The client commits to:
- provide business information and validations on time,
- appoint a main point of contact,
- validate or comment each batch within 3 to 5 business days.
Article 10 - Acceptance and validation
Each batch is validated through demo + acceptance report.
Without blocking feedback within 5 business days, the batch is considered accepted.
Article 11 - Intellectual property
Ownership of the delivered solution is transferred to the client after full project payment.
Article 12 - Confidentiality
Both parties commit to keep all exchanged data and information confidential.
Article 13 - Termination
In case of early termination, already completed and validated work remains due proportionally.
Article 14 - Disputes
In case of dispute, both parties shall prioritize amicable settlement before legal action.
Done at [City], on [Date]
Signatures:
- Provider: Toto asofes
- Client: Societe BMK`;

function slugCompanyName(name) {
  return name.toLowerCase().trim().replace(/\s+/g, "-");
}

function isBMKCompany(name) {
  const normalized = name.toLowerCase();
  return normalized.includes("bmk") || normalized.includes("bkm");
}

function readUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function readDb() {
  return JSON.parse(localStorage.getItem(DB_KEY) || "{}");
}

function writeDb(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function requireSession() {
  if (!currentSession) {
    throw new Error("Aucune session active.");
  }
}

function getCompanyStore(companyId) {
  const db = readDb();
  if (!db[companyId]) {
    db[companyId] = { contracts: [], template: null };
    writeDb(db);
  }
  return db[companyId];
}

function updateCompanyStore(companyId, nextStore) {
  const db = readDb();
  db[companyId] = nextStore;
  writeDb(db);
}

function seedBMKProjectIfNeeded(companyId, companyName) {
  if (!isBMKCompany(companyName)) return false;

  const store = getCompanyStore(companyId);
  const isOutdated =
    !store.template ||
    !store.template.designScope ||
    !store.template.designScope.includes("Dossier Complet Unifie");

  if (!isOutdated) return false;

  const starterTemplate = {
    title: "Dossier Complet Unifie - BMK",
    clientName: "Societe BMK",
    clientContact: "+243 820 001 470 / +243 852 554 135",
    projectAmount: 1700,
    signatureDate: "",
    designScope: bmkDesignScope,
    contractTerms: bmkContractTerms
  };

  store.template = starterTemplate;
  const hasUnifiedContract = store.contracts.some(
    (contract) => contract.title === "Dossier Complet Unifie - BMK"
  );
  if (!hasUnifiedContract) {
    store.contracts.unshift({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      comments: [],
      ...starterTemplate
    });
  }
  updateCompanyStore(companyId, store);
  return true;
}

function readContracts() {
  requireSession();
  return getCompanyStore(currentSession.companyId).contracts;
}

function writeContracts(contracts) {
  requireSession();
  const store = getCompanyStore(currentSession.companyId);
  store.contracts = contracts;
  updateCompanyStore(currentSession.companyId, store);
}

function getDraftFromForm() {
  return {
    title: els.title.value.trim(),
    clientName: els.clientName.value.trim(),
    clientContact: els.clientContact.value.trim(),
    projectAmount: Number(els.projectAmount.value || 0),
    signatureDate: els.signatureDate.value,
    designScope: els.designScope.value.trim(),
    contractTerms: els.contractTerms.value.trim()
  };
}

function fillForm(contract) {
  els.title.value = contract.title || "";
  els.clientName.value = contract.clientName || "Nom du client";
  els.clientContact.value = contract.clientContact || "";
  els.projectAmount.value = contract.projectAmount ?? 0;
  els.signatureDate.value = contract.signatureDate || "";
  els.designScope.value = contract.designScope || defaultDesignScope;
  els.contractTerms.value = contract.contractTerms || defaultContractTerms;
}

function loadTemplate() {
  requireSession();
  const template = getCompanyStore(currentSession.companyId).template;
  if (template) {
    fillForm(template);
    return;
  }

  fillForm({
    title: "Contrat de prestation - ASOFES",
    clientName: "Nom du client",
    clientContact: "Contact client",
    projectAmount: 1700,
    signatureDate: "",
    designScope: defaultDesignScope,
    contractTerms: defaultContractTerms
  });
}

function getBMKStarterTemplate() {
  const useEnglish = currentLanguage === "en";
  return {
    title: useEnglish ? "Unified Master Dossier - BMK" : "Dossier Complet Unifie - BMK",
    clientName: "Societe BMK",
    clientContact: "+243 820 001 470 / +243 852 554 135",
    projectAmount: 1700,
    signatureDate: "",
    designScope: useEnglish ? bmkDesignScopeEn : bmkDesignScope,
    contractTerms: useEnglish ? bmkContractTermsEn : bmkContractTerms
  };
}

function syncBMKLanguageContentForSession() {
  if (!currentSession) return;
  if (!isBMKCompany(currentSession.companyName)) return;

  const store = getCompanyStore(currentSession.companyId);
  const useEnglish = currentLanguage === "en";
  const expectedTitle = useEnglish ? "Unified Master Dossier - BMK" : "Dossier Complet Unifie - BMK";
  const expectedScope = useEnglish ? bmkDesignScopeEn : bmkDesignScope;
  const expectedTerms = useEnglish ? bmkContractTermsEn : bmkContractTerms;

  if (store.template) {
    store.template = {
      ...store.template,
      title: expectedTitle,
      clientName: "Societe BMK",
      clientContact: "+243 820 001 470 / +243 852 554 135",
      designScope: expectedScope,
      contractTerms: expectedTerms
    };
  }

  store.contracts = store.contracts.map((contract) => {
    const isBMKDossier =
      contract.title === "Dossier Complet Unifie - BMK" ||
      contract.title === "Unified Master Dossier - BMK";

    if (!isBMKDossier) return contract;

    return {
      ...contract,
      title: expectedTitle,
      clientName: "Societe BMK",
      clientContact: "+243 820 001 470 / +243 852 554 135",
      designScope: expectedScope,
      contractTerms: expectedTerms
    };
  });

  updateCompanyStore(currentSession.companyId, store);
}

function isBMKDossierContract(contract) {
  return (
    contract.title === "Dossier Complet Unifie - BMK" ||
    contract.title === "Unified Master Dossier - BMK"
  );
}

function getLocalizedContract(contract) {
  if (!isBMKDossierContract(contract)) return contract;
  if (currentLanguage === "en") {
    return {
      ...contract,
      title: "Unified Master Dossier - BMK",
      clientName: "Societe BMK",
      clientContact: "+243 820 001 470 / +243 852 554 135",
      designScope: bmkDesignScopeEn,
      contractTerms: bmkContractTermsEn
    };
  }
  return {
    ...contract,
    title: "Dossier Complet Unifie - BMK",
    clientName: "Societe BMK",
    clientContact: "+243 820 001 470 / +243 852 554 135",
    designScope: bmkDesignScope,
    contractTerms: bmkContractTerms
  };
}

function loadNewContractFromButton() {
  requireSession();
  fillForm(getBMKStarterTemplate());
  setEditorVisible(true);
}

function formatDate(dateIso) {
  if (!dateIso) return t("dateUnknown");
  return new Date(dateIso).toLocaleDateString(currentLanguage === "fr" ? "fr-FR" : "en-US");
}

function saveTemplateFromCurrentForm() {
  requireSession();
  const draft = getDraftFromForm();
  const store = getCompanyStore(currentSession.companyId);
  store.template = draft;
  updateCompanyStore(currentSession.companyId, store);
  alert(t("templateSaved"));
}

function publishContract(event) {
  event.preventDefault();
  const draft = getDraftFromForm();

  if (!draft.title || !draft.designScope || !draft.contractTerms) {
    alert(t("requiredContract"));
    return;
  }

  const contracts = readContracts();
  contracts.unshift({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    comments: [],
    ...draft
  });
  writeContracts(contracts);
  renderContracts();
  alert(t("contractPublished"));
}

function handleCommentSubmit(e, contractId) {
  e.preventDefault();
  const form = e.currentTarget;
  const author = form.querySelector(".comment-author").value.trim();
  const text = form.querySelector(".comment-text").value.trim();
  const fileInput = form.querySelector(".comment-photo");
  const file = fileInput.files[0];

  if (!author || !text) {
    alert(t("requiredComment"));
    return;
  }

  const pushComment = (photoDataUrl = "") => {
    const contracts = readContracts();
    const target = contracts.find((contract) => contract.id === contractId);
    if (!target) return;

    target.comments.unshift({
      id: crypto.randomUUID(),
      author,
      text,
      photoDataUrl,
      createdAt: new Date().toISOString()
    });

    writeContracts(contracts);
    renderContracts();
  };

  if (!file) {
    pushComment();
    return;
  }

  const reader = new FileReader();
  reader.onload = () => pushComment(reader.result);
  reader.readAsDataURL(file);
}

function renderComment(item) {
  const node = document.createElement("div");
  node.className = "comment-item";
  node.innerHTML = `
    <p><strong>${item.author}</strong> - <span class="muted">${new Date(item.createdAt).toLocaleString(currentLanguage === "fr" ? "fr-FR" : "en-US")}</span></p>
    <p>${item.text}</p>
    ${item.photoDataUrl ? `<img src="${item.photoDataUrl}" alt="Comment photo">` : ""}
  `;
  return node;
}

function isContentHeading(line) {
  return (
    /^(\d+\)|\d+\.)\s+/.test(line) ||
    /^Article\s+\d+/i.test(line) ||
    /^Lot\s+\d+/i.test(line) ||
    /^Signatures?\s*:?/i.test(line) ||
    /^(Dossier Complet Unifie|Projet\s*:|Informations client|Informations commande|Execution atelier|Exécution atelier|Inclus|Exclu.*|CONTRAT DE PRESTATION.*|Objectifs du projet|Perimetre global|Périmètre global)$/i.test(
      line
    ) ||
    (line.endsWith(":") && line.length < 90)
  );
}

function createContentSlug(value, fallback) {
  const slug = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return slug || fallback;
}

function buildReadableContent(text, anchorPrefix) {
  const lines = (text || "").split(/\r?\n/);
  const indexItems = [];
  let html = "";
  let inList = false;
  let idx = 0;

  const closeList = () => {
    if (inList) {
      html += "</ul>";
      inList = false;
    }
  };

  lines.forEach((raw) => {
    const line = raw.trim();

    if (!line) {
      closeList();
      return;
    }

    if (/^_{5,}$/.test(line)) {
      closeList();
      html += "<hr>";
      return;
    }

    if (/^[-•]\s*/.test(line)) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${escapeHtml(line.replace(/^[-•]\s*/, ""))}</li>`;
      return;
    }

    closeList();
    if (isContentHeading(line)) {
      idx += 1;
      const anchorId = `${anchorPrefix}-${createContentSlug(line, `section-${idx}`)}-${idx}`;
      indexItems.push({ id: anchorId, label: line });
      html += `<h5 id="${anchorId}" class="content-heading">${escapeHtml(line)}</h5>`;
      return;
    }

    html += `<p class="content-paragraph">${escapeHtml(line)}</p>`;
  });

  closeList();
  return { html, indexItems };
}

function exportCurrentContractAsText() {
  const draft = getDraftFromForm();
  const text = [
    `TITRE: ${draft.title}`,
    `CLIENT: ${draft.clientName}`,
    `CONTACT: ${draft.clientContact}`,
    `MONTANT USD: ${draft.projectAmount}`,
    `DATE SIGNATURE: ${draft.signatureDate || "-"}`,
    "",
    `=== ${t("conception").toUpperCase()} ===`,
    draft.designScope,
    "",
    `=== ${t("contract").toUpperCase()} ===`,
    draft.contractTerms
  ].join("\n");

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${(draft.title || t("exportFileFallback")).replace(/\s+/g, "_")}.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function exportCurrentContractA4() {
  const draft = getDraftFromForm();
  const signedDate = draft.signatureDate ? formatDate(draft.signatureDate) : "________________";
  const safeTitle = escapeHtml(draft.title || "Contrat");
  const safeClientName = escapeHtml(draft.clientName || "Client");
  const safeClientContact = escapeHtml(draft.clientContact || "-");
  const safeAmount = escapeHtml(String(draft.projectAmount || 0));
  const safeScope = escapeHtml(draft.designScope || "").replace(/\n/g, "<br>");
  const safeTerms = escapeHtml(draft.contractTerms || "").replace(/\n/g, "<br>");

  const popup = window.open("", "_blank", "width=900,height=1000");
  if (!popup) return;

  popup.document.write(`
    <!doctype html>
    <html lang="fr">
      <head>
        <meta charset="utf-8">
        <title>${safeTitle} - A4</title>
        <style>
          @page { size: A4; margin: 16mm; }
          body { font-family: "Segoe UI", Arial, sans-serif; color: #0f172a; line-height: 1.45; }
          .doc { max-width: 180mm; margin: 0 auto; }
          .header { border-bottom: 2px solid #1d4ed8; padding-bottom: 8px; margin-bottom: 12px; }
          .brand { font-size: 11px; color: #1d4ed8; font-weight: 700; letter-spacing: .4px; }
          h1 { margin: 3px 0 0; font-size: 22px; }
          .meta { margin-top: 7px; font-size: 12px; color: #334155; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 10px 0 14px; }
          .box { border: 1px solid #cbd5e1; border-radius: 8px; padding: 7px; font-size: 12px; }
          h2 { font-size: 15px; margin: 14px 0 7px; color: #1e3a8a; }
          .block { border: 1px solid #dbe4f0; border-radius: 10px; padding: 10px; font-size: 12px; }
          .signatures { margin-top: 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
          .sig { border-top: 1px solid #334155; padding-top: 6px; min-height: 56px; font-size: 12px; }
          .footer { margin-top: 14px; font-size: 11px; color: #64748b; }
          @media print { .print-btn { display: none; } }
        </style>
      </head>
      <body>
        <div class="doc">
          <div class="header">
            <div class="brand">ASOFES | CONTRAT DE PRESTATION</div>
            <h1>${safeTitle}</h1>
            <div class="meta">Date de signature: ${signedDate}</div>
          </div>
          <div class="grid">
            <div class="box"><strong>Client</strong><br>${safeClientName}<br>Contact: ${safeClientContact}</div>
            <div class="box"><strong>Projet</strong><br>Montant: ${safeAmount} USD<br>Portail: ASOFES Publication</div>
          </div>

          <h2>Dossier de conception</h2>
          <div class="block">${safeScope}</div>

          <h2>Clauses contractuelles</h2>
          <div class="block">${safeTerms}</div>

          <div class="signatures">
            <div>
              <div><strong>Le Prestataire</strong></div>
              <div class="sig">Nom: ASOFES / Toto Mulumba<br>Signature: ____________________</div>
            </div>
            <div>
              <div><strong>Le Client</strong></div>
              <div class="sig">Nom: ${safeClientName}<br>Signature: ____________________</div>
            </div>
          </div>

          <div class="footer">Document genere depuis le portail ASOFES. Format A4.</div>
          <p><button class="print-btn" onclick="window.print()">Imprimer / Exporter en PDF</button></p>
        </div>
      </body>
    </html>
  `);
  popup.document.close();
}

function renderContracts() {
  const contracts = readContracts();
  els.contractsList.innerHTML = "";
  els.readingMenuList.innerHTML = "";

  if (!contracts.length) {
    els.contractsList.innerHTML = `<p class="muted">${t("noContracts")}</p>`;
    return;
  }

  let firstIndex = null;

  contracts.forEach((contract) => {
    const localizedContract = getLocalizedContract(contract);
    const fragment = els.cardTemplate.content.cloneNode(true);
    fragment.querySelector(".contract-title").textContent = localizedContract.title;
    fragment.querySelector(".contract-meta").textContent =
      `${localizedContract.clientName} | ${formatDate(localizedContract.signatureDate)} | ${localizedContract.projectAmount} USD`;
    const scopeSection = fragment.querySelector(".scope-section");
    const termsSection = fragment.querySelector(".terms-section");
    const safeId = createContentSlug(localizedContract.id, crypto.randomUUID());
    scopeSection.id = `scope-main-${safeId}`;
    termsSection.id = `terms-main-${safeId}`;

    const scopeReadable = buildReadableContent(localizedContract.designScope, `scope-${safeId}`);
    const termsReadable = buildReadableContent(localizedContract.contractTerms, `terms-${safeId}`);
    fragment.querySelector(".scope-content").innerHTML = scopeReadable.html;
    fragment.querySelector(".terms-content").innerHTML = termsReadable.html;

    const loadBtn = fragment.querySelector(".load-btn");
    loadBtn.textContent = t("loadBtn");
    loadBtn.addEventListener("click", () => {
      fillForm(localizedContract);
      setEditorVisible(true);
    });

    fragment.querySelector("summary").textContent = t("viewContent");
    const sectionTitles = fragment.querySelectorAll("h4");
    sectionTitles[0].textContent = t("conception");
    sectionTitles[1].textContent = t("contract");
    sectionTitles[2].textContent = t("commentsTitle");
    const labels = fragment.querySelectorAll("label");
    labels[0].childNodes[0].textContent = t("commentName");
    labels[1].childNodes[0].textContent = t("commentText");
    labels[2].childNodes[0].textContent = t("commentPhoto");
    const authorInput = fragment.querySelector(".comment-author");
    const commentText = fragment.querySelector(".comment-text");
    authorInput.placeholder = t("commentNamePlaceholder");
    commentText.placeholder = t("commentTextPlaceholder");
    fragment.querySelector(".comment-form button").textContent = t("commentBtn");

    const allIndex = [
      { id: scopeSection.id, label: t("conception") },
      ...scopeReadable.indexItems,
      { id: termsSection.id, label: t("contract") },
      ...termsReadable.indexItems
    ];
    if (!firstIndex) firstIndex = allIndex;

    const detailsNode = fragment.querySelector(".content-details");
    detailsNode.addEventListener("toggle", () => {
      if (!detailsNode.open) return;
      els.readingMenuList.innerHTML = allIndex
        .map((item) => `<li><a href="#${item.id}">${escapeHtml(item.label)}</a></li>`)
        .join("");
    });

    const commentForm = fragment.querySelector(".comment-form");
    commentForm.addEventListener("submit", (e) => handleCommentSubmit(e, localizedContract.id));

    const commentsList = fragment.querySelector(".comments-list");
    if (!localizedContract.comments.length) {
      commentsList.innerHTML = `<p class="muted">${t("noComments")}</p>`;
    } else {
      localizedContract.comments.forEach((comment) => commentsList.appendChild(renderComment(comment)));
    }

    els.contractsList.appendChild(fragment);
  });

  if (firstIndex) {
    els.readingMenuList.innerHTML = firstIndex
      .map((item) => `<li><a href="#${item.id}">${escapeHtml(item.label)}</a></li>`)
      .join("");
  }
}

function setSession(session) {
  currentSession = session;
  if (!session) {
    localStorage.removeItem(SESSION_KEY);
  } else {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
  updateVisibilityBySession();
}

function setEditorVisible(visible) {
  els.editorPanel.classList.toggle("hidden", !visible);
  els.appScreen.classList.toggle("editor-open", visible);
}

function updateVisibilityBySession() {
  const connected = Boolean(currentSession);
  els.authScreen.classList.toggle("hidden", connected);
  els.appScreen.classList.toggle("hidden", !connected);
  els.logoutBtn.classList.toggle("hidden", !connected);
  els.newContractBtn.classList.toggle("hidden", !connected);

  if (!connected) {
    els.sessionInfo.textContent = "";
    els.subtitle.textContent = t("topbarLoggedOut");
    setEditorVisible(false);
    return;
  }

  els.sessionInfo.textContent = `${currentSession.fullName} | ${currentSession.companyName}`;
  els.subtitle.textContent = t("topbarLoggedIn")(currentSession.companyName);
  seedBMKProjectIfNeeded(currentSession.companyId, currentSession.companyName);
  setEditorVisible(false);
  loadTemplate();
  renderContracts();
}

function registerUser(event) {
  const companyName = els.authCompany.value.trim();
  const fullName = els.authFullname.value.trim();
  const email = els.authEmail.value.trim().toLowerCase();
  const password = els.authPassword.value.trim();

  if (!companyName || !fullName || !email || !password) {
    alert(t("requiredFields"));
    return;
  }

  const companyId = slugCompanyName(companyName);
  const users = readUsers();
  const exists = users.some((u) => u.companyId === companyId && u.email === email);

  if (exists) {
    alert(t("accountExists"));
    return;
  }

  users.push({
    id: crypto.randomUUID(),
    companyId,
    companyName,
    fullName,
    email,
    password
  });
  writeUsers(users);

  const wasSeeded = seedBMKProjectIfNeeded(companyId, companyName);

  setSession({
    userId: users[users.length - 1].id,
    companyId,
    companyName,
    fullName,
    email
  });

  if (wasSeeded) alert(t("bmkLoaded"));
}

function loginUser(event) {
  const companyName = els.authCompany.value.trim();
  const email = els.authEmail.value.trim().toLowerCase();
  const password = els.authPassword.value.trim();
  const companyId = slugCompanyName(companyName);

  const users = readUsers();
  const user = users.find(
    (u) => u.companyId === companyId && u.email === email && u.password === password
  );

  if (!user) {
    alert(t("badCredentials"));
    return;
  }

  const wasSeeded = seedBMKProjectIfNeeded(user.companyId, user.companyName);

  setSession({
    userId: user.id,
    companyId: user.companyId,
    companyName: user.companyName,
    fullName: user.fullName,
    email: user.email
  });

  if (wasSeeded) alert(t("bmkLoaded"));
}

function logoutUser() {
  setSession(null);
}

function switchLanguage(event) {
  currentLanguage = event.target.value;
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  syncBMKLanguageContentForSession();
  applyLanguage();
}

function handleAuthSubmit(event) {
  event.preventDefault();
  if (authMode === "register") {
    registerUser();
  } else {
    loginUser();
  }
}

function toggleAuthMode() {
  authMode = authMode === "login" ? "register" : "login";
  applyAuthModeText();
}

function closeEditorPanel() {
  setEditorVisible(false);
}

function translateProjectTemplate() {
  const isEnglish = currentLanguage === "en";
  const template = isEnglish
    ? {
        title: "Unified Master Dossier - BMK",
        clientName: "Societe BMK",
        clientContact: "+243 820 001 470 / +243 852 554 135",
        projectAmount: Number(els.projectAmount.value || 1700),
        signatureDate: els.signatureDate.value,
        designScope: bmkDesignScopeEn,
        contractTerms: bmkContractTermsEn
      }
    : {
        title: "Dossier Complet Unifie - BMK",
        clientName: "Societe BMK",
        clientContact: "+243 820 001 470 / +243 852 554 135",
        projectAmount: Number(els.projectAmount.value || 1700),
        signatureDate: els.signatureDate.value,
        designScope: bmkDesignScope,
        contractTerms: bmkContractTerms
      };
  fillForm(template);
}

els.form.addEventListener("submit", publishContract);
els.saveTemplateBtn.addEventListener("click", saveTemplateFromCurrentForm);
els.newContractBtn.addEventListener("click", loadNewContractFromButton);
els.exportBtn.addEventListener("click", exportCurrentContractAsText);
els.exportA4Btn.addEventListener("click", exportCurrentContractA4);
els.translateProjectBtn.addEventListener("click", translateProjectTemplate);
els.closeEditorBtn.addEventListener("click", closeEditorPanel);
els.authForm.addEventListener("submit", handleAuthSubmit);
els.authToggleBtn.addEventListener("click", toggleAuthMode);
els.logoutBtn.addEventListener("click", logoutUser);
els.languageSwitch.addEventListener("change", switchLanguage);

applyLanguage();
updateVisibilityBySession();
