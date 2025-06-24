import React from "react";
import PageTitle from "@components/PageTitle";
import PageContent from "@components/PageContent";
import PageContainer from "@components/PageContainer";
import { Typography } from "@mui/material";

export default function Page() {
    return (
        <PageContainer>
            <PageTitle title="Health" />
            <PageContent>
                <Typography paragraph>
                    Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity.
                </Typography>
                <Typography paragraph>
                    It is a resource for everyday life, not the objective of living. Health is a positive concept emphasizing social and personal resources,
                    as well as physical capacities.
                </Typography>
                <Typography paragraph>
                    Health is determined by a complex interplay of factors including genetics, environment, lifestyle, and access to healthcare.
                </Typography>
                <Typography paragraph>
                    The focus of this site is the food intake and its impact on health.
                </Typography>
                
                <Typography component="h1" variant="h1" gutterBottom>Sugar and Its Negative Impact</Typography>
                <Typography paragraph>
                    Excessive sugar intake can lead to a variety of health issues, including obesity, type 2 diabetes, and heart disease. 
                    Sugar provides empty calories with little to no nutritional value, contributing to weight gain and poor dietary habits.
                </Typography>
                <Typography paragraph>
                    High sugar consumption can also lead to insulin resistance, a condition where the body's cells become less responsive to insulin,
                    making it harder to regulate blood sugar levels. This can result in higher insulin levels, which can promote fat storage and increase the risk of metabolic syndrome.
                </Typography>
                <Typography paragraph>
                    Additionally, high sugar intake has been linked to inflammation, which can contribute to chronic diseases such as heart disease and cancer.
                    It can also negatively affect mental health, leading to mood swings and increased risk of depression.
                </Typography>
                <Typography paragraph>
                    Reducing sugar intake and replacing it with healthier alternatives can help improve overall health and well-being.
                    This includes consuming whole foods, such as fruits, vegetables, whole grains, and lean proteins, which provide essential nutrients and promote a balanced diet.
                </Typography>
                
                <Typography component="h1" variant="h1" gutterBottom>Healthy Eating Habits</Typography>
                <Typography paragraph>
                    Adopting healthy eating habits is crucial for maintaining good health. This includes:
                </Typography>
                <ul>
                    <li>
                        <Typography component="span">Eating a balanced diet rich in fruits, vegetables, whole grains, and lean proteins.</Typography>
                    </li>
                    <li>
                        <Typography component="span">Limiting processed foods, added sugars, and unhealthy fats.</Typography>
                    </li>
                    <li>
                        <Typography component="span">Staying hydrated by drinking plenty of water.</Typography>
                    </li>
                    <li>
                        <Typography component="span">Practicing portion control to avoid overeating.</Typography>
                    </li>
                    <li>
                        <Typography component="span">Being mindful of food choices and eating habits.</Typography>
                    </li>
                    <li>
                        <Typography component="span">Incorporating regular physical activity into daily routines.</Typography>
                    </li>
                    <li>
                        <Typography component="span">Getting enough sleep and managing stress levels.</Typography>
                    </li>
                </ul>
                <Typography paragraph>
                    By making these changes, individuals can improve their overall health and reduce the risk of chronic diseases.
                </Typography>
                
                <Typography component="h1" variant="h1" gutterBottom>Conclusion</Typography>
                <Typography paragraph>
                    Health is a multifaceted concept that encompasses physical, mental, and social well-being. 
                    By understanding the impact of food choices on health and adopting healthy eating habits, individuals can take control of their health and well-being.
                </Typography>
                <Typography paragraph>
                    It is important to prioritize health and make informed decisions about food intake to promote a healthier lifestyle.
                </Typography>
                <Typography paragraph>
                    For more information on health and nutrition, consider consulting a healthcare professional or registered dietitian.
                </Typography>
                <Typography paragraph>
                    Remember, small changes can lead to significant improvements in health over time.
                </Typography>
                <Typography paragraph>
                    Stay informed, stay healthy!
                </Typography>
            </PageContent>
        </PageContainer>
    );
}
