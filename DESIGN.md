---
name: Film Foundation (derived from the Siena Film Foundation reference reel)
scope: Showreel, Frames gallery, Work tickets and /work/$slug project pages
colors:
  canvas: "#000000" # black gutter between film cards, gallery, notes
  cream: "#F2EFE7" # ticket UI, project page paper
  ink: "#0A0A0A" # type on cream, black ticket headers
  paper-line: "#0A0A0A33" # dotted / hairline rules on cream
  film-line: "#FFFFFF40" # dotted rules on black
  cinema-red: "#E3120B" # the only accent: play glyph, active note, focus ring
  on-film: "#FFFFFF" # type over footage
typography:
  display:
    { family: "Archivo", width: 75, weight: 700, case: upper, tracking: "-0.02em", leading: 0.86 }
  title-xl: "clamp(2.75rem, 7.5vw, 8.5rem)"
  title-lg: "clamp(2rem, 4.5vw, 4.5rem)"
  title-md: "clamp(1.25rem, 2.2vw, 2rem)"
  body: { family: "Archivo", width: 100, weight: 500, size: "0.8rem", case: upper }
  micro: { family: "EB Garamond", weight: 500, size: "0.62rem", case: upper, tracking: "0.32em" }
rounded:
  card: "1.25rem" # film cards and trailer card
  pill: "999px"
  ticket-notch: "7px" # scooped corner radius on tickets
spacing:
  gutter: "clamp(0.75rem, 2vw, 2rem)"
  card-gap: "4svh"
---

# Look

A film festival programme printed on two stocks: **black** for footage and **cream** for paper.
Footage is always full-bleed inside a rounded card on black. Interface chrome is cream
"tickets" with scooped corners, dotted hairline dividers and tiny serif micro-labels.

## Rules

- Titles are condensed uppercase Archivo, tight leading (0.86), set big and bottom-left.
- Every block of facts is a ruled table: micro serif label on the left, Archivo value on the
  right, a hairline above and below each row.
- Micro labels (EB Garamond, 0.32em tracking) sit above every value. Never more than 3 words.
- Cinema red appears at most once per screen: the play glyph, the active note, or focus.
- Tickets: cream on footage, ink on cream. Scooped corners via mask, dotted inner dividers.
- Motion: cards stack and the one beneath scales back; titles glitch (horizontal slice shift)
  when a card becomes active and on hover; a circular label cursor follows on footage.
- No gradients other than the bottom/left scrim that keeps type legible over footage.
- No ratings or critic quotes unless real; highlight lines carry facts about the craft.

## Components

- **Film card**: 88svh, rounded card, muted looping preview, scrim, top-left index + project,
  bottom-left micro type label + title + credit table, right column of highlights, EXPLORE
  ticket button bottom-right.
- **Ticket switcher**: fixed top-right; thumb + current title + chevron, meta row of three
  dotted cells; opens a list of every item with thumbs. Sibling square ticket = menu.
- **Menu panel**: cream, numbered links (01 WORK …), contact row, copyright line.
- **Trailer card**: rounded footage card that grows from 82% to 100% width on scroll, centred
  red play glyph with "WATCH" micro label in red.
- **Credits grid**: ink header strips with cream micro labels over cream cells of names.
- **Gallery**: black, "pill" label, staggered two-row strip of stills.
- **Notes**: arched dotted frames on black, red "||" mark, highlighted card in red type.
- **Next ticket**: cream "ALL WORK / EXPLORE" stub + ink "NEXT" card with footage on the right.
- **Footer**: three stacked display words between full-width hairlines, then contact columns.
