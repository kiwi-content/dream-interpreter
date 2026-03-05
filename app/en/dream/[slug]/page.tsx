import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import DreamInputEn from './DreamInputEn'
import { bespokeContentEnBySlug, type EnVoiceCopy } from './bespokeContentEn'
import { bespokeIntroSensoryEn } from './bespokeIntroSensoryEn'

type DreamCase = {
  title: string
  description: string
}

type DreamConfig = {
  slug: string
  name: string
  dreamLabel: string
  symbol: string
  sensory: string
  focus: string
  actionTip: string
  tradition: string
  metaTitle: string
  metaDescription: string
  caseStudies: DreamCase[]
  relatable: string[]
}

type FAQItem = {
  question: string
  answer: string
}

const BASE_URL = 'https://kkumhaemong.xyz'

const coreDreamConfigs: DreamConfig[] = [
  {
    slug: 'snake-dream',
    name: 'Snake Dream',
    dreamLabel: 'snake dream',
    symbol: 'money, instinct, and transformation',
    sensory: 'the glint of scales or a snake moving close to you',
    focus: 'wanting a breakthrough while fearing the risk that comes with it',
    actionTip: 'Pick one pending money or career decision and move it forward today.',
    tradition: 'a sign of rising fortune and timely help from an influential ally',
    metaTitle: 'Snake Dream Meaning: Change, Money, or Warning?',
    metaDescription:
      'Dreamed of a snake? The meaning shifts by color, distance, and emotion. See practical interpretations for the most common snake dream scenes.',
    caseStudies: [
      {
        title: 'A large snake passes by quietly',
        description:
          'A major shift has already started in the background, even if life still looks normal on the surface.',
      },
      {
        title: 'You are being chased by a snake',
        description:
          'An avoided issue is now urgent. The dream points to a conversation or decision you can no longer delay.',
      },
      {
        title: 'You catch or repel the snake',
        description:
          'You are regaining emotional control and the confidence to take back the lead in a difficult situation.',
      },
      {
        title: 'A white or golden snake appears',
        description:
          'This is often read as a lucky opening: support, opportunity, and momentum entering at once.',
      },
    ],
    relatable: [
      'People facing a job move or major role transition often have this dream.',
      'It appears when money decisions are pending and confidence is split.',
      'It is also common when someone needs firmer boundaries in relationships.',
    ],
  },
  {
    slug: 'teeth-dream',
    name: 'Teeth Falling Out Dream',
    dreamLabel: 'teeth falling out dream',
    symbol: 'self-worth, image, and relationship tension',
    sensory: 'the empty feeling in your mouth or the shock of loose teeth',
    focus: 'performance pressure and fear of being judged',
    actionTip: 'Write down one concrete reason you are doing better than you think.',
    tradition: 'a marker of shifts in close relationships or family dynamics',
    metaTitle: 'Teeth Falling Out Dream Meaning: Anxiety, Image, and Pressure',
    metaDescription:
      'Teeth dreams are common but not random. Learn what front teeth, molars, blood, and repeated teeth-loss dreams usually signal.',
    caseStudies: [
      {
        title: 'Front teeth fall out',
        description:
          'This often reflects social pressure, reputation worries, or fear of saying the wrong thing in public.',
      },
      {
        title: 'Molars fall out',
        description:
          'The dream points to long-term burdens, family responsibility, or foundational stress you have been carrying quietly.',
      },
      {
        title: 'Teeth fall out with blood',
        description:
          'Emotional depletion is accumulating. Rest and stronger boundaries are becoming non-negotiable.',
      },
      {
        title: 'You put the fallen teeth back in',
        description:
          'A recovery phase has begun. Confidence and relational trust can be rebuilt with intentional action.',
      },
    ],
    relatable: [
      'People before interviews, reviews, or major presentations report this dream often.',
      'It is common for those holding the "middle person" role inside family systems.',
      'It can repeat when appearance or social perception suddenly matters more than usual.',
    ],
  },
  {
    slug: 'chasing-dream',
    name: 'Being Chased Dream',
    dreamLabel: 'being chased dream',
    symbol: 'avoidance, pressure, and emotional backlog',
    sensory: 'heavy legs, short breath, and urgency that never ends',
    focus: 'unfinished tasks and conversations that are emotionally expensive',
    actionTip: 'Start the hardest pending task for just 20 focused minutes today.',
    tradition: 'a warning to face conflict before it escalates',
    metaTitle: 'Being Chased Dream Meaning: What Are You Avoiding?',
    metaDescription:
      'If you keep running in dreams, your mind is signaling unresolved pressure. See what common chase scenarios reveal and how to respond.',
    caseStudies: [
      {
        title: 'A stranger is chasing you',
        description:
          'The anxiety is real but unnamed. Your stress source exists, yet you have not translated it into words.',
      },
      {
        title: 'Someone you know is chasing you',
        description:
          'There is likely unresolved emotion in that relationship, often around resentment, guilt, or unspoken expectations.',
      },
      {
        title: 'You keep climbing stairs while escaping',
        description:
          'You are operating in survival mode: constant output, no decompression, and rising internal pressure.',
      },
      {
        title: 'You stop running and turn around',
        description:
          'This is a strong turning point. You are psychologically ready to confront what you used to postpone.',
      },
    ],
    relatable: [
      'People living by deadlines and constant urgency frequently have this dream.',
      'It appears when someone knows a conversation must happen but keeps postponing it.',
      'It also shows up when physical fatigue makes everyday demands feel overwhelming.',
    ],
  },
  {
    slug: 'flying-dream',
    name: 'Flying Dream',
    dreamLabel: 'flying dream',
    symbol: 'freedom, expansion, and self-belief',
    sensory: 'wind across your face and the lift of leaving the ground',
    focus: 'the desire to outgrow constraints without losing stability',
    actionTip: 'Drop one limiting habit today and replace it with a small bold action.',
    tradition: 'a classic sign of rising luck and social advancement',
    metaTitle: 'Flying Dream Meaning: Freedom, Growth, and Control',
    metaDescription:
      'Flying dreams can signal confidence, escape pressure, or fear of losing control. Learn what stable flight, panic, and direction loss mean.',
    caseStudies: [
      {
        title: 'You fly high and steadily',
        description:
          'Your confidence and execution are aligning. You are entering a phase with stronger control over outcomes.',
      },
      {
        title: 'You fly but fear falling',
        description:
          'Success is close, but fear of failing publicly is still pulling your nervous system downward.',
      },
      {
        title: 'You fly with someone else',
        description:
          'Partnership, collaboration, or mentorship may accelerate growth faster than solo effort right now.',
      },
      {
        title: 'You cannot steer where you want',
        description:
          'The ambition is present, but your structure is not. The dream asks for clearer systems and priorities.',
      },
    ],
    relatable: [
      'People craving more autonomy in work or life often report this dream.',
      'It appears during periods of rapid learning and identity expansion.',
      'It can repeat when potential is high but practical constraints still feel tight.',
    ],
  },
  {
    slug: 'fall-dream',
    name: 'Falling Dream',
    dreamLabel: 'falling dream',
    symbol: 'loss of control, insecurity, and forced transition',
    sensory: 'the sudden stomach-drop and impact fear right before waking',
    focus: 'holding too tightly while life is already changing underneath you',
    actionTip: 'Name one thing you cannot control and redirect effort to what you can.',
    tradition: 'a caution to slow down and reset before a critical turning point',
    metaTitle: 'Falling Dream Meaning: Control, Fear, and Change',
    metaDescription:
      'Falling dreams usually reflect control stress, instability, or major life transition. Understand what the height, landing, and emotion reveal.',
    caseStudies: [
      {
        title: 'You fall from a high place',
        description:
          'A high-stakes role or identity is shifting. The dream reflects fear of losing status, certainty, or momentum.',
      },
      {
        title: 'You keep falling with no end',
        description:
          'Anxiety has become chronic. Your mind cannot locate a safe stopping point, so it keeps simulating descent.',
      },
      {
        title: 'You fall but land safely',
        description:
          'The transition is real, but your recovery capacity is stronger than your fear predicts.',
      },
      {
        title: 'Someone pushes you and you fall',
        description:
          'External pressure feels invasive. You may be acting from others expectations instead of your own center.',
      },
    ],
    relatable: [
      'It is common during career pivots, breakups, or sudden life uncertainty.',
      'Perfectionists who fear mistakes often see this dream repeatedly.',
      'It also appears when sleep debt and stress reduce emotional resilience.',
    ],
  },
  {
    slug: 'death-dream',
    name: 'Death Dream',
    dreamLabel: 'death dream',
    symbol: 'endings, identity shedding, and renewal',
    sensory: 'time slowing down and then shifting into strange calm',
    focus: 'the need to release an old pattern so a new chapter can start',
    actionTip: 'Choose one outdated habit and replace it with a realistic new routine today.',
    tradition: 'often treated as a reversal-luck dream tied to renewal and long-term fortune',
    metaTitle: 'Death Dream Meaning: Ending, Rebirth, and Turning Points',
    metaDescription:
      'Death dreams are usually symbolic, not literal. Learn what dreams of your own death, others deaths, and funerals can point to psychologically.',
    caseStudies: [
      {
        title: 'You die in the dream',
        description:
          'A major self-concept is ending. The old version of you no longer fits your next stage.',
      },
      {
        title: 'Someone close dies',
        description:
          'The dream often points to relational transition, not physical harm. A bond is changing shape.',
      },
      {
        title: 'You die and come back to life',
        description:
          'This is a strong recovery symbol: a blocked flow can reverse with decisive action.',
      },
      {
        title: 'A funeral scene appears',
        description:
          'Your psyche is ready to close emotional loops and stop carrying unresolved weight.',
      },
    ],
    relatable: [
      'People on the edge of major life chapter changes often have this dream.',
      'It is common when someone knows they must let go but still hesitates.',
      'It appears when old coping styles stop working and reinvention is due.',
    ],
  },
  {
    slug: 'pregnancy-dream',
    name: 'Pregnancy Dream',
    dreamLabel: 'pregnancy dream',
    symbol: 'creation, growth, and protected potential',
    sensory: 'warmth around the body and the weight of new responsibility',
    focus: 'nurturing a new plan while carrying uncertainty about execution',
    actionTip: 'Turn one idea into a visible first draft so it can start growing in reality.',
    tradition: 'a favorable sign of incoming blessings and new opportunities',
    metaTitle: 'Pregnancy Dream Meaning: New Beginnings and Hidden Pressure',
    metaDescription:
      'Pregnancy dreams often symbolize growth, projects, and life transitions. Read what joy, fear, and birth-near scenes usually indicate.',
    caseStudies: [
      {
        title: 'You feel happy to be pregnant',
        description:
          'A plan you have nurtured is entering a healthier stage and wants real-world commitment.',
      },
      {
        title: 'You feel anxious about pregnancy',
        description:
          'The opportunity is exciting, but responsibility load and self-doubt are competing internally.',
      },
      {
        title: 'Someone else is pregnant',
        description:
          'Your environment is moving into a growth cycle, and you are being invited to evolve with it.',
      },
      {
        title: 'You are close to giving birth',
        description:
          'An idea, role, or change is nearly ready for launch. The moment for action is close.',
      },
    ],
    relatable: [
      'People starting a new project with unclear certainty often have this dream.',
      'It appears around major life transitions like marriage, moving, or role shifts.',
      'It can repeat when postponed plans are ready to return and be completed.',
    ],
  },
  {
    slug: 'ex-dream',
    name: 'Ex Partner Dream',
    dreamLabel: 'ex partner dream',
    symbol: 'relationship memory and unfinished emotional patterns',
    sensory: 'an old voice, scent, or atmosphere suddenly feeling vivid again',
    focus: 'comparing past and present needs in intimate connection',
    actionTip: 'Journal about who you are now, not who you were in that past relationship.',
    tradition: 'a signal to reorganize emotional ties and karmic relationship patterns',
    metaTitle: 'Ex Partner Dream Meaning: Not Always About Getting Back Together',
    metaDescription:
      'Dreaming about an ex often reflects emotional patterns, not destiny. Learn what reunion, conflict, and neutral ex dreams can indicate.',
    caseStudies: [
      {
        title: 'You reunite with your ex',
        description:
          'This usually reflects a pattern check, not a literal reunion prediction. Your mind is auditing emotional habits.',
      },
      {
        title: 'You argue with your ex',
        description:
          'Unfinished emotional sentences are still active and asking to be processed consciously.',
      },
      {
        title: 'You see your ex with no emotion',
        description:
          'Healing is progressing. Their symbolic influence over your present is fading.',
      },
      {
        title: 'Your ex appears in front of your current partner',
        description:
          'Comparison and insecurity are operating together. This dream asks for emotional clarity and honesty.',
      },
    ],
    relatable: [
      'People beginning a new relationship without full emotional closure often have this dream.',
      'It appears when loneliness pulls the mind toward familiar emotional safety.',
      'It repeats when similar conflict patterns keep showing up across different relationships.',
    ],
  },
  {
    slug: 'wedding-dream',
    name: 'Wedding Dream',
    dreamLabel: 'wedding dream',
    symbol: 'commitment, integration, and major choice',
    sensory: 'bright lights, ceremonial clothing, and a heightened emotional atmosphere',
    focus: 'deciding what or whom you are truly ready to commit to',
    actionTip: 'Write one sentence that defines your relationship standard from now on.',
    tradition: 'a sign of changing relationship luck and contract energy',
    metaTitle: 'Wedding Dream Meaning: Commitment, Anxiety, and Big Decisions',
    metaDescription:
      'Wedding dreams can point to commitment shifts, life choices, and relationship clarity. See what calm or chaotic wedding scenes may signal.',
    caseStudies: [
      {
        title: 'A joyful wedding ceremony',
        description:
          'A relationship or project is stabilizing and moving toward a more secure phase.',
      },
      {
        title: 'A chaotic wedding scene',
        description:
          'You are close to an important decision but inner certainty is not fully formed yet.',
      },
      {
        title: 'You marry someone unknown',
        description:
          'The dream often symbolizes entering a new identity or environment, not literal romance.',
      },
      {
        title: 'You are late to the wedding',
        description:
          'Time pressure and fear of missed opportunities are weighing on your decision process.',
      },
    ],
    relatable: [
      'People facing partnership, contract, or commitment decisions often see this dream.',
      'It is common at life crossroads where one choice closes other paths.',
      'It appears when trust, timing, and responsibility must be balanced carefully.',
    ],
  },
  {
    slug: 'fire-dream',
    name: 'Fire Dream',
    dreamLabel: 'fire dream',
    symbol: 'intense energy, purification, and rapid change',
    sensory: 'heat waves, crackling sound, and bright overwhelming light',
    focus: 'powerful desire that needs direction before it becomes burnout',
    actionTip: 'Do not chase everything at once. Finish one high-priority task end-to-end today.',
    tradition: 'a sign of sharp rises in reputation, drive, and financial momentum',
    metaTitle: 'Fire Dream Meaning: Energy Surge, Conflict, or Renewal?',
    metaDescription:
      'Fire dreams can mark ambition, emotional heat, or deep reset. Learn what house fires, wildfires, and extinguishing scenes commonly suggest.',
    caseStudies: [
      {
        title: 'Your home is on fire',
        description:
          'Core life structures are being reconfigured. A major reset is underway in your personal foundation.',
      },
      {
        title: 'A wildfire spreads quickly',
        description:
          'Unmanaged emotion or conflict is escalating fast. Communication style needs immediate attention.',
      },
      {
        title: 'You put out the fire',
        description:
          'You are reclaiming control in chaos and developing stronger problem-solving authority.',
      },
      {
        title: 'You watch flames from a distance',
        description:
          'A new ambition is waking up. The dream signals readiness, but strategy must match intensity.',
      },
    ],
    relatable: [
      'It is common for people suddenly driven to change their direction in life.',
      'The dream appears in high-conflict periods when emotional temperature stays elevated.',
      'It also shows up after long suppression, when personal desire finally demands expression.',
    ],
  },
  {
    slug: 'water-dream',
    name: 'Water Dream',
    dreamLabel: 'water dream',
    symbol: 'emotional depth, cleansing, and adaptability',
    sensory: 'water rising around your body and the rhythm of waves or breath',
    focus: 'regulating emotional swings while staying functional',
    actionTip: 'Cut one non-essential obligation today and create real recovery space.',
    tradition: 'a marker of changing emotional luck and shifting resource flow',
    metaTitle: 'Water Dream Meaning: Emotional State and Recovery Signals',
    metaDescription:
      'Water dreams often mirror your emotional system in real time. Explore meanings for clear water, muddy water, drowning, and swimming scenes.',
    caseStudies: [
      {
        title: 'You suddenly fall into deep water',
        description:
          'An unexpected emotional event is destabilizing your center and demanding adaptation.',
      },
      {
        title: 'You swim in clear water',
        description:
          'Emotional regulation is improving. Repair and reconnection become more possible from this state.',
      },
      {
        title: 'You are in muddy or dirty water',
        description:
          'Confusion, rumor, or relational noise is draining your clarity and energy reserves.',
      },
      {
        title: 'You climb out of the water yourself',
        description:
          'Even under pressure, your recovery instinct is active. You are not as stuck as it feels.',
      },
    ],
    relatable: [
      'People in emotionally demanding relationships report this dream frequently.',
      'It appears when work and home pressures overlap without enough rest.',
      'If tears or irritability have increased lately, this dream often follows.',
    ],
  },
  {
    slug: 'ghost-dream',
    name: 'Ghost Dream',
    dreamLabel: 'ghost dream',
    symbol: 'unfinished emotion, memory traces, and fear processing',
    sensory: 'cold air, shadows, and a strong sense of presence',
    focus: 'old emotional material returning because it was never fully completed',
    actionTip: 'Write down one avoided conversation and express it safely in real life.',
    tradition: 'a reminder to clear lingering misfortune and emotional residue',
    metaTitle: 'Ghost Dream Meaning: Fear, Memory, and Emotional Closure',
    metaDescription:
      'Ghost dreams are not always bad omens. They often signal unresolved emotion, avoidance, or healing in progress depending on the scene.',
    caseStudies: [
      {
        title: 'A ghost watches from far away',
        description:
          'The issue is not exploding yet, but unresolved feeling remains active in the background.',
      },
      {
        title: 'A ghost chases you',
        description:
          'Avoidance has reached its limit. What was postponed is now psychologically urgent.',
      },
      {
        title: 'You talk with a ghost',
        description:
          'Fear is turning into meaning. Emotional processing has begun instead of pure suppression.',
      },
      {
        title: 'The ghost is not scary',
        description:
          'Acceptance is growing. Your mind is integrating what used to feel threatening.',
      },
    ],
    relatable: [
      'People replaying old memories that still sting often have this dream.',
      'It appears after unresolved endings where apology or closure never happened.',
      'It can emerge during grief recovery when numb emotions start to thaw.',
    ],
  },
  {
    slug: 'exam-dream',
    name: 'Exam Dream',
    dreamLabel: 'exam dream',
    symbol: 'evaluation pressure, competence fear, and standards',
    sensory: 'paper rustling, clock ticking, and rising urgency',
    focus: 'the burden of proving yourself under conditions that feel unforgiving',
    actionTip: 'Break one high-pressure goal into a short checklist and complete step one now.',
    tradition: 'a checkpoint dream tied to documents, status, and official outcomes',
    metaTitle: 'Exam Dream Meaning: Performance Anxiety and Self-Pressure',
    metaDescription:
      'Exam dreams are classic stress dreams. Learn what being late, unprepared, or unable to submit answers can reveal about your current mindset.',
    caseStudies: [
      {
        title: 'You arrive late to the exam',
        description:
          'Fear of missing timing is dominating your attention and narrowing your flexibility.',
      },
      {
        title: 'You take the exam without studying',
        description:
          'Self-efficacy is low and internal standards are likely harsher than reality requires.',
      },
      {
        title: 'The questions are easy and flow well',
        description:
          'Preparation is accumulating. Your mind is signaling readiness to perform in real situations.',
      },
      {
        title: 'You cannot submit the answer sheet',
        description:
          'Perfectionism and decision delay may be blocking completion more than capability itself.',
      },
    ],
    relatable: [
      'Professionals in review cycles or promotion windows often have this dream.',
      'It appears when people take on new responsibility and question their readiness.',
      'It is frequent among high achievers who delay action until conditions feel perfect.',
    ],
  },
  {
    slug: 'money-dream',
    name: 'Money Dream',
    dreamLabel: 'money dream',
    symbol: 'value, recognition, and opportunity flow',
    sensory: 'the texture of bills or the weight of coins in your hand',
    focus: 'reassessing what your effort is worth and how it should be rewarded',
    actionTip: 'Review one active offer or opportunity with concrete numbers today.',
    tradition: 'a well-known prosperity dream linked to material luck',
    metaTitle: 'Money Dream Meaning: Value, Reward, and Opportunity',
    metaDescription:
      'Money dreams can reflect confidence, reward, insecurity, or missed timing. Explore common scenes like finding cash, losing money, and sharing wealth.',
    caseStudies: [
      {
        title: 'You find paper money on the street',
        description:
          'A practical opportunity may arrive sooner than expected if you stay alert and decisive.',
      },
      {
        title: 'You collect coins',
        description:
          'Small wins matter now. Consistency, not dramatic leaps, is your real path to momentum.',
      },
      {
        title: 'You find money but lose it again',
        description:
          'The dream mirrors fear of missed chances caused by hesitation or fragile confidence.',
      },
      {
        title: 'You share money with someone',
        description:
          'Collaboration and network strategy can expand your earnings more than isolated effort.',
      },
    ],
    relatable: [
      'Freelancers and founders often dream this during income-structure transitions.',
      'It appears around salary talks, job changes, or compensation decisions.',
      'People feeling under-rewarded relative to effort also report this dream frequently.',
    ],
  },
  {
    slug: 'baby-dream',
    name: 'Baby Dream',
    dreamLabel: 'baby dream',
    symbol: 'new beginnings, vulnerability, and care',
    sensory: 'small warm hands, soft breath, and protective instinct',
    focus: 'accepting new responsibility without losing emotional balance',
    actionTip: 'Design a gentler daily routine for the new thing you are trying to build.',
    tradition: 'a favorable sign tied to household blessings and fresh fortune',
    metaTitle: 'Baby Dream Meaning: New Potential, Care, and Emotional Signals',
    metaDescription:
      'Baby dreams can symbolize new projects, fragile opportunities, and emotional needs. Learn what holding, losing, crying, or smiling baby dreams suggest.',
    caseStudies: [
      {
        title: 'You hold a baby',
        description:
          'You are nurturing a new opportunity carefully and beginning to trust your caretaking capacity.',
      },
      {
        title: 'A baby is crying',
        description:
          'An unmet emotional need or delayed task is asking for immediate and gentle attention.',
      },
      {
        title: 'You lose the baby',
        description:
          'Fear of losing potential has grown. The dream calls for clearer priorities and protection.',
      },
      {
        title: 'A baby smiles at you',
        description:
          'Your current direction is becoming safer and more emotionally aligned than before.',
      },
    ],
    relatable: [
      'People beginning new work but doubting themselves often see this dream.',
      'It appears when caregiving responsibility increases and emotional sensitivity rises.',
      'It can also signal a need to care for the softer, overlooked part of yourself.',
    ],
  },
  {
    slug: 'poop-dream',
    name: 'Poop Dream',
    dreamLabel: 'poop dream',
    symbol: 'release, prosperity, and emotional cleansing',
    sensory: 'sticky texture, strong odor, or urgent bathroom scenes',
    focus: 'clearing what has built up too long and making space for better flow',
    actionTip: 'Clear one backlog today: your budget, your inbox, or one avoided conversation.',
    tradition: 'a classic prosperity dream linked to incoming money luck',
    metaTitle: 'Poop Dream Meaning: Money Luck, Release, and Blocked Emotion',
    metaDescription:
      'Poop dreams are often read as fortune and release, but context matters. Learn what stepping on poop, overflowing toilets, and blocked bathroom dreams can signal.',
    caseStudies: [
      {
        title: 'You step on poop',
        description:
          'Unexpected opportunity may arrive from a place you did not expect. Timing matters more than appearance.',
      },
      {
        title: 'You touch poop with your hand',
        description:
          'You are moving from passive hope to active handling of money, outcomes, and responsibility.',
      },
      {
        title: 'You cannot find a bathroom',
        description:
          'Expression is blocked. Emotions or plans need release, but your system feels trapped.',
      },
      {
        title: 'The toilet overflows',
        description:
          'Your life energy is high, but structure is weak. Without priorities, abundance turns into overload.',
      },
    ],
    relatable: [
      'It appears often when someone is close to launching long-prepared work.',
      'People under financial pressure also report this dream frequently.',
      'It can repeat when emotions have been suppressed and need healthy expression.',
    ],
  },
  {
    slug: 'cat-dream',
    name: 'Cat Dream',
    dreamLabel: 'cat dream',
    symbol: 'intuition, boundaries, and emotional independence',
    sensory: 'soft fur, quiet footsteps, and alert eyes in the dark',
    focus: 'balancing closeness and distance in relationships',
    actionTip: 'Trust your first intuition once today, then communicate one boundary calmly.',
    tradition: 'connected with hidden dynamics, instinct, and relational sensitivity',
    metaTitle: 'Cat Dream Meaning: Intuition, Boundaries, and Relationship Signals',
    metaDescription:
      'Cat dreams often reflect intuition, personal space, and subtle relationship tension. See what affectionate, escaping, or aggressive cat scenes reveal.',
    caseStudies: [
      {
        title: 'You pet a cat',
        description:
          'Emotional steadiness is returning. Your intuition and nervous system are coming back into sync.',
      },
      {
        title: 'A cat runs away',
        description:
          'You fear losing connection or missing a chance that requires gentle timing rather than force.',
      },
      {
        title: 'A cat scratches you',
        description:
          'Small relational tensions are no longer small. Unspoken discomfort is asking to be addressed.',
      },
      {
        title: 'You care for a kitten',
        description:
          'A fragile part of your life needs consistent care. Growth is possible if you protect the early stage.',
      },
    ],
    relatable: [
      'People who need solitude to recharge often have this dream.',
      'It appears during periods of boundary-reset in close relationships.',
      'It can signal that your inner instincts are right, but confidence is lagging.',
    ],
  },
  {
    slug: 'dog-dream',
    name: 'Dog Dream',
    dreamLabel: 'dog dream',
    symbol: 'trust, loyalty, and protection',
    sensory: 'tail movement, warm presence, or barking in the background',
    focus: 'figuring out who is truly safe to trust',
    actionTip: 'Decide clearly today where your trust belongs and where it does not.',
    tradition: 'a sign connected with loyal allies and protective relationship luck',
    metaTitle: 'Dog Dream Meaning: Trust, Loyalty, and Relationship Safety',
    metaDescription:
      'Dog dreams often mirror trust and support dynamics. Learn what friendly dogs, biting dogs, and barking packs can mean for your relationships.',
    caseStudies: [
      {
        title: 'A dog approaches you warmly',
        description:
          'Helpful people and supportive collaboration may be closer than you think.',
      },
      {
        title: 'A dog bites you',
        description:
          'A trust wound is active. The dream asks you to review boundaries before deeper commitment.',
      },
      {
        title: 'You search for a lost dog',
        description:
          'You are trying to recover a value or relationship standard that drifted out of view.',
      },
      {
        title: 'Many dogs bark around you',
        description:
          'Too much social noise is disrupting judgment. Filter the voices before deciding.',
      },
    ],
    relatable: [
      'This dream is common in team-based work where trust drives outcomes.',
      'It appears after disappointment from someone you expected loyalty from.',
      'It also shows up when you carry strong responsibility to protect others.',
    ],
  },
  {
    slug: 'deceased-dream',
    name: 'Dream of a Deceased Loved One',
    dreamLabel: 'dream of a deceased loved one',
    symbol: 'grief processing, guidance, and emotional protection',
    sensory: 'a familiar voice, expression, or comforting atmosphere',
    focus: 'integrating loss while seeking direction for the present',
    actionTip: 'Honor one value they left you and practice it in a concrete way today.',
    tradition: 'often regarded as an ancestral guidance dream with protective meaning',
    metaTitle: 'Dream of Deceased Loved One Meaning: Comfort, Guidance, and Healing',
    metaDescription:
      'Dreams of deceased loved ones often reflect grief healing and life guidance. Understand what smiling, silent, or gift-giving scenes may indicate.',
    caseStudies: [
      {
        title: 'They appear smiling',
        description:
          'Your emotional system is receiving reassurance. Safety and support are becoming available again.',
      },
      {
        title: 'They look at you without speaking',
        description:
          'A quiet life check is underway. Something in your habits or priorities may need honest review.',
      },
      {
        title: 'They hand you something',
        description:
          'You are approaching an important choice, and the dream emphasizes values over impulse.',
      },
      {
        title: 'You eat together',
        description:
          'This often signals emotional repair and softening inside family or belonging-related themes.',
      },
    ],
    relatable: [
      'It appears around anniversaries, memorial dates, or emotionally loaded seasons.',
      'People near major decisions often report this dream as a form of inner guidance.',
      'It can surface when grief was frozen and is finally ready to move.',
    ],
  },
  {
    slug: 'blood-dream',
    name: 'Blood Dream',
    dreamLabel: 'blood dream',
    symbol: 'life force, emotional intensity, and recovery pressure',
    sensory: 'bright red imagery and strong physical alarm in the scene',
    focus: 'conflict between depletion and the need to recover quickly',
    actionTip: 'Cancel one draining commitment today and protect your recovery time.',
    tradition: 'read as a turning point in vitality and material flow',
    metaTitle: 'Blood Dream Meaning: Energy Warning or Emotional Release?',
    metaDescription:
      'Blood dreams can feel intense but often point to vitality and emotional load. Learn what your own blood, others blood, and stopping blood scenes imply.',
    caseStudies: [
      {
        title: 'You see your own blood',
        description:
          'Your energy budget is overdrawn. Rest is no longer optional; it is strategic.',
      },
      {
        title: 'You see someone else bleeding',
        description:
          'You may be absorbing other people conflicts too deeply and mistaking them for your own.',
      },
      {
        title: 'You clean blood',
        description:
          'You are entering a repair phase, organizing emotional chaos into something manageable.',
      },
      {
        title: 'Bleeding stops in the dream',
        description:
          'Stability is returning. A situation that felt uncontrollable can now be handled with structure.',
      },
    ],
    relatable: [
      'This dream is common when body and mind are both running at a deficit.',
      'It appears after long emotional suppression of anger or grief.',
      'It can repeat when early warning signs are ignored in daily life.',
    ],
  },
  {
    slug: 'hair-dream',
    name: 'Hair Dream',
    dreamLabel: 'hair dream',
    symbol: 'identity, vitality, and self-image',
    sensory: 'hair slipping through fingers or dramatic texture changes',
    focus: 'tension between external image and internal resilience',
    actionTip: 'Prioritize energy management today over appearance-based self-judgment.',
    tradition: 'linked to vitality, longevity, and personal fortune in many readings',
    metaTitle: 'Hair Dream Meaning: Self-Worth, Stress, and Renewal',
    metaDescription:
      'Hair dreams often mirror confidence and stress levels. Understand what hair loss, cutting, shining hair, and untangling scenes can reveal.',
    caseStudies: [
      {
        title: 'Hair falls out in clumps',
        description:
          'Chronic stress is undermining confidence. Your system is signaling that the load is unsustainable.',
      },
      {
        title: 'You cut long hair',
        description:
          'A clean break is forming. You are preparing to leave an outdated role or identity.',
      },
      {
        title: 'Your hair looks healthy and glossy',
        description:
          'Recovery is underway. Physical and emotional resources are rebuilding together.',
      },
      {
        title: 'You untangle knotted hair',
        description:
          'Complex issues are becoming solvable through patience and sequence, not force.',
      },
    ],
    relatable: [
      'It appears when self-image and external evaluation feel unusually intense.',
      'People recovering from overwork often report this dream during reset phases.',
      'It can emerge right before visible style or identity changes in waking life.',
    ],
  },
  {
    slug: 'tiger-dream',
    name: 'Tiger Dream',
    dreamLabel: 'tiger dream',
    symbol: 'power, authority, and protection',
    sensory: 'intense eye contact, heavy footsteps, and primal tension',
    focus: 'holding leadership power while managing fear',
    actionTip: 'Speak one clear opinion today in a place where you usually hold back.',
    tradition: 'a high-authority dream associated with status rise and influential support',
    metaTitle: 'Tiger Dream Meaning: Power, Leadership, and Opportunity',
    metaDescription:
      'Tiger dreams often symbolize authority, risk, and major opportunity. Learn what chasing, riding, or seeing a tiger cub can signal.',
    caseStudies: [
      {
        title: 'A tiger watches you',
        description:
          'A major opportunity is near, but your posture and timing will decide the outcome.',
      },
      {
        title: 'A tiger chases you',
        description:
          'You are under pressure from authority dynamics and may be avoiding a necessary challenge.',
      },
      {
        title: 'You ride a tiger',
        description:
          'A leadership phase is opening. You are positioned to direct outcomes, not just react to them.',
      },
      {
        title: 'You see a tiger cub',
        description:
          'A strong but early-stage opportunity is emerging and needs careful cultivation.',
      },
    ],
    relatable: [
      'This dream is common for new leaders managing visible responsibility.',
      'It appears in negotiation or competition phases with strong counterparts.',
      'It can mark the return of confidence after a long period of self-minimization.',
    ],
  },
  {
    slug: 'car-accident-dream',
    name: 'Accident Dream',
    dreamLabel: 'accident dream',
    symbol: 'control loss, speed mismatch, and course correction',
    sensory: 'brakes failing, impact shock, and sharp body tension',
    focus: 'a life pace that is too fast for safe decision-making',
    actionTip: 'Slow one major decision cycle today and verify assumptions before action.',
    tradition: 'treated as a cautionary dream about movement, risk, and legal stress',
    metaTitle: 'Accident Dream Meaning: Speed, Control, and Life Direction',
    metaDescription:
      'Accident dreams often signal overload and control stress. Explore what causing, witnessing, or surviving accidents in dreams may mean.',
    caseStudies: [
      {
        title: 'You cause the accident',
        description:
          'Your current speed may exceed your processing capacity. A deliberate slowdown is needed.',
      },
      {
        title: 'You are a passenger in an accident',
        description:
          'You feel driven by others choices. Reclaiming agency is the central task now.',
      },
      {
        title: 'You survive the accident safely',
        description:
          'Your crisis-management capacity is stronger than the fear narrative in your head.',
      },
      {
        title: 'You witness an accident',
        description:
          'You may be absorbing surrounding tension indirectly, carrying stress that is not fully yours.',
      },
    ],
    relatable: [
      'It appears when schedules are overloaded and reaction time is always short.',
      'People rushing major decisions often report this dream before key pivots.',
      'Perfectionists with high fear of mistakes may experience this pattern repeatedly.',
    ],
  },
  {
    slug: 'house-dream',
    name: 'House Dream',
    dreamLabel: 'house dream',
    symbol: 'self-structure, safety, and life foundation',
    sensory: 'familiar room details, doors, walls, and hidden spaces',
    focus: 'reorganizing inner stability and emotional boundaries',
    actionTip: 'Tidy one physical space today to reset mental clarity and calm.',
    tradition: 'connected with home fortune, family flow, and base stability',
    metaTitle: 'House Dream Meaning: Identity, Safety, and Life Foundation',
    metaDescription:
      'House dreams often mirror your inner structure. Learn what moving houses, collapsing homes, cleaning, and exploring unknown rooms can mean.',
    caseStudies: [
      {
        title: 'You move into a new house',
        description:
          'A new identity stage is beginning. Your routines and priorities are ready for redesign.',
      },
      {
        title: 'The house collapses',
        description:
          'A core support system feels unstable. Long-ignored stress has reached structural level.',
      },
      {
        title: 'You clean the house',
        description:
          'Emotional and relational maintenance is working. Internal order is being restored.',
      },
      {
        title: 'You explore an unfamiliar house',
        description:
          'You are testing unknown parts of yourself and discovering new capacities.',
      },
    ],
    relatable: [
      'This dream is frequent during moving, independence, or cohabitation transitions.',
      'It appears when home-life and work-life balance feels unstable.',
      'People who cannot rest even in their own space also report this pattern.',
    ],
  },
  {
    slug: 'lottery-dream',
    name: 'Lottery Dream',
    dreamLabel: 'lottery dream',
    symbol: 'possibility, risk appetite, and turnaround desire',
    sensory: 'seeing numbers clearly or intense anticipation before results',
    focus: 'wanting fast reversal while uncertain about sustainable strategy',
    actionTip: 'Pair your hopes with one concrete long-term money plan today.',
    tradition: 'a windfall symbol tied to chance and opportunity timing',
    metaTitle: 'Lottery Dream Meaning: Chance, Hope, and Timing Anxiety',
    metaDescription:
      'Lottery dreams often reflect hope, pressure, and risk psychology. See what winning, buying tickets, or missing a jackpot dream may indicate.',
    caseStudies: [
      {
        title: 'You win the lottery',
        description:
          'Confidence is rising and your mind is rehearsing the possibility of a major positive shift.',
      },
      {
        title: 'You buy a lottery ticket',
        description:
          'You are ready to test new paths, but still balancing courage with uncertainty.',
      },
      {
        title: 'You remember exact numbers',
        description:
          'Your attention is sharply focused on one target. Channel that focus into execution.',
      },
      {
        title: 'You miss the winning moment',
        description:
          'Fear of missed timing is high. The dream pushes you toward faster, clearer action.',
      },
    ],
    relatable: [
      'It appears when people feel they need a financial turning point.',
      'This dream is common when effort feels high but payoff feels delayed.',
      'It can emerge when appetite for new opportunities starts expanding quickly.',
    ],
  },
  {
    slug: 'ocean-dream',
    name: 'Ocean Dream',
    dreamLabel: 'ocean dream',
    symbol: 'vast unconscious emotion and long-range possibility',
    sensory: 'salt air, wide horizon, and wave rhythm',
    focus: 'holding large emotion while choosing a clear direction',
    actionTip: 'Keep the vision broad but narrow today to one concrete next step.',
    tradition: 'linked to travel luck, expansion, and resource flow',
    metaTitle: 'Ocean Dream Meaning: Emotional Depth and Expansion',
    metaDescription:
      'Ocean dreams often mirror emotional scale and life direction. Learn what calm seas, rough waves, swimming, and horizon scenes can suggest.',
    caseStudies: [
      {
        title: 'You see a calm ocean',
        description:
          'Emotional stability is increasing, allowing you to think in larger time horizons.',
      },
      {
        title: 'You face rough waves',
        description:
          'External turbulence and internal anxiety are interacting. Grounding is urgent.',
      },
      {
        title: 'You swim in the ocean',
        description:
          'You are engaging with emotions directly rather than escaping them, which builds resilience.',
      },
      {
        title: 'You stare at the horizon',
        description:
          'A long-term direction change is opening. The dream supports strategic repositioning.',
      },
    ],
    relatable: [
      'People reassessing life direction often report this dream.',
      'It appears when emotional amplitude is larger than usual.',
      'It is common during major move planning such as relocation or long travel.',
    ],
  },
  {
    slug: 'thief-dream',
    name: 'Thief Dream',
    dreamLabel: 'thief dream',
    symbol: 'boundary invasion, loss anxiety, and protection',
    sensory: 'door handles moving, footsteps, and heightened vigilance',
    focus: 'protecting what matters before depletion becomes visible',
    actionTip: 'Check one protection layer today: accounts, contracts, or emotional limits.',
    tradition: 'a warning category tied to property luck and loss prevention',
    metaTitle: 'Thief Dream Meaning: Boundaries, Loss Fear, and Control',
    metaDescription:
      'Thief dreams often signal boundary stress and resource anxiety. Understand what catching a thief, losing items, or failed theft scenes reveal.',
    caseStudies: [
      {
        title: 'A thief enters your home',
        description:
          'You feel your personal space or emotional boundary is being crossed.',
      },
      {
        title: 'You catch the thief',
        description:
          'You are regaining control and can stop a draining pattern before deeper damage.',
      },
      {
        title: 'A thief steals your belongings',
        description:
          'Energy, time, or trust may be leaking through one-sided dynamics that need correction.',
      },
      {
        title: 'A thief fails to steal anything',
        description:
          'Your fear is high, but real loss may be smaller than expected if you act early.',
      },
    ],
    relatable: [
      'It is common when people feel under-recognized for their effort.',
      'The dream appears with privacy stress or excessive interference from others.',
      'It can surface when financial or emotional resources need stronger guarding.',
    ],
  },
  {
    slug: 'earthquake-dream',
    name: 'Earthquake Dream',
    dreamLabel: 'earthquake dream',
    symbol: 'foundation shake-up and forced reordering',
    sensory: 'ground movement, instability, and sudden survival alert',
    focus: 'rebuilding stability when old structures no longer hold',
    actionTip: 'Audit your most unstable base today: money, schedule, or key relationship.',
    tradition: 'seen as a precursor dream for major cycle change',
    metaTitle: 'Earthquake Dream Meaning: Instability, Reset, and New Order',
    metaDescription:
      'Earthquake dreams usually reflect deep instability and restructuring. Learn what shaking ground, collapsing buildings, and post-quake calm can represent.',
    caseStudies: [
      {
        title: 'You experience a strong earthquake',
        description:
          'A deep priority reset is needed. Your current foundation is asking for redesign.',
      },
      {
        title: 'Buildings collapse',
        description:
          'Old beliefs or systems are failing. What once worked may now be structurally obsolete.',
      },
      {
        title: 'You find safe ground after shaking',
        description:
          'Adaptive resilience is active. You can stabilize even in high uncertainty.',
      },
      {
        title: 'The shaking stops and it becomes quiet',
        description:
          'A new order can form after disruption, especially if you simplify and re-sequence.',
      },
    ],
    relatable: [
      'This dream is common when multiple life domains change at once.',
      'It appears in periods where safety and certainty feel temporarily unavailable.',
      'People recognizing that old methods no longer work often report this pattern.',
    ],
  },
  {
    slug: 'moon-dream',
    name: 'Moon Dream',
    dreamLabel: 'moon dream',
    symbol: 'intuition, rhythm, and emotional cycles',
    sensory: 'soft night light and still atmospheric calm',
    focus: 'listening to inner timing instead of forcing outcomes',
    actionTip: 'Track your energy rhythm today before pushing harder for results.',
    tradition: 'associated with intuition luck, benefactor energy, and wish fulfillment',
    metaTitle: 'Moon Dream Meaning: Intuition, Timing, and Inner Rhythm',
    metaDescription:
      'Moon dreams often reflect intuition and emotional timing. See what full moon, crescent moon, clouded moon, and moonlight walking scenes can indicate.',
    caseStudies: [
      {
        title: 'You see a bright full moon',
        description:
          'A completion cycle is near. Results and emotional clarity may converge soon.',
      },
      {
        title: 'You see a crescent moon',
        description:
          'A real beginning is forming. It is small but stable enough to build on.',
      },
      {
        title: 'Clouds hide the moon',
        description:
          'Intuition is present but obscured by noise. Slow down until internal signal clears.',
      },
      {
        title: 'You walk in moonlight',
        description:
          'The dream emphasizes quiet reflection and low-speed decision quality over urgency.',
      },
    ],
    relatable: [
      'Emotionally sensitive periods often correlate with this dream pattern.',
      'Creative workers relying on intuition report this dream frequently.',
      'It appears when nighttime rumination increases and inner sorting is needed.',
    ],
  },
  {
    slug: 'rainbow-dream',
    name: 'Rainbow Dream',
    dreamLabel: 'rainbow dream',
    symbol: 'hope, recovery, and bridge-building',
    sensory: 'vivid bands of color after rain or turbulence',
    focus: 'reclaiming optimism after sustained strain',
    actionTip: 'Celebrate one small win today and map the next realistic milestone.',
    tradition: 'a strong auspicious sign linked with wishes and benefactor luck',
    metaTitle: 'Rainbow Dream Meaning: Hope, Recovery, and Opportunity',
    metaDescription:
      'Rainbow dreams often signal relief after hardship. Learn what bright rainbows, fading rainbows, and double-rainbow scenes can mean.',
    caseStudies: [
      {
        title: 'You see a clear bright rainbow',
        description:
          'Blocked flow is opening. Positive news or emotional relief may be approaching.',
      },
      {
        title: 'You walk toward the rainbow',
        description:
          'Motivation is stabilizing. Your goals are becoming clearer and more actionable.',
      },
      {
        title: 'The rainbow fades quickly',
        description:
          'Opportunity windows may be short. The dream asks for timely action rather than hesitation.',
      },
      {
        title: 'You see a double rainbow',
        description:
          'Multiple supportive streams can align at once, especially in relationships and resources.',
      },
    ],
    relatable: [
      'It appears after prolonged difficulty when recovery finally begins.',
      'People near a long-awaited breakthrough often report this dream.',
      'It can mark the return of trust in the future after disappointment.',
    ],
  },
  {
    slug: 'gift-dream',
    name: 'Gift Dream',
    dreamLabel: 'gift dream',
    symbol: 'recognition, exchange, and relational balance',
    sensory: 'wrapping paper sounds, anticipation, and surprise',
    focus: 'balancing giving and receiving without resentment',
    actionTip: 'Send one clear message of appreciation to someone who supported you.',
    tradition: 'linked with relationship luck and support from helpful people',
    metaTitle: 'Gift Dream Meaning: Recognition, Opportunity, and Relationship Flow',
    metaDescription:
      'Gift dreams often reflect acknowledgment and exchange dynamics. Explore what receiving, giving, losing, or choosing gifts may reveal.',
    caseStudies: [
      {
        title: 'You receive a gift',
        description:
          'A need for recognition is active, and real opportunities for support may also be arriving.',
      },
      {
        title: 'You choose a gift',
        description:
          'You are carefully deciding how to approach someone and what role to play in the relationship.',
      },
      {
        title: 'You lose a gift',
        description:
          'You fear missing goodwill or opportunity due to hesitation or poor timing.',
      },
      {
        title: 'You give a gift',
        description:
          'You are ready to lead relational tone with generosity while keeping healthy boundaries.',
      },
    ],
    relatable: [
      'This dream appears when desire for appreciation grows stronger.',
      'It is common when gratitude exists but has not been expressed clearly.',
      'It can mark imbalance in relational exchange that now needs recalibration.',
    ],
  },
  {
    slug: 'love-dream',
    name: 'Dream About Someone You Love',
    dreamLabel: 'dream about someone you love',
    symbol: 'attachment, longing, and emotional expression',
    sensory: 'a vivid face, voice, or emotional pull during the scene',
    focus: 'wanting connection while holding back direct expression',
    actionTip: 'Reach out to one person you care about with a simple sincere message.',
    tradition: 'read as a sign of relationship transition and emotional release',
    metaTitle: 'Dream About Someone You Love Meaning: Longing, Bond, and Clarity',
    metaDescription:
      'Dreams about someone you love often reflect attachment needs and unspoken feelings. Learn what closeness, distance, conflict, and disappearing scenes can indicate.',
    caseStudies: [
      {
        title: 'You spend warm time together',
        description:
          'You are seeking deeper emotional connection and shared safety in waking life.',
      },
      {
        title: 'They move farther away',
        description:
          'Distance anxiety is active. The dream asks for honest communication before assumptions harden.',
      },
      {
        title: 'You fight with them',
        description:
          'Unspoken words are accumulating pressure. Emotional truth needs a healthier channel.',
      },
      {
        title: 'They appear and disappear',
        description:
          'Fear of loss or post-separation longing is being processed through symbolic replay.',
      },
    ],
    relatable: [
      'People carrying unsaid feelings toward someone close often report this dream.',
      'It appears during periods of separation from meaningful relationships.',
      'It can become vivid when love and anxiety are rising at the same time.',
    ],
  },
  {
    slug: 'romance-dream',
    name: 'Romance Dream',
    dreamLabel: 'romance dream',
    symbol: 'intimacy desire, emotional vitality, and self-recognition',
    sensory: 'warm closeness, excitement, and tender interaction',
    focus: 'the need to feel emotionally chosen, connected, and alive',
    actionTip: 'Take one action today that supports intimacy: honest contact or deeper self-care.',
    tradition: 'connected with relationship luck and unresolved emotional desire',
    metaTitle: 'Romance Dream Meaning: Intimacy, Desire, and Emotional Needs',
    metaDescription:
      'Romance dreams often reflect emotional hunger, hope, and relationship decisions. Understand what unknown partner, ideal partner, breakup, or mixed-feeling romance scenes can mean.',
    caseStudies: [
      {
        title: 'You date someone unknown',
        description:
          'A new kind of connection is desired. The dream points to unmet intimacy needs, not prediction.',
      },
      {
        title: 'You date someone you already like',
        description:
          'Your feelings are mature enough for expression. The dream highlights timing and courage.',
      },
      {
        title: 'The romance ends in the dream',
        description:
          'Old heartbreak material may still shape present expectations and fear responses.',
      },
      {
        title: 'The romance feels exciting but confusing',
        description:
          'Desire and fear are active together. A relational decision may be approaching.',
      },
    ],
    relatable: [
      'It often appears when loneliness and desire for closeness increase together.',
      'People hesitating to express attraction commonly report this dream.',
      'It can signal readiness to re-enter connection after a long emotional pause.',
    ],
  },
]

