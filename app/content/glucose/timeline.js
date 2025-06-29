import { Typography, Box } from "@mui/material";
import React from "react";

export default function Timeline() {
    return (
        <Box>
            <Typography variant="h2" gutterBottom>
                Timeline: How Long It Takes for Food to Become Glucose
            </Typography>
            <Typography paragraph>
                From the moment you eat, it takes some time for carbohydrates to be digested into glucose and then for that glucose
                to appear in your bloodstream. This timeline can vary based on the type of food (simple sugar vs. complex carb,
                liquid vs. solid, etc.) and individual metabolism. Below is a general timeline of what happens after you eat a
                carbohydrate-rich food:
            </Typography>
            {/* Placeholder: A visual timeline illustration could be inserted here */}
            <ul>
                <li>
                    <strong>0–5 minutes:</strong> <em>Ingestion & Chewing.</em> Eating begins and chewing breaks food into smaller
                    pieces. Salivary amylase in the mouth starts digesting starches into sugars almost immediately.
                </li>
                <li>
                    <strong>10–30 minutes:</strong> <em>Stomach Phase.</em> Food reaches the stomach and is mixed with gastric
                    juices. Carbohydrates aren’t fully broken down here, but the meal is liquefied. Some simple sugars may begin to
                    be absorbed in the stomach, but most digestion is still ahead.
                </li>
                <li>
                    <strong>30–60 minutes:</strong> <em>Intestinal Digestion.</em> The now-liquid food (chyme) enters the small
                    intestine. Enzymatic action breaks down carbohydrates to glucose, which starts getting absorbed into the
                    bloodstream. Blood glucose levels begin to rise.
                </li>
                <li>
                    <strong>~90 minutes:</strong> <em>Blood Sugar Peak.</em> Blood glucose typically reaches its peak about 1 to 2
                    hours after eating&#8203;:contentReference[ oaicite-14]/index=14/&#8203;:contentReference[
                    oaicite-15]/index=15/.
                    This is when the concentration of glucose in the blood is highest, assuming the meal contained significant
                    carbohydrates.
                </li>
                <li>
                    <strong>2–3 hours:</strong> <em>Return to Baseline.</em> In a healthy individual, blood sugar levels drop back
                    toward pre-meal (fasting) levels within about 2 to 3 hours after eating, as insulin has moved glucose out of the
                    bloodstream and into cells&#8203;:contentReference[ oaicite-16]/index=16/. Any glucose that isn’t immediately
                    needed for energy has been stored (in the liver, muscles, or as fat). You may start to feel hungry again as
                    blood sugar dips, depending on the meal.
                </li>
            </ul>
            <Typography paragraph>
                Keep in mind that this timeline can be faster for simple carbohydrates (like sugary drinks, which can cause blood
                sugar to rise within minutes) and slower for meals high in protein, fat, or fiber (which delay digestion and glucose
                absorption). The overall process from eating to peak blood glucose is generally within an hour or two for most
                carbohydrate-containing meals.
            </Typography>
            <Typography paragraph>
                In essence, diets rich in refined carbohydrates can push the body into a harmful
                cycle of sugar spikes and insulin surges. Complex carbohydrates with fiber (like whole grains, fruits, and
                vegetables)
                digest more slowly, causing smaller blood sugar increases and less strain on insulin response.
                Managing carbohydrate quality and quantity is key to preventing insulin resistance and its consequences.
            </Typography>
        </Box>
    );
}
