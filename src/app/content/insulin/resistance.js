import { Typography } from "@mui/material";
import React from "react";

export default function InsulinResistance() {
    return (
        <>
            <Typography variant="h2" gutterBottom>
                How Refined Carbohydrates Can Lead to Insulin Resistance
            </Typography>
            <Typography paragraph>
                Refined carbohydrates (such as white bread, pastries, sugary cereals, and sweet beverages) are quickly digested into
                glucose, causing rapid spikes in blood sugar. This triggers the pancreas to release a large amount of insulin to
                help clear the glucose from the blood. Over time, a diet high in refined carbs can set off a chain reaction in the
                body:
            </Typography>
            {/* Placeholder: An infographic illustrating the insulin resistance cycle could be placed here */}
            <ul>
                <li>
                    <Typography component="span">
                        <strong>Blood Sugar Spike:</strong> Eating refined carbs causes a swift increase in blood glucose because these
                        carbs lack fiber and are broken down very rapidly.
                    </Typography>
                </li>
                <li>
                    <Typography component="span">
                        <strong>Insulin Surge:</strong> In response, the pancreas secretes insulin to enable cells to absorb the
                        glucose. Insulin drives sugar out of the bloodstream into muscles, fat, and liver cells for use or
                        storage&#8203;:contentReference[ oaicite-17]/index=17/.
                    </Typography>
                </li>
                <li>
                    <Typography component="span">
                        <strong>Repetitive Cycle:</strong> If this high-sugar intake pattern happens frequently, cells are constantly
                        exposed to high insulin levels. Over time, the cells become less responsive to insulin’s signal. This condition
                        is known as <em>insulin resistance</em>, where muscle and other cells “ignore”
                        insulin&#8203;:contentReference[ oaicite-18]/index=18/.
                    </Typography>
                </li>
                <li>
                    <Typography component="span">
                        <strong>Elevated Insulin & Blood Sugar:</strong> As insulin resistance develops, the body compensates by
                        producing even more insulin after meals to force cells to take up glucose. Blood sugar stays elevated longer
                        than normal since cells aren’t responding efficiently&#8203;:contentReference[ oaicite-19]/index=19/. High
                        insulin levels (hyperinsulinemia) become chronic.
                    </Typography>
                </li>
                <li>
                    <Typography component="span">
                        <strong>Increased Fat Storage:</strong> Insulin is a storage hormone; chronically high insulin promotes fat
                        storage, especially in visceral (abdominal) areas. Weight gain (particularly around the waist) further worsens
                        insulin resistance, creating a vicious cycle.
                    </Typography>
                </li>
                <li>
                    <Typography component="span">
                        <strong>Pancreatic Strain:</strong> The insulin-producing cells in the pancreas (beta cells) are overworked by
                        the constant demand for insulin. Over years, they may become impaired or exhausted. This can lead to
                        insufficient insulin production.
                    </Typography>
                </li>
                <li>
                    <Typography component="span">
                        <strong>Prediabetes and Type 2 Diabetes:</strong> The combination of insulin resistance (cells not responding)
                        and declining insulin production means blood glucose stays chronically high. This state may progress to
                        prediabetes and eventually type 2 diabetes if interventions are not made.
                    </Typography>
                </li>
            </ul>
        </>
    );
}