type GeneratedDreamSeed = {
  slug: string
  name: string
  dreamLabel: string
  symbol: string
  sensory: string
  focus: string
  actionTip: string
  tradition: string
  metaHook: string
}

const generatedDreamSeeds: GeneratedDreamSeed[] = [
  {
    slug: 'lost-dream',
    name: 'Lost Item Dream',
    dreamLabel: 'lost item dream',
    symbol: 'loss anxiety and value awareness',
    sensory: 'searching pockets, bags, and familiar places in a rush',
    focus: 'feeling scattered and afraid of missing something important',
    actionTip: 'Set one simple tracking rule for your most important task or object today.',
    tradition: 'a warning to protect resources before they leak',
    metaHook: 'Lost-item dreams often appear when mental load is high and priorities are diffuse.',
  },
  {
    slug: 'maze-dream',
    name: 'Getting Lost Dream',
    dreamLabel: 'getting lost dream',
    symbol: 'direction uncertainty and identity transition',
    sensory: 'unfamiliar streets and repeated turns',
    focus: 'difficulty choosing between competing paths',
    actionTip: 'Choose one path and commit for seven days before re-evaluating.',
    tradition: 'a sign to pause and recheck direction',
    metaHook: 'Getting-lost dreams usually signal decision fatigue rather than bad luck.',
  },
  {
    slug: 'elevator-dream',
    name: 'Elevator Dream',
    dreamLabel: 'elevator dream',
    symbol: 'status shifts and control of pace',
    sensory: 'sudden rising or falling in a closed space',
    focus: 'pressure to move faster than readiness',
    actionTip: 'Define one growth target and one personal limit before taking the next leap.',
    tradition: 'a marker of changing rank and timing',
    metaHook: 'Elevator dreams track sudden movement in responsibility, confidence, or social position.',
  },
  {
    slug: 'stairs-dream',
    name: 'Stairs Dream',
    dreamLabel: 'stairs dream',
    symbol: 'gradual growth and effort',
    sensory: 'heavy breath and step-by-step movement',
    focus: 'progress anxiety in long projects',
    actionTip: 'Finish one small step end-to-end before starting another.',
    tradition: 'a symbol of steady advancement',
    metaHook: 'Stairs dreams often highlight process discipline more than instant results.',
  },
  {
    slug: 'train-dream',
    name: 'Train Dream',
    dreamLabel: 'train dream',
    symbol: 'life direction and timing windows',
    sensory: 'platform announcements and rail vibration',
    focus: 'fear of missing the right timing',
    actionTip: 'Decide one delayed schedule choice today and lock it in.',
    tradition: 'a sign of journey luck and timing',
    metaHook: 'Train dreams usually appear when plans require commitment to a timeline.',
  },
  {
    slug: 'bus-dream',
    name: 'Bus Dream',
    dreamLabel: 'bus dream',
    symbol: 'group pace and social adaptation',
    sensory: 'crowded seats, frequent stops, and route shifts',
    focus: 'balancing personal needs with collective demands',
    actionTip: 'Adjust one boundary around your daily schedule.',
    tradition: 'an indicator of movement through shared fate',
    metaHook: 'Bus dreams often reflect life lived on other people\'s timetables.',
  },
  {
    slug: 'airplane-dream',
    name: 'Airplane Dream',
    dreamLabel: 'airplane dream',
    symbol: 'major expansion and high-stakes change',
    sensory: 'takeoff pressure and turbulence',
    focus: 'ambition mixed with fear of losing control',
    actionTip: 'Add one risk check to your biggest goal this week.',
    tradition: 'linked to distant travel and major opportunity',
    metaHook: 'Airplane dreams commonly signal bold growth that needs structure.',
  },
  {
    slug: 'boat-dream',
    name: 'Boat Dream',
    dreamLabel: 'boat dream',
    symbol: 'emotional navigation and resilience',
    sensory: 'rocking water and shifting balance',
    focus: 'maintaining direction in uncertain conditions',
    actionTip: 'Simplify your route and protect energy before pushing speed.',
    tradition: 'a sign of passage through change safely',
    metaHook: 'Boat dreams often appear when you are crossing an emotional transition.',
  },
  {
    slug: 'school-dream',
    name: 'School Dream',
    dreamLabel: 'school dream',
    symbol: 'learning pressure and evaluation memory',
    sensory: 'classroom noise and test-day tension',
    focus: 'fear of being judged by performance',
    actionTip: 'Define success by process quality for one day.',
    tradition: 'tied to honor, study, and document luck',
    metaHook: 'School dreams often revive old evaluation patterns in current challenges.',
  },
  {
    slug: 'office-dream',
    name: 'Office Dream',
    dreamLabel: 'office dream',
    symbol: 'role pressure and recognition',
    sensory: 'meetings, deadlines, and notification overload',
    focus: 'conflict between output and wellbeing',
    actionTip: 'Set one non-negotiable work boundary today.',
    tradition: 'a modern form of career and position fortune',
    metaHook: 'Office dreams usually reflect stress around responsibility and visibility.',
  },
  {
    slug: 'moving-dream',
    name: 'Moving House Dream',
    dreamLabel: 'moving house dream',
    symbol: 'transition of foundation and identity',
    sensory: 'packing boxes and entering unfamiliar rooms',
    focus: 'letting go of old structure while building a new one',
    actionTip: 'Release one outdated routine and replace it with a stable habit.',
    tradition: 'a signal of household fortune shifting',
    metaHook: 'Moving dreams often mark a life chapter change that needs practical reorganization.',
  },
  {
    slug: 'cleaning-dream',
    name: 'Cleaning Dream',
    dreamLabel: 'cleaning dream',
    symbol: 'reset, order, and emotional clearing',
    sensory: 'sweeping, wiping, and visible before-after contrast',
    focus: 'need to reduce noise and regain control',
    actionTip: 'Clean one physical zone to reset mental focus.',
    tradition: 'a sign of clearing stagnant energy',
    metaHook: 'Cleaning dreams usually appear when your system wants simplicity and order.',
  },
  {
    slug: 'rain-dream',
    name: 'Rain Dream',
    dreamLabel: 'rain dream',
    symbol: 'emotional release and renewal',
    sensory: 'steady rainfall and wet skin',
    focus: 'carrying feelings without expression',
    actionTip: 'Name one emotion directly and communicate it safely.',
    tradition: 'often read as fertility and replenishing fortune',
    metaHook: 'Rain dreams often represent healthy release after emotional pressure.',
  },
  {
    slug: 'snow-dream',
    name: 'Snow Dream',
    dreamLabel: 'snow dream',
    symbol: 'pause, purity, and quiet recalibration',
    sensory: 'cold air and muted sound',
    focus: 'need for stillness before next action',
    actionTip: 'Slow one decision and gather facts before moving.',
    tradition: 'can signal both blessing and caution depending on context',
    metaHook: 'Snow dreams often emerge when your mind needs calm to reset perspective.',
  },
  {
    slug: 'wind-dream',
    name: 'Wind Dream',
    dreamLabel: 'wind dream',
    symbol: 'invisible change and environmental pressure',
    sensory: 'strong gusts and shifting direction',
    focus: 'feeling moved by forces outside your control',
    actionTip: 'Reinforce one grounding routine today.',
    tradition: 'linked to directional energy and seasonal movement',
    metaHook: 'Wind dreams often mirror rapid change in social or emotional climate.',
  },
  {
    slug: 'mountain-dream',
    name: 'Mountain Dream',
    dreamLabel: 'mountain dream',
    symbol: 'long-term goals and endurance',
    sensory: 'steep climbs and summit distance',
    focus: 'persistence under sustained demand',
    actionTip: 'Define the next step, not the entire mountain.',
    tradition: 'a sign of stable rise through effort',
    metaHook: 'Mountain dreams usually emphasize patience, stamina, and strategic pacing.',
  },
  {
    slug: 'flower-dream',
    name: 'Flower Dream',
    dreamLabel: 'flower dream',
    symbol: 'emotional opening and creative vitality',
    sensory: 'color saturation and fragrance',
    focus: 'desire for beauty, connection, and affirmation',
    actionTip: 'Nourish one joy source that restores energy.',
    tradition: 'associated with celebration and relationship luck',
    metaHook: 'Flower dreams often appear when your emotional life is beginning to open again.',
  },
  {
    slug: 'tree-dream',
    name: 'Tree Dream',
    dreamLabel: 'tree dream',
    symbol: 'rooted growth and life stability',
    sensory: 'bark texture and branch movement',
    focus: 'balancing expansion with grounding',
    actionTip: 'Protect one foundational habit that keeps you steady.',
    tradition: 'linked to longevity and family strength',
    metaHook: 'Tree dreams often reflect how stable your inner foundation feels.',
  },
  {
    slug: 'fruit-dream',
    name: 'Fruit Dream',
    dreamLabel: 'fruit dream',
    symbol: 'results, reward, and timing of harvest',
    sensory: 'taste, ripeness, and color',
    focus: 'readiness to receive outcomes',
    actionTip: 'Complete one nearly finished task today.',
    tradition: 'a sign of yield, prosperity, and family blessing',
    metaHook: 'Fruit dreams usually point to harvest timing and how well you finish cycles.',
  },
  {
    slug: 'eating-dream',
    name: 'Eating Dream',
    dreamLabel: 'eating dream',
    symbol: 'nourishment, desire, and emotional hunger',
    sensory: 'flavor intensity and fullness',
    focus: 'unmet needs for care, rest, or recognition',
    actionTip: 'Identify one real need and meet it directly.',
    tradition: 'connected with receiving fortune and sustenance',
    metaHook: 'Eating dreams often mirror what your life is trying to take in or replenish.',
  },
  {
    slug: 'cooking-dream',
    name: 'Cooking Dream',
    dreamLabel: 'cooking dream',
    symbol: 'transformation through effort and care',
    sensory: 'heat, aroma, and timing control',
    focus: 'pressure to produce and provide',
    actionTip: 'Improve one process step instead of forcing speed.',
    tradition: 'tied to household harmony and incoming abundance',
    metaHook: 'Cooking dreams often show how you process emotion into practical action.',
  },
  {
    slug: 'bath-dream',
    name: 'Bath Dream',
    dreamLabel: 'bath dream',
    symbol: 'cleansing and nervous-system recovery',
    sensory: 'water temperature and bodily relief',
    focus: 'need to reset after emotional or social strain',
    actionTip: 'Schedule recovery before your energy crashes.',
    tradition: 'a sign of washing away stagnant luck',
    metaHook: 'Bath dreams usually appear when your system requests restoration, not more output.',
  },
  {
    slug: 'toilet-dream',
    name: 'Toilet Dream',
    dreamLabel: 'toilet dream',
    symbol: 'release, privacy, and boundary hygiene',
    sensory: 'urgency and search for a safe space',
    focus: 'difficulty expressing what needs to leave',
    actionTip: 'Clear one backlog conversation or task today.',
    tradition: 'often linked with release and money flow',
    metaHook: 'Toilet dreams often signal blocked release and the need for cleaner boundaries.',
  },
  {
    slug: 'clothes-dream',
    name: 'Clothes Dream',
    dreamLabel: 'clothes dream',
    symbol: 'social identity and self-presentation',
    sensory: 'fabric fit and appearance detail',
    focus: 'tension between authenticity and approval',
    actionTip: 'Choose one context where you present yourself more honestly.',
    tradition: 'connected to honor, status, and public perception',
    metaHook: 'Clothes dreams often reveal how you are negotiating role and identity.',
  },
  {
    slug: 'shoes-dream',
    name: 'Shoes Dream',
    dreamLabel: 'shoes dream',
    symbol: 'direction, mobility, and practical readiness',
    sensory: 'fit, weight, and walking comfort',
    focus: 'whether your current path is sustainable',
    actionTip: 'Adjust one plan to match your real capacity.',
    tradition: 'a sign of journey luck and life direction',
    metaHook: 'Shoe dreams often track whether your next path truly fits you.',
  },
  {
    slug: 'bag-dream',
    name: 'Bag Dream',
    dreamLabel: 'bag dream',
    symbol: 'responsibility load and personal resources',
    sensory: 'carrying weight and strap pressure',
    focus: 'burden management and priority control',
    actionTip: 'Remove one unnecessary obligation from your week.',
    tradition: 'related to safeguarding assets',
    metaHook: 'Bag dreams often show what you are carrying and what you need to put down.',
  },
  {
    slug: 'phone-dream',
    name: 'Phone Dream',
    dreamLabel: 'phone dream',
    symbol: 'communication pressure and connection boundaries',
    sensory: 'ringing, vibration, and screen failure',
    focus: 'tension between availability and exhaustion',
    actionTip: 'Separate urgent replies from non-urgent noise.',
    tradition: 'a modern form of message and relationship fortune',
    metaHook: 'Phone dreams often mirror overload in communication and social expectations.',
  },
  {
    slug: 'photo-dream',
    name: 'Photo Dream',
    dreamLabel: 'photo dream',
    symbol: 'memory curation and self-story',
    sensory: 'framing, focus, and shutter moments',
    focus: 'desire to preserve meaning and identity',
    actionTip: 'Capture one memory for yourself, not for performance.',
    tradition: 'linked to reputation and legacy traces',
    metaHook: 'Photo dreams often ask what you are choosing to remember and why.',
  },
  {
    slug: 'letter-dream',
    name: 'Letter Dream',
    dreamLabel: 'letter dream',
    symbol: 'delayed truth and meaningful communication',
    sensory: 'envelope texture and handwriting',
    focus: 'waiting for clarity or closure',
    actionTip: 'Send one message you have been postponing.',
    tradition: 'tied to document luck and incoming news',
    metaHook: 'Letter dreams often appear when words need more intention and depth.',
  },
  {
    slug: 'travel-dream',
    name: 'Travel Dream',
    dreamLabel: 'travel dream',
    symbol: 'exploration, change, and perspective shift',
    sensory: 'packing, transit, and unfamiliar scenery',
    focus: 'readiness to leave old routines',
    actionTip: 'Take one action that expands perspective today.',
    tradition: 'a sign of movement luck and new encounters',
    metaHook: 'Travel dreams usually reflect desire for expansion with uncertainty about route.',
  },
  {
    slug: 'hospital-dream',
    name: 'Hospital Dream',
    dreamLabel: 'hospital dream',
    symbol: 'healing, vulnerability, and support systems',
    sensory: 'waiting rooms, medical sounds, and sterile atmosphere',
    focus: 'recognition that recovery requires help',
    actionTip: 'Do one preventive health or stress check this week.',
    tradition: 'a warning-and-recovery symbol depending on tone',
    metaHook: 'Hospital dreams often signal that repair must be prioritized before performance.',
  },
  {
    slug: 'surgery-dream',
    name: 'Surgery Dream',
    dreamLabel: 'surgery dream',
    symbol: 'deep correction and decisive change',
    sensory: 'bright lights, precision, and tension',
    focus: 'willingness to face discomfort for long-term repair',
    actionTip: 'Address one root problem instead of another surface fix.',
    tradition: 'can signify cutting away misfortune to reset flow',
    metaHook: 'Surgery dreams usually reflect readiness for structural rather than cosmetic change.',
  },
]

