import { Typography, Box } from "@mui/material";
import Link from 'next/link';
import Section from "@components/Section";
import TwoColumnSection from "@components/TwoColumnSection";
import Ref from "@components/Ref";
import References from "@components/References";
import { REFS } from "@app/content/references";

export const PAGE_REFS = [
    { n: 1,  ...REFS.rewardPredictionError },
    { n: 2,  ...REFS.videoGameDopamine },
    { n: 3,  ...REFS.lootBoxesGambling },
    { n: 4,  ...REFS.cocaineD2Receptors },
    { n: 5,  ...REFS.brainDiseaseModel },
    { n: 6,  ...REFS.internetAddictionD2 },
    { n: 7,  ...REFS.addictionAllostasis },
    { n: 8,  ...REFS.lembke_dopamineNation },
    { n: 9,  ...REFS.insulinResistance },
    { n: 10, ...REFS.machiavelli_prince },
    { n: 11, ...REFS.sunkCost },
    { n: 12, ...REFS.ikeaEffect },
    { n: 13, ...REFS.methAbstinenceRecovery },
    { n: 14, ...REFS.whoGamingDisorder },
];

// ── SVG: The drifting setpoint ───────────────────────────────────────────────
// Repeated floods drag the baseline upward until ordinary life sits below it.
const X0 = 40, X1 = 400, NORMAL_Y = 150;
const baseY = x => 168 - ((x - X0) / (X1 - X0)) * 66;

const SPIKES = Array.from({ length: 8 }, (_, i) => 72 + i * 42);

function spikePath() {
    let d = `M${X0},${baseY(X0).toFixed(1)}`;
    for (const sx of SPIKES) {
        d += ` L${sx - 8},${baseY(sx - 8).toFixed(1)} L${sx},${(baseY(sx) - 58).toFixed(1)} L${sx + 8},${baseY(sx + 8).toFixed(1)}`;
    }
    return d + ` L${X1},${baseY(X1).toFixed(1)}`;
}

const CROSS_X = X0 + ((168 - NORMAL_Y) / 66) * (X1 - X0);
const DEFICIT = `M${CROSS_X.toFixed(1)},${NORMAL_Y} L${X1},${NORMAL_Y} L${X1},${baseY(X1).toFixed(1)} Z`;

const SetpointSvg = () => (
    <svg viewBox="0 0 420 250" style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block', background: '#FBFCFE' }}
         role="img" aria-label="Repeated reward spikes raise the baseline until ordinary life falls below it">
        <text x="210" y="22" textAnchor="middle" fontSize="11" fill="#2C3E50" fontWeight="600">The drifting setpoint</text>

        {/* Axes */}
        <line x1={X0} y1="210" x2={X1} y2="210" stroke="#B0BEC5" strokeWidth="1" />
        <line x1={X0} y1="40" x2={X0} y2="210" stroke="#B0BEC5" strokeWidth="1" />
        <text x={X1} y="226" textAnchor="end" fontSize="9" fill="#78909C">time →</text>
        <text x="30" y="44" textAnchor="end" fontSize="9" fill="#78909C" transform="rotate(-90 30 44)">reward signal →</text>

        {/* Deficit: ordinary life below the baseline */}
        <path d={DEFICIT} fill="rgba(192,57,43,0.12)" />

        {/* Ordinary life */}
        <line x1={X0} y1={NORMAL_Y} x2={X1} y2={NORMAL_Y} stroke="#27AE60" strokeWidth="2" />
        <text x={X0 + 4} y={NORMAL_Y - 6} fontSize="9" fill="#1E8449" fontWeight="600">ordinary life</text>

        {/* Baseline (setpoint) */}
        <line x1={X0} y1={baseY(X0)} x2={X1} y2={baseY(X1)} stroke="#1565C0" strokeWidth="1.5" strokeDasharray="5 4" />
        <text x={X1 - 2} y={baseY(X1) - 6} textAnchor="end" fontSize="9" fill="#1565C0" fontWeight="600">baseline (setpoint)</text>

        {/* The floods */}
        <path d={spikePath()} fill="none" stroke="#E67E22" strokeWidth="2" strokeLinejoin="round" />
        <text x={SPIKES[1]} y={baseY(SPIKES[1]) - 64} textAnchor="middle" fontSize="9" fill="#AF601A" fontWeight="600">the flood</text>

        <text x="330" y="196" textAnchor="middle" fontSize="9" fill="#922B21">deficit: ordinary life</text>
        <text x="330" y="207" textAnchor="middle" fontSize="9" fill="#922B21">now feels flat</text>
    </svg>
);

const PARALLEL = [
    ['The signal', 'Insulin', 'Dopamine'],
    ['What floods it', 'Refined carbohydrates, constant snacking', 'Games, feeds and loops that never close'],
    ['The adaptation', 'Cells become insulin resistant', 'Reward receptors are down-regulated'],
    ['The result', 'More insulin is needed for the same effect', 'More stimulation is needed for the same effect'],
    ['What it feels like', 'Hunger that eating less does not fix', 'Boredom and flatness that "just a little" does not fix'],
    ['Slow reset', 'Reduce refined carbohydrates', 'Gradually reduce the stimulus'],
    ['Accelerator', 'Fasting', 'Clean, time-limited abstention'],
    ['What recovers', 'Insulin sensitivity', 'Reward sensitivity'],
];

