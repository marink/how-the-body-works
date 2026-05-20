import React from "react";
import PageTitle from "@components/PageTitle";
import PageContent from "@components/PageContent";
import PageContainer from "@components/PageContainer";
import { Typography } from "@mui/material";
import Link from "next/link";
import Ref from "@components/Ref";
import References from "@components/References";
import { REFS } from "@app/content/references";

const PAGE_REFS = [
    { n: 1, ...REFS.sugarCardiometabolic },
    { n: 2, ...REFS.insulinResistance },
    { n: 3, ...REFS.intermittentFasting },
    { n: 4, ...REFS.autophagy },
];

const TOC = [
    { id: 'sugar',         label: 'Sugar & Health' },
    { id: 'insulin',       label: 'Chronic High Insulin' },
    { id: 'reconsidering', label: 'Two Ideas Worth Reconsidering' },
    { id: 'eat-less',      label: 'Eat Less, Move More',   level: 2 },
    { id: 'snacking',      label: 'Constant Snacking',     level: 2 },
    { id: 'fasting',       label: 'Fasting: Letting Insulin Fall' },
    { id: 'habits',        label: 'Healthy Eating Habits' },
    { id: 'reading',       label: 'Further Reading' },
    { id: 'conclusion',    label: 'Conclusion' },
    { id: 'references',    label: 'References' },
];

