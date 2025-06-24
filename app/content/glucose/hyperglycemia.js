import { Typography, Box } from "@mui/material";

import Figure from "@components/Figure";

export default function Hyperglycemia() {
    return (
        <>
            <Typography component="p" gutterBottom >
                Excess glucose in the bloodstream, known as hyperglycemia, can cause significant damage to cells and tissues throughout the human
                body, especially during prolonged periods of high blood sugar (hyperglycemia). Here's a breakdown of how it happens:
            </Typography>

            <Typography variant="h2" gutterBottom>Glucose Overload and Oxidative Stress</Typography>
            <Typography paragraph>
                When cells are overwhelmed with glucose, they start producing excess reactive oxygen species (ROS) — unstable molecules that
                damage DNA, proteins, and cell membranes. This process is known as oxidative stress.
            </Typography>
            <Box display="flex" justifyContent="center" my={2}>
                <Figure src="/images/oxidative-stress.png" width={400} alt="Glucose Overload and Oxidative Stress" />
            </Box>

            <Typography variant="h2" gutterBottom>Advanced Glycation End Products (AGEs)</Typography>
            <Typography paragraph>
                Excess glucose reacts with proteins and fats non-enzymatically, forming AGEs. These molecules:
            </Typography>
            <ul>
                <li>Disrupt protein structure and function</li>
                <li>Trigger inflammation</li>
                <li>Damage blood vessels and organs</li>
            </ul>
            <Typography paragraph>
                This "glycation" is a major factor in the complications of diabetes.
            </Typography>

            <Typography variant="h2" gutterBottom>Mitochondrial Overload</Typography>
            <Typography paragraph>
                Cells (especially muscle and nerve cells) convert glucose into ATP using mitochondria. Too much glucose floods the mitochondria,
                causing them to:
            </Typography>
            <ul>
                <li>Leak electrons</li>
                <li>Produce excess ROS</li>
                <li>Dysfunction or die (a bit like overheating a machine)</li>
            </ul>

            <Typography variant="h2" gutterBottom>Insulin Resistance and Lipid Accumulation</Typography>
            <Typography paragraph>
                Chronically high glucose leads to insulin resistance, especially in fat and liver cells. Glucose can't enter cells efficiently,
                so blood sugar stays high, and the body turns more sugar into fat:
            </Typography>
            <Typography paragraph>
                Fat builds up in non-fat tissues (liver, muscle).
            </Typography>
            <Typography paragraph>
                This causes lipotoxicity, which contributes to cellular inflammation and death.
            </Typography>

            <Typography variant="h2" gutterBottom>Apoptosis (Cell Death)</Typography>
            <Typography paragraph>
                If the stress continues, cells may trigger their self-destruct mechanism (apoptosis) as a last resort to prevent further damage
                to surrounding tissue.
            </Typography>

            <Typography variant="h2" gutterBottom>Analogy: Why "Fried"?</Typography>
            <Typography paragraph>
                Just like food burns when exposed to excess heat/oil, cells get "fried" when exposed to too much fuel (glucose).
            </Typography>
            <Typography paragraph>
                The "burning" isn't literal, but rather refers to oxidative and metabolic damage.
            </Typography>
        </>
    );
}
