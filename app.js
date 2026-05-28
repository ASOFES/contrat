const USERS_KEY = "client_portal_users_v1";
const SESSION_KEY = "client_portal_session_v1";
const DB_KEY = "client_company_db_v1";
const LANGUAGE_KEY = "client_portal_language_v1";

const els = {
  authScreen: document.getElementById("auth-screen"),
  appScreen: document.getElementById("app-screen"),
  registerForm: document.getElementById("register-form"),
  loginForm: document.getElementById("login-form"),
  languageSwitch: document.getElementById("language-switch"),
  appTitle: document.getElementById("app-title"),
  languageLabel: document.getElementById("language-label"),
  registerTitle: document.getElementById("register-title"),
  registerCompanyLabel: document.getElementById("register-company-label"),
  registerFullnameLabel: document.getElementById("register-fullname-label"),
  registerEmailLabel: document.getElementById("register-email-label"),
  registerPasswordLabel: document.getElementById("register-password-label"),
  registerSubmitBtn: document.getElementById("register-submit-btn"),
  loginTitle: document.getElementById("login-title"),
  loginCompanyLabel: document.getElementById("login-company-label"),
  loginEmailLabel: document.getElementById("login-email-label"),
  loginPasswordLabel: document.getElementById("login-password-label"),
  loginSubmitBtn: document.getElementById("login-submit-btn"),
  sharedNote: document.getElementById("shared-note"),
  editorTitle: document.getElementById("editor-title"),
  contractTitleLabel: document.getElementById("contract-title-label"),
  clientNameLabel: document.getElementById("client-name-label"),
  clientContactLabel: document.getElementById("client-contact-label"),
  projectAmountLabel: document.getElementById("project-amount-label"),
  signatureDateLabel: document.getElementById("signature-date-label"),
  designScopeLabel: document.getElementById("design-scope-label"),
  contractTermsLabel: document.getElementById("contract-terms-label"),
  publishBtn: document.getElementById("publish-btn"),
  publishedTitle: document.getElementById("published-title"),
  registerCompany: document.getElementById("register-company"),
  registerFullname: document.getElementById("register-fullname"),
  registerEmail: document.getElementById("register-email"),
  registerPassword: document.getElementById("register-password"),
  loginCompany: document.getElementById("login-company"),
  loginEmail: document.getElementById("login-email"),
  loginPassword: document.getElementById("login-password"),
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
  cardTemplate: document.getElementById("contract-card-template")
};

let currentSession = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "fr";

