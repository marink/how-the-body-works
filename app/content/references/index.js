// Central reference store. Pages import specific refs and assign local [n] numbering.
// All URLs verified live (PubMed / PMC / NCBI Bookshelf).

export const REFS = {

    // ── Carbohydrate digestion & glucose absorption ──────────────────────────
    salivaryAmylase: {
        authors: "Peyrot des Gachons C, Breslin PA",
        title: "Salivary Amylase: Digestion and Metabolic Syndrome",
        journal: "Physiology & Behavior",
        year: "2016",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6825871/",
    },
    pancreaticAmylase: {
        authors: "Pandol SJ",
        title: "The Exocrine Pancreas",
        journal: "NCBI Bookshelf (Morgan & Claypool Life Sciences)",
        year: "2010",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK54127/",
    },
    glucoseAbsorption: {
        authors: "Gromova LV, Fetissov SO, Gruzdkov AA",
        title: "Mechanisms of Glucose Absorption in the Small Intestine in Health and Metabolic Diseases and Their Role in Appetite Regulation",
        journal: "Nutrients",
        year: "2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/34371983/",
    },

    // ── Postprandial glucose timeline ─────────────────────────────────────────
    bloodGlucosePeak: {
        authors: "Louie JC, Markovic TP, Ross GP, Foote D, Brand-Miller JC",
        title: "Timing of Peak Blood Glucose after Breakfast Meals of Different Glycemic Index in Women with Gestational Diabetes",
        journal: "Nutrients",
        year: "2013",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3571634/",
    },
    glucosePhysiology: {
        authors: "Nakrani MN, Wineland RH, Anjum F",
        title: "Physiology, Glucose Metabolism",
        journal: "StatPearls (NCBI Bookshelf)",
        year: "2023",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK560599/",
    },

    // ── Refined carbohydrates & fiber ─────────────────────────────────────────
    refinedCarbsGlycemia: {
        authors: "Tsitsou S, Athanasaki C, Dimitriadis G, Papakonstantinou E",
        title: "Acute Effects of Dietary Fiber in Starchy Foods on Glycemic and Insulinemic Responses: A Systematic Review",
        journal: "Nutrients",
        year: "2023",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10223420/",
    },

    // ── Insulin resistance & diabetes ─────────────────────────────────────────
    insulinResistance: {
        authors: "Freeman AM, Acevedo LA, Pennings N",
        title: "Insulin Resistance",
        journal: "StatPearls (NCBI Bookshelf)",
        year: "2023",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK507839/",
    },
    insulinResistanceDiabetes: {
        authors: "Fonseca VA",
        title: "Early identification and treatment of insulin resistance: impact on subsequent prediabetes and type 2 diabetes",
        journal: "Clinical Cornerstone",
        year: "2007",
        url: "https://pubmed.ncbi.nlm.nih.gov/18159645/",
    },

    // ── Ketogenic diet & insulin ──────────────────────────────────────────────
    ketogenicDiet: {
        authors: "Daley SF, Masood W, Annamaraju P, Khan Suheb MZ",
        title: "The Ketogenic Diet: Clinical Applications, Evidence-based Indications, and Implementation",
        journal: "StatPearls (NCBI Bookshelf)",
        year: "2025",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK499830/",
    },
    lowCarbInsulinSensitivity: {
        authors: "Krebs JD, Bell D, Hall R, et al.",
        title: "Improvements in glucose metabolism and insulin sensitivity with a low-carbohydrate diet in obese patients with type 2 diabetes",
        journal: "Diabetic Medicine",
        year: "2013",
        url: "https://pubmed.ncbi.nlm.nih.gov/24015695/",
    },

    // ── Cellular energy & GLUT4 ───────────────────────────────────────────────
    glut4Transporter: {
        authors: "Chadt A, Al-Hasani H",
        title: "Glucose transporters in adipose tissue, liver, and skeletal muscle in metabolic health and disease",
        journal: "Pflügers Archiv – European Journal of Physiology",
        year: "2020",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7462924/",
    },
    atpEnergyCurrency: {
        authors: "Dunn J, Grider MH",
        title: "Physiology, Adenosine Triphosphate",
        journal: "StatPearls (NCBI Bookshelf)",
        year: "2023",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK553175/",
    },

    // ── Sugar & cardiometabolic disease ──────────────────────────────────────
    sugarCardiometabolic: {
        authors: "Sonestedt E, Overby NC, Laaksonen DE, Birgisdottir BE",
        title: "Does high sugar consumption exacerbate cardiometabolic risk factors and increase the risk of type 2 diabetes and cardiovascular disease?",
        journal: "Food & Nutrition Research",
        year: "2012",
        url: "https://pubmed.ncbi.nlm.nih.gov/22855643/",
    },

    // ── Intermittent fasting & autophagy ─────────────────────────────────────
    intermittentFasting: {
        authors: "Cho Y, Hong N, Kim KW, et al.",
        title: "The Effectiveness of Intermittent Fasting to Reduce Body Mass Index and Glucose Metabolism: A Systematic Review and Meta-Analysis",
        journal: "Journal of Clinical Medicine",
        year: "2019",
        url: "https://pubmed.ncbi.nlm.nih.gov/31601019/",
    },
    autophagy: {
        authors: "Bagherniya M, Butler AE, Barreto GE, Sahebkar A",
        title: "The effect of fasting or calorie restriction on autophagy induction: A review of the literature",
        journal: "Ageing Research Reviews",
        year: "2018",
        url: "https://pubmed.ncbi.nlm.nih.gov/30172870/",
    },
};
