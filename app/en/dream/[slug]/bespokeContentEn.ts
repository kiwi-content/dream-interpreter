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
        'Flying dreams often arrive when your ambition outruns your current structure. They carry freedom and responsibility in the same image.',
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
        'Dreams about an ex are usually less about reunion and more about relational pattern review.',
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
        'Wedding dreams are about commitment architecture: what you are ready to bind yourself to.',
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
        'Baby dreams often symbolize fragile beginnings and the need for careful stewardship.',
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
        'Cat dreams often blend independence, intuition, and boundary intelligence.',
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
        'Dreams of a deceased loved one often carry memory, comfort, and unfinished feeling rather than fear.',
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
        'Blood dreams are intense because they symbolize life force, loss, urgency, and emotional charge at once.',
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
        'Hair dreams often reflect identity, vitality, and sensitivity to social perception.',
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
        'Tiger dreams carry authority, force, and leadership tests. They often arrive when your role is getting bigger.',
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
        'Lottery dreams often surface when relief fantasy and financial pressure collide.',
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
        'Romance dreams often reveal desire patterns and readiness for closeness more than literal prediction.',
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
}

type GeneratedBespokeSeed = {
  slug: string
  dreamLabel: string
  theme: string
  action: string
}

const generatedBespokeSeeds: GeneratedBespokeSeed[] = [
  { slug: 'lost-dream', dreamLabel: 'lost item dream', theme: 'misplaced priorities and anxiety about losing what matters', action: 'Create one simple tracking system for your top priorities.' },
  { slug: 'maze-dream', dreamLabel: 'getting lost dream', theme: 'direction fatigue and uncertainty between life paths', action: 'Commit to one path for a short test window.' },
  { slug: 'elevator-dream', dreamLabel: 'elevator dream', theme: 'rapid status shifts and pressure to rise quickly', action: 'Set one growth goal with one clear boundary.' },
  { slug: 'stairs-dream', dreamLabel: 'stairs dream', theme: 'slow progress, effort, and confidence in process', action: 'Finish one small step completely.' },
  { slug: 'train-dream', dreamLabel: 'train dream', theme: 'timeline pressure and fear of missing a life window', action: 'Lock one delayed schedule decision.' },
  { slug: 'bus-dream', dreamLabel: 'bus dream', theme: 'group pace and tension between your needs and shared systems', action: 'Adjust one schedule boundary.' },
  { slug: 'airplane-dream', dreamLabel: 'airplane dream', theme: 'big expansion with high-stakes risk', action: 'Add one risk check before scaling.' },
  { slug: 'boat-dream', dreamLabel: 'boat dream', theme: 'emotional navigation in unstable conditions', action: 'Simplify route and protect energy.' },
  { slug: 'school-dream', dreamLabel: 'school dream', theme: 'evaluation memory and performance anxiety', action: 'Measure success by process quality today.' },
  { slug: 'office-dream', dreamLabel: 'office dream', theme: 'role pressure, output demands, and recognition stress', action: 'Set one non-negotiable work boundary.' },
  { slug: 'moving-dream', dreamLabel: 'moving house dream', theme: 'identity transition and rebuilding your base', action: 'Replace one outdated routine with a stable one.' },
  { slug: 'cleaning-dream', dreamLabel: 'cleaning dream', theme: 'reset energy and need for order', action: 'Clean one physical zone for mental clarity.' },
  { slug: 'rain-dream', dreamLabel: 'rain dream', theme: 'emotional release after pressure buildup', action: 'Name one feeling and express it safely.' },
  { slug: 'snow-dream', dreamLabel: 'snow dream', theme: 'pause, stillness, and perspective reset', action: 'Slow one decision and gather facts.' },
  { slug: 'wind-dream', dreamLabel: 'wind dream', theme: 'invisible change and environmental pressure', action: 'Reinforce one grounding routine.' },
  { slug: 'mountain-dream', dreamLabel: 'mountain dream', theme: 'long-term ambition requiring stamina', action: 'Focus on the next step, not the whole climb.' },
  { slug: 'flower-dream', dreamLabel: 'flower dream', theme: 'emotional opening and creative vitality', action: 'Feed one joy source today.' },
  { slug: 'tree-dream', dreamLabel: 'tree dream', theme: 'rooted growth and stability over time', action: 'Protect one foundational habit.' },
  { slug: 'fruit-dream', dreamLabel: 'fruit dream', theme: 'harvest timing and readiness for results', action: 'Complete one nearly finished task.' },
  { slug: 'eating-dream', dreamLabel: 'eating dream', theme: 'nourishment needs and emotional hunger', action: 'Meet one real need directly.' },
  { slug: 'cooking-dream', dreamLabel: 'cooking dream', theme: 'turning raw pressure into useful action', action: 'Improve one process step.' },
  { slug: 'bath-dream', dreamLabel: 'bath dream', theme: 'recovery and nervous-system reset', action: 'Schedule recovery before burnout.' },
  { slug: 'toilet-dream', dreamLabel: 'toilet dream', theme: 'release, privacy, and cleaner boundaries', action: 'Clear one backlog conversation or task.' },
  { slug: 'clothes-dream', dreamLabel: 'clothes dream', theme: 'identity display and approval tension', action: 'Present yourself more honestly in one context.' },
  { slug: 'shoes-dream', dreamLabel: 'shoes dream', theme: 'path fit, mobility, and practical readiness', action: 'Align one plan with real capacity.' },
  { slug: 'bag-dream', dreamLabel: 'bag dream', theme: 'burden load and resource protection', action: 'Drop one unnecessary obligation.' },
  { slug: 'phone-dream', dreamLabel: 'phone dream', theme: 'communication overload and boundary fatigue', action: 'Separate urgent replies from background noise.' },
  { slug: 'photo-dream', dreamLabel: 'photo dream', theme: 'memory curation and self-story clarity', action: 'Capture one moment for yourself, not performance.' },
  { slug: 'letter-dream', dreamLabel: 'letter dream', theme: 'delayed truth and meaningful communication', action: 'Send one message you have postponed.' },
  { slug: 'travel-dream', dreamLabel: 'travel dream', theme: 'expansion urge and uncertainty about route', action: 'Take one perspective-expanding action.' },
  { slug: 'hospital-dream', dreamLabel: 'hospital dream', theme: 'healing priority and vulnerability acceptance', action: 'Do one preventive health or stress check.' },
  { slug: 'surgery-dream', dreamLabel: 'surgery dream', theme: 'deep correction and structural repair', action: 'Address one root problem, not another surface symptom.' },
]

