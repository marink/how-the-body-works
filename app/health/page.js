import React from "react";
import PageTitle from "@components/PageTitle";
import PageContent from "@components/PageContent";
import PageContainer from "@components/PageContainer";
import Section from "@components/Section";
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
                    Health is a state of complete physical, mental, and social well-being — not merely the absence of disease or infirmity.
                    It is a resource for everyday life, not the objective of living.
                </Typography>
                <Typography paragraph>
                    For many people, the honest question is not <em>what</em> to do — most know they should eat less sugar, move more,
                    sleep better. The harder question is <em>why none of that seems to work the way it should</em>. Why does
                    cutting calories produce hunger but not lasting fat loss? Why does weight creep back even when habits haven't
                    changed? The answer, increasingly supported by research, is hormonal — and understanding it
                    starts with <Link href="/cells">how cells process fuel</Link> and how
                    the <Link href="/endocrine-system">endocrine system</Link> governs the signals that decide
                    what the body does with the food you eat.
                </Typography>

                <Section>
                    <Typography id="sugar" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>Sugar and Its Negative Impact on the Body</Typography>
                    <Typography paragraph>
                        Excessive sugar intake quietly drives some of the most common chronic conditions — obesity, type 2 diabetes,
                        and heart disease.<Ref n={1} /> The mechanism is not mysterious: sugar provides calories with almost no
                        nutritional value, and the body has limited capacity to store it as glucose. What cannot be used immediately
                        gets converted to fat. But the damage goes beyond simple calorie surplus.
                    </Typography>
                    <Typography paragraph>
                        When blood sugar spikes, the pancreas responds by releasing insulin to clear it. Do this repeatedly —
                        multiple times a day, every day, for years — and the body begins to adapt in a way that works against you.
                        Cells become less sensitive to insulin's signal, requiring ever-larger releases to achieve the same effect.
                        This is insulin resistance, and once it sets in, the entire metabolic picture changes.
                    </Typography>
                    <Typography paragraph>
                        High sugar intake has also been linked to systemic inflammation, which contributes to heart disease, certain
                        cancers, and deteriorating mental health — including mood instability and increased risk of depression.
                        The downstream effects are far broader than weight alone.
                    </Typography>
                    <Typography paragraph>
                        Reducing sugar and replacing it with whole foods — vegetables, proteins, healthy fats — shifts the body
                        away from this cycle. But understanding <em>why</em> that matters requires looking at what chronic
                        high insulin actually does inside the body.
                    </Typography>
                </Section>

                <Section alt>
                    <Typography id="insulin" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>What Chronic High Insulin Actually Does</Typography>
                    <Typography paragraph>
                        Insulin is a storage hormone. When it is present, the body stores energy. When it falls, the body
                        burns stored energy. This is the basic switch — and it works elegantly when insulin rises briefly
                        after a meal and then recedes. The problem begins when it never gets a chance to recede.
                    </Typography>
                    <Typography paragraph>
                        A diet built around refined carbohydrates and ultra-processed foods keeps blood glucose —
                        and therefore insulin — elevated for most of the waking day. <Link href="/cells">Cells</Link>, overwhelmed
                        by the constant signal, begin to ignore it. This is insulin resistance: not a disease that arrives
                        from outside, but a predictable adaptation to a stimulus that was never meant to be chronic.<Ref n={2} />
                    </Typography>
                    <Typography paragraph>
                        Here is where a common frustration finds its explanation. <em>Why do people gain weight even when
                        they feel like they are not eating that much?</em> Because as insulin resistance develops, the pancreas
                        compensates by secreting <em>more</em> insulin to force the same response. That chronically elevated
                        insulin — hyperinsulinemia — is not merely a symptom of the problem. It is the driver of what follows.
                        High insulin actively locks fat inside fat cells. Stored fat cannot be released for fuel while insulin
                        is elevated, regardless of how many calories are being consumed. The body is simply following its
                        own hormonal rules.
                    </Typography>
                    <Typography paragraph>
                        This mechanism also explains the puzzling weight gain of midlife that seems to arrive without any
                        obvious change in eating behavior. The behavior may not have changed — but the hormonal environment
                        has shifted, and the body's response to food has shifted with it.
                        <em> Personal experience corroborates this mechanism — reversing it is possible at any
                        stage of life, including well into middle age.</em>
                    </Typography>
                </Section>

                <Section>
                    <Typography id="reconsidering" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>Two Ideas Worth Reconsidering</Typography>
                    <Typography paragraph>
                        Two pieces of mainstream dietary advice have been repeated for decades. Both treat weight as a
                        calorie-accounting problem. Neither is entirely wrong — but both miss the hormonal driver in a way
                        that leaves people confused when the advice fails them, as it so often does.
                    </Typography>

                    <Typography id="eat-less" component="h2" variant="h2" gutterBottom sx={{ mt: 1.5 }}>Rethinking "Eat Less, Move More"</Typography>
                    <Typography paragraph>
                        The calories-in, calories-out model describes a real physical law. Energy balance is not a myth.
                        But it is an incomplete description of what actually happens when you try to intervene by simply
                        eating less. <em>Why does eating less so often make you hungrier without making you noticeably
                        leaner?</em> Because the body does not experience caloric restriction as a neutral accounting
                        adjustment. It experiences it as a threat.
                    </Typography>
                    <Typography paragraph>
                        When calories drop while insulin remains elevated, the body responds by reducing metabolic
                        rate, raising hunger hormones, and defending its fat stores with remarkable tenacity.
                        Fat cells, locked in storage mode by high insulin, are not accessible as fuel — so the body
                        slows everything down to compensate. You eat less, burn less, feel worse, and the fat stays.
                        Cutting calories without addressing the hormonal environment is like trying to empty a
                        bathtub while the tap is still running. The target is not only the calorie — it is the
                        signal that determines what the body does with those calories.
                    </Typography>

                    <Typography id="snacking" component="h2" variant="h2" gutterBottom sx={{ mt: 1.5 }}>The Case Against Constant Snacking</Typography>
                    <Typography paragraph>
                        The advice to eat five or six small meals a day — or to snack throughout the day to
                        "keep metabolism high" — is well-intentioned but may have the opposite effect of what is intended.
                        <em> Why does snacking so persistently prevent fat loss, even when total calories are controlled?</em>
                    </Typography>
                    <Typography paragraph>
                        Every meal, no matter how small, triggers an insulin response if it contains carbohydrates
                        or significant protein. A day of continuous snacking is a day of continuous insulin elevation.
                        The body never enters the low-insulin state required to unlock stored fat as fuel. Metabolism
                        does not stall when you stop eating — it shifts fuel sources. Extended periods without food
                        are not deprivation; they are the metabolic condition under which fat-burning becomes
                        accessible in the first place.
                    </Typography>
                </Section>

                <Section alt>
                    <Typography id="fasting" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>Fasting: Letting Insulin Fall</Typography>
                    <Typography paragraph>
                        Intermittent fasting and time-restricted eating work primarily through one mechanism:
                        they give insulin levels time to drop. When insulin is low and blood glucose is stable,
                        the body shifts to burning stored fat as its primary fuel — a process that runs cleanly
                        and sustainably.<Ref n={3} />
                    </Typography>
                    <Typography paragraph>
                        One of the most counterintuitive findings is what happens to hunger. <em>Why does fasting
                        reduce hunger rather than increase it?</em> Because the frantic hunger associated with caloric
                        restriction — the kind that makes diets feel unsustainable — is largely a product of being
                        in a high-insulin, low-access-to-fat state. The body is starving for fuel it cannot reach.
                        During a fast, once insulin falls and fat becomes accessible, the fuel is available —
                        it is simply coming from storage rather than from the last meal. Hunger decreases because
                        the body is actually being fed; it has just changed its fuel source.
                    </Typography>
                    <Typography paragraph>
                        Fasting also triggers autophagy — the cellular repair and recycling process — along with
                        measurable improvements in insulin sensitivity and inflammatory markers.<Ref n={4} />
                        None of this is new. Fasting has been practiced in virtually every human culture throughout
                        history. What is new is the biochemical explanation for why it works, and the research
                        confirming effects that generations practiced intuitively.
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
                        important reframings in metabolic medicine in a generation.
                    </Typography>
                </Section>

                <Section>
                    <Typography id="habits" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>Healthy Eating Habits</Typography>
                    <Typography paragraph>
                        With the hormonal picture in view, the practical recommendations look somewhat different
                        from conventional advice — not contradictory, but more precisely targeted:
                    </Typography>
                    <ul>
                        <li>
                            <Typography component="span">Reduce refined carbohydrates and added sugars to lower the insulin load of each meal.</Typography>
                        </li>
                        <li>
                            <Typography component="span">Eat whole foods — vegetables, proteins, healthy fats — that provide nutrition without prolonged insulin spikes.</Typography>
                        </li>
                        <li>
                            <Typography component="span">Consolidate eating into a defined window each day, giving insulin time to fall between meals.</Typography>
                        </li>
                        <li>
                            <Typography component="span">Resist the urge to snack constantly — the gaps between meals are when fat-burning happens.</Typography>
                        </li>
                        <li>
                            <Typography component="span">Stay well hydrated; hunger and thirst signals are often confused.</Typography>
                        </li>
                        <li>
                            <Typography component="span">Prioritize sleep — poor sleep raises cortisol and insulin, directly undermining metabolic health.</Typography>
                        </li>
                        <li>
                            <Typography component="span">Move regularly, not to "burn calories," but because muscle activity improves insulin sensitivity independently of diet.</Typography>
                        </li>
                    </ul>
                    <Typography paragraph>
                        These changes compound. Lowering insulin sensitivity improves the response to each meal;
                        better sleep reduces hormonal disruption; fasting windows become easier as the body
                        adapts to accessing fat. The system is self-reinforcing once pointed in the right direction.
                    </Typography>
                </Section>

                <Section alt>
                    <Typography id="reading" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>Further Reading</Typography>
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
                </Section>

                <Section>
                    <Typography id="conclusion" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>Conclusion</Typography>
                    <Typography paragraph>
                        The frustration of doing everything right and still not seeing results is not a personal
                        failure. It is often the predictable outcome of advice that addresses calories while
                        ignoring the hormonal environment that governs what the body does with them.
                    </Typography>
                    <Typography paragraph>
                        Understanding insulin — what raises it, what lowers it, and what the body is capable of
                        when it falls — reframes the entire picture. Weight gain, hunger, fatigue, and metabolic
                        disease become less mysterious. And more importantly, the path toward reversing them
                        becomes clearer and more actionable.
                    </Typography>
                    <Typography paragraph>
                        Small, consistent changes in the hormonal environment compound over time. The body
                        responds. The science increasingly confirms what those who have reversed insulin
                        resistance already know from experience: it is not about eating less. It is about
                        giving the body the conditions it needs to do what it was always designed to do.
                    </Typography>
                </Section>

                <References items={PAGE_REFS} />
            </PageContent>
        </PageContainer>
    );
}