export default function Page() {
    return (
        <PageContainer toc={TOC}>
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
                    The focus of this site is food intake and its impact on health — explored alongside how <Link href="/cells">cells</Link> process
                    nutrients at the molecular level and how the <Link href="/endocrine-system">endocrine system</Link> regulates the hormonal
                    signals that govern metabolism.
                </Typography>

                <Typography id="sugar" component="h1" variant="h1" gutterBottom sx={{ mt: 5 }}>Sugar and Its Negative Impact</Typography>
                <Typography paragraph>
                    Excessive sugar intake can lead to a variety of health issues, including obesity, type 2 diabetes, and heart disease.<Ref n={1} />
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

                <Typography id="insulin" component="h1" variant="h1" gutterBottom sx={{ mt: 5 }}>What Chronic High Insulin Actually Does</Typography>
                <Typography paragraph>
                    The glucose-uptake machinery described in the <strong>Cells</strong> section works beautifully
                    when insulin appears briefly, does its job, and recedes. The problem begins when insulin
                    never gets a chance to recede. A diet built around refined carbohydrates and
                    ultra-processed foods keeps blood glucose — and therefore insulin — elevated for most of
                    the waking day. <Link href="/cells">Cells</Link>, overwhelmed by the constant signal, begin to ignore it. This is
                    insulin resistance: not a disease that arrives from outside, but a predictable adaptation
                    to a stimulus that was never supposed to be chronic.<Ref n={2} />
                </Typography>
                <Typography paragraph>
                    Once resistance sets in, the pancreas compensates by producing <em>more</em> insulin to
                    achieve the same effect. The resulting hyperinsulinemia — chronically elevated insulin —
                    is not merely a symptom of metabolic dysfunction. It is the driver. High insulin actively
                    suppresses the body's ability to access stored fat as fuel: fat cells remain locked in
                    storage mode as long as insulin is present. This is the mechanism behind midlife weight
                    gain that seems to happen despite no obvious change in behavior. The hormonal environment
                    has shifted, and the body is simply following its own rules.
                    <em> Personal experience corroborates this mechanism — reversing it is possible at any
                    stage of life, including well into middle age.</em>
                </Typography>

                <Typography id="reconsidering" component="h1" variant="h1" gutterBottom sx={{ mt: 5 }}>Two Ideas Worth Reconsidering</Typography>
                <Typography paragraph>
                    Two pieces of mainstream dietary advice, repeated for decades, treat weight as a
                    calorie-accounting problem. They are not wrong, exactly — but they are incomplete
                    in a way that matters, because they miss the hormonal driver entirely.
                </Typography>
                <Typography id="eat-less" component="h2" variant="h2" gutterBottom sx={{ mt: 3 }}>Rethinking "Eat Less, Move More"</Typography>
                <Typography paragraph>
                    The calories-in, calories-out model is not wrong — it is simply incomplete.
                    It describes a physical law (energy balance) as if it were a lever you can pull directly.
                    What it cannot account for is why the body responds to caloric restriction by reducing
                    metabolic rate, increasing hunger hormones, and defending its fat stores with
                    remarkable tenacity. When insulin remains elevated, the body is metabolically directed
                    away from burning stored fat regardless of caloric intake. The target is not only
                    the calorie — it is the hormonal environment that determines what the body does with
                    those calories.
                </Typography>
                <Typography id="snacking" component="h2" variant="h2" gutterBottom sx={{ mt: 3 }}>The Case Against Constant Snacking</Typography>
                <Typography paragraph>
                    The advice to eat five or six small meals a day — or to snack throughout the day
                    to "keep metabolism high" — may have the opposite effect of what is intended.
                    Every meal, no matter how small, triggers an insulin response if it contains
                    carbohydrates or significant protein. A day of continuous snacking tends to be a day
                    of continuous insulin elevation, and the body never enters the low-insulin state
                    required to mobilize stored fat. Metabolism does not stall when you stop eating —
                    it shifts fuel sources. Extended periods without food may not be deprivation;
                    they may be the condition under which fat-burning becomes accessible.
                </Typography>
                <Typography id="fasting" component="h1" variant="h1" gutterBottom sx={{ mt: 5 }}>Fasting: Letting Insulin Fall</Typography>
                <Typography paragraph>
                    Intermittent fasting and time-restricted eating work primarily through one mechanism:
                    they give insulin levels time to drop. When insulin is low and blood glucose is stable,
                    the body shifts to burning stored fat as its primary fuel — a process that runs cleanly
                    and sustainably.<Ref n={3} /> Hunger, counterintuitively, tends to decrease once the body adapts to
                    accessing fat stores. The frantic hunger associated with caloric restriction does not
                    appear in the same way during fasting, because the fuel is available — it is simply
                    coming from a different source.
                </Typography>
                <Typography paragraph>
                    This is not a new discovery. Fasting has been practiced in virtually every human culture
                    throughout history. What is new is the biochemical explanation for why it works, and the
                    research demonstrating its effects on insulin sensitivity, metabolic rate, cellular
                    repair (autophagy),<Ref n={4} /> and inflammatory markers. The science supports what generations
                    practiced intuitively.
                </Typography>
                <Typography paragraph>
                    Much of the renewed scientific and popular interest in fasting as a metabolic
                    intervention owes a great deal to the work of Dr. Jason Fung, a Canadian nephrologist
                    who reframed obesity and type 2 diabetes as hormonal disorders — not failures of
                    willpower or arithmetic. His contribution is not merely clinical: it is a coherent
                    theoretical model, grounded in endocrinology, that explains decades of failed dietary
                    interventions and points toward a more effective path. The argument — that insulin,
                    not calories, is the primary driver of fat storage and metabolic disease — is
                    increasingly supported by the research literature. It is, arguably, one of the most
                    important reframings in metabolic medicine in a generation, and history tends to
                    recognize those kinds of shifts accordingly.
                </Typography>

                <Typography id="habits" component="h1" variant="h1" gutterBottom sx={{ mt: 5 }}>Healthy Eating Habits</Typography>
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

                <Typography id="reading" component="h1" variant="h1" gutterBottom sx={{ mt: 5 }}>Further Reading</Typography>
                <Typography paragraph>
                    The following books by Dr. Jason Fung provide accessible, evidence-based treatments
                    of the topics discussed on this page. Each is grounded in peer-reviewed research
                    and written for a general audience.
                </Typography>
                <ul>
                    <li>
                        <Typography component="span">
                            <a href="https://www.amazon.com/Obesity-Code-Unlocking-Secrets-Weight/dp/1771641258" target="_blank" rel="noopener noreferrer">
                                <strong>The Obesity Code</strong>
                            </a>{" "}(2016) — The foundational argument: obesity is a hormonal disease driven by
                            insulin, not a caloric imbalance. Covers insulin resistance, the history of dietary
                            advice, and the case for fasting.
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            <a href="https://www.amazon.com/Complete-Guide-Fasting-Heal-Intermittent/dp/1628600012" target="_blank" rel="noopener noreferrer">
                                <strong>The Complete Guide to Fasting</strong>
                            </a>{" "}(2016) — A practical manual co-authored with Jimmy Moore. Covers intermittent
                            fasting, extended fasting, and time-restricted eating, with the physiology behind each.
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            <a href="https://www.amazon.com/Diabetes-Code-Prevent-Reverse-Naturally/dp/1771642653" target="_blank" rel="noopener noreferrer">
                                <strong>The Diabetes Code</strong>
                            </a>{" "}(2018) — Applies the same hormonal framework to type 2 diabetes specifically,
                            with a focus on prevention and reversal through dietary and fasting interventions.
                        </Typography>
                    </li>
                </ul>

                <Typography id="conclusion" component="h1" variant="h1" gutterBottom sx={{ mt: 5 }}>Conclusion</Typography>
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

                <References items={PAGE_REFS} />
            </PageContent>
        </PageContainer>
    );
}