const i18n = {
  fr: {
    appTitle: "ASOFES - Publication de Contrats",
    languageLabel: "Langue",
    topbarLoggedOut: "Portail ASOFES avec espace partage par societe",
    topbarLoggedIn: (company) => `Societe active: ${company}`,
    newContractBtn: "Nouveau contrat depuis modele",
    logoutBtn: "Deconnexion",
    registerTitle: "Creer un compte client",
    registerCompanyLabel: "Nom de la societe",
    registerFullnameLabel: "Votre nom",
    registerEmailLabel: "Email (identifiant)",
    registerPasswordLabel: "Mot de passe",
    registerSubmitBtn: "Creer mon compte",
    loginTitle: "Connexion client",
    loginCompanyLabel: "Nom de la societe",
    loginEmailLabel: "Email",
    loginPasswordLabel: "Mot de passe",
    loginSubmitBtn: "Se connecter",
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
    exportBtn: "Exporter en texte",
    publishedTitle: "Contrats publies",
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
    noContracts: "Aucun contrat publie pour le moment.",
    noComments: "Pas encore de commentaire client.",
    dateUnknown: "Date non precisee",
    templateSaved: "Modele enregistre. Tu pourras le reutiliser pour le prochain contrat.",
    requiredContract: "Remplis au minimum le titre, la conception et les clauses.",
    contractPublished: "Contrat publie avec succes.",
    requiredComment: "Le nom et le commentaire sont obligatoires.",
    requiredFields: "Tous les champs sont obligatoires.",
    accountExists: "Ce compte existe deja pour cette societe.",
    badCredentials: "Informations de connexion invalides.",
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
    registerTitle: "Create client account",
    registerCompanyLabel: "Company name",
    registerFullnameLabel: "Your name",
    registerEmailLabel: "Email (login)",
    registerPasswordLabel: "Password",
    registerSubmitBtn: "Create account",
    loginTitle: "Client login",
    loginCompanyLabel: "Company name",
    loginEmailLabel: "Email",
    loginPasswordLabel: "Password",
    loginSubmitBtn: "Sign in",
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
    exportBtn: "Export as text",
    publishedTitle: "Published contracts",
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
  els.registerTitle.textContent = t("registerTitle");
  els.registerCompanyLabel.textContent = t("registerCompanyLabel");
  els.registerFullnameLabel.textContent = t("registerFullnameLabel");
  els.registerEmailLabel.textContent = t("registerEmailLabel");
  els.registerPasswordLabel.textContent = t("registerPasswordLabel");
  els.registerSubmitBtn.textContent = t("registerSubmitBtn");
  els.loginTitle.textContent = t("loginTitle");
  els.loginCompanyLabel.textContent = t("loginCompanyLabel");
  els.loginEmailLabel.textContent = t("loginEmailLabel");
  els.loginPasswordLabel.textContent = t("loginPasswordLabel");
  els.loginSubmitBtn.textContent = t("loginSubmitBtn");
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
  els.exportBtn.textContent = t("exportBtn");
  els.publishedTitle.textContent = t("publishedTitle");
  els.registerCompany.placeholder = t("companyExample");
  els.registerFullname.placeholder = t("fullnameExample");
  updateVisibilityBySession();
  if (currentSession) renderContracts();
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

function slugCompanyName(name) {
  return name.toLowerCase().trim().replace(/\s+/g, "-");
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

function renderContracts() {
  const contracts = readContracts();
  els.contractsList.innerHTML = "";

  if (!contracts.length) {
    els.contractsList.innerHTML = `<p class="muted">${t("noContracts")}</p>`;
    return;
  }

  contracts.forEach((contract) => {
    const fragment = els.cardTemplate.content.cloneNode(true);
    fragment.querySelector(".contract-title").textContent = contract.title;
    fragment.querySelector(".contract-meta").textContent =
      `${contract.clientName} | ${formatDate(contract.signatureDate)} | ${contract.projectAmount} USD`;
    fragment.querySelector(".scope-content").textContent = contract.designScope;
    fragment.querySelector(".terms-content").textContent = contract.contractTerms;

    const loadBtn = fragment.querySelector(".load-btn");
    loadBtn.textContent = t("loadBtn");
    loadBtn.addEventListener("click", () => fillForm(contract));

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

    const commentForm = fragment.querySelector(".comment-form");
    commentForm.addEventListener("submit", (e) => handleCommentSubmit(e, contract.id));

    const commentsList = fragment.querySelector(".comments-list");
    if (!contract.comments.length) {
      commentsList.innerHTML = `<p class="muted">${t("noComments")}</p>`;
    } else {
      contract.comments.forEach((comment) => commentsList.appendChild(renderComment(comment)));
    }

    els.contractsList.appendChild(fragment);
  });
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

function updateVisibilityBySession() {
  const connected = Boolean(currentSession);
  els.authScreen.classList.toggle("hidden", connected);
  els.appScreen.classList.toggle("hidden", !connected);
  els.logoutBtn.classList.toggle("hidden", !connected);
  els.newContractBtn.classList.toggle("hidden", !connected);

  if (!connected) {
    els.sessionInfo.textContent = "";
    els.subtitle.textContent = t("topbarLoggedOut");
    return;
  }

  els.sessionInfo.textContent = `${currentSession.fullName} | ${currentSession.companyName}`;
  els.subtitle.textContent = t("topbarLoggedIn")(currentSession.companyName);
  loadTemplate();
  renderContracts();
}

function registerUser(event) {
  event.preventDefault();

  const companyName = els.registerCompany.value.trim();
  const fullName = els.registerFullname.value.trim();
  const email = els.registerEmail.value.trim().toLowerCase();
  const password = els.registerPassword.value.trim();

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

  getCompanyStore(companyId);

  setSession({
    userId: users[users.length - 1].id,
    companyId,
    companyName,
    fullName,
    email
  });
}

function loginUser(event) {
  event.preventDefault();

  const companyName = els.loginCompany.value.trim();
  const email = els.loginEmail.value.trim().toLowerCase();
  const password = els.loginPassword.value.trim();
  const companyId = slugCompanyName(companyName);

  const users = readUsers();
  const user = users.find(
    (u) => u.companyId === companyId && u.email === email && u.password === password
  );

  if (!user) {
    alert(t("badCredentials"));
    return;
  }

  setSession({
    userId: user.id,
    companyId: user.companyId,
    companyName: user.companyName,
    fullName: user.fullName,
    email: user.email
  });
}

function logoutUser() {
  setSession(null);
}

function switchLanguage(event) {
  currentLanguage = event.target.value;
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  applyLanguage();
}

els.form.addEventListener("submit", publishContract);
els.saveTemplateBtn.addEventListener("click", saveTemplateFromCurrentForm);
els.newContractBtn.addEventListener("click", loadTemplate);
els.exportBtn.addEventListener("click", exportCurrentContractAsText);
els.registerForm.addEventListener("submit", registerUser);
els.loginForm.addEventListener("submit", loginUser);
els.logoutBtn.addEventListener("click", logoutUser);
els.languageSwitch.addEventListener("change", switchLanguage);

applyLanguage();
updateVisibilityBySession();