function createGeneratedDreamConfig(seed: GeneratedDreamSeed): DreamConfig {
  return {
    slug: seed.slug,
    name: seed.name,
    dreamLabel: seed.dreamLabel,
    symbol: seed.symbol,
    sensory: seed.sensory,
    focus: seed.focus,
    actionTip: seed.actionTip,
    tradition: seed.tradition,
    metaTitle: `${seed.name} Meaning: Patterns, Pressure, and Direction`,
    metaDescription: `${seed.metaHook} Explore common ${seed.dreamLabel} scenes with practical interpretation and grounded next steps.`,
    caseStudies: [
      {
        title: `${seed.name} in a calm setting`,
        description: `When the scene feels clear, your mind is integrating ${seed.symbol} with more stability.`,
      },
      {
        title: 'You feel blocked or delayed',
        description: `This usually reflects ${seed.focus} and the cost of postponing one key decision.`,
      },
      {
        title: 'The scene becomes intense',
        description: `Escalation often signals accumulated tension around ${seed.symbol} that needs direct handling.`,
      },
      {
        title: 'You regain control before waking',
        description: 'This suggests resilience is active and practical action can quickly improve the outcome.',
      },
    ],
    relatable: [
      `It often appears when ${seed.symbol} becomes a practical concern in daily life.`,
      `People under sustained pressure around ${seed.focus} report this dream frequently.`,
      'It can repeat until one concrete action reduces uncertainty.',
    ],
  }
}

