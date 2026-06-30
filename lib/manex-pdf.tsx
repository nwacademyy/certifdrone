import React from "react";
import {
  Document, Page, Text, View, StyleSheet, Font
} from "@react-pdf/renderer";
import type { ManexData } from "./manex-types";

const styles = StyleSheet.create({
  page: { fontFamily: "Helvetica", fontSize: 9, paddingTop: 45, paddingBottom: 45, paddingHorizontal: 45, color: "#1a1a1a" },
  cover: { fontFamily: "Helvetica", fontSize: 10, paddingTop: 80, paddingBottom: 60, paddingHorizontal: 60, backgroundColor: "#ffffff" },
  coverTitle: { fontSize: 22, fontFamily: "Helvetica-Bold", textAlign: "center", marginBottom: 8, color: "#1a1a1a" },
  coverSub: { fontSize: 13, textAlign: "center", color: "#555", marginBottom: 40 },
  coverBox: { border: 1, borderColor: "#e0e0e0", borderRadius: 4, padding: 20, marginBottom: 20, backgroundColor: "#f9f9f9" },
  coverLabel: { fontSize: 8, color: "#888", marginBottom: 3, fontFamily: "Helvetica-Bold", textTransform: "uppercase" },
  coverValue: { fontSize: 11, color: "#1a1a1a", marginBottom: 10 },
  coverFooter: { position: "absolute", bottom: 40, left: 60, right: 60, textAlign: "center", fontSize: 8, color: "#aaa" },
  h1: { fontSize: 14, fontFamily: "Helvetica-Bold", color: "#1a1a1a", marginTop: 20, marginBottom: 8, borderBottom: 1, borderBottomColor: "#e0e0e0", paddingBottom: 4 },
  h2: { fontSize: 11, fontFamily: "Helvetica-Bold", color: "#333", marginTop: 14, marginBottom: 5 },
  h3: { fontSize: 9.5, fontFamily: "Helvetica-Bold", color: "#444", marginTop: 10, marginBottom: 3 },
  p: { fontSize: 9, lineHeight: 1.5, marginBottom: 6, color: "#222" },
  bullet: { fontSize: 9, lineHeight: 1.5, marginBottom: 3, marginLeft: 12 },
  bold: { fontFamily: "Helvetica-Bold" },
  info: { backgroundColor: "#f5f5f5", border: 1, borderColor: "#e0e0e0", padding: 10, marginBottom: 8, borderRadius: 2 },
  infoRow: { flexDirection: "row", marginBottom: 4 },
  infoLabel: { fontSize: 8, fontFamily: "Helvetica-Bold", color: "#666", width: 140 },
  infoValue: { fontSize: 9, color: "#1a1a1a", flex: 1 },
  table: { border: 1, borderColor: "#ddd", marginBottom: 10 },
  tableRow: { flexDirection: "row", borderBottom: 1, borderBottomColor: "#eee" },
  tableHeader: { flexDirection: "row", backgroundColor: "#f0f0f0", borderBottom: 1, borderBottomColor: "#ddd" },
  tableCell: { flex: 1, padding: "4 6", fontSize: 8 },
  tableCellBold: { flex: 1, padding: "4 6", fontSize: 8, fontFamily: "Helvetica-Bold" },
  warning: { backgroundColor: "#fff8e1", border: 1, borderColor: "#f9a825", padding: 8, marginBottom: 8, borderRadius: 2 },
  warningText: { fontSize: 8, color: "#5d4037" },
  pageNum: { position: "absolute", bottom: 25, right: 45, fontSize: 8, color: "#aaa" },
  pageHeader: { position: "absolute", top: 20, left: 45, right: 45, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  pageHeaderText: { fontSize: 7, color: "#aaa" },
  divider: { borderBottom: 1, borderBottomColor: "#e0e0e0", marginTop: 6, marginBottom: 6 },
  toc: { marginTop: 8, marginBottom: 4 },
  tocRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 3 },
  tocItem: { fontSize: 9, color: "#333" },
  tocPage: { fontSize: 9, color: "#888" },
  tocSection: { fontSize: 9, fontFamily: "Helvetica-Bold", marginTop: 6, marginBottom: 2 },
  orgBox: { border: 1, borderColor: "#ddd", padding: 8, marginBottom: 6, borderRadius: 2, backgroundColor: "#fafafa" },
  orgTitle: { fontSize: 8, fontFamily: "Helvetica-Bold", color: "#444", marginBottom: 2 },
  orgName: { fontSize: 9, color: "#1a1a1a" },
  checkRow: { flexDirection: "row", alignItems: "flex-start", marginBottom: 4 },
  checkBox: { width: 12, height: 12, border: 1, borderColor: "#aaa", marginRight: 6, marginTop: 1 },
  checkLabel: { fontSize: 9, flex: 1, lineHeight: 1.5 },
});

const Header = ({ d }: { d: ManexData }) => (
  <View style={styles.pageHeader} fixed>
    <Text style={styles.pageHeaderText}>MANEX — {d.operateurNom || "Opérateur"}</Text>
    <Text style={styles.pageHeaderText}>Conforme Règlement (UE) 2019/947</Text>
  </View>
);

const PageNum = () => (
  <Text style={styles.pageNum} render={({ pageNumber }) => `${pageNumber}`} fixed />
);

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value || "—"}</Text>
  </View>
);

const Bullet = ({ text }: { text: string }) => (
  <Text style={styles.bullet}>• {text}</Text>
);

const Checklist = ({ items }: { items: string[] }) => (
  <View>
    {items.map((item, i) => (
      <View key={i} style={styles.checkRow}>
        <View style={styles.checkBox} />
        <Text style={styles.checkLabel}>{item}</Text>
      </View>
    ))}
  </View>
);