function ParallelTable() {
    const cell = { p: 1.25, borderBottom: '1px solid #E0E0E0', fontSize: '0.88rem', verticalAlign: 'top', textAlign: 'left' };
    const [head, ...rows] = PARALLEL;
    return (
        <Box sx={{ overflowX: 'auto', my: 2 }}>
            <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>{head.map((h, i) => (
                        <Box component="th" key={i} sx={{ ...cell, fontWeight: 700, color: i === 1 ? '#AF601A' : i === 2 ? '#1565C0' : 'text.primary' }}>{h}</Box>
                    ))}</tr>
                </thead>
                <tbody>
                    {rows.map(r => (
                        <tr key={r[0]}>{r.map((c, j) => (
                            <Box component="td" key={j} sx={{ ...cell, fontWeight: j === 0 ? 600 : 400 }}>{c}</Box>
                        ))}</tr>
                    ))}
                </tbody>
            </Box>
        </Box>
    );
}

export default function RewardSetpoint() {
    return (
        <>
            {/* ── 1. What dopamine signals ── */}
            <Section>
                <Typography id="anticipation" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>
                    What Dopamine Actually Signals
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    Dopamine is often called the pleasure chemical. That is not quite right, and the difference
                    explains most of what follows. Once a reward has been learned, dopamine neurons fire at the
                    <em> cue</em> that predicts it, not at the reward itself. A fully expected reward produces
                    almost no response, and a reward that fails to arrive produces a dip below baseline.<Ref n={1} />
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    <em>Why does the next match feel more urgent than the last one felt good?</em> Because dopamine
                    tracks anticipation, not arrival. The signal peaks when the reward is expected and falls once
                    it lands. What pulls you forward is never the win you just had. It is the one that might come
                    next.
                </Typography>
            </Section>

            {/* ── 2. The loop that never closes ── */}
            <Section alt>
                <Typography id="loop" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>
                    Why Games Never Let the Loop Close
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    Playing a video game measurably releases dopamine in the striatum, the brain's core reward
                    region.<Ref n={2} /> That alone is unremarkable, since many good things do. What matters is the
                    design around it. Modern games are built so that the anticipation never resolves: there is
                    always another match, another rank, another unlock. Rewards arrive on unpredictable
                    schedules, which are the schedules that hold attention most strongly, and randomised reward
                    purchases (loot boxes) are statistically linked to problem gambling.<Ref n={3} />
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    <em>Why does stopping feel like leaving something unfinished?</em> Because, by design, it is.
                    An unclosed loop is felt as a debt, and a debt as a duty. The pull to return is not desire for
                    pleasure so much as discomfort with an open account.
                </Typography>
            </Section>

            {/* ── 3. Tolerance ── */}
            <Section>
                <TwoColumnSection figure={<SetpointSvg />}>
                    <Typography id="tolerance" component="h1" variant="h1" gutterBottom sx={{ mt: 1 }}>
                        Tolerance: The Dopamine Version of Insulin Resistance
                    </Typography>
                    <Typography component="p" sx={{ mb: 2 }}>
                        The <Link href="/health">Health</Link> page describes how cells exposed to constant insulin
                        stop listening to it. The brain's reward system adapts to a constant flood in the same way.
                        With repeated overstimulation, the number of available dopamine D2 receptors falls. This is
                        well documented in drug addiction<Ref n={4} /><Ref n={5} />, and a small imaging study found
                        the same pattern in people with internet addiction.<Ref n={6} />
                    </Typography>
                    <Typography component="p" sx={{ mb: 2 }}>
                        <em>Why does ordinary life feel flat after a long session?</em> Because the baseline has
                        moved. The system now defends a higher setpoint, so an ordinary day registers as a deficit.
                        Addiction researchers call this shift <strong>allostasis</strong><Ref n={7} />, and the
                        psychiatrist Anna Lembke describes it as a pleasure–pain balance tipped toward pain.<Ref n={8} />
                    </Typography>
                </TwoColumnSection>
                <Typography component="p" sx={{ mb: 2 }}>
                    This is the crucial reframe. Past a certain point, you are not playing to feel good. You are
                    playing to stop feeling bad, refilling to escape lack rather than to gain pleasure. That is the
                    same trap as the hunger described on the Health page, where a high-insulin body feels starved
                    while it is carrying ample stored fuel.
                </Typography>
                <Typography component="p" sx={{ mb: 2, fontStyle: 'italic', color: 'text.secondary', fontSize: '0.88rem' }}>
                    A note on the evidence: receptor down-regulation is firmly established for drugs of abuse. How
                    strongly behavioural rewards such as gaming produce the same change is still being studied,
                    and the gaming data so far come from small samples. The architecture (a defended setpoint that
                    drifts under a constant flood) is the part that is well understood.
                </Typography>
            </Section>

            {/* ── 4. Side by side ── */}
            <Section alt>
                <Typography id="parallel" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>
                    Side by Side: Insulin and Dopamine
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    Dr. Jason Fung's central insight about metabolism is that the problem is not willpower or
                    arithmetic but a hormonal signal that has been driven too high for too long.<Ref n={9} /> The
                    reward system follows the same rules:
                </Typography>
                <ParallelTable />
                <Typography component="p" sx={{ mb: 2 }}>
                    In both cases the advice that fails is the same kind of advice: "eat a little less", "play a
                    little less". Moderation keeps the flood going at a lower level, so the setpoint never gets
                    the quiet it needs to come back down.
                </Typography>
            </Section>

            {/* ── 5. Sunk cost ── */}
            <Section>
                <Typography id="sunk-cost" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>
                    Why It Holds: Sunk Cost and Earned Skill
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    Chemistry is not the only thing keeping the loop in place. Machiavelli observed that "it is
                    the nature of men to be bound by the benefits they confer as much as by those they
                    receive."<Ref n={10} /> Make someone spend something of theirs, and they are tied to it.
                    Psychology has since confirmed both halves: people keep investing in what they have already
                    paid for (the sunk-cost effect)<Ref n={11} />, and they overvalue what they have put their own
                    effort into.<Ref n={12} />
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    Applied to a game, the hooks rank from weakest to strongest:
                </Typography>
                <ul>
                    <li>
                        <Typography component="span">
                            <strong>Money spent.</strong> Characters, skins and passes are already paid for and
                            gone. Sunk money is not a reason to continue, and once seen clearly this hook loses its
                            grip quickly.
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            <strong>"I got good at it."</strong> This is the strongest hook because it is the only
                            one that is <em>true</em>. The skill is real, earned and part of identity. It is not an
                            expense to write off.
                        </Typography>
                    </li>
                </ul>
                <Typography component="p" sx={{ mb: 2 }}>
                    <em>So what do you do with a skill you do not want to keep feeding?</em> You redeploy it rather
                    than dissolve it. Fast decisions under pressure, pattern reading, coordination with a team and
                    persistence through losses all transfer to sport, strategy games that end, music, programming,
                    or anything else where the loop eventually closes.
                </Typography>
            </Section>

            {/* ── 6. Reset ── */}
            <Section alt>
                <Typography id="reset" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>
                    Resetting the Setpoint
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    Fasting works for insulin by letting the signal fall long enough for the cells to recover
                    their sensitivity. The reward system recovers the same way: remove the flood and give it
                    time. In methamphetamine users, imaging showed that lost dopamine transporters recovered
                    substantially after many months of abstinence.<Ref n={13} /> Lembke's clinical starting point is about four weeks
                    away from the source.<Ref n={8} />
                </Typography>
                <ul>
                    <li>
                        <Typography component="span">
                            <strong>Expect it to get worse before it gets better.</strong> The first days are the
                            deficit made visible, the reward-system equivalent of the hunger at the start of a fast.
                            It passes.
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            <strong>Remove the cue, not just the game.</strong> Notifications, the icon on the home
                            screen and the usual time of day all trigger anticipation on their own. The popular
                            "dopamine fast" works, to the extent it does, by removing cues; it does not lower
                            dopamine itself.
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            <strong>Choose loops that close.</strong> Activities with a natural end, such as a hike,
                            a chapter or a finished project, deliver reward without leaving a debt behind.
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            <strong>Redeploy the skill</strong> deliberately, as above, so that what you earned
                            keeps paying off.
                        </Typography>
                    </li>
                </ul>
                <Typography component="p" sx={{ mb: 2, fontStyle: 'italic', color: 'text.secondary', fontSize: '0.88rem' }}>
                    When gaming takes priority over other interests and daily activities and continues despite
                    clear harm, typically for a year or more, the World Health Organization recognises it as gaming
                    disorder, a clinical condition worth discussing with a professional.<Ref n={14} />
                </Typography>
            </Section>

            {/* ── 7. Conclusion ── */}
            <Section>
                <Typography id="conclusion" component="h1" variant="h1" gutterBottom sx={{ mt: 2.5 }}>
                    Conclusion
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    Fung reframed weight gain as a hormonal adaptation rather than a failure of willpower. The same
                    reframe applies here. Struggling to put a game down is not a character flaw. It is a
                    self-regulating system faithfully defending a setpoint that a constant flood has moved.
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    That is also the hopeful part. Setpoints that move up can move back down. Insulin sensitivity
                    returns when insulin is allowed to fall, and reward sensitivity returns when the flood is
                    allowed to stop. In both cases, understanding the mechanism clearly is often what makes the
                    change possible.
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    The idea that one law, homeostasis, runs through metabolism, reward and beyond is explored
                    further in the philosophy essay{' '}
                    <a href="https://marin.kokona.website/philosophy/folding" target="_blank" rel="noopener noreferrer">
                        Folding: Reality as a Self-Referential Address
                    </a>.
                </Typography>
            </Section>

            <References items={PAGE_REFS} />
        </>
    );
}