const generatedDreamConfigs: DreamConfig[] = generatedDreamSeeds.map(createGeneratedDreamConfig)
const dreamConfigs: DreamConfig[] = [...coreDreamConfigs, ...generatedDreamConfigs]

const dreamData = Object.fromEntries(
  dreamConfigs.map((config) => [
    config.slug,
    {
      title: config.metaTitle,
      description: config.metaDescription,
    },
  ])
) as Record<string, { title: string; description: string }>

const dreamNameBySlug = Object.fromEntries(
  dreamConfigs.map((config) => [config.slug, `${config.name} Meaning`])
) as Record<string, string>

const relatedDreamMap: Record<string, string[]> = {
  'snake-dream': ['money-dream', 'water-dream', 'chasing-dream', 'fire-dream', 'fall-dream'],
  'poop-dream': ['money-dream', 'lottery-dream', 'snake-dream', 'house-dream', 'gift-dream'],
  'teeth-dream': ['exam-dream', 'ghost-dream', 'death-dream', 'fall-dream', 'ex-dream'],
  'chasing-dream': ['exam-dream', 'ghost-dream', 'fall-dream', 'snake-dream', 'water-dream'],
  'flying-dream': ['fall-dream', 'water-dream', 'exam-dream', 'money-dream', 'death-dream'],
  'fall-dream': ['flying-dream', 'chasing-dream', 'exam-dream', 'death-dream', 'water-dream'],
  'death-dream': ['ghost-dream', 'water-dream', 'fall-dream', 'teeth-dream', 'ex-dream'],
  'pregnancy-dream': ['baby-dream', 'wedding-dream', 'water-dream', 'money-dream', 'ex-dream'],
  'ex-dream': ['wedding-dream', 'ghost-dream', 'money-dream', 'baby-dream', 'exam-dream'],
  'wedding-dream': ['ex-dream', 'baby-dream', 'pregnancy-dream', 'money-dream', 'ghost-dream'],
  'fire-dream': ['water-dream', 'money-dream', 'chasing-dream', 'death-dream', 'snake-dream'],
  'water-dream': ['fire-dream', 'chasing-dream', 'death-dream', 'pregnancy-dream', 'snake-dream'],
  'ghost-dream': ['death-dream', 'ex-dream', 'teeth-dream', 'water-dream', 'baby-dream'],
  'exam-dream': ['chasing-dream', 'teeth-dream', 'fall-dream', 'money-dream', 'ghost-dream'],
  'money-dream': ['snake-dream', 'fire-dream', 'exam-dream', 'wedding-dream', 'pregnancy-dream'],
  'baby-dream': ['pregnancy-dream', 'wedding-dream', 'money-dream', 'water-dream', 'ghost-dream'],
  'cat-dream': ['dog-dream', 'ex-dream', 'gift-dream', 'moon-dream', 'ghost-dream'],
  'dog-dream': ['cat-dream', 'tiger-dream', 'gift-dream', 'house-dream', 'thief-dream'],
  'deceased-dream': ['ghost-dream', 'death-dream', 'moon-dream', 'house-dream', 'water-dream'],
  'blood-dream': ['hair-dream', 'teeth-dream', 'fire-dream', 'car-accident-dream', 'death-dream'],
  'hair-dream': ['teeth-dream', 'blood-dream', 'cat-dream', 'exam-dream', 'death-dream'],
  'tiger-dream': ['snake-dream', 'dog-dream', 'fire-dream', 'money-dream', 'house-dream'],
  'car-accident-dream': ['chasing-dream', 'exam-dream', 'earthquake-dream', 'thief-dream', 'blood-dream'],
  'house-dream': ['thief-dream', 'fire-dream', 'baby-dream', 'wedding-dream', 'money-dream'],
  'lottery-dream': ['money-dream', 'poop-dream', 'gift-dream', 'rainbow-dream', 'snake-dream'],
  'ocean-dream': ['water-dream', 'rainbow-dream', 'moon-dream', 'flying-dream', 'earthquake-dream'],
  'thief-dream': ['house-dream', 'money-dream', 'car-accident-dream', 'dog-dream', 'chasing-dream'],
  'earthquake-dream': ['house-dream', 'car-accident-dream', 'death-dream', 'fire-dream', 'ocean-dream'],
  'moon-dream': ['rainbow-dream', 'deceased-dream', 'baby-dream', 'flying-dream', 'wedding-dream'],
  'rainbow-dream': ['flying-dream', 'ocean-dream', 'moon-dream', 'money-dream', 'lottery-dream'],
  'gift-dream': ['money-dream', 'wedding-dream', 'ex-dream', 'dog-dream', 'cat-dream'],
  'love-dream': ['romance-dream', 'ex-dream', 'wedding-dream', 'ghost-dream', 'moon-dream'],
  'romance-dream': ['love-dream', 'ex-dream', 'wedding-dream', 'cat-dream', 'gift-dream'],
}

