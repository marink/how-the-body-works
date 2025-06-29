import { Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

export default function Conversion() {
    return (
        <>
            <Typography component="h2" variant="h2" gutterBottom >
                How Carbohydrates Are Digested and Converted into Glucose
            </Typography>

            <Typography component="p" gutterBottom>
                Carbohydrate digestion is a step-by-step process that breaks down complex food into simple glucose that our cells can
                use for energy. Here is how the body converts carbohydrates from a meal into glucose in the bloodstream:
            </Typography>
            <ol>
                <li>
                    <strong>Mouth:</strong> The process begins as soon as you start chewing. Saliva contains <em>amylase</em>, an
                    enzyme that starts breaking down starches (complex carbs) into smaller
                    sugars&#8203;:contentReference[ oaicite-8]/index=8/. For example, a bite of bread or pasta begins to chemically
                    break down while still in your mouth.
                </li>
                <li>
                    <strong>Stomach:</strong> Once swallowed, the chewed food (now called a <em>bolus</em>) reaches the stomach. The
                    acidic environment of the stomach stops the action of salivary amylase, and not much carbohydrate digestion
                    happens here. The stomach’s main role is to churn the food and mix it with gastric acid, turning it into a
                    semi-liquid mixture called <em>chyme</em>&#8203;:contentReference[ oaicite-9]/index=9/.
                </li>
                <li>
                    <strong>Small Intestine:</strong> The chyme is gradually released into the small intestine. Here, the pancreas
                    secretes pancreatic amylase into the duodenum (the first part of the small intestine) to continue the
                    carbohydrate breakdown&#8203;:contentReference[ oaicite-10]/index=10/. Enzymes produced by the intestinal lining
                    (such as lactase, sucrase, and maltase) further break down disaccharides into
                    monosaccharides&#8203;:contentReference[ oaicite-11]/index=11/. At this stage, complex carbohydrates (like
                    starch) have been broken down into simple sugars, primarily <strong>glucose</strong> (along with fructose and
                    galactose from certain foods).
                </li>
                <li>
                    <strong>Absorption into Bloodstream:</strong> The resulting single sugars are then absorbed through the walls of
                    the small intestine into the bloodstream&#8203;:contentReference[ oaicite-12]/index=12/. As glucose enters the
                    blood, blood sugar levels rise. In response, the pancreas releases the hormone
                    <strong>insulin</strong>&#8203;:contentReference[ oaicite-13]/index=13/. Insulin helps cells throughout the body
                    absorb glucose from the blood to use for energy or to store for later use (as glycogen in the liver and muscles,
                    or as fat).
                </li>
            </ol>

            <Typography component="p">
                In summary, all digestible carbohydrates—whether they come from a bowl of oatmeal or a candy bar—are ultimately
                broken down into simple sugar molecules. These sugars (especially glucose) are absorbed and circulated to cells to
                fuel bodily functions. Any leftover indigestible carbs (like fiber) move on to the colon and are eventually
                excreted, though fiber also feeds gut bacteria and aids digestion without converting to glucose.
            </Typography>

            <Typography component="p" gutterBottom>
                Check{" "}
                <MuiLink component={Link} href="/endocrine-system/hyperglycemia">
                    here
                </MuiLink>{" "}
                for extreeme effects of glucose on human cells.
            </Typography>
        </>
    );
}
