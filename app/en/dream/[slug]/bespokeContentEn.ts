export type EnVoiceCopy = {
  introLead: string
  introSensory: string
  psychLead: string
  psychDeep: string
  tradition: string
  closing: string
}

export type EnFAQItem = {
  question: string
  answer: string
}

export type EnBespokeContent = {
  voice: EnVoiceCopy
  faqs: EnFAQItem[]
}

export const bespokeContentEnBySlug: Record<string, EnBespokeContent> = {
  'snake-dream': {
    voice: {
      introLead:
        'A snake dream is rarely just about fear. It usually appears when desire, risk, and timing are all active at once.',
      introSensory:
        'If the scales, movement, or distance felt vivid, your intuition is already tracking something specific in waking life, often around money, trust, or power.',
      psychLead:
        'Psychologically, snakes often symbolize raw instinct. You may be sensing an opportunity but also questioning whether the cost is worth it.',
      psychDeep:
        'Dream tone matters more than snake size. A calm snake can point to controlled transformation, while a threatening one often reflects boundaries that need to be defended.',
      tradition:
        'In Korean tradition, snake imagery can carry fortune and helper energy, especially with white or golden snakes, but context still decides whether the sign is blessing or warning.',
      closing:
        'Treat this dream as a prompt to choose clearly: one opportunity to commit to and one risk to stop ignoring.',
    },
    faqs: [
      {
        question: 'Does a snake dream always mean money luck?',
        answer:
          'Not always. It can mean money movement, but it can also point to instinct, temptation, or a relationship where trust and caution are both in play.',
      },
      {
        question: 'What if the snake was chasing me?',
        answer:
          'That scene often mirrors an avoided decision in real life. The dream is less about danger prediction and more about urgency.',
      },
      {
        question: 'What should I do after this dream?',
        answer:
          'Review one contract, conversation, or financial decision where terms feel fuzzy. Clarity is usually the right response to a snake dream.',
      },
    ],
  },
  'teeth-dream': {
    voice: {
      introLead:
        'Teeth falling out dreams often hit during periods of pressure, image anxiety, or social vulnerability. They are common and deeply human.',
      introSensory:
        'If you felt the emptiness in your mouth or the shock of loose teeth, your nervous system may be carrying more stress than your daytime persona shows.',
      psychLead:
        'This dream frequently reflects fear of losing control over how you are seen. It is about self-worth under scrutiny, not weakness.',
      psychDeep:
        'Front teeth scenes often connect to confidence and visibility. Molar scenes can point to heavier family or duty-based stress.',
      tradition:
        'Traditional Korean readings often link teeth dreams to shifts in close relationships or family mood, but never as a fixed sentence; emotional context changes the reading.',
      closing:
        'Instead of searching for doom, rebuild confidence in small concrete ways: one boundary, one honest conversation, one manageable promise to yourself.',
    },
    faqs: [
      {
        question: 'Is this dream a bad omen?',
        answer:
          'Usually no. It is more often a stress and self-image signal than a literal prediction of harm.',
      },
      {
        question: 'Why does this dream repeat?',
        answer:
          'Repetition usually means the same pressure pattern is still active, especially around judgment, perfectionism, or unresolved tension.',
      },
      {
        question: 'What helps right away?',
        answer:
          'Lower one performance demand for the day and finish one task cleanly. Restored control reduces recurrence.',
      },
    ],
  },
  'chasing-dream': {
    voice: {
      introLead:
        'Chasing dreams are not random nightmares. They usually show what your waking life is trying to postpone.',
      introSensory:
        'If your breath felt tight or your legs felt heavy, your body may already be running on sustained stress chemistry.',
      psychLead:
        'The key is not who chased you, but how you moved. Hiding, freezing, or turning around each tells a different story about coping style.',
      psychDeep:
        'Repeated pursuit scenes often mean delay costs are rising. Once you name the avoided issue, the dream intensity often drops.',
      tradition:
        'Traditional readings frame this as a conflict signal, but also as a test of courage and timing rather than pure bad luck.',
      closing:
        'Do one direct action on the thing you keep circling. Chasing dreams calm down when avoidance ends.',
    },
    faqs: [
      {
        question: 'Does being chased mean danger is coming?',
        answer:
          'Not usually in a literal sense. It more often reflects unresolved pressure and emotional backlog.',
      },
      {
        question: 'What if I do not see who is chasing me?',
        answer:
          'That often points to diffuse anxiety: pressure without one clear source, common during overload periods.',
      },
      {
        question: 'How do I break the cycle?',
        answer:
          'Pick the most avoided task and start for 20 minutes. Action interrupts the pursuit pattern.',
      },
    ],
  },
  'flying-dream': {
    voice: {
      introLead:
        'Flying dreams usually come when your life is outgrowing an old ceiling and asking for a wider operating range.',
      introSensory:
        'If wind speed and altitude felt real, your expansion drive is high, and your mind is testing whether your life can hold that growth.',
      psychLead:
        'Psychologically, flight often reflects regained agency. You want to move by your own decisions, not by inherited scripts.',
      psychDeep:
        'Stable flight suggests confidence with direction. Sudden instability can point to momentum without support systems.',
      tradition:
        'Traditional interpretations connect upward movement with recognition and opportunity, while reminding dreamers to pair momentum with discipline.',
      closing:
        'Keep the ambition, but ground it: one bold step, one practical safeguard.',
    },
    faqs: [
      {
        question: 'Is flying always a good sign?',
        answer:
          'Usually positive, but context matters. Calm control reads differently from chaotic or fearful ascent.',
      },
      {
        question: 'What if I suddenly dropped?',
        answer:
          'That can reflect fear of losing control after rapid progress, especially when support is thin.',
      },
      {
        question: 'Best next action?',
        answer:
          'Convert one big dream into a dated, measurable step. Flight energy needs structure to become real.',
      },
    ],
  },
  'fall-dream': {
    voice: {
      introLead:
        'Falling dreams often appear when certainty gives way to transition. They are about control shifts, not automatic failure.',
      introSensory:
        'If the drop sensation jolted you awake, your stress system may be reacting to instability in work, relationships, or identity.',
      psychLead:
        'This dream commonly reflects fear of losing footing in a role you have tried hard to hold together.',
      psychDeep:
        'Where you fell from matters. Falling from height can indicate pressure tied to status, while stumbling can reflect accumulated fatigue.',
      tradition:
        'Traditional readings often treat sudden descent as a caution to slow down and rebalance rather than a fixed negative fate.',
      closing:
        'Rebuild footing deliberately: simplify one commitment before adding another.',
    },
    faqs: [
      {
        question: 'Does falling mean I am failing?',
        answer:
          'Not necessarily. It more often signals perceived instability and fear of losing control.',
      },
      {
        question: 'Why do I wake right before impact?',
        answer:
          'That startle response is common when stress arousal is high. Your body interrupts the dream before completion.',
      },
      {
        question: 'How can I reduce this dream?',
        answer:
          'Lower evening overstimulation and identify one instability source you can actively address the next day.',
      },
    ],
  },
  'death-dream': {
    voice: {
      introLead:
        'Death dreams are rarely literal. Most often they mark identity transitions, endings of old roles, and the start of new phases.',
      introSensory:
        'If the dream felt unusually clear, your mind may be emphasizing that a chapter is truly ending, even if part of you resists it.',
      psychLead:
        'Psychologically, death imagery can represent ego reorganization: letting go of a former self to make room for a more honest one.',
      psychDeep:
        'Dreaming of your own death often points to internal change. Dreaming of someone else can reflect relationship or expectation shifts.',
      tradition:
        'Traditional Korean readings frequently treat death dreams as renewal or protective turning points, not simple doom symbols.',
      closing:
        'Ask what needs a respectful ending in your life right now, then close it on purpose.',
    },
    faqs: [
      {
        question: 'Is a death dream a bad prediction?',
        answer:
          'Usually no. It most often symbolizes transition, release, and psychological reorganization.',
      },
      {
        question: 'What if the dream was frightening?',
        answer:
          'Fear often reflects resistance to change, not evidence of literal danger.',
      },
      {
        question: 'How should I respond?',
        answer:
          'Name one outdated pattern to retire and one new pattern to begin. That aligns with the dream message.',
      },
    ],
  },
  'pregnancy-dream': {
    voice: {
      introLead:
        'Pregnancy dreams often symbolize incubation: new work, identity, or responsibility growing below the surface.',
      introSensory:
        'If warmth, weight, or body awareness stood out, your mind may be marking that an idea is ready to move from concept to commitment.',
      psychLead:
        'Psychologically, these dreams can hold both hope and burden. You want to create something meaningful, and you feel the stakes.',
      psychDeep:
        'Joyful scenes often align with readiness. Anxious scenes may point to support gaps rather than wrong direction.',
      tradition:
        'Traditional interpretations often treat pregnancy imagery as incoming blessing and growth potential, especially when dream tone is calm.',
      closing:
        'Nurture the new thing with structure: one small repeatable routine beats grand intention.',
    },
    faqs: [
      {
        question: 'Does this dream always relate to literal pregnancy?',
        answer:
          'No. Very often it reflects creative, relational, or career growth that is still forming.',
      },
      {
        question: 'Why did the dream feel heavy?',
        answer:
          'Growth carries responsibility. The heaviness can mirror pressure to do the new thing well.',
      },
      {
        question: 'What should I do now?',
        answer:
          'Move one idea into a concrete first step with timeline and scope.',
      },
    ],
  },
  'ex-dream': {
    voice: {
      introLead:
        'Dreams about an ex are usually less about reunion and more about reviewing the emotional script you still run under stress.',
      introSensory:
        'If voice, scent, or specific moments felt vivid, your current emotional life may be activating old attachment scripts.',
      psychLead:
        'Psychologically, the ex often represents a chapter in your own development, especially around boundaries, safety, and expression.',
      psychDeep:
        'Intense dream emotion suggests unfinished internal dialogue. Neutral tone often signals integration and reduced grip.',
      tradition:
        'Traditional readings treat familiar-person dreams as relational weather indicators, with emphasis on present conduct over past fixation.',
      closing:
        'Use the dream to clarify current standards, not to relive old loops.',
    },
    faqs: [
      {
        question: 'Does dreaming of my ex mean I want them back?',
        answer:
          'Not necessarily. It often means old emotional patterns are being reprocessed in a new context.',
      },
      {
        question: 'Why now, after so much time?',
        answer:
          'Current stress or intimacy themes can reactivate older memory networks, even after long gaps.',
      },
      {
        question: 'What is the healthiest response?',
        answer:
          'Write down what that relationship taught you and apply one lesson to your present life.',
      },
    ],
  },
  'wedding-dream': {
    voice: {
      introLead:
        'Wedding dreams usually highlight commitment design: what you are willing to tie your life to, and on which terms.',
      introSensory:
        'If ceremony details were vivid, your decision-making system is likely working on a major agreement in waking life.',
      psychLead:
        'Psychologically, this dream can reflect integration of values, not only romance. It asks what partnership means to you now.',
      psychDeep:
        'Harmony in the dream can signal alignment. Chaos can reveal fear of choosing under social pressure.',
      tradition:
        'Traditional Korean readings connect wedding imagery with changes in ties, contracts, and household flow, with tone as the deciding factor.',
      closing:
        'Define one non-negotiable in your commitments. Clear criteria protect good choices.',
    },
    faqs: [
      {
        question: 'Does a wedding dream predict marriage soon?',
        answer:
          'Sometimes it can mirror relationship movement, but more often it symbolizes commitment decisions in broader life areas.',
      },
      {
        question: 'What if the wedding felt stressful?',
        answer:
          'That often points to pressure, mismatch, or unresolved expectations around commitment.',
      },
      {
        question: 'Best practical next step?',
        answer:
          'Clarify your standards before making emotionally loaded promises.',
      },
    ],
  },
  'fire-dream': {
    voice: {
      introLead:
        'Fire dreams carry power. They can signal destruction, but just as often they mark purification and decisive energy release.',
      introSensory:
        'If heat and crackling were intense, your drive is likely high and looking for direction, not suppression.',
      psychLead:
        'Psychologically, fire can represent anger, ambition, and life force. The dream asks how that energy is being channeled.',
      psychDeep:
        'Watching controlled fire differs from being engulfed. Control scenes reflect agency, while engulfment can indicate overload.',
      tradition:
        'Traditional interpretations often treat clear bright fire as favorable for recognition and fortune, while chaotic fire calls for caution.',
      closing:
        'Do not dim the fire. Give it a target and a boundary.',
    },
    faqs: [
      {
        question: 'Is a fire dream always dangerous?',
        answer:
          'Not always. Many fire dreams are about transformation and momentum rather than literal danger.',
      },
      {
        question: 'What if my home was on fire?',
        answer:
          'That can reflect deep lifestyle or family-system change, especially if many roles feel unstable.',
      },
      {
        question: 'How should I work with this energy?',
        answer:
          'Channel it into one priority project and avoid scattering effort across too many fronts.',
      },
    ],
  },
  'water-dream': {
    voice: {
      introLead:
        'Water dreams usually map emotional climate. They show how you are holding, moving, or resisting feeling.',
      introSensory:
        'If temperature, depth, or current felt vivid, emotional load is likely close to the surface of daily functioning.',
      psychLead:
        'Psychologically, water scenes often reflect regulation capacity. Calm water can mirror integration, while turbulent water can mirror overwhelm.',
      psychDeep:
        'Drowning-like scenes often point to too much at once, not personal failure. Floating or resurfacing suggests resilience is still active.',
      tradition:
        'Traditional readings distinguish clear and murky water carefully, linking clear flow with renewal and murky flow with confusion.',
      closing:
        'Reduce one source of emotional overload today. Water dreams improve when pace and boundaries improve.',
    },
    faqs: [
      {
        question: 'Does dreaming of water mean I am emotionally unstable?',
        answer:
          'No. It usually means your emotional system is active and asking for better regulation, not that you are broken.',
      },
      {
        question: 'What if I was drowning?',
        answer:
          'That often reflects overload and reduced control, especially during high-demand periods.',
      },
      {
        question: 'What helps right after this dream?',
        answer:
          'Lighten one schedule burden and name one feeling directly instead of bypassing it.',
      },
    ],
  },
  'ghost-dream': {
    voice: {
      introLead:
        'Ghost dreams often represent unfinished emotional material rather than supernatural threat.',
      introSensory:
        'If atmosphere, presence, or cold sensation stood out, your mind may be spotlighting what has been avoided, not resolved.',
      psychLead:
        'Psychologically, ghost imagery can symbolize memory fragments that still carry charge and ask for integration.',
      psychDeep:
        'Being chased by a ghost can mirror avoidance. Speaking to the ghost can indicate readiness to process and close the loop.',
      tradition:
        'Traditional Korean frameworks may read these dreams through ancestral or warning symbolism, but they still prioritize context and conduct.',
      closing:
        'Face one avoided emotion in plain language. Ghost dreams soften when what is unspoken gets named.',
    },
    faqs: [
      {
        question: 'Is a ghost dream a bad omen?',
        answer:
          'Not by default. It more often reflects unresolved fear, grief, or memory patterns.',
      },
      {
        question: 'Why did it feel so real?',
        answer:
          'High emotional charge can make dream perception feel hyper-real, especially under fatigue or stress.',
      },
      {
        question: 'What should I do next?',
        answer:
          'Journal one unfinished emotional theme and choose one safe conversation or closure action.',
      },
    ],
  },
  'exam-dream': {
    voice: {
      introLead:
        'Exam dreams are pressure dreams. They usually arise when performance and evaluation anxiety are running high.',
      introSensory:
        'If time pressure or blank-answer panic was vivid, your waking system may be overloaded by expectations, not capability limits.',
      psychLead:
        'Psychologically, this dream often tracks perfectionism and fear of visible mistakes.',
      psychDeep:
        'Failing scenes often highlight process issues, while passing scenes can reflect regained confidence and preparedness.',
      tradition:
        'Traditional readings tie testing imagery to honor and advancement themes, but effort and timing remain central.',
      closing:
        'Shift from proving to executing: finish one important task cleanly today.',
    },
    faqs: [
      {
        question: 'Does this mean I am not ready?',
        answer:
          'Not necessarily. It can simply reflect high stakes and self-pressure, even when preparation is strong.',
      },
      {
        question: 'Why do I dream this after school years are over?',
        answer:
          'The exam symbol generalizes to any situation where you feel judged or measured.',
      },
      {
        question: 'How can I reduce these dreams?',
        answer:
          'Prioritize process clarity over perfection and avoid last-minute overload before sleep.',
      },
    ],
  },
  'money-dream': {
    voice: {
      introLead:
        'Money dreams often show value calibration: what you are worth, what you accept, and what you are prepared to claim.',
      introSensory:
        'If the texture of bills or the act of picking up cash felt vivid, your decision system may be primed for practical opportunity.',
      psychLead:
        'Psychologically, these dreams can reflect both hope and scarcity anxiety. The useful question is where action is overdue.',
      psychDeep:
        'Finding money often points to openings, while losing money can reveal hesitation or fear of mishandling gain.',
      tradition:
        'Traditional readings often treat money-themed symbols as prosperity signs, but they also stress stewardship and timing.',
      closing:
        'Make one concrete money move today. Opportunity dreams reward execution.',
    },
    faqs: [
      {
        question: 'Will I get money soon after this dream?',
        answer:
          'Possibly, but not automatically. The dream usually highlights readiness and decision timing more than guaranteed windfall.',
      },
      {
        question: 'Is finding coins different from finding bills?',
        answer:
          'Often yes. Coins can symbolize incremental gain, while bills may symbolize larger or faster opportunities.',
      },
      {
        question: 'Most useful follow-up?',
        answer:
          'Review one income, pricing, or negotiation point and resolve it with numbers, not vibes.',
      },
    ],
  },
  'baby-dream': {
    voice: {
      introLead:
        'Baby dreams often signal a beginning that is real but still vulnerable, asking for protection more than speed.',
      introSensory:
        'If warmth, breath, or touch felt real, your care system is active and likely focused on something new in your life.',
      psychLead:
        'Psychologically, baby imagery can reflect responsibility growth and a wish to protect what matters before it is fully stable.',
      psychDeep:
        'Comforting scenes often indicate trust and readiness. Distress scenes may point to fear of dropping an important opportunity.',
      tradition:
        'Traditional readings frequently view baby dreams as blessing and new fortune, while emphasizing responsibility alongside luck.',
      closing:
        'Treat the new thing gently but consistently. Stability comes from rhythm, not intensity.',
    },
    faqs: [
      {
        question: 'Is this dream always a pregnancy sign?',
        answer:
          'No. It often refers to new projects, identity shifts, or relationships in early developmental stages.',
      },
      {
        question: 'Why did I feel protective in the dream?',
        answer:
          'That usually mirrors emerging commitment to something meaningful but still vulnerable.',
      },
      {
        question: 'What should I do now?',
        answer:
          'Set a gentle, repeatable routine for the thing you want to grow.',
      },
    ],
  },
  'poop-dream': {
    voice: {
      introLead:
        'Poop dreams are less about disgust and more about release. They often appear when life is ready for clearing and practical reset.',
      introSensory:
        'If smell or texture felt unusually real, your body-mind system may be signaling that emotional and logistical backlog has reached capacity.',
      psychLead:
        'Psychologically, this symbol can hold both embarrassment and relief. It points to what needs to be expelled, not hidden.',
      psychDeep:
        'Relief scenes suggest unblocking. Panic or inability to find a bathroom can reflect delayed expression and bottlenecked decisions.',
      tradition:
        'Traditional Korean readings often connect this imagery with financial luck, especially when the dream tone carries momentum rather than panic.',
      closing:
        'Clear one cluttered area of life today: expense, schedule, or unresolved conversation.',
    },
    faqs: [
      {
        question: 'Is a poop dream actually lucky?',
        answer:
          'In many traditions it can be, especially around money flow, but the practical message is still about clearing blockage.',
      },
      {
        question: 'Why did it feel so uncomfortable?',
        answer:
          'Release symbols can feel awkward because they touch shame, control, and vulnerability at once.',
      },
      {
        question: 'Best real-life response?',
        answer:
          'Remove one bottleneck immediately, such as overdue admin, unresolved payment, or unspoken tension.',
      },
    ],
  },
  'cat-dream': {
    voice: {
      introLead:
        'Cat dreams often appear when your social perception sharpens and subtle emotional signals matter more than explicit words.',
      introSensory:
        'If eye contact, movement, or subtle behavior felt vivid, your social radar is likely detecting mixed signals in waking life.',
      psychLead:
        'Psychologically, cats can symbolize selective trust. You may want closeness while still protecting autonomy.',
      psychDeep:
        'Affectionate scenes can point to relational ease. Aggressive or avoidant scenes can reflect boundary friction.',
      tradition:
        'Traditional interpretations vary, reading cats as both alertness and caution symbols, depending on tone and context.',
      closing:
        'Refine one relational boundary without becoming cold. Precision is the lesson of cat dreams.',
    },
    faqs: [
      {
        question: 'Do cat dreams mean betrayal?',
        answer:
          'Not automatically. They more often reflect subtle trust calibration and social sensitivity.',
      },
      {
        question: 'What if the cat scratched me?',
        answer:
          'That can mirror felt boundary invasion or irritation that has not been expressed directly.',
      },
      {
        question: 'What action helps?',
        answer:
          'Clarify one interpersonal limit and communicate it calmly.',
      },
    ],
  },
  'dog-dream': {
    voice: {
      introLead:
        'Dog dreams are strongly tied to loyalty, protection, and trust bonds.',
      introSensory:
        'If barking, touch, or movement stood out, your attachment system may be actively scanning for safety and reliable connection.',
      psychLead:
        'Psychologically, dogs can symbolize support networks and your own protective instincts.',
      psychDeep:
        'Friendly dogs often map to trust repair. Threatening dogs can point to conflict around boundaries and emotional security.',
      tradition:
        'Traditional readings often treat dogs as guardians, while warning that aggression imagery can indicate unresolved conflict.',
      closing:
        'Strengthen one trustworthy bond and set one clear limit where trust feels thin.',
    },
    faqs: [
      {
        question: 'Is dreaming of a dog always positive?',
        answer:
          'Often yes, but behavior matters. A calm dog and an aggressive dog signal very different relational states.',
      },
      {
        question: 'What if the dog chased or bit me?',
        answer:
          'That may reflect pressure from conflict, criticism, or unmet safety needs.',
      },
      {
        question: 'How should I respond?',
        answer:
          'Reinforce reliable support and address one unresolved tension directly.',
      },
    ],
  },
  'deceased-dream': {
    voice: {
      introLead:
        'Dreams of a deceased loved one often function as value reminders, pointing your present choices back toward what matters.',
      introSensory:
        'If voice, expression, or touch felt intensely real, your emotional system may be processing meaning during a vulnerable life period.',
      psychLead:
        'Psychologically, these dreams can support grief integration and value recall. They often reactivate guidance, not just loss.',
      psychDeep:
        'Warm scenes may reflect reassurance. Distressing scenes may indicate unresolved guilt, longing, or internal conflict.',
      tradition:
        'In Korean tradition, ancestral or deceased-person dreams can be read as messages of caution, support, or remembrance depending on tone.',
      closing:
        'Honor the dream by practicing one value that person represented in your life.',
    },
    faqs: [
      {
        question: 'Is this dream a message?',
        answer:
          'Many people experience it that way. Psychologically, it can also be a meaningful form of memory integration and emotional guidance.',
      },
      {
        question: 'Why do these dreams come in hard times?',
        answer:
          'Stress and transition often reactivate attachment memories and unresolved grief themes.',
      },
      {
        question: 'What is a healthy response?',
        answer:
          'Acknowledge the emotion and translate it into one grounded act of care or integrity.',
      },
    ],
  },
  'blood-dream': {
    voice: {
      introLead:
        'Blood dreams feel intense because they condense urgency, vitality, and emotional exposure into one unmistakable image.',
      introSensory:
        'If color, flow, or location was vivid, your inner system may be highlighting where energy is being spent or depleted.',
      psychLead:
        'Psychologically, blood imagery often points to vitality management: what drains you, what energizes you, and what wounds remain open.',
      psychDeep:
        'Bleeding scenes can mirror exhaustion or boundary injury. Stopping blood can symbolize control returning.',
      tradition:
        'Traditional readings are mixed: blood can signal warning, but in some contexts it is interpreted as release and incoming gain.',
      closing:
        'Protect your energy budget today. One boundary can matter more than one more effort.',
    },
    faqs: [
      {
        question: 'Is a blood dream always negative?',
        answer:
          'No. It is intense, but intensity can signal transformation as much as risk.',
      },
      {
        question: 'What if there was a lot of blood?',
        answer:
          'That can represent high emotional arousal or major energy drain themes.',
      },
      {
        question: 'What should I do afterward?',
        answer:
          'Reduce one draining commitment and add one restorative action immediately.',
      },
    ],
  },
  'hair-dream': {
    voice: {
      introLead:
        'Hair dreams tend to surface when confidence, vitality, and public self-image are being negotiated at the same time.',
      introSensory:
        'If texture, shedding, or appearance felt vivid, your self-image and stress level may be tightly linked right now.',
      psychLead:
        'Psychologically, hair can symbolize how you present yourself and how safe you feel being seen.',
      psychDeep:
        'Hair loss scenes often map to depletion or confidence concerns. Styling or restoring scenes can indicate agency returning.',
      tradition:
        'Traditional readings may connect hair symbolism to health, longevity, and family concerns, with condition of hair as a key detail.',
      closing:
        'Shift from appearance pressure to energy care. Strength returns when rest and boundaries become non-negotiable.',
    },
    faqs: [
      {
        question: 'Why are hair-loss dreams so common under stress?',
        answer:
          'Because they map visible identity to internal strain, making stress feel concrete and immediate.',
      },
      {
        question: 'Does this dream mean illness?',
        answer:
          'Not directly. It more often reflects fatigue, image stress, or control concerns.',
      },
      {
        question: 'What is the best follow-up?',
        answer:
          'Reduce comparison triggers and protect sleep and recovery rhythm.',
      },
    ],
  },
  'tiger-dream': {
    voice: {
      introLead:
        'Tiger dreams mark power contact moments, where your voice, boundary, and leadership stance are being tested under pressure.',
      introSensory:
        'If the tiger gaze or presence felt overwhelming, a high-stakes situation may already be shaping your next move.',
      psychLead:
        'Psychologically, tiger imagery can represent power negotiation: how you handle fear when responsibility increases.',
      psychDeep:
        'Riding or standing with a tiger can signal empowered alignment. Being hunted can reflect pressure from hierarchy or competition.',
      tradition:
        'Traditional Korean readings often frame tiger dreams as symbols of rank, strong fortune, and protective authority when tone is favorable.',
      closing:
        'Lead with clarity, not force. One decisive statement can rebalance the whole situation.',
    },
    faqs: [
      {
        question: 'Is a tiger dream a sign of success?',
        answer:
          'It can be, especially when the tiger appears calm or cooperative, but it can also test your readiness for power.',
      },
      {
        question: 'What if I was afraid of the tiger?',
        answer:
          'Fear often reflects growth pressure and role expansion, not failure.',
      },
      {
        question: 'How should I use this dream?',
        answer:
          'Clarify your leadership stance and communicate one firm boundary or direction.',
      },
    ],
  },
  'car-accident-dream': {
    voice: {
      introLead:
        'Car accident dreams usually flag pacing problems. They ask whether your current speed matches your actual capacity.',
      introSensory:
        'If impact, brakes, or shattered control felt vivid, your system may be warning about overload and rushed decisions.',
      psychLead:
        'Psychologically, driving scenes map to agency. Crashes often symbolize fear of losing control in a fast-moving context.',
      psychDeep:
        'If you were the driver, responsibility stress may be central. If you were a passenger, dependence and trust dynamics may be the core theme.',
      tradition:
        'Traditional caution-based readings align with this: strong warning energy, but usually as preventable risk rather than fixed fate.',
      closing:
        'Slow one process down before it forces a hard stop. Prevention is the right interpretation.',
    },
    faqs: [
      {
        question: 'Does this dream predict an actual accident?',
        answer:
          'Usually no. It more often mirrors psychological collision: too much speed, too little margin.',
      },
      {
        question: 'Why do these dreams repeat in busy periods?',
        answer:
          'Because your attention and recovery buffers are strained, and the dream dramatizes that mismatch.',
      },
      {
        question: 'What practical step helps most?',
        answer:
          'Cut one nonessential commitment and add one safety check to your highest-risk decision path.',
      },
    ],
  },
  'house-dream': {
    voice: {
      introLead:
        'House dreams often mirror your internal architecture: safety, identity, and life structure.',
      introSensory:
        'If rooms, doors, and lighting were vivid, your mind may be mapping which part of life feels stable and which part needs repair.',
      psychLead:
        'Psychologically, the house can represent the self. Different rooms often symbolize different emotional domains.',
      psychDeep:
        'A bright orderly house can indicate integration. A damaged or chaotic house can indicate depletion or boundary erosion.',
      tradition:
        'Traditional readings treat house symbols as connected to family flow, material base, and household fortune.',
      closing:
        'Stabilize one foundation area today: sleep, money, home routine, or core relationship.',
    },
    faqs: [
      {
        question: 'What does a damaged house mean in dreams?',
        answer:
          'It often reflects felt instability in your base systems, not literal physical danger.',
      },
      {
        question: 'Why do unfamiliar houses appear?',
        answer:
          'They can symbolize emerging identity spaces you are still learning to inhabit.',
      },
      {
        question: 'How do I respond well?',
        answer:
          'Start with one practical foundation fix. House dreams favor grounded maintenance.',
      },
    ],
  },
  'lottery-dream': {
    voice: {
      introLead:
        'Lottery dreams usually show up when your mind is split between strategic planning and the wish for instant relief.',
      introSensory:
        'If numbers or ticket details felt vivid, your mind is likely processing uncertainty, hope, and control at the same time.',
      psychLead:
        'Psychologically, this dream can show a desire for sudden rescue, especially after long periods of effort without payoff.',
      psychDeep:
        'Winning scenes can restore optimism. Losing or missing scenes can expose fear of opportunity slipping away.',
      tradition:
        'Traditional prosperity readings support the luck theme, yet they still emphasize readiness and wise handling over pure chance.',
      closing:
        'Keep hope, but move on strategy: one clear improvement in your real money system today.',
    },
    faqs: [
      {
        question: 'Should I buy a lottery ticket after this dream?',
        answer:
          'You can for fun, but the stronger message is to optimize real financial decisions you control.',
      },
      {
        question: 'Why do lottery dreams come during stress?',
        answer:
          'Because the psyche seeks fast relief when burden and uncertainty are high.',
      },
      {
        question: 'Most useful takeaway?',
        answer:
          'Turn wish energy into one practical money action, such as pricing, budgeting, or debt cleanup.',
      },
    ],
  },
  'ocean-dream': {
    voice: {
      introLead:
        'Ocean dreams speak in scale. They often emerge when your life feels larger than your current emotional map.',
      introSensory:
        'If waves, horizon, or depth felt strikingly real, your mind may be processing big uncertainty and big possibility together.',
      psychLead:
        'Psychologically, the ocean often symbolizes the deep unconscious, where unresolved feelings and future intuitions coexist.',
      psychDeep:
        'Calm seas can mirror trust in process. Rough seas often reflect emotional turbulence and adaptation strain.',
      tradition:
        'Traditional readings connect vast water to major movement in fortune and life direction, with clarity and wave quality as key markers.',
      closing:
        'Anchor one daily habit while you navigate larger change. Scale needs rhythm.',
    },
    faqs: [
      {
        question: 'Is the ocean dream about emotions or destiny?',
        answer:
          'Often both. It can reflect emotional depth and large directional shifts at the same time.',
      },
      {
        question: 'What if the sea was stormy?',
        answer:
          'That often mirrors overwhelm, conflict, or rapid transitions requiring better emotional regulation.',
      },
      {
        question: 'What helps after this dream?',
        answer:
          'Create one grounding routine and avoid impulsive major decisions for the day.',
      },
    ],
  },
  'thief-dream': {
    voice: {
      introLead:
        'Thief dreams usually center on loss anxiety and trust vulnerability.',
      introSensory:
        'If locks, footsteps, or intrusion details were vivid, your protective system may be alert to leaks in time, energy, or boundaries.',
      psychLead:
        'Psychologically, a thief can symbolize what feels taken from you, including attention, peace, or agency.',
      psychDeep:
        'Catching the thief often reflects regained control. Failing to stop them can mirror helplessness in an ongoing dynamic.',
      tradition:
        'Traditional readings are mixed here: theft imagery can warn of losses, but in some contexts it precedes an unexpected gain shift.',
      closing:
        'Identify one leak and close it today. Protection is the practical reading of this dream.',
    },
    faqs: [
      {
        question: 'Does this dream mean real theft risk?',
        answer:
          'Usually it symbolizes psychological or relational loss risk, though practical security checks are still smart.',
      },
      {
        question: 'What if my home was robbed in the dream?',
        answer:
          'That often points to threatened safety or boundary concerns in personal life.',
      },
      {
        question: 'Best immediate action?',
        answer:
          'Tighten one boundary around money, time, or emotional access.',
      },
    ],
  },
  'earthquake-dream': {
    voice: {
      introLead:
        'Earthquake dreams symbolize structural disruption. They appear when your foundations feel tested by fast change.',
      introSensory:
        'If vibration or collapse felt vivid, your system may be registering instability before your rational mind fully names it.',
      psychLead:
        'Psychologically, this dream often reflects fear of uncontrollable variables and identity-level uncertainty.',
      psychDeep:
        'Destruction scenes can mirror brittle systems. Survival and rebuilding scenes often signal strong adaptive capacity.',
      tradition:
        'Traditional caution-oriented readings frame this as major change energy that can be navigated with preparation and humility.',
      closing:
        'Build buffers now: timeline slack, financial margin, emotional support. Earthquake dreams reward preparedness.',
    },
    faqs: [
      {
        question: 'Is this always a bad sign?',
        answer:
          'It is intense, but not always negative. It can mark necessary structural change.',
      },
      {
        question: 'Why does it feel so physical?',
        answer:
          'Because the symbol targets foundational safety, which the body experiences viscerally.',
      },
      {
        question: 'What practical step should I take now?',
        answer:
          'Strengthen one fragile system in your life before pressure forces a reaction.',
      },
    ],
  },
  'moon-dream': {
    voice: {
      introLead:
        'Moon dreams often highlight intuition, emotional cycles, and quiet clarity.',
      introSensory:
        'If moonlight or night stillness felt vivid, your inner guidance may be stronger than the noise around you suggests.',
      psychLead:
        'Psychologically, moon imagery can represent reflective intelligence: sensing pattern, timing, and mood beneath surface events.',
      psychDeep:
        'A bright full moon can signal completion energy. A crescent can signal beginnings that need patience.',
      tradition:
        'Traditional readings frequently treat the moon as auspicious, linked to dignity, harmony, and life-cycle timing.',
      closing:
        'Honor subtle signals today. Quiet clarity is still clarity.',
    },
    faqs: [
      {
        question: 'Is a moon dream a lucky sign?',
        answer:
          'Often yes, especially when the moon appears clear and calm, but emotional tone remains important.',
      },
      {
        question: 'Why did the dream feel peaceful?',
        answer:
          'Moon imagery often emerges when the mind is integrating emotions instead of fighting them.',
      },
      {
        question: 'What is the best next step?',
        answer:
          'Choose one decision based on long-term alignment, not short-term noise.',
      },
    ],
  },
  'rainbow-dream': {
    voice: {
      introLead:
        'Rainbow dreams often signal recovery after strain, when multiple emotional states begin to reconcile.',
      introSensory:
        'If color contrast was vivid, your system may be marking a transition from confusion toward coherence.',
      psychLead:
        'Psychologically, the rainbow can symbolize integration of opposites: grief and hope, caution and movement.',
      psychDeep:
        'Brief rainbow scenes can point to windows of opportunity. Lasting scenes can reflect stabilization and trust rebuilding.',
      tradition:
        'Traditional readings commonly associate rainbows with auspicious movement, harmony, and favorable connections.',
      closing:
        'Follow the opening while it is open. Gentle action sustains hopeful momentum.',
    },
    faqs: [
      {
        question: 'Is a rainbow dream always positive?',
        answer:
          'Usually positive, especially after a difficult period, but it still calls for practical follow-through.',
      },
      {
        question: 'What if it disappeared quickly?',
        answer:
          'That can symbolize a short opportunity window or a need to act before momentum fades.',
      },
      {
        question: 'How should I respond?',
        answer:
          'Say yes to one constructive opportunity you have been postponing.',
      },
    ],
  },
  'gift-dream': {
    voice: {
      introLead:
        'Gift dreams revolve around exchange: value, recognition, and relational balance.',
      introSensory:
        'If wrapping, texture, or anticipation felt vivid, your mind may be processing what you receive versus what you are expected to give.',
      psychLead:
        'Psychologically, gifts can symbolize emotional contracts. Gratitude and pressure can coexist in the same scene.',
      psychDeep:
        'Receiving with joy can reflect openness to support. Receiving with discomfort can reveal boundary strain or obligation fatigue.',
      tradition:
        'Traditional readings often treat gift-like symbols as fortune movement through relationships, with intention and timing as key variables.',
      closing:
        'Keep generosity, but rebalance exchange where resentment is quietly building.',
    },
    faqs: [
      {
        question: 'What does it mean to receive a gift in a dream?',
        answer:
          'It can symbolize support, recognition, or a new opportunity entering through relationship networks.',
      },
      {
        question: 'What if the gift felt heavy or unwanted?',
        answer:
          'That often reflects hidden pressure, obligation, or role strain in a relationship dynamic.',
      },
      {
        question: 'What is a practical takeaway?',
        answer:
          'Express appreciation clearly and renegotiate one unfair expectation.',
      },
    ],
  },
  'love-dream': {
    voice: {
      introLead:
        'Dreams about someone you love often amplify attachment themes already active in waking life.',
      introSensory:
        'If face, voice, or distance felt vivid, your emotional system may be signaling a need for clearer reassurance or expression.',
      psychLead:
        'Psychologically, these dreams can reveal both tenderness and fear of loss. Connection and vulnerability rise together.',
      psychDeep:
        'Warm scenes often indicate security and gratitude. Tense scenes can point to unmet needs or silent assumptions.',
      tradition:
        'Traditional readings place this within relationship fortune, yet still prioritize present behavior over symbolic certainty.',
      closing:
        'Replace guessing with one honest sentence of affection or need.',
    },
    faqs: [
      {
        question: 'Does this dream mean they are thinking of me?',
        answer:
          'It can feel that way, but most often it reflects your own attachment dynamics and emotional priorities.',
      },
      {
        question: 'Why did I wake up emotional?',
        answer:
          'Because these dreams touch core safety and belonging circuits, which can be powerful on waking.',
      },
      {
        question: 'Best follow-up?',
        answer:
          'Communicate one clear appreciation or one clear need without drama.',
      },
    ],
  },
  'romance-dream': {
    voice: {
      introLead:
        'Romance dreams are often emotional rehearsals: they reveal your desired style of intimacy more than they predict a specific person.',
      introSensory:
        'If chemistry, mood, or tension felt vivid, your relational imagination may be testing what intimacy means to you now.',
      psychLead:
        'Psychologically, romance scenes can show where hope and fear meet. You may want connection while protecting old wounds.',
      psychDeep:
        'Joyful flow can signal openness. Confusing or unstable romance can signal unresolved expectations around trust and pace.',
      tradition:
        'Traditional readings treat this as movement in relational fortune, interpreted through tone, respect, and real-world conduct.',
      closing:
        'Date with discernment, not performance. Clarity is more attractive than ambiguity.',
    },
    faqs: [
      {
        question: 'Is this dream predicting a new relationship?',
        answer:
          'Sometimes it aligns with new openings, but primarily it reflects your internal readiness and relational patterns.',
      },
      {
        question: 'What if the dream felt exciting but unstable?',
        answer:
          'That often mirrors desire without clear boundaries or pace agreements.',
      },
      {
        question: 'What should I do now?',
        answer:
          'Define your relational standards before entering emotionally loaded situations.',
      },
    ],
  },
  'lost-dream': {
    voice: {
      introLead:
        'Dreams about losing something often appear when your attention is stretched too thin across too many priorities.',
      introSensory:
        'The frantic searching feeling usually mirrors real-life fear of missing what matters while handling nonstop demands.',
      psychLead:
        'Psychologically, this dream is less about the object and more about perceived control. You know something important feels out of place.',
      psychDeep:
        'If you eventually find the item, it suggests your system still trusts recovery. If the search never ends, decision fatigue is likely high.',
      tradition:
        'Traditional readings treat loss symbols as cautionary rather than fatalistic, urging better care of resources and timing.',
      closing:
        'Reduce the mental scatter: choose one key priority and protect it with a simple routine.',
    },
    faqs: [
      {
        question: 'Does this dream mean I will lose something in real life?',
        answer:
          'Usually no. It most often reflects stress, misplaced focus, or fear of letting a meaningful area slip.',
      },
      {
        question: 'Why does this dream repeat?',
        answer:
          'Repetition often appears when your daily systems are overloaded and you are carrying unresolved decisions.',
      },
      {
        question: 'What helps the most after this dream?',
        answer:
          'Create one tracking habit for your top priorities and reduce avoidable decision clutter.',
      },
    ],
  },
  'maze-dream': {
    voice: {
      introLead:
        'Maze dreams usually show up when comparison replaces criteria and every option starts to feel equally uncertain.',
      introSensory:
        'Repeated turns and dead ends in memory often reflect circling thought patterns, not lack of ability.',
      psychLead:
        'Psychologically, this dream maps uncertainty plus pressure to choose quickly.',
      psychDeep:
        'Finding an exit suggests growing clarity. Endless wandering suggests criteria are still vague.',
      tradition:
        'Traditional symbolic approaches read this as a timing and discernment issue: direction improves when intention is explicit.',
      closing:
        'Pick one path for a short test period and evaluate with evidence instead of rumination.',
    },
    faqs: [
      {
        question: 'What does a maze dream usually point to?',
        answer:
          'Most often it points to decision fatigue and uncertainty between competing paths.',
      },
      {
        question: 'Is this a negative sign?',
        answer:
          'Not necessarily. It can be a useful prompt to define better criteria before choosing.',
      },
      {
        question: 'What practical step should I take?',
        answer:
          'Set a small decision window, choose one route, and review outcomes after concrete action.',
      },
    ],
  },
  'elevator-dream': {
    voice: {
      introLead:
        'Elevator dreams often emerge during rapid status changes, ambition spikes, or fear of sudden decline.',
      introSensory:
        'The body drop or lift sensation points to emotional volatility around control and reputation.',
      psychLead:
        'Psychologically, elevators symbolize externally accelerated movement where pace can outrun readiness.',
      psychDeep:
        'Smooth travel tends to reflect confidence in growth. Jerky movement or stuck floors often reflect instability in structure.',
      tradition:
        'Traditional readings frame vertical movement as fortune shift, with stability and direction deciding tone.',
      closing:
        'Define a growth goal and a hard boundary together so progress does not become panic.',
    },
    faqs: [
      {
        question: 'Does an elevator dream mean career change?',
        answer:
          'It can, but more broadly it signals perceived movement in status, responsibility, or personal direction.',
      },
      {
        question: 'Why did it feel so intense physically?',
        answer:
          'Because the symbol targets control and speed, which the body processes viscerally.',
      },
      {
        question: 'Best follow-up action?',
        answer:
          'Stabilize one core routine before taking the next leap.',
      },
    ],
  },
  'stairs-dream': {
    voice: {
      introLead:
        'Stair dreams usually point to earned progress, where discipline matters more than dramatic momentum.',
      introSensory:
        'Heavy breathing and step-by-step strain often mirror real endurance work that has not paid off yet.',
      psychLead:
        'Psychologically, stairs symbolize earned advancement rather than sudden luck.',
      psychDeep:
        'Climbing with rhythm suggests healthy persistence. Slipping or frozen steps suggest exhaustion or overpressure.',
      tradition:
        'Traditional views read stairs as a process symbol: direction matters, but so does discipline over time.',
      closing:
        'Finish one small stage completely instead of splitting attention across ten half-starts.',
    },
    faqs: [
      {
        question: 'Is a stairs dream a good sign?',
        answer:
          'Often yes, especially when movement is steady. It points to progress through consistent effort.',
      },
      {
        question: 'What if I keep getting stuck?',
        answer:
          'That can reflect burnout or unrealistic pace expectations.',
      },
      {
        question: 'How should I respond today?',
        answer:
          'Lower the step size and complete one meaningful task end to end.',
      },
    ],
  },
  'train-dream': {
    voice: {
      introLead:
        'Train dreams usually arrive when timing pressure becomes central in your life decisions.',
      introSensory:
        'Platform sounds and departure urgency often mirror fear of missing a narrow window.',
      psychLead:
        'Psychologically, trains represent structured timelines and commitments that move with or without your hesitation.',
      psychDeep:
        'Boarding in time suggests readiness. Watching the train leave often reflects delay costs finally becoming obvious.',
      tradition:
        'Traditional movement symbols emphasize momentum and opportunity, while warning against indecision.',
      closing:
        'Lock one delayed schedule decision and stop paying a daily tax to uncertainty.',
    },
    faqs: [
      {
        question: 'What does missing a train mean in dreams?',
        answer:
          'It often reflects anxiety about timing, procrastination, or hesitation under pressure.',
      },
      {
        question: 'If I boarded the train, is that positive?',
        answer:
          'Usually yes. It can signal commitment and willingness to move with a timeline.',
      },
      {
        question: 'Best next step?',
        answer:
          'Choose one date-bound commitment and act on it today.',
      },
    ],
  },
  'bus-dream': {
    voice: {
      introLead:
        'Bus dreams often highlight life at shared pace: group rules, fixed stops, and limited personal control.',
      introSensory:
        'Crowding and stop-and-go rhythm usually mirror frustration with schedules that are not truly yours.',
      psychLead:
        'Psychologically, this symbol appears when autonomy and belonging are pulling in different directions.',
      psychDeep:
        'Missing the bus can reflect fear of exclusion. Riding calmly can indicate growing comfort with collaborative timing.',
      tradition:
        'Traditional readings treat communal transport symbols as social-flow indicators tied to cooperation and timing.',
      closing:
        'Protect one block of self-directed time so your week is not fully run by other agendas.',
    },
    faqs: [
      {
        question: 'Does a bus dream mean dependence?',
        answer:
          'Sometimes. More often it reflects tension between personal pace and collective demands.',
      },
      {
        question: 'Why does this dream show up during busy weeks?',
        answer:
          'Because your schedule may feel externally controlled and emotionally crowded.',
      },
      {
        question: 'What practical action helps?',
        answer:
          'Set one clear boundary in calendar, response time, or availability.',
      },
    ],
  },
  'airplane-dream': {
    voice: {
      introLead:
        'Airplane dreams often appear before major expansion, relocation, or high-stakes visibility shifts.',
      introSensory:
        'Takeoff pressure and turbulence detail usually indicates both ambition and risk awareness are active together.',
      psychLead:
        'Psychologically, flying symbols map scale change: bigger horizon, bigger responsibility.',
      psychDeep:
        'Smooth ascent reflects trust in preparation. Turbulence reflects uncertainty about support systems during growth.',
      tradition:
        'Traditional upward-movement symbolism links to advancement, while stressing discipline and caution.',
      closing:
        'Keep the bold move, but add a serious risk checklist before committing full speed.',
    },
    faqs: [
      {
        question: 'Is an airplane dream always positive?',
        answer:
          'It is often growth-oriented, but quality of control in the dream matters greatly.',
      },
      {
        question: 'What does turbulence in the dream suggest?',
        answer:
          'Usually that expansion is right but support, planning, or margin is still thin.',
      },
      {
        question: 'Best next move?',
        answer:
          'Stress-test one major plan before scaling it.',
      },
    ],
  },
  'boat-dream': {
    voice: {
      introLead:
        'Boat dreams often represent emotional navigation in conditions you cannot fully control.',
      introSensory:
        'Rocking balance and wave response detail usually mirrors unstable context with ongoing adaptation demands.',
      psychLead:
        'Psychologically, the boat is your coping container: not the weather, but how you steer through it.',
      psychDeep:
        'A steady boat suggests workable regulation. Taking on water suggests boundary or load issues.',
      tradition:
        'Traditional water-journey imagery is read through flow, direction, and survival skill rather than luck alone.',
      closing:
        'Simplify your route and cut nonessential load so you can steer with clarity.',
    },
    faqs: [
      {
        question: 'What does a rough-water boat dream mean?',
        answer:
          'It often reflects emotional volatility and unstable external conditions.',
      },
      {
        question: 'If I reached shore, is that important?',
        answer:
          'Yes. Reaching shore usually signals recovery capacity and directional progress.',
      },
      {
        question: 'How should I respond now?',
        answer:
          'Reduce one source of turbulence and strengthen one support habit.',
      },
    ],
  },
  'school-dream': {
    voice: {
      introLead:
        'School dreams often return when you feel evaluated, compared, or expected to prove yourself.',
      introSensory:
        'Classroom noise and test-day tension in detail often reflect performance stress rather than skill deficit.',
      psychLead:
        'Psychologically, school symbols reactivate old templates about approval, mistakes, and belonging.',
      psychDeep:
        'Passing scenes can show regained confidence. Panic scenes usually point to overloaded standards.',
      tradition:
        'Traditional interpretations link learning symbols with reputation and advancement through effort.',
      closing:
        'Shift focus from proving worth to improving process on one concrete task.',
    },
    faqs: [
      {
        question: 'Why do adults still dream about school?',
        answer:
          'Because school acts as a universal symbol for evaluation and social ranking pressure.',
      },
      {
        question: 'Does this mean I am unprepared?',
        answer:
          'Not necessarily. It often means expectations are louder than actual capability limits.',
      },
      {
        question: 'Best next step?',
        answer:
          'Define a realistic success metric for today and execute against it.',
      },
    ],
  },
  'office-dream': {
    voice: {
      introLead:
        'Office dreams often begin when your role expands faster than your energy budget and ownership lines get blurry.',
      introSensory:
        'Meeting loops, notifications, and deadline urgency in the dream often mirror chronic cognitive overload.',
      psychLead:
        'Psychologically, this symbol reflects task volume plus emotional labor that is rarely acknowledged.',
      psychDeep:
        'Conflict scenes can indicate unclear authority lines. Endless work scenes can indicate missing completion boundaries.',
      tradition:
        'Traditional readings map workplace symbols to duty, status, and practical fortune tied to conduct.',
      closing:
        'Clarify what is truly your responsibility and stop carrying what is not yours.',
    },
    faqs: [
      {
        question: 'What does an office dream usually mean?',
        answer:
          'Most often it reflects role strain, performance pressure, and unresolved work boundaries.',
      },
      {
        question: 'Why does this dream repeat so often?',
        answer:
          'Repetition is common when demand stays high and recovery remains low.',
      },
      {
        question: 'What action helps quickly?',
        answer:
          'Set one non-negotiable boundary around time, scope, or response expectations.',
      },
    ],
  },
  'moving-dream': {
    voice: {
      introLead:
        'Moving dreams usually signal identity transition and a rewrite of daily structure.',
      introSensory:
        'Packing weight and unfamiliar rooms in memory often reflect active life-stage change.',
      psychLead:
        'Psychologically, this dream appears when old routines no longer fit but new ones are not fully installed.',
      psychDeep:
        'Organized moving scenes suggest readiness. Chaotic moving scenes suggest attachment conflict with the past.',
      tradition:
        'Traditional symbolic readings treat relocation imagery as a turning point in household and personal flow.',
      closing:
        'Choose what to carry forward with intention; not every old habit deserves your next chapter.',
    },
    faqs: [
      {
        question: 'Does a moving dream mean real relocation?',
        answer:
          'Sometimes, but more often it reflects psychological relocation into a new role or season.',
      },
      {
        question: 'Why did the dream feel both exciting and stressful?',
        answer:
          'Transition naturally combines possibility with loss of familiarity.',
      },
      {
        question: 'Best practical response?',
        answer:
          'Replace one outdated routine with a stable new one this week.',
      },
    ],
  },
  'cleaning-dream': {
    voice: {
      introLead:
        'Cleaning dreams often appear when your system is ready for reset, not because you failed to cope.',
      introSensory:
        'Strong before-and-after detail in the scene usually mirrors a desire for order and mental airspace.',
      psychLead:
        'Psychologically, cleaning symbols represent active regulation and regained agency.',
      psychDeep:
        'Effective cleaning scenes can indicate momentum. Endless mess scenes can indicate overwhelm and unclear priorities.',
      tradition:
        'Traditional readings generally treat cleansing symbols as favorable when action follows waking.',
      closing:
        'Clear one physical or digital zone today and let that momentum spill into decisions.',
    },
    faqs: [
      {
        question: 'Is a cleaning dream positive?',
        answer:
          'Often yes. It usually marks readiness for practical renewal and emotional decluttering.',
      },
      {
        question: 'Why did I keep cleaning in circles?',
        answer:
          'That can reflect effort without prioritization, not lack of discipline.',
      },
      {
        question: 'What should I do now?',
        answer:
          'Pick one high-friction area and reset it completely.',
      },
    ],
  },
  'rain-dream': {
    voice: {
      introLead:
        'Rain dreams often indicate emotional release after a long period of internal pressure.',
      introSensory:
        'The texture and sound of rain in detail often mirrors feelings finally moving instead of being suppressed.',
      psychLead:
        'Psychologically, rain symbolizes cleansing and discharge of accumulated tension.',
      psychDeep:
        'Gentle rain can suggest integration. Violent rain can suggest overflow that needs containment.',
      tradition:
        'Traditional interpretations usually read balanced rain as renewing, while storm context alters tone.',
      closing:
        'Allow one honest emotional expression today without dramatizing or minimizing it.',
    },
    faqs: [
      {
        question: 'Does rain in dreams mean sadness?',
        answer:
          'It can, but often it means emotional processing and release rather than simple sorrow.',
      },
      {
        question: 'What if the rain was heavy and scary?',
        answer:
          'That may reflect overload and the need for stronger regulation and support.',
      },
      {
        question: 'Best immediate action?',
        answer:
          'Name what you are feeling and reduce one avoidable stress input.',
      },
    ],
  },
  'snow-dream': {
    voice: {
      introLead:
        'Snow dreams often arrive as a forced slowdown, especially when your decision rhythm has become too reactive.',
      introSensory:
        'Muted sound and cold stillness usually mirror emotional numbing or a protective slowdown.',
      psychLead:
        'Psychologically, snow symbolizes suspension: less motion outside, more processing inside.',
      psychDeep:
        'Bright calm snow can indicate reset potential. Harsh snowstorm scenes can indicate isolation and decision fog.',
      tradition:
        'Traditional readings see snow as purification and restraint, with caution against impulsive moves.',
      closing:
        'Do not force speed today; gather facts and make one clean, calm decision.',
    },
    faqs: [
      {
        question: 'Is a snow dream good or bad?',
        answer:
          'It is context-dependent. Calm snow often supports clarity, while storm imagery can signal overwhelm.',
      },
      {
        question: 'Why did everything feel silent?',
        answer:
          'The dream may be emphasizing a need for emotional and cognitive quiet.',
      },
      {
        question: 'What should I do after this dream?',
        answer:
          'Delay non-urgent reactions and choose a measured next step.',
      },
    ],
  },
  'wind-dream': {
    voice: {
      introLead:
        'Wind dreams usually point to invisible change already moving through your environment.',
      introSensory:
        'Direction and force of wind in memory often mirror external pressure you can feel but not fully see.',
      psychLead:
        'Psychologically, wind represents shifting conditions and the need for adaptive balance.',
      psychDeep:
        'A supportive breeze can suggest momentum. Harsh gusts can suggest instability and reactive decision risk.',
      tradition:
        'Traditional symbolism treats wind as a change signal: flexibility plus grounding is the recommended posture.',
      closing:
        'Secure one routine anchor before making broad directional moves.',
    },
    faqs: [
      {
        question: 'What does strong wind in a dream mean?',
        answer:
          'Often it reflects powerful external influences and changing context around your plans.',
      },
      {
        question: 'Why can this dream feel unsettling?',
        answer:
          'Because it emphasizes uncertainty and reduced predictability.',
      },
      {
        question: 'How should I respond?',
        answer:
          'Strengthen grounding habits and avoid impulsive pivots.',
      },
    ],
  },
  'mountain-dream': {
    voice: {
      introLead:
        'Mountain dreams are endurance dreams: ambition measured across time, not mood.',
      introSensory:
        'Steep ascent and distance-to-summit detail often mirrors long-cycle effort and stamina demands.',
      psychLead:
        'Psychologically, mountains symbolize meaningful challenge and identity growth through persistence.',
      psychDeep:
        'Climbing with rhythm suggests sustainable discipline. Being stuck or sliding suggests overload or poor pacing.',
      tradition:
        'Traditional readings connect mountain symbols with stature and aspiration earned through steadiness.',
      closing:
        'Stop measuring by immediate peak results and track only the next stage completed well.',
    },
    faqs: [
      {
        question: 'Does this dream mean my goal is too hard?',
        answer:
          'Not always. It often means the goal is real and requires better pacing, not abandonment.',
      },
      {
        question: 'What if I could not reach the top?',
        answer:
          'That can reflect fatigue, unrealistic timeline pressure, or resource mismatch.',
      },
      {
        question: 'Best next move?',
        answer:
          'Break your objective into stages and finish one stage this week.',
      },
    ],
  },
  'flower-dream': {
    voice: {
      introLead:
        'Flower dreams often mark emotional reopening, beauty sensitivity, and renewed creative pulse.',
      introSensory:
        'Color and fragrance memory usually reflects increased receptivity after a dry or defensive period.',
      psychLead:
        'Psychologically, flowers symbolize tenderness that survives pressure.',
      psychDeep:
        'Blooming scenes suggest readiness and timing. Wilted scenes can point to neglected joy or depleted care.',
      tradition:
        'Traditional readings often treat flower symbols as favorable for relationship warmth and gentle fortune movement.',
      closing:
        'Protect one source of joy deliberately; subtle vitality needs active maintenance.',
    },
    faqs: [
      {
        question: 'Is a flower dream a lucky sign?',
        answer:
          'Often yes, especially when the dream tone is bright and calm.',
      },
      {
        question: 'What if the flowers were fading?',
        answer:
          'That may indicate neglected emotional nourishment or relationship care.',
      },
      {
        question: 'What should I do now?',
        answer:
          'Invest in one small joy routine and one caring conversation.',
      },
    ],
  },
  'tree-dream': {
    voice: {
      introLead:
        'Tree dreams usually emphasize root strength, maturity, and long-term stability.',
      introSensory:
        'Bark texture, branch movement, or trunk size in memory often reflects how grounded you currently feel.',
      psychLead:
        'Psychologically, trees symbolize continuity under changing seasons.',
      psychDeep:
        'A healthy tree can indicate resilience and support. A damaged tree can indicate strain on core systems.',
      tradition:
        'Traditional readings connect tree imagery with growth, family continuity, and structural fortune.',
      closing:
        'Strengthen one foundational habit that supports your long horizon.',
    },
    faqs: [
      {
        question: 'What does a large tree mean in dreams?',
        answer:
          'It often represents stability, accumulated strength, and long-cycle growth.',
      },
      {
        question: 'If the tree looked weak, what does that suggest?',
        answer:
          'It can reflect stress on your core routines or support network.',
      },
      {
        question: 'Best next step?',
        answer:
          'Reinforce one root behavior: sleep, finance rhythm, or relationship maintenance.',
      },
    ],
  },
  'fruit-dream': {
    voice: {
      introLead:
        'Fruit dreams tend to appear near harvest moments, when effort is close to visible return.',
      introSensory:
        'Taste, ripeness, and color detail usually reflects timing sensitivity around results.',
      psychLead:
        'Psychologically, fruit symbolizes payoff, readiness, and whether you can receive what you worked for.',
      psychDeep:
        'Ripe fruit often indicates actionable opportunity. Rotten fruit may indicate delay, waste, or poor selection.',
      tradition:
        'Traditional readings commonly connect fruit symbols to prosperity and fertility of outcomes.',
      closing:
        'Prioritize what is ripe now and stop spending prime energy on unready projects.',
    },
    faqs: [
      {
        question: 'Is a fruit dream about money?',
        answer:
          'It can include money themes, but broadly it points to results, timing, and reward readiness.',
      },
      {
        question: 'What if the fruit was unripe?',
        answer:
          'That often means the direction is right but timing is early.',
      },
      {
        question: 'How should I act after this dream?',
        answer:
          'Complete one nearly finished task and harvest what is already ready.',
      },
    ],
  },
  'eating-dream': {
    voice: {
      introLead:
        'Eating dreams usually highlight unmet needs, emotional hunger, or recovery from depletion.',
      introSensory:
        'Strong flavor and fullness detail often mirrors how directly your body-mind is asking to be nourished.',
      psychLead:
        'Psychologically, eating symbols ask what you consume to cope and what you actually need to sustain yourself.',
      psychDeep:
        'Satisfying meals can indicate restoration. Endless eating or discomfort can signal mismatch between craving and need.',
      tradition:
        'Traditional readings vary by food tone but generally link eating symbols to incoming energy and life support.',
      closing:
        'Meet one real need directly today instead of numbing it with busyness.',
    },
    faqs: [
      {
        question: 'Does this dream only mean physical hunger?',
        answer:
          'No. It often points to emotional, relational, or mental nourishment needs.',
      },
      {
        question: 'Why did I still feel unsatisfied in the dream?',
        answer:
          'That can reflect trying to fill the wrong deficit.',
      },
      {
        question: 'What practical response helps?',
        answer:
          'Identify one true unmet need and address it concretely today.',
      },
    ],
  },
  'cooking-dream': {
    voice: {
      introLead:
        'Cooking dreams usually signal process mastery: turning raw inputs into usable results.',
      introSensory:
        'Heat control, aroma, and timing in memory often reflect how you are managing transformation under pressure.',
      psychLead:
        'Psychologically, cooking symbolizes agency through preparation, sequencing, and care.',
      psychDeep:
        'A balanced meal scene often indicates growing competence. Burned food scenes can indicate overload or rushed execution.',
      tradition:
        'Traditional readings often frame food preparation as domestic order, provision, and practical fortune.',
      closing:
        'Improve one step in your workflow and let quality compound.',
    },
    faqs: [
      {
        question: 'What does cooking in a dream generally mean?',
        answer:
          'It usually reflects active preparation and your ability to shape outcomes.',
      },
      {
        question: 'What if the food failed?',
        answer:
          'That can point to rushed process, poor sequencing, or unrealistic throughput.',
      },
      {
        question: 'Best next action?',
        answer:
          'Tune one repeatable process step instead of chasing perfect outcomes.',
      },
    ],
  },
  'bath-dream': {
    voice: {
      introLead:
        'Bath dreams often appear when nervous-system recovery has become urgent.',
      introSensory:
        'Water temperature and bodily release detail usually indicates your system is asking for true restoration.',
      psychLead:
        'Psychologically, bathing symbolizes purification, privacy, and emotional decompression.',
      psychDeep:
        'Comfortable bathing scenes can indicate readiness to reset. Disturbed bathing scenes can indicate interrupted recovery.',
      tradition:
        'Traditional cleansing symbols are generally read as favorable when paired with practical self-care after waking.',
      closing:
        'Schedule recovery first, not after everything else is done.',
    },
    faqs: [
      {
        question: 'Is a bath dream a good sign?',
        answer:
          'Often yes. It usually points to release and restoration needs becoming clear.',
      },
      {
        question: 'Why did the dream feel so soothing?',
        answer:
          'Your system may be signaling that rest and regulation are finally possible.',
      },
      {
        question: 'What should I do now?',
        answer:
          'Protect one uninterrupted recovery block today.',
      },
    ],
  },
  'toilet-dream': {
    voice: {
      introLead:
        'Toilet dreams usually revolve around release, privacy, and pressure to let go.',
      introSensory:
        'Urgent searching or blocked access in the dream often mirrors emotional backlog in waking life.',
      psychLead:
        'Psychologically, this symbol points to boundaries around what should be processed privately and what can be shared safely.',
      psychDeep:
        'Successful relief scenes suggest healthy discharge. Repeated blockage often signals avoidance of necessary expression.',
      tradition:
        'Traditional readings connect these symbols with clearing obstacles and restoring flow when action follows.',
      closing:
        'Clear one backlog conversation or task that has been sitting in your system too long.',
    },
    faqs: [
      {
        question: 'Why are toilet dreams so uncomfortable?',
        answer:
          'They touch shame, control, and vulnerability, which are naturally charged themes.',
      },
      {
        question: 'What does not finding a toilet mean?',
        answer:
          'It often reflects delayed release and difficulty finding safe boundaries for expression.',
      },
      {
        question: 'What helps immediately?',
        answer:
          'Name one burden and remove it through direct action.',
      },
    ],
  },
  'clothes-dream': {
    voice: {
      introLead:
        'Clothes dreams usually expose a styling conflict between who you are becoming and who you feel expected to appear as.',
      introSensory:
        'Fabric fit and appearance detail in memory usually mirrors concerns about being seen correctly.',
      psychLead:
        'Psychologically, clothing symbolizes role performance, protection, and self-definition.',
      psychDeep:
        'Comfortable outfits can indicate alignment. Ill-fitting or missing clothes can indicate exposure anxiety or role mismatch.',
      tradition:
        'Traditional readings link garment imagery with reputation and social standing, interpreted through condition and tone.',
      closing:
        'Present yourself one degree more honestly in a context that usually invites performance.',
    },
    faqs: [
      {
        question: 'What do clothes mean in dreams?',
        answer:
          'They usually represent identity, role expectations, and social visibility.',
      },
      {
        question: 'What if I was not properly dressed?',
        answer:
          'That often reflects vulnerability, exposure fear, or imposter tension.',
      },
      {
        question: 'Best next step?',
        answer:
          'Adjust one area where your outer role no longer matches your inner values.',
      },
    ],
  },
  'shoes-dream': {
    voice: {
      introLead:
        'Shoe dreams often ask a practical question: does your current path fit your real capacity?',
      introSensory:
        'Fit, pressure, and walking comfort detail usually mirrors readiness for the route you are on.',
      psychLead:
        'Psychologically, shoes symbolize mobility, direction, and grounded progress.',
      psychDeep:
        'Comfortable shoes suggest sustainable pace. Painful or lost shoes suggest path mismatch or depleted support.',
      tradition:
        'Traditional readings often connect footwear with journey fortune and practical preparedness.',
      closing:
        'Align one plan with your actual resources so progress can continue without injury.',
    },
    faqs: [
      {
        question: 'Do shoe dreams relate to career path?',
        answer:
          'Often yes, and also to any life direction where stamina and fit matter.',
      },
      {
        question: 'What if the shoes were damaged?',
        answer:
          'That can indicate support breakdown, poor pacing, or a route that no longer suits you.',
      },
      {
        question: 'What should I do now?',
        answer:
          'Choose sustainability over speed in your next decision.',
      },
    ],
  },
  'bag-dream': {
    voice: {
      introLead:
        'Bag dreams often represent carrying capacity: what responsibilities still fit, and what has become excess weight.',
      introSensory:
        'Weight and strap pressure detail in memory usually reflects burden that has become physically felt.',
      psychLead:
        'Psychologically, the bag symbolizes what you carry by choice and what you carry by habit.',
      psychDeep:
        'A secure bag can suggest healthy stewardship. A lost or torn bag can suggest leakage in attention or boundaries.',
      tradition:
        'Traditional symbolic readings treat carrying objects as indicators of duty, burden, and fortune management.',
      closing:
        'Put one unnecessary obligation down and recover margin before adding more.',
    },
    faqs: [
      {
        question: 'What does a heavy bag dream mean?',
        answer:
          'Most often it reflects overload and accumulated obligations.',
      },
      {
        question: 'If I lost my bag in the dream, is that serious?',
        answer:
          'It usually symbolizes fear of losing control over key resources or identity anchors.',
      },
      {
        question: 'Most useful action now?',
        answer:
          'Audit your commitments and drop one low-value burden today.',
      },
    ],
  },
  'phone-dream': {
    voice: {
      introLead:
        'Phone dreams often surface when communication demand exceeds emotional bandwidth.',
      introSensory:
        'Ringing, vibration, and screen-failure details usually mirror alert fatigue and response pressure.',
      psychLead:
        'Psychologically, phones symbolize connection and interruption at the same time.',
      psychDeep:
        'Clear calls can indicate needed contact. Broken or missed calls can indicate boundary collapse or unresolved communication stress.',
      tradition:
        'Traditional frameworks do not name phones directly, but message symbols are read as relationship and timing signals.',
      closing:
        'Create response boundaries so communication serves you instead of consuming you.',
    },
    faqs: [
      {
        question: 'Why do I dream about missed calls?',
        answer:
          'Often because you feel pressure to be available while fearing communication overload.',
      },
      {
        question: 'What does a broken phone suggest?',
        answer:
          'It can symbolize disconnection, burnout, or fear of losing relational access.',
      },
      {
        question: 'What should I change first?',
        answer:
          'Separate urgent communication from background noise and protect focus windows.',
      },
    ],
  },
  'photo-dream': {
    voice: {
      introLead:
        'Photo dreams usually appear when you need to decide not just what happened, but how you will frame it in your life story.',
      introSensory:
        'Framing and shutter detail in memory often shows your mind actively choosing what to preserve.',
      psychLead:
        'Psychologically, photography symbols ask whether you are living the moment or curating it for approval.',
      psychDeep:
        'Clear subjects can indicate value clarity. Blurred or missing subjects can indicate uncertainty about what truly matters.',
      tradition:
        'Traditional symbolism around image and record emphasizes reputation, memory, and meaningful witness.',
      closing:
        'Choose one memory to keep for yourself, not for performance.',
    },
    faqs: [
      {
        question: 'What does taking photos in a dream mean?',
        answer:
          'It often reflects active meaning-making and selective memory formation.',
      },
      {
        question: 'Why was the image blurry?',
        answer:
          'Blur often symbolizes unclear priorities or unstable perspective.',
      },
      {
        question: 'Best practical takeaway?',
        answer:
          'Define what you want to remember and what you can release.',
      },
    ],
  },
  'letter-dream': {
    voice: {
      introLead:
        'Letter dreams often signal meaningful communication that has been delayed or emotionally loaded.',
      introSensory:
        'Envelope texture or handwriting detail in memory usually indicates the message carries personal weight.',
      psychLead:
        'Psychologically, letters symbolize thoughtful truth rather than reactive speech.',
      psychDeep:
        'Receiving a letter can indicate readiness to hear. Writing one can indicate readiness to say what has been withheld.',
      tradition:
        'Traditional message symbols are often interpreted as relationship turning points shaped by intention and timing.',
      closing:
        'Send one clear message you have postponed and close the uncertainty loop.',
    },
    faqs: [
      {
        question: 'What does receiving a letter in a dream suggest?',
        answer:
          'It often points to incoming clarity, feedback, or a needed emotional message.',
      },
      {
        question: 'What if I could not read the letter?',
        answer:
          'That can indicate avoided truth or communication that is emotionally hard to decode.',
      },
      {
        question: 'What should I do now?',
        answer:
          'Choose one important conversation and communicate with precision and care.',
      },
    ],
  },
  'travel-dream': {
    voice: {
      introLead:
        'Travel dreams usually appear when your life horizon is widening faster than your current routine.',
      introSensory:
        'Transit scenes and unfamiliar landscapes in memory often mirror expansion urge plus uncertainty about route.',
      psychLead:
        'Psychologically, travel symbols represent growth through perspective shift.',
      psychDeep:
        'Smooth journeys can suggest alignment. Delays or missed connections can indicate planning gaps or ambivalence.',
      tradition:
        'Traditional movement symbols often point to opportunity through change, with readiness as the deciding factor.',
      closing:
        'Take one perspective-expanding action in waking life and convert intention into movement.',
    },
    faqs: [
      {
        question: 'Does a travel dream mean I should move or leave?',
        answer:
          'Not always literally. It often means your mindset is ready for broader context and change.',
      },
      {
        question: 'Why did I feel both excited and nervous?',
        answer:
          'That is typical of growth phases where possibility and uncertainty coexist.',
      },
      {
        question: 'Best follow-up?',
        answer:
          'Book one concrete step toward the direction you keep imagining.',
      },
    ],
  },
  'hospital-dream': {
    voice: {
      introLead:
        'Hospital dreams often arrive when healing priorities can no longer be deferred.',
      introSensory:
        'Waiting-room tension and sterile detail in memory usually reflects vulnerability plus need for structured care.',
      psychLead:
        'Psychologically, this dream points to check-in behavior: what you monitor early versus ignore until crisis.',
      psychDeep:
        'Supportive treatment scenes can indicate readiness to recover. Chaotic scenes can indicate fear of dependence or uncertainty.',
      tradition:
        'Traditional caution-oriented readings align with this symbol: timely care prevents larger disruption.',
      closing:
        'Do one preventive health or stress check this week and treat early signals seriously.',
    },
    faqs: [
      {
        question: 'Is a hospital dream a warning?',
        answer:
          'Often yes, but usually as a call for timely care rather than a fixed negative prediction.',
      },
      {
        question: 'Why did I feel anxious in the dream?',
        answer:
          'Because hospitals symbolize uncertainty, dependency, and the need to pause normal output.',
      },
      {
        question: 'What practical step should I take?',
        answer:
          'Schedule one concrete check-in for body or stress regulation.',
      },
    ],
  },
  'surgery-dream': {
    voice: {
      introLead:
        'Surgery dreams usually point to deep correction, not surface-level adjustment.',
      introSensory:
        'Precision, bright lights, and controlled tension in memory often indicate your mind is preparing for fundamental change.',
      psychLead:
        'Psychologically, surgery symbolizes deliberate intervention where avoidance is no longer workable.',
      psychDeep:
        'Successful operation scenes can reflect readiness for difficult repair. Fearful scenes can reflect resistance to necessary disruption.',
      tradition:
        'Traditional symbolic interpretation reads this as serious but potentially beneficial restructuring when handled with discipline.',
      closing:
        'Address one root problem directly and stop spending energy on temporary patches.',
    },
    faqs: [
      {
        question: 'Does a surgery dream mean something is wrong?',
        answer:
          'It usually signals that a core issue needs direct treatment, psychologically or practically.',
      },
      {
        question: 'Why did the dream feel so controlled and tense?',
        answer:
          'Because the symbol combines vulnerability with intentional precision.',
      },
      {
        question: 'Best action after this dream?',
        answer:
          'Name one root issue and design a real intervention plan, not another workaround.',
      },
    ],
  },
}