function getSlugHash(slug: string): number {
  let hash = 0
  for (const ch of slug) {
    hash = (hash * 31 + ch.charCodeAt(0)) >>> 0
  }
  return hash
}

function getFallbackRelatedSlugs(slug: string): string[] {
  const slugs = dreamConfigs.map((config) => config.slug).filter((item) => item !== slug)
  if (slugs.length <= 5) return slugs

  const start = getSlugHash(slug) % slugs.length
  const result: string[] = []
  for (let i = 0; i < slugs.length && result.length < 5; i += 1) {
    result.push(slugs[(start + i) % slugs.length])
  }
  return result
}

function buildVoiceCopy(config: DreamConfig): EnVoiceCopy {
  const forcedIntroSensory = bespokeIntroSensoryEn[config.slug]
  const bespoke = bespokeContentEnBySlug[config.slug]
  if (bespoke) {
    return {
      ...bespoke.voice,
      introSensory: forcedIntroSensory ?? bespoke.voice.introSensory,
    }
  }

  return {
    introLead:
      `Dreams about a ${config.dreamLabel} usually appear when ${config.symbol} becomes a live issue in waking life.`,
    introSensory:
      forcedIntroSensory
      ?? `If details like ${config.sensory} felt vivid, your mind is likely asking for direct attention to that theme.`,
    psychLead:
      `Psychologically, this dream often reflects ${config.focus}. The symbolism is less prediction and more emotional mapping.`,
    psychDeep:
      'When a dream repeats, it usually means one theme is still unresolved and needs a practical adjustment in daily life.',
    tradition:
      `Traditional Korean interpretations often connect this dream to ${config.tradition}, while still emphasizing personal context and tone.`,
    closing: 'Take one grounded action today and let behavior complete the interpretation.',
  }
}

