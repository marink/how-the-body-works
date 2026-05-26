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

    // ── Hyperglycemia & diabetic complications ────────────────────────────────
    brownleeUnifyingMechanism: {
        authors: "Brownlee M",
        title: "The Pathobiology of Diabetic Complications: A Unifying Mechanism",
        journal: "Diabetes",
        year: "2005",
        url: "https://pubmed.ncbi.nlm.nih.gov/15919781/",
    },
    advancedGlycationEndProducts: {
        authors: "Twarda-Clapa A, Olczak A, Białkowska AM, Koziołkiewicz M",
        title: "Advanced Glycation End-Products (AGEs): Formation, Chemistry, Classification, Receptors, and Diseases Related to AGEs",
        journal: "Cells",
        year: "2022",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9139786/",
    },
    mitochondrialDysfunctionDiabetes: {
        authors: "Bhatt MP, Ha HC, Kim YM, Ha KS",
        title: "Diabetic Conditions Promote the Loss of the Blood–Brain Barrier Integrity through Mitochondrial Dysfunction",
        journal: "International Journal of Molecular Sciences",
        year: "2022",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8910741/",
    },
    apoptosisHighGlucose: {
        authors: "Fiorentino TV, Prioletta A, Zuo P, Folli F",
        title: "Hyperglycemia-induced oxidative stress and its role in diabetes mellitus related cardiovascular diseases",
        journal: "Current Pharmaceutical Design",
        year: "2013",
        url: "https://pubmed.ncbi.nlm.nih.gov/23127236/",
    },
    // ── Diabetic retinopathy ──────────────────────────────────────────────────
    cheungRetinopathy: {
        authors: "Cheung N, Mitchell P, Wong TY",
        title: "Diabetic retinopathy",
        journal: "The Lancet",
        year: "2010",
        url: "https://pubmed.ncbi.nlm.nih.gov/20580421/",
    },
    antonettiRetinopathy: {
        authors: "Antonetti DA, Klein R, Gardner TW",
        title: "Diabetic retinopathy",
        journal: "New England Journal of Medicine",
        year: "2012",
        url: "https://pubmed.ncbi.nlm.nih.gov/22455417/",
    },
    pericyteLoss: {
        authors: "Eshaq RS, Aldalati AMZ, Alexander JS, Harris NR",
        title: "Diabetic retinopathy: Breaking the barrier",
        journal: "Pathophysiology",
        year: "2017",
        url: "https://pubmed.ncbi.nlm.nih.gov/28757174/",
    },
    vegfRetina: {
        authors: "Stewart MW",
        title: "The expanding role of vascular endothelial growth factor inhibitors in ophthalmology",
        journal: "Mayo Clinic Proceedings",
        year: "2012",
        url: "https://pubmed.ncbi.nlm.nih.gov/22469347/",
    },

    // ── Dr Fung books ─────────────────────────────────────────────────────────
    fung_diabetesCode: {
        authors: "Fung J",
        title: "The Diabetes Code: Prevent and Reverse Type 2 Diabetes Naturally",
        journal: "Greystone Books",
        year: "2018",
        url: "https://www.greystonebooks.com/products/the-diabetes-code",
    },
    taylorTwinCycle: {
        authors: "Taylor R",
        title: "Pathogenesis of type 2 diabetes: tracing the reverse route from cure to cause",
        journal: "Diabetologia",
        year: "2008",
        url: "https://pubmed.ncbi.nlm.nih.gov/18726069/",
    },
    limFattyPancreas: {
        authors: "Lim EL, Hollingsworth KG, Aribisala BS, Chen MJ, Mathers JC, Taylor R",
        title: "Reversal of type 2 diabetes: normalisation of beta cell function in association with decreased pancreas and liver triacylglycerol",
        journal: "Diabetologia",
        year: "2011",
        url: "https://pubmed.ncbi.nlm.nih.gov/21656330/",
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
