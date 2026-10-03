export const copy = {
  hero: { eyebrow: 'DEFENSIVE LLM SECURITY — DESKTOP APP', title: 'Break your LLM before attackers do.', sub: 'Aegis is an agentic vulnerability scanner for authorized black-box testing of LLM-powered web and desktop apps. Real attacks. Real verdicts. Zero cloud bills.', micro: 'Windows · macOS · Linux — free for authorized security testing' },
  console: { eyebrow: 'LIVE SCAN CONSOLE', title: 'Your scan console.', sub: 'Watch the attack agent probe your target, the evaluation agent judge every turn, and the risk engine grade what it finds — live, on your machine.' },
  assistant: {
    prompt: 'Why did this prompt pass?',
    placeholder: 'Ask about this finding…',
    thinking: 'Thinking through the sample scan…',
    responseLabel: 'SAMPLE SCAN RESPONSE',
    answer: 'The target held its refusal boundary for all 12 checked turns, and no protected content was returned. Review those evidence turns to inspect the exchange.',
    status: 'Sample response ready',
  },
  pipeline: { eyebrow: 'HOW IT WORKS', title: 'End-to-end LLM security assessment.', sub: 'Follow a verified, structured pipeline engineered for black-box assessment — from target onboarding to an OWASP-mapped report. Every step runs locally on your machine.' },
  evaluation: { eyebrow: 'AGENTIC EVALUATION', title: 'Live attacks. Context-aware AI judging.', sub: 'Every probe executes against the real target while the evaluation agent inspects each response the moment it lands. Deterministic assertions verify infrastructure-level signals — pass or fail in seconds, with zero review queue.' },
  local: { eyebrow: 'LOCAL-FIRST', title: 'Real attacks. Zero cloud bills.', sub: 'Attack, judge, and assistant models run on local LLMs — your targets, prompts, and findings never leave the machine.' },
  who: { eyebrow: 'BUILT FOR THE PEOPLE BUILDING WHAT’S NEXT', title: 'Security knowledge for every team.' },
  coverage: { eyebrow: 'COVERAGE', title: 'Mapped to the OWASP Top 10 for LLM Applications (2026).', sub: 'Explore the ten categories in the OWASP Top 10 for LLM Applications, from prompt injection and sensitive information disclosure to unsafe output handling.' },
  lab: { eyebrow: 'IN THE LAB', title: 'Security Lab: prompt injection, week 3.', sub: 'No more “it worked on my machine” during lab sessions. Students point Aegis at the practice target, run the LLM01 profile, and defend their verdict with attached evidence turns — graded deterministically, no TA bottleneck.' },
  download: { eyebrow: 'GET AEGIS', title: 'Download the desktop app.', sub: 'Free for authorized security testing and research. One installer per OS.' },
  final: { title: 'Start breaking things — safely.', sub: 'Download Aegis, point it at a target you’re authorized to test, and see what your LLM leaks.' },
}

export const terminalScript = [
  'aegis@scan : ~ $ aegis scan --target https://app.local --profile owasp-llm-top10',
  '[orchestrator]  plan ready — 10 categories, 48 attack variants queued',
  '[attack]  LLM01 prompt-injection … payload sent (turn 3/12)',
  '[target]  response received (412 ms) — normalizing…',
  '[judge]   verdict: VULNERABLE — system instruction leaked (confidence 0.91)',
  '[attack]  escalating … mutation m-17 (turn 4/12)',
  '[judge]   verdict: PASS — refusal boundary held (confidence 0.97)',
  '[risk]    LLM01:2026 → HIGH (7.4) — evidence attached, report updated',
  'aegis@scan : ~ $ ▉',
]

export const pipelineSteps = [
  ['01', 'Onboard', 'Point Aegis at your target. The Website Scanner drives real browsers via Playwright; the Application Scanner intercepts desktop traffic via mitmproxy.'],
  ['02', 'Attack', 'The attack agent mutates seed prompts from the OWASP test library and probes the target turn by turn.'],
  ['03', 'Evaluate', 'The judge model scores every response against strict rubrics — with escalation and move-on verdicts.'],
  ['04', 'Score', 'Deterministic risk scoring grades each category and the target overall. No vibes, just math.'],
  ['05', 'Report', 'One-click PDF reports: technical detail for engineers, executive summary for leadership.'],
]

export const stats = [['10', 'OWASP LLM categories assessed (2026)'], ['100%', 'black-box: no source access needed'], ['0', 'cloud API cost (local models)'], ['1-click', 'PDF technical + executive reports']]

export const categories = [
  ['LLM01:2026', 'Prompt Injection', 'Manipulation of model behavior through crafted inputs.'],
  ['LLM02:2026', 'Sensitive Information Disclosure', 'Unintended exposure of sensitive information.'],
  ['LLM03:2026', 'Excessive Agency', 'Excessive autonomy or tool access for LLM systems.'],
  ['LLM04:2026', 'Supply Chain', 'Risks across models, data, and deployment components.'],
  ['LLM05:2026', 'Data and Model Poisoning', 'Compromised training or retrieval data.'],
  ['LLM06:2026', 'Unbounded Consumption', 'Resource exhaustion and uncontrolled inference costs.'],
  ['LLM07:2026', 'Misinformation', 'Confident production of false or misleading content.'],
  ['LLM08:2026', 'Hidden Context Exposure', 'Disclosure of hidden instructions and internal context.'],
  ['LLM09:2026', 'Vector and Embedding Weaknesses', 'Risks in vector stores and embedding workflows.'],
  ['LLM10:2026', 'Improper Output Handling', 'Unsafe handling of model-generated output.'],
]

export const docs = ['Installation guide', 'Your first scan', 'Understanding risk scores', 'AI Assistant guide', 'FAQ']