export function ManexDocument({ d }: { d: ManexData }) {
  const today = d.dateCreation || new Date().toLocaleDateString("fr-FR");

  return (
    <Document title={`MANEX — ${d.operateurNom}`} author="CertifDrone.fr">

      {/* PAGE DE COUVERTURE */}
      <Page size="A4" style={styles.cover}>
        <Text style={{ fontSize: 10, color: "#888", textAlign: "center", marginBottom: 40 }}>Manuel d&apos;exploitation / OM</Text>
        <Text style={styles.coverTitle}>MANUEL D&apos;EXPLOITATION</Text>
        <Text style={styles.coverSub}>Pour l&apos;exploitation en SAIL II de systèmes d&apos;avions sans pilote (UAS)</Text>
        <Text style={{ fontSize: 9, color: "#888", textAlign: "center", marginBottom: 30 }}>
          Conforme au Règlement (UE) 2019/947 — AMC & GM Part-UAS — EASA Easy Access Rules
        </Text>

        <View style={styles.coverBox}>
          <Text style={styles.coverLabel}>Opérateur UAS</Text>
          <Text style={styles.coverValue}>{d.operateurNom || "[Nom de l'opérateur]"}</Text>
          <Text style={styles.coverLabel}>SIRET</Text>
          <Text style={styles.coverValue}>{d.operateurSiret || "[SIRET]"}</Text>
          <Text style={styles.coverLabel}>Adresse</Text>
          <Text style={styles.coverValue}>{d.operateurAdresse}, {d.operateurCodePostal} {d.operateurVille} — {d.operateurPays}</Text>
          <Text style={styles.coverLabel}>N° AlphaTango</Text>
          <Text style={styles.coverValue}>{d.operateurNumAlphaTango || "[FRAxxxxxxxxx]"}</Text>
          <Text style={styles.coverLabel}>Contact</Text>
          <Text style={styles.coverValue}>{d.operateurEmail} — {d.operateurTel}</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 10, marginBottom: 20 }}>
          <View style={{ flex: 1, border: 1, borderColor: "#e0e0e0", padding: 10, borderRadius: 2 }}>
            <Text style={styles.coverLabel}>Scénario(s) couverts</Text>
            <Text style={{ fontSize: 10, fontFamily: "Helvetica-Bold" }}>
              {d.zone1Scenario}{d.zone2Active ? ` + ${d.zone2Scenario}` : ""}
            </Text>
          </View>
          <View style={{ flex: 1, border: 1, borderColor: "#e0e0e0", padding: 10, borderRadius: 2 }}>
            <Text style={styles.coverLabel}>Révision</Text>
            <Text style={{ fontSize: 10 }}>0 — {today}</Text>
          </View>
          <View style={{ flex: 1, border: 1, borderColor: "#e0e0e0", padding: 10, borderRadius: 2 }}>
            <Text style={styles.coverLabel}>Drones couverts</Text>
            <Text style={{ fontSize: 9 }}>{d.uas.map(u => u.nom || u.fabricant).join(", ") || "—"}</Text>
          </View>
        </View>

        <View style={styles.warning}>
          <Text style={styles.warningText}>
            ⚠ Ce document a été généré via CertifDrone.fr sur la base du modèle EASA publié pour le règlement (UE) 2019/947.
            Il doit être adapté à votre exploitation spécifique avant tout dépôt auprès de la DGAC ou d&apos;une NAA.
            Tout le contenu est sous la responsabilité de l&apos;opérateur signataire.
          </Text>
        </View>

        <Text style={styles.coverFooter}>
          Généré par CertifDrone.fr — contact@certifdrone.fr — {today}
        </Text>
      </Page>

      {/* PAGE CONTRÔLE DOCUMENTS */}
      <Page size="A4" style={styles.page}>
        <Header d={d} />
        <PageNum />
        <Text style={styles.h1}>Contrôle des documents</Text>
        <Text style={styles.p}>
          Le contenu de ce document et de tous les autres documents applicables sont soumis à un contrôle de révision
          et les modifications nécessitent l&apos;approbation préalable de l&apos;autorité compétente.
        </Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            {["N° de révision", "Date de révision", "Nom", "Description du changement"].map(h => (
              <Text key={h} style={styles.tableCellBold}>{h}</Text>
            ))}
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>0</Text>
            <Text style={styles.tableCell}>{today}</Text>
            <Text style={styles.tableCell}>{d.accountableManager || d.operateurNom}</Text>
            <Text style={styles.tableCell}>Première création de l&apos;OM. Structuré conformément au modèle EASA. Adaptation à notre propre exploitation.</Text>
          </View>
        </View>
        <Text style={styles.p}>Toutes les modifications apportées à la dernière révision seront marquées par une barre sur le côté gauche.</Text>

        <Text style={[styles.h2, { marginTop: 20 }]}>Autres documents applicables</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCellBold}>Nom</Text>
            <Text style={styles.tableCellBold}>N° de révision</Text>
            <Text style={styles.tableCellBold}>Description</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Manuel de maintenance des UAS</Text>
            <Text style={styles.tableCell}>0</Text>
            <Text style={styles.tableCell}>Voir manuel fabricant</Text>
          </View>
        </View>

        <Text style={[styles.h2, { marginTop: 20 }]}>Liste des abréviations</Text>
        {[
          ["ALOS","Altitude line of sight"],["ARC","Air risk class"],["ATM","Air traffic management"],
          ["GRB","Ground risk buffer"],["GRC","Ground risk class"],["GV","Ground visibility"],
          ["NAA","National aviation authority"],["METAR","Meteorological aerodrome report"],
          ["OM","Operations manual"],["RPIC","Remote pilot in command"],
          ["SAIL","Specific assurance and integrity level"],["TMPR","Technical mitigations performance requirements"],
          ["UAS","Unmanned aircraft system"],["VLOS","Visual line of sight"],["BVLOS","Beyond visual line of sight"],
        ].map(([a, b]) => (
          <View key={a} style={[styles.infoRow, { borderBottom: 0.5, borderBottomColor: "#f0f0f0", paddingBottom: 2, marginBottom: 2 }]}>
            <Text style={[styles.infoLabel, { width: 60, fontSize: 8, fontFamily: "Helvetica-Bold" }]}>{a}</Text>
            <Text style={[styles.infoValue, { fontSize: 8 }]}>{b}</Text>
          </View>
        ))}
      </Page>

      {/* PARTIE A — GÉNÉRAL */}
      <Page size="A4" style={styles.page}>
        <Header d={d} />
        <PageNum />
        <Text style={styles.h1}>1. Partie générale (Partie A)</Text>

        <Text style={styles.h2}>1.1. Déclaration d&apos;ouverture</Text>
        <Text style={styles.p}>
          Ce manuel d&apos;exploitation a été élaboré conformément aux spécifications et exigences du règlement (UE) 2018/1139 et de ses règlements d&apos;application.
          Entre autres, le règlement d&apos;exécution (UE) 2019/947 de la Commission et le règlement délégué (UE) 2019/945 ont été pris en compte.
        </Text>
        <Text style={styles.p}>
          Je, <Text style={styles.bold}>{d.accountableManager || d.operateurNom || "[Nom du gestionnaire responsable]"}</Text>, déclare qu&apos;à tout moment, l&apos;exploitation de l&apos;UAS sera effectuée conformément aux exigences et aux limites décrites dans le présent manuel d&apos;exploitation (MO).
        </Text>
        <Text style={styles.p}>De plus, je déclare que tout le personnel impliqué dans l&apos;exploitation de l&apos;UAS doit :</Text>
        {["être familier avec le contenu de ce MO ;","suivre les instructions et procédures de ce MO ;","respecter les lois, règles et procédures des pays dans lesquels l'opération est réalisée ;","rendre toujours l'exploitation de l'UAS aussi sûre que possible ;","ne pas prendre de risques inutiles ;","signaler les risques de sécurité et tous les incidents qui affectent la sécurité."].map(b => <Bullet key={b} text={b} />)}
        <Text style={styles.p}>En tant qu&apos;opérateur d&apos;UAS, nous nous engageons à :</Text>
        {["promouvoir et exécuter des opérations sûres dans la mesure du possible ;","établir une culture de sécurité qui garantit une exploitation sûre ;","fournir des ressources financières et humaines adéquates à cet effet ;","s'assurer que toutes les informations contenues dans ce MO sont conformes aux règles statutaires applicables ;","mettre en œuvre et maintenir une « culture juste » ;","se conformer aux réglementations nouvelles ou modifiées publiées par la Commission européenne, l'EASA ou la NAA."].map(b => <Bullet key={b} text={b} />)}
        <Text style={[styles.p, { marginTop: 8 }]}>{d.operateurVille || "[Ville]"}, {today}</Text>

        <View style={styles.divider} />
        <Text style={styles.h2}>1.2. Déclaration de sécurité et de confidentialité</Text>
        <Text style={styles.p}>Les données personnelles collectées dans le cadre de l&apos;opération décrite dans le présent MO seront traitées conformément au règlement (UE) 2016/679 (RGPD). Les données personnelles ne sont collectées et traitées que dans la mesure strictement nécessaire à l&apos;opération décrite ici.</Text>
        <Text style={[styles.p, { marginTop: 4 }]}>{d.operateurVille || "[Ville]"}, {today}</Text>

        <View style={styles.divider} />
        <Text style={styles.h2}>1.3. Déclaration environnementale</Text>
        <Text style={styles.p}>En tant qu&apos;entreprise, nous nous engageons en faveur d&apos;opérations de drones durables et poursuivons l&apos;objectif de minimiser l&apos;impact sur l&apos;environnement et la faune. L&apos;objectif est de laisser chaque site de vol dans un état au moins égal à celui dans lequel il a été trouvé.</Text>
        <Text style={[styles.p, { marginTop: 4 }]}>{d.operateurVille || "[Ville]"}, {today}</Text>
      </Page>

      {/* ORGANISATION */}
      <Page size="A4" style={styles.page}>
        <Header d={d} />
        <PageNum />
        <Text style={styles.h2}>1.4. L&apos;organisation des opérateurs d&apos;UAS</Text>
        <Text style={styles.p}>
          La société <Text style={styles.bold}>{d.operateurNom || "[Nom société]"}</Text>, fondée en {d.societeAnneeCreation || "[année]"}, se distingue dans le domaine de {d.societeDomaineActivite || "[domaine d'activité]"}.
        </Text>
        {d.societeDescription ? <Text style={styles.p}>{d.societeDescription}</Text> : null}

        <Text style={styles.h3}>1.4.1. Structure / organigramme</Text>
        <View style={{ flexDirection: "row", gap: 6, marginBottom: 10, marginTop: 6 }}>
          {[
            { title: "Accountable Manager", name: d.accountableManager },
            { title: "Safety Manager", name: d.safetyManager },
            { title: "Maintenance / Technique", name: d.maintenanceManager },
            { title: "Opérations de vol", name: d.flightOpsManager },
            { title: "Formation", name: d.trainingManager },
          ].map(item => (
            <View key={item.title} style={[styles.orgBox, { flex: 1 }]}>
              <Text style={styles.orgTitle}>{item.title}</Text>
              <Text style={styles.orgName}>{item.name || "—"}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.h2}>1.5. Gestion du changement</Text>
        <Text style={styles.p}>L&apos;opérateur d&apos;UAS évaluera l&apos;impact des changements dans la structure organisationnelle ou les processus liés à l&apos;exploitation de l&apos;UAS. Toute modification de l&apos;OM est soumise à l&apos;approbation préalable de la NAA délivrant l&apos;autorisation d&apos;exploitation.</Text>

        <Text style={styles.h2}>1.6. Périodes de conservation</Text>
        <Text style={styles.p}>Tous les documents importants de l&apos;exploitation de l&apos;UAS sont conservés sous forme numérique ou analogique pendant au moins trois ans après la fin de l&apos;exploitation de l&apos;UAS.</Text>

        <Text style={styles.h2}>1.7. Contrôle des documents</Text>
        <Text style={styles.p}>Chaque nouvel employé reçoit un ensemble de documents valides à jour par e-mail à l&apos;adresse e-mail professionnelle. Il est de la responsabilité de l&apos;employé de toujours travailler avec la version actuelle en vigueur.</Text>

        <Text style={styles.h2}>1.8. Exigences et qualifications du personnel</Text>
        <Text style={styles.h3}>1.8.1. Pilote à distance (RPIC)</Text>
        <Text style={styles.p}>Le télépilote et/ou le RPIC doit :</Text>
        {["être au minimum titulaire d'un certificat A1/A3, A2, STS ou CATT ;","réussir la formation conformément au manuel de formation (partie D) ;","avoir complété avec succès une formation sur l'ERP au cours des 12 derniers mois ;","avoir effectué un vol UAS avec un UAS de même configuration au cours des 90 derniers jours."].map(b => <Bullet key={b} text={b} />)}

        <Text style={styles.h3}>1.8.2. Personnel d&apos;entretien</Text>
        {["avoir une expérience technique, y compris une expérience avec les UAS ;","réussir la formation conformément au manuel de formation (partie D) ;","avoir suivi avec succès une formation sur l'ERP au cours des douze derniers mois."].map(b => <Bullet key={b} text={b} />)}

        <Text style={styles.h2}>1.9. Aptitude à l&apos;opération — santé et repos</Text>
        <Text style={styles.p}>Avant de commencer l&apos;opération, chaque membre de l&apos;équipage se déclare « apte à opérer ». La période de service maximale est de <Text style={styles.bold}>13 heures</Text> (réduite d&apos;1h par zone de vol supplémentaire). Le temps de vol maximum est de <Text style={styles.bold}>8 heures/jour</Text>. La période de repos minimale entre deux services est égale à la durée du dernier service, au minimum 8 heures.</Text>
        <Text style={styles.p}>Interdictions formelles : alcool (0,0 ‰ obligatoire, aucune consommation dans les 8h précédant le vol), stupéfiants, drogues, somnifères, antidépresseurs, plongée sous-marine dans les 24h précédentes, don de sang dans les 72h précédentes.</Text>
      </Page>

      {/* PARTIE B — PROCÉDURES */}
      <Page size="A4" style={styles.page}>
        <Header d={d} />
        <PageNum />
        <Text style={styles.h1}>2. Procédures (Partie B)</Text>
        <Text style={styles.p}>Toutes les procédures et listes de contrôle décrites dans ce chapitre ont été conçues au meilleur de nos connaissances et convictions. Le RPIC a le pouvoir d&apos;annuler ou de retarder tout vol s&apos;il estime que la sécurité est menacée.</Text>

        <Text style={styles.h2}>2.1. Coordination multi-équipage</Text>
        <Text style={styles.p}>Lorsque le RPIC coopère avec d&apos;autres membres du personnel, il organise un exposé de sécurité avant chaque vol, vérifiant que les rôles sont clairement attribués et que la liste de contrôle ERP a été examinée.</Text>

        <Text style={styles.h2}>2.2. Planification du vol</Text>
        <Text style={styles.p}>Pour la planification du vol, le personnel utilise toujours les cartes et données les plus récentes. Les zones géographiques publiées sont consultées via :</Text>
        <Bullet text="https://www.geoportail.gouv.fr" />
        <Bullet text="https://www.sia.aviation-civile.gouv.fr/" />
        <Text style={styles.p}>Si l&apos;UAS est équipé d&apos;un géocaging, les limites de la zone de vol sont téléchargées sur l&apos;UAS avant chaque vol.</Text>

        <Text style={styles.h2}>2.3. Services et systèmes externes</Text>
        <Text style={styles.p}>Services utilisés : GNSS. Avant chaque vol, vérification des perturbations GNSS sur https://augur.eurocontrol.int/tool/ et https://www.swpc.noaa.gov/. Un vol en cas de restrictions prévues n&apos;est pas autorisé.</Text>

        <Text style={styles.h2}>2.4 & 2.5. Procédures météorologiques</Text>
        <Text style={styles.p}>La vérification météo a lieu immédiatement avant le début du vol via :</Text>
        <Bullet text="https://www.sia.aviation-civile.gouv.fr/" />
        <Bullet text="www.windy.com" />
        <Bullet text="www.aeroweb.fr" />
        <Text style={styles.p}>Limites opérationnelles : vent max {d.zone1VentMax || "8"} m/s · visibilité min {d.zone1VisibiliteMin || "5"} km · température {d.zone1TempMin || "-10"}°C à {d.zone1TempMax || "40"}°C.</Text>

        <Text style={styles.h2}>2.6. Rapports d&apos;événements</Text>
        <Text style={styles.p}>Le RPIC est responsable de faire rapport immédiatement après tout événement (blessés, accident, implication aéronef piloté, dommages significatifs), et au plus tard dans les 72 heures. Rapports effectués via :</Text>
        <Bullet text="Email DSAC : dsac-autorisations-drones-bf@aviation-civile.gouv.fr" />
        <Bullet text="Formulaire en ligne CRESUS disponible sur le site du MTECT" />

        <Text style={styles.h2}>2.7. Procédures — Multirotor</Text>
        <Text style={styles.h3}>2.7.1. Inspection prévol</Text>
        <Text style={styles.p}>L&apos;inspection prévol est toujours effectuée avec la liste de contrôle (voir annexe §8.3.3), style « lire et faire ». Le résultat est consigné dans le carnet technique avec signature.</Text>

        <Text style={styles.h3}>2.7.2. Procédures normales</Text>
        <Text style={styles.p}>Altitude minimale de vol : 2 mètres. Décollage uniquement après validation de la liste prévol. Appel obligatoire : « MISE EN ROUTE ! » puis « ATTENTION : DÉCOLLAGE ! ».</Text>
        <Text style={styles.p}>En vol : surveillance continue des paramètres (altitude, vitesse, batterie, liaison C2/C3), espace aérien et surface. En cas de batterie critique (&lt;20%) : retour immédiat au point de décollage.</Text>

        <Text style={styles.h3}>2.7.3. Procédures anormales et d&apos;urgence</Text>
        <Text style={styles.p}>Comportement inattendu : reprendre le contrôle manuel, quitter la zone d&apos;exploitation, atterrir en sécurité. Apparition d&apos;UAS non impliqué : vol stationnaire, signalement. Apparition d&apos;aéronef piloté : descendre immédiatement sous 30m ou atterrir. Fly Away : activer FTS si disponible, alerter les personnes, sécuriser la zone.</Text>
      </Page>

      {/* PARTIE C — ZONES DE VOL */}
      <Page size="A4" style={styles.page}>
        <Header d={d} />
        <PageNum />
        <Text style={styles.h1}>3. Zones de vol (Partie C)</Text>

        <Text style={styles.h2}>3.1. Limites opérationnelles générales</Text>
        <View style={styles.info}>
          <InfoRow label="Vent maximum" value={`${d.zone1VentMax || "8"} m/s`} />
          <InfoRow label="Visibilité minimale" value={`${d.zone1VisibiliteMin || "5"} km`} />
          <InfoRow label="Température min/max" value={`${d.zone1TempMin || "-10"}°C / ${d.zone1TempMax || "40"}°C`} />
          <InfoRow label="Conditions d'éclairage" value="Vol de jour uniquement (sauf autorisation spécifique)" />
          <InfoRow label="GNSS requis" value="Oui — vérification perturbations avant vol obligatoire" />
        </View>

        <Text style={styles.h2}>3.2. Zone de vol 1 — {d.zone1Scenario}</Text>
        <View style={styles.info}>
          <InfoRow label="Scénario" value={d.zone1Scenario} />
          <InfoRow label="GRC" value={d.zone1GRC || "GRC3"} />
          <InfoRow label="ARC" value={d.zone1ARC || "ARC-b"} />
          <InfoRow label="Hauteur maximale" value={`${d.zone1HauteurMax || "120"} m AGL`} />
          <InfoRow label="GRB (tampon sol)" value={`${d.zone1GRB || "25"} m`} />
          <InfoRow label="Volume de contingence" value="10 m latéralement et 10 m verticalement de la géographie du vol" />
        </View>
        <Text style={styles.h3}>Description de la zone</Text>
        <Text style={styles.p}>{d.zone1Description || "[Description de la zone opérationnelle : coordonnées GPS, nature du terrain, obstacles, activités riveraines...]"}</Text>

        <Text style={styles.h3}>3.2.3. Procédures spécifiques — réduction du risque au sol</Text>
        <Text style={[styles.p, styles.bold]}>Zone au sol contrôlée :</Text>
        <Bullet text="Enquête sur la zone d'opération étant exempte de personnes non impliquées" />
        <Bullet text="Panneaux de mise en garde autour de la zone de décollage et d'atterrissage" />
        <Bullet text="Observateur pour s'assurer que des personnes non impliquées ne pénètrent pas dans la zone" />

        <Text style={[styles.p, { marginTop: 6 }, styles.bold]}>Atténuation M1 (réduction densité de population) :</Text>
        <Text style={styles.p}>Évaluation de la densité de population basée sur les données de recensement. Vérification de conformité avec les seuils de l&apos;autorisation d&apos;exploitation avant chaque mission. Pour les zones urbaines : vols planifiés en dehors des heures de pointe, installation de barrières physiques si nécessaire.</Text>

        <Text style={[styles.p, { marginTop: 4 }, styles.bold]}>ARC-Atténuation :</Text>
        <Bullet text="Évaluation des risques avant chaque opération" />
        <Bullet text="Mise en place de protocoles stricts de sécurité et procédures d'urgence" />
        <Bullet text="Formation des opérateurs sur les risques spécifiques" />
        <Bullet text="Utilisation de technologies avancées (DAA, suivi temps réel)" />

        <Text style={styles.h3}>3.2.4. Plan d&apos;intervention d&apos;urgence (ERP) — Informations locales</Text>
        <View style={styles.info}>
          <InfoRow label="Aérodrome le plus proche" value={d.erpAerodrome || "N/A"} />
          <InfoRow label="Tél. aérodrome / ATC" value={`${d.erpAerodromeTel || "N/A"} — ATC : ${d.erpATC || "N/A"}`} />
          <InfoRow label="Pompiers" value={d.erpPompiersTel || "112 / 18"} />
          <InfoRow label="Police" value={d.erpPoliceTel || "110 / 17"} />
          <InfoRow label="SAMU" value="15" />
          <InfoRow label="Urgences Europe" value="112" />
        </View>

        {d.zone2Active && (
          <View>
            <Text style={styles.h2}>3.4. Zone de vol 2 — {d.zone2Scenario}</Text>
            <View style={styles.info}>
              <InfoRow label="Scénario" value={d.zone2Scenario} />
              <InfoRow label="Hauteur maximale" value={`${d.zone2HauteurMax || "120"} m AGL`} />
              <InfoRow label="GRB" value={`${d.zone2GRB || "25"} m`} />
            </View>
            <Text style={styles.p}>{d.zone2Description || "[Description zone 2]"}</Text>
          </View>
        )}

        <Text style={styles.h2}>3.3. Procédures TMPR</Text>
        <Text style={styles.p}>L&apos;opération se déroule à portée visuelle ({d.zone1Scenario === "STS-02" ? "et hors vue pour STS-02" : "VLOS"}). Le RPIC applique le principe « Voir / Détecter et Éviter » à tout moment pour réduire les risques de collision dans l&apos;espace aérien.</Text>
      </Page>

      {/* PARTIE D — FORMATION */}
      <Page size="A4" style={styles.page}>
        <Header d={d} />
        <PageNum />
        <Text style={styles.h1}>4. Formation (Partie D)</Text>
        <Text style={styles.p}>La formation de tout le personnel a lieu conformément au manuel de formation de l&apos;entreprise qui comprend, sans s&apos;y limiter, les sujets suivants :</Text>
        {["Lois et réglementations applicables à l'exploitation des UAS dans l'UE (Règlement (UE) 2019/947)","Structures de l'espace aérien","Savoir-faire aéronautique et sécurité aérienne","Capacité de performance humaine","Météorologie","Navigation et cartographie","UAS utilisés et leurs spécifications","Procédures développées par " + (d.operateurNom || "l'opérateur"),"Plan d'intervention d'urgence (ERP)","Inspection du drone (pré-vol et post-vol)","MCC (coopération multi-équipage)","Formation CRM (gestion des ressources de l'équipage)","Mesure météorologique"].map(b => <Bullet key={b} text={b} />)}

        <Text style={styles.h1}>5. Plan d&apos;intervention d&apos;urgence — ERP (Partie E)</Text>
        <Text style={styles.h2}>5.1. Général</Text>
        <Text style={styles.p}>Même si notre objectif principal est d&apos;exploiter en toute sécurité les UAS, des accidents et des incidents peuvent survenir. Principes généraux :</Text>
        {["Restez calme et restez conscient de la situation.","Assurer votre propre protection.","Sécuriser le lieu de l'accident.","Aider les gens à s'éloigner de la zone de danger.","Donner les premiers soins.","Signaler l'urgence aux autorités."].map(b => <Bullet key={b} text={b} />)}

        <Text style={styles.h2}>5.2. Modèle de liste de contrôle ERP</Text>
        <Text style={styles.p}>La liste de contrôle ERP est complétée et signée par le RPIC avant de démarrer une opération UAS. Elle est photographiée et envoyée par email au siège :</Text>
        <Bullet text={`Email siège social : ${d.operateurEmail || "[email]"}`} />
        <Bullet text="Objet de l'email : ERP, [date de vol]" />
        <Bullet text="Corps : Localisation des opérations + nom du RPIC" />
        <Bullet text="Pièce jointe : Photo de la liste ERP complétée (*.jpg)" />

        <Text style={styles.h2}>5.3. Préparation et briefing ERP</Text>
        <Text style={styles.p}>Avant le premier vol de la journée, le RPIC organise le briefing ERP en montrant la liste de contrôle remplie à toutes les personnes concernées. Ce n&apos;est que lorsque toutes les questions auront été clarifiées que l&apos;opération peut démarrer.</Text>
        <Text style={styles.p}>L&apos;ERP distingue deux types d&apos;urgences :</Text>
        <Bullet text="1. Urgences où les effets au sol après un accident doivent être limités (premiers secours, extincteur)" />
        <Bullet text="2. Urgences nécessitant une notification à un fournisseur ATM ou aérodrome/aéroport" />

        <Text style={styles.h2}>5.4. Directives DSAC pour l&apos;ERP</Text>
        <Text style={styles.p}>Conformément aux directives de la DSAC : utilisation de données fiables pour évaluer la densité de population, planification des vols en dehors des heures de pointe, installation de barrières physiques près des lieux publics, activation du FTS en cas de défaillance.</Text>
      </Page>

      {/* PARTIE T — UAS TECHNIQUE */}
      {d.uas.map((uas, idx) => (
        <Page key={idx} size="A4" style={styles.page}>
          <Header d={d} />
          <PageNum />
          {idx === 0 && <Text style={styles.h1}>6. Partie technique de l&apos;UAS (Partie T)</Text>}
          <Text style={styles.h2}>6.{idx + 1}. UAS {idx + 1} — {uas.nom || `[Drone ${idx + 1}]`}</Text>

          <Text style={styles.h3}>6.{idx + 1}.1. Description</Text>
          <View style={styles.info}>
            <InfoRow label="Désignation" value={uas.nom} />
            <InfoRow label="Fabricant" value={uas.fabricant} />
            <InfoRow label="Type" value={uas.type === "multirotor" ? "Multi-rotor" : "Voilure fixe"} />
            <InfoRow label="Classe EASA" value={uas.classe} />
            <InfoRow label="MTOM" value={uas.mtom ? `${uas.mtom} kg` : "—"} />
          </View>
          <Text style={styles.p}>
            L&apos;UAS {idx + 1} est un {uas.type === "multirotor" ? "multi-rotor" : "aéronef à voilure fixe"} fabriqué par {uas.fabricant || "[fabricant]"}.
            Limitation d&apos;emploi : Selon les préconisations du fabricant. Performances : Se conformer au manuel d&apos;utilisation du fabricant.
          </Text>
          {uas.conditionsEnv ? <Text style={styles.p}>{uas.conditionsEnv}</Text> : null}

          <Text style={styles.h3}>6.{idx + 1}.2. Image/graphique</Text>
          <View style={{ border: 1, borderColor: "#ddd", height: 60, marginBottom: 8, alignItems: "center", justifyContent: "center", backgroundColor: "#f9f9f9" }}>
            <Text style={{ fontSize: 8, color: "#aaa" }}>[ Insérer photo du drone {uas.nom || ""} ]</Text>
          </View>

          <Text style={styles.h3}>6.{idx + 1}.3. Lien C3</Text>
          <Text style={styles.p}>{uas.lienC3}</Text>

          <Text style={styles.h3}>6.{idx + 1}.4. Parachute (M2)</Text>
          <Text style={styles.p}>{uas.parachute ? `Parachute installé et opérationnel. ${uas.parachuteDesc}` : uas.parachuteDesc}</Text>

          <Text style={styles.h3}>6.{idx + 1}.5. TMPR</Text>
          <Text style={styles.p}>{uas.tmpr ? `TMPR requis et appliqué. ${uas.tmprDesc}` : uas.tmprDesc || "Non requis pour cette configuration."}</Text>

          <Text style={styles.h3}>6.{idx + 1}.6. Système de fin de vol (FTS)</Text>
          <Text style={styles.p}>{uas.fts ? `Système FTS installé et opérationnel. ${uas.ftsDesc}` : uas.ftsDesc || "Pas de système FTS installé."}</Text>

          <Text style={styles.h3}>6.{idx + 1}.7. Interface homme-machine (IHM)</Text>
          <Text style={styles.p}>Les objectifs des interfaces homme-machine UAS sont : présenter les données de manière claire et concise, éviter la confusion, prévenir une fatigue disproportionnée et minimiser les erreurs de l&apos;équipage. Toutes les interfaces ont été testées lors de vols en conditions sûres.</Text>

          <Text style={styles.h3}>6.{idx + 1}.8. Charge utile</Text>
          <Text style={styles.p}>{uas.chargeutile || "Non applicable pour cette configuration."}</Text>

          <Text style={styles.h3}>6.{idx + 1}.9. Confinement</Text>
          <Text style={styles.p}>{uas.confinement || "Voir documentation fabricant."}</Text>
        </Page>
      ))}

      {/* PARTIE M — MAINTENANCE */}
      <Page size="A4" style={styles.page}>
        <Header d={d} />
        <PageNum />
        <Text style={styles.h1}>7. Entretien (Partie M)</Text>
        <Text style={styles.p}>Les actions de maintenance garantissent que l&apos;UAS est à tout moment dans un état de fonctionnement sûr. Le drone est régulièrement entretenu conformément au manuel de maintenance. Les intervalles fixés par le fabricant constituent un maximum.</Text>
        <Bullet text="Toutes les actions de maintenance sont effectuées uniquement par des personnes compétentes et formées." />
        <Bullet text="Toutes les actions de maintenance sont enregistrées dans le carnet technique." />
        <Bullet text="Après chaque mise à jour logicielle : vols d'essai obligatoires en catégorie ouverte A3." />

        {d.uas.map((uas, idx) => (
          <View key={idx}>
            <Text style={styles.h3}>7.{idx + 2}. Maintenance UAS {idx + 1} — {uas.nom || `[Drone ${idx + 1}]`}</Text>
            <Text style={styles.p}>Se référer au chapitre du manuel du fabricant {uas.fabricant || "[fabricant]"} où les intervalles de maintenance sont répertoriés.</Text>
          </View>
        ))}

        <Text style={styles.h1}>8. Annexe</Text>

        <Text style={styles.h2}>8.1. Essais en vol</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            {["Date","Référence","Type","Nombre","Résultat"].map(h => (
              <Text key={h} style={styles.tableCellBold}>{h}</Text>
            ))}
          </View>
          {d.essaisVol.map((e, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.tableCell}>{e.date}</Text>
              <Text style={styles.tableCell}>{e.reference}</Text>
              <Text style={styles.tableCell}>{e.type}</Text>
              <Text style={styles.tableCell}>{e.nombre}</Text>
              <Text style={styles.tableCell}>{e.resultat}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.h2}>8.2.1. Personnel autorisé — Maintenance</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            {["Nom","Modèle UAS","Type autorisation","Depuis","Jusqu'au"].map(h => (
              <Text key={h} style={styles.tableCellBold}>{h}</Text>
            ))}
          </View>
          {d.personnelMaintenance.map((p, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.tableCell}>{p.nom}</Text>
              <Text style={styles.tableCell}>{p.modelesUAS}</Text>
              <Text style={styles.tableCell}>{p.typeAutorisation}</Text>
              <Text style={styles.tableCell}>{p.dateDebut}</Text>
              <Text style={styles.tableCell}>{p.dateFin}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.h2}>8.2.2. Personnel autorisé — Inspections pré/post vol</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            {["Nom","Modèle UAS","Autorisé depuis","Autorisé jusqu'au"].map(h => (
              <Text key={h} style={styles.tableCellBold}>{h}</Text>
            ))}
          </View>
          {d.personnelInspection.map((p, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.tableCell}>{p.nom}</Text>
              <Text style={styles.tableCell}>{p.modelesUAS}</Text>
              <Text style={styles.tableCell}>{p.dateDebut}</Text>
              <Text style={styles.tableCell}>{p.dateFin}</Text>
            </View>
          ))}
        </View>
      </Page>

      {/* PERSONNEL & CHECKLISTS */}
      <Page size="A4" style={styles.page}>
        <Header d={d} />
        <PageNum />
        <Text style={styles.h2}>8.2.3. Qualifications et formation du personnel</Text>
        {d.pilotes.map((p, i) => (
          <View key={i} style={[styles.info, { marginBottom: 8 }]}>
            <InfoRow label="Nom" value={p.nom} />
            <InfoRow label="Fonction" value="Télépilote / RPIC" />
            <InfoRow label="Qualification" value={p.qualification} />
            <InfoRow label="Expérience" value={p.experience ? `${p.experience} h de vol` : "—"} />
            <InfoRow label="Formations requises" value="BAPD / CATS / ERP" />
          </View>
        ))}

        <Text style={styles.h2}>8.2.4. Liste des pilotes à distance autorisés</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            {["Nom","Immatriculation","Modèles UAS","Scénarios","Depuis","Jusqu'au"].map(h => (
              <Text key={h} style={styles.tableCellBold}>{h}</Text>
            ))}
          </View>
          {d.pilotes.map((p, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.tableCell}>{p.nom}</Text>
              <Text style={styles.tableCell}>{p.immatriculation}</Text>
              <Text style={styles.tableCell}>{p.modelesUAS}</Text>
              <Text style={styles.tableCell}>{p.scenarios}</Text>
              <Text style={styles.tableCell}>{p.dateDebut}</Text>
              <Text style={styles.tableCell}>{p.dateFin}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.h2}>8.3.1. Liste de contrôle ERP (modèle à remplir sur site)</Text>
        <View style={styles.info}>
          <Text style={[styles.p, { marginBottom: 6 }]}>À compléter avant chaque opération et photographier :</Text>
          <Checklist items={[
            "Numéro d'urgence médical (SAMU) : 15",
            `Pompiers : ${d.erpPompiersTel || "112 / 18"}`,
            `Police : ${d.erpPoliceTel || "110 / 17"}`,
            `Aérodrome le plus proche : ${d.erpAerodrome || "N/A"} — Tél : ${d.erpAerodromeTel || "N/A"}`,
            `ATC concerné : ${d.erpATC || "N/A"}`,
            "Emplacement le plus proche du matériel de premiers secours",
            "Emplacement le plus proche des équipements d'extinction d'incendie",
            "Procédure d'urgence en cas de fly-away : activer FTS, alerter, sécuriser",
            "Procédure en cas d'accident avec blessés : appeler 15 ou 112 en premier",
          ]} />
          <View style={{ marginTop: 12, borderTop: 1, borderTopColor: "#ddd", paddingTop: 8 }}>
            <Text style={[styles.p, styles.bold]}>RPIC : {d.pilotes[0]?.nom || "_______________________"}</Text>
            <Text style={styles.p}>Date : _____________ · Signature : _______________________</Text>
          </View>
        </View>

        <Text style={styles.h2}>8.3.3. Liste de contrôle — Inspection prévol</Text>
        <Checklist items={[
          "Vérification météo (vent, visibilité, précipitations)",
          "Consultation espace aérien (AlphaTango, Géoportail, NOTAMs)",
          "Inspection visuelle du drone (châssis, hélices, moteurs, connecteurs)",
          "Vérification charge batterie (≥ 95%)",
          "Contrôle liaison de données (signal RC, vidéo-retour)",
          d.uas[0]?.fts ? "Test du système FTS ✓ OBLIGATOIRE" : "Système FTS : non applicable",
          d.uas[0]?.parachute ? "Test du parachute ✓ OBLIGATOIRE" : "Parachute : non applicable",
          `Mise en place du périmètre de sécurité GRB ${d.zone1GRB || "25"} m`,
          "Briefing de l'équipe au sol",
          "Validation dans le carnet technique avec signature",
        ]} />

        <Text style={styles.h2}>8.3.4. Liste de contrôle — Inspection après vol</Text>
        <Checklist items={[
          "Atterrissage contrôlé dans la zone désignée",
          "Sécurisation du drone (moteurs arrêtés, batteries retirées)",
          "Inspection visuelle post-vol (dommages, usure hélices, connecteurs)",
          "Vérification de l'état des batteries",
          "Chargement et vérification des données enregistrées",
          "Enregistrement dans le carnet technique (durée vol, zone, anomalies)",
          "Rapport d'incident si nécessaire (dans les 72h à la DGAC)",
        ]} />

        <Text style={styles.h2}>8.4. Manuels</Text>
        <Text style={styles.p}>Manuel de maintenance : se référer aux manuels fabricants de chaque UAS listés au chapitre 6.</Text>

        <View style={{ marginTop: 20, padding: 10, border: 1, borderColor: "#e0e0e0", borderRadius: 2 }}>
          <Text style={[styles.p, styles.bold]}>Déclaration de conformité</Text>
          <Text style={styles.p}>
            Je soussigné(e) <Text style={styles.bold}>{d.operateurNom || "[Opérateur]"}</Text>, en tant que gestionnaire responsable, atteste que le présent OM est conforme aux exigences du Règlement (UE) 2019/947 et de ses AMC & GM pour le(s) scénario(s) {d.zone1Scenario}{d.zone2Active ? ` et ${d.zone2Scenario}` : ""}.
          </Text>
          <Text style={[styles.p, { marginTop: 8 }]}>Fait à {d.operateurVille || "_____________"}, le {today}</Text>
          <Text style={[styles.p, { marginTop: 16 }]}>Signature : _______________________</Text>
          <Text style={styles.p}>{d.operateurNom || "[Nom et prénom]"}</Text>
        </View>

        <View style={[styles.warning, { marginTop: 16 }]}>
          <Text style={styles.warningText}>
            ⚠ Généré par CertifDrone.fr sur la base du modèle EASA publié pour le règlement (UE) 2019/947.
            Ce document doit être adapté et soumis à la DGAC/NAA compétente avant tout vol en catégorie spécifique.
            Références : Règlement (UE) 2019/947 | AMC & GM Part-UAS | Easy Access Rules UAS (EASA, juillet 2024)
          </Text>
        </View>
      </Page>
    </Document>
  );
}
