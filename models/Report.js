const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    Periode_financiere: { type: Number },
    Annee_financiere: { type: String },
    Nom_etablissement: { type: String },
    Nom_installation: { type: String },
    No_dossier: { type: Number, required: true },
    Code_postal: { type: String },
    Siege_de_la_suspicion: { type: String },
    Date_premier_examen_anormal: { type: Date },
    Type_examen_1: { type: String },
    Date_prerequis: { type: Date },
    Type_prerequis: { type: String },
    Date_reception_requete: { type: Date },
    Date_diagnostic: { type: Date },
    Nature_diagnostic: { type: String },
    Date_fin_guichet: { type: Date },
    Type_premier_traitement: { type: String },
    Commentaires: { type: String }
});

module.exports = mongoose.model('Report', reportSchema);
