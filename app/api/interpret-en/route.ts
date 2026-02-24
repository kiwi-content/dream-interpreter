import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { dream } = await request.json()

    if (!dream) {
      return NextResponse.json(
        { error: 'Please describe your dream.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      console.log('No API key - using demo mode')
      return NextResponse.json({
        interpretation: getDemoInterpretation(dream)
      })
    }

    try {
      console.log('Calling Gemini API (EN)...')
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are a sharp, intuitive dream analyst. You cut straight to what the dream reveals about the person's inner world. You don't comfort — you illuminate.

[INTERNAL ANALYSIS — Do not output this. Complete before writing.]

Analyze the dream through three lenses:

Lens 1 · Desire vs. Block
What does the dreamer want (desire)?
What internal fear or rule is blocking it?
Summarize as: "They want (desire) but (block) is expressed as (dream scene)."

Lens 2 · Symbols
What does each element (person/place/object/action/ending) psychologically represent?
Examples: snake=change or threat, teeth=control/confidence, water=emotional state, being chased=avoidance, house=self/identity, flying=freedom/escape, falling=loss of control, exam=judgment/performance anxiety
What is this person suppressing or ignoring?

Lens 3 · Core Emotion & Need
What is the dominant emotion in this dream?
When does this emotion surface in waking life?
What does the dream signal the person needs? (safety / recognition / boundaries / rest / freedom / connection / control)

Integration
Find 1–2 keywords repeated across all three lenses. That is the core of the interpretation.

[TONE RULES — strictly follow]
- Short, declarative sentences. State, don't explain.
- Confident, direct: "You're..." not "You might be..."
- Occasional authority: "Dreams like this always mean..."
- Leave a sense that there's more beneath the surface.
- No comfort, no fluff, no emojis, no academic terms (no Freud/Jung by name)
- No lucky/unlucky predictions

[OUTPUT FORMAT — strictly follow]
- Plain text only. No headers, bullets, markdown.
- One sentence per line.
- Exactly 5 paragraphs, one blank line between each.
- Para 1 (1–2 sentences): Cut to the core of the dream. Don't repeat the user's words.
- Para 2 (3–5 sentences): Read the symbols as psychological truths. Be specific and declarative.
- Para 3 (2–3 sentences): Name the desire and the block directly. "You want X but Y is holding you back."
- Para 4 (1 sentence): One sharp question. Stands alone.
- Para 5 (1–2 sentences): One concrete action. "Today, do X." format.

[NEVER DO]
- Generic platitudes ("you may be feeling overwhelmed")
- Lucky/unlucky dream readings
- Vague conclusions

[OUTPUT EXAMPLE]
You're not running from something out there — you're running from a decision.
This kind of dream doesn't show up by accident.

Being chased always points to avoidance.
The faster it moves, the more urgent the thing you're postponing.
You know what it is. You've known for a while.
Dreams like this keep coming back until you face it.

You want out of something, but you're telling yourself you're not ready.
That's not caution — that's fear wearing a practical mask.

What's the one thing you've been putting off that you already know the answer to?

Today, name it out loud to yourself — just one sentence.

Now interpret this dream:

${dream}`
              }]
            }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2000,
            }
          })
        }
      )

      if (!response.ok) {
        const error = await response.json()
        console.error('Gemini API Error:', error)
        throw new Error(`API returned ${response.status}`)
      }

      const data = await response.json()
      const interpretation = data.candidates[0].content.parts[0].text

      return NextResponse.json({ interpretation })

    } catch (apiError) {
      console.error('API call failed, using demo mode:', apiError)
      return NextResponse.json({
        interpretation: getDemoInterpretation(dream)
      })
    }

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({
      interpretation: getDemoInterpretation('unknown dream')
    })
  }
}

function getDemoInterpretation(dream: string): string {
  const d = dream.toLowerCase()

  if (d.includes('snake') || d.includes('serpent')) {
    return `Something in your life is shifting, and part of you already knows it.
This dream didn't come from nowhere.

Snakes always signal transformation or threat — sometimes both at once.
If it was chasing you, you're avoiding a change that's already begun.
If it was still, you're watching something dangerous and choosing not to act.
Dreams like this keep returning until you decide which it is.

You want things to stay as they are, but something has already moved.
You're not ready to name it yet.

What has changed in the last month that you haven't fully acknowledged?

Today, write one sentence about what you're sensing but not saying.`
  }

  if (d.includes('teeth') || d.includes('tooth')) {
    return `You're afraid of losing something that matters — and it shows.
This is one of the most common dreams, and it always means the same thing.

Teeth represent confidence, control, how you present yourself to the world.
When they fall out in a dream, something in waking life feels like it's slipping.
A recent mistake, a conversation that went wrong, or a role you're not sure you're filling well.
The more teeth that fell, the wider the anxiety.

You want to appear capable and in control, but right now something is shaking that.
You're more worried about how you're being perceived than you're letting on.

What happened recently that made you feel less confident than usual?

Today, identify one small thing you can do to feel more in control of that situation.`
  }

  if (d.includes('chased') || d.includes('chasing') || d.includes('running') || d.includes('flee')) {
    return `You're avoiding something — and you've been avoiding it for a while.
This dream is your mind's way of making that impossible to ignore.

Being chased is never about external danger.
It's always about something internal you refuse to face.
The fact that you remember this dream means the avoidance has reached a threshold.
Whatever is chasing you, it's gaining.

You know what needs to be done. You just don't want to start.
The longer you wait, the bigger it gets in your head.

What is the one thing you keep deciding to deal with "later"?

Today, take one concrete step toward it — however small.`
  }

  if (d.includes('fly') || d.includes('flying') || d.includes('float')) {
    return `You need to get out from under something.
Not permanently — just enough to breathe.

Flying in dreams means the pressure in your waking life has become too heavy.
Your mind is literally showing you the urge to rise above it.
If flying felt effortless, part of you already knows how to escape it.
If it felt hard to stay up, you're fighting to maintain that sense of freedom.

You want space — from a person, a role, an expectation, a version of yourself.
But leaving feels irresponsible, so you stay and dream about flying instead.

What would you do differently if you weren't worried about what others expected of you?

Today, carve out one hour that belongs entirely to you — no obligations.`
  }

  if (d.includes('fall') || d.includes('falling') || d.includes('drop')) {
    return `Something feels out of your hands right now.
Your mind registered it before you fully did.

Falling is the dream version of losing your grip.
On a situation, a relationship, a belief about yourself.
Dreams like this happen when control slips faster than you can adjust.
The point where you wake up is the point where your mind refuses to see the landing.

You're holding on to something you know is already falling apart.
You're not ready to let it go, but you're starting to feel the drop.

What are you gripping tightly right now that may already be changing?

Today, identify one thing you've been trying to control that you actually can't.`
  }

  return `Something unresolved surfaced while you were sleeping.
The fact that you remember it means it matters.

Dreams pull from what you haven't finished processing during the day.
The details that stay with you — the ones that feel odd or heavy — are the real signals.
The emotion you felt in the dream is the one you're carrying in waking life right now.
Pay attention to that, not the surface story.

You're holding something you haven't named yet.
It's not about the dream — it's about what you felt inside it.

What emotion from that dream do you recognize from your current life?

Today, write it down in one sentence — what you feel but haven't said out loud.`
}