function buildFAQs(config: DreamConfig): FAQItem[] {
  const forcedIntroSensory = bespokeIntroSensoryEn[config.slug]
  const bespoke = bespokeContentEnBySlug[config.slug]
  if (bespoke) return bespoke.faqs

  const vividAnswer = forcedIntroSensory
    ? `${forcedIntroSensory} That usually reflects emotional priority, not literal prediction.`
    : `Vivid dreams are not automatically predictive. More often, they show strong emotional charge. Details like ${config.sensory} suggest your inner attention is sharply focused on that theme.`

  return [
    {
      question: `Is a ${config.dreamLabel} always lucky or always bad?`,
      answer:
        'Not always. The emotional tone matters most. If the dream felt steady, it often points to growth. If it felt chaotic, your stress system is asking for attention first.',
    },
    {
      question: 'What if I keep having the same dream?',
      answer:
        'Repeated dreams usually mean one theme is still unresolved. It is less a curse and more a reminder. Even one small change in real life can reduce the repetition.',
    },
    {
      question: 'If the dream felt extremely vivid, is it a premonition?',
      answer: vividAnswer,
    },
    {
      question: 'Should I make a major decision based only on this dream?',
      answer:
        'Use the dream as directional insight, not a final verdict. Pair it with real-world data, timing, and relationship context before making high-impact decisions.',
    },
    {
      question: 'What should I do right after waking up from this dream?',
      answer: `Write down the scene and emotion in 2-3 lines, then take one grounded action. ${config.actionTip}`,
    },
  ]
}