const generatedBespokeContentEnBySlug: Record<string, EnBespokeContent> = Object.fromEntries(
  generatedBespokeSeeds.map((seed) => [
    seed.slug,
    {
      voice: {
        introLead: `A ${seed.dreamLabel} usually appears when ${seed.theme} becomes active in real life.`,
        introSensory:
          `If the scene felt unusually vivid, your mind is likely flagging this theme for immediate attention, not random analysis.`,
        psychLead:
          `Psychologically, this dream often maps stress and desire around the same issue. It shows where your system wants clearer direction.`,
        psychDeep:
          `Repeated versions of the dream are common until one concrete action interrupts the loop. Clarity and execution usually reduce recurrence quickly.`,
        tradition:
          `Traditional symbolic reading would treat this as a timing signal: pay attention to context, tone, and behavior after waking.`,
        closing:
          `${seed.action} Treat the dream as a practical prompt, then let action complete the interpretation.`,
      },
      faqs: [
        {
          question: `What does a ${seed.dreamLabel} usually mean?`,
          answer:
            `Most often it reflects ${seed.theme}. It is usually less prediction and more psychological direction.`,
        },
        {
          question: 'Why did this dream feel so vivid?',
          answer:
            'Vividness often means emotional relevance is high right now. Your attention system is prioritizing this theme.',
        },
        {
          question: 'What is the best next step?',
          answer: seed.action,
        },
      ],
    },
  ])
)

Object.assign(bespokeContentEnBySlug, generatedBespokeContentEnBySlug)