function AiAvatar() {
  return (
    <div className="w-8 h-8 rounded-full bg-amber-900/50 border border-amber-200/30 flex items-center justify-center text-base flex-shrink-0 mt-0.5 shadow-md">
      🌙
    </div>
  )
}

function SectionCard({
  label,
  icon,
  children,
}: {
  label: string
  icon: string
  children: ReactNode
}) {
  return (
    <div className="bg-white/85 border border-amber-200/60 rounded-2xl p-4 shadow-sm">
      <p className="text-amber-900/55 text-[11px] font-semibold uppercase tracking-wider mb-3">
        {icon} {label}
      </p>
      {children}
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = params.slug
  const dream = dreamData[slug]
  if (!dream) return {}

  const canonical = `${BASE_URL}/en/dream/${slug}`
  const koreanAlternate = `${BASE_URL}/dream/${slug}`

  return {
    title: dream.title,
    description: dream.description,
    alternates: {
      canonical,
      languages: {
        en: canonical,
        ko: koreanAlternate,
      },
    },
    openGraph: {
      title: dream.title,
      description: dream.description,
      url: canonical,
      locale: 'en_US',
      type: 'article',
    },
  }
}

export function generateStaticParams(): Array<{ slug: string }> {
  return dreamConfigs.map((config) => ({ slug: config.slug }))
}

export default function EnDreamPage({
  params,
}: {
  params: { slug: string }
}) {
  const config = dreamConfigs.find((c) => c.slug === params.slug)
  if (!config) return notFound()

  const voiceCopy = buildVoiceCopy(config)
  const faqs = buildFAQs(config)
  const relatedDreams = (relatedDreamMap[params.slug] ?? getFallbackRelatedSlugs(params.slug))
    .map((slug) => ({ slug, name: dreamNameBySlug[slug] }))
    .filter((item) => Boolean(item.name))

  return (
    <div className="min-h-screen px-4 py-14 relative z-10 dream-readable-en bg-gradient-to-b from-[#f7f1e7] via-[#f8f3ea] to-[#f3ede2]">
      <div className="max-w-xl mx-auto">
        <div className="mb-8">
          <Link
            href="/en"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/80 hover:bg-white border border-amber-300/60 text-amber-900 text-sm transition"
          >
            ← Back to English home
          </Link>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-10 text-slate-800">
          {config.name} Meaning
        </h1>

        <div className="space-y-5">
          <div className="flex justify-end">
            <div className="bg-amber-400 text-slate-900 px-4 py-3 rounded-2xl rounded-br-sm max-w-[78%] text-sm font-medium shadow-lg leading-relaxed">
              I had a {config.dreamLabel} last night. What is it trying to tell me? 😅
            </div>
          </div>

          <div className="flex items-start gap-3">
            <AiAvatar />
            <div className="bg-white/90 backdrop-blur-sm border border-amber-200/60 text-slate-800 px-4 py-3.5 rounded-2xl rounded-tl-sm max-w-[88%] text-sm leading-[1.85] shadow-sm space-y-2.5">
              <p>
                {voiceCopy.introLead}
              </p>
              <p className="text-slate-600">
                {voiceCopy.introSensory}
              </p>
            </div>
          </div>

          <div className="ml-11">
            <SectionCard label="Scene-by-Scene Meaning" icon="🔍">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {config.caseStudies.map((c, i) => (
                  <div
                    key={i}
                    className="bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-3"
                  >
                    <p className="text-slate-800 text-sm font-semibold mb-1.5">{c.title}</p>
                    <p className="text-slate-600 text-xs leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          <div className="flex items-start gap-3">
            <AiAvatar />
            <div className="bg-white/90 backdrop-blur-sm border border-amber-200/60 text-slate-800 px-4 py-3.5 rounded-2xl rounded-tl-sm max-w-[88%] text-sm leading-[1.85] shadow-sm space-y-2.5">
              <p className="text-sky-700/80 text-[11px] font-semibold uppercase tracking-wide">
                🧠 Psychology Lens
              </p>
              <p>
                {voiceCopy.psychLead}
              </p>
              <p className="text-slate-600">
                {voiceCopy.psychDeep}
              </p>
            </div>
          </div>

          <div className="ml-11">
            <div className="bg-amber-100/70 border border-amber-300/50 rounded-2xl px-4 py-3.5">
              <p className="text-amber-800/75 text-[11px] font-semibold uppercase tracking-wide mb-2">
                📜 Traditional Korean Reading
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                {voiceCopy.tradition}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <AiAvatar />
            <div className="bg-white/90 backdrop-blur-sm border border-amber-200/60 text-slate-800 px-4 py-3.5 rounded-2xl rounded-tl-sm max-w-[88%] text-sm leading-[1.85] shadow-sm">
              <p className="text-amber-800/75 text-[11px] font-semibold uppercase tracking-wide mb-3">
                💭 Who Has This Dream Often
              </p>
              <ul className="space-y-2">
                {config.relatable.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber-400 mt-0.5 flex-shrink-0 text-xs">●</span>
                    <span className="text-slate-700 text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ml-11">
            <SectionCard label="Frequently Asked Questions" icon="❓">
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-end">
                      <div className="bg-amber-100/70 border border-amber-300/50 text-amber-900 px-3 py-2 rounded-xl rounded-br-sm text-xs max-w-[88%] leading-relaxed">
                        {faq.question}
                      </div>
                    </div>
                    <div className="bg-white/90 border border-amber-200/60 text-slate-700 px-3 py-2.5 rounded-xl rounded-tl-sm text-xs leading-relaxed max-w-[90%]">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          <div className="flex items-start gap-3">
            <AiAvatar />
            <div className="bg-gradient-to-br from-amber-100/90 to-orange-50/90 backdrop-blur-sm border border-amber-300/50 text-slate-800 px-4 py-3.5 rounded-2xl rounded-tl-sm max-w-[88%] text-sm leading-[1.85] shadow-sm">
              <p className="text-amber-800/80 text-[11px] font-semibold uppercase tracking-wide mb-2.5">
                ✨ Today&apos;s takeaway
              </p>
              <p>
                {voiceCopy.closing}
              </p>
              <div className="mt-3 pt-2.5 border-t border-amber-300/40 text-amber-800/80 text-xs">
                💡 {config.actionTip}
              </div>
            </div>
          </div>

          <div className="ml-11">
            <DreamInputEn dreamLabel={config.dreamLabel} />
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />

        <div className="mt-12 p-5 rounded-2xl bg-white/75 border border-amber-200/50">
          <h2 className="text-sm font-semibold text-slate-600 mb-3">Related Dream Meanings</h2>
          <div className="flex flex-wrap gap-2">
            {relatedDreams.map((d) => (
              <Link
                key={d.slug}
                href={`/en/dream/${d.slug}`}
                className="px-3 py-1.5 rounded-lg bg-amber-100/70 hover:bg-amber-100 border border-amber-300/50 text-amber-900/80 text-xs transition hover:text-amber-900"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/en"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/80 hover:bg-white border border-amber-300/60 text-amber-900 text-sm transition"
          >
            ← Back to English home
          </Link>
        </div>
      </div>
    </div>
  )
}
