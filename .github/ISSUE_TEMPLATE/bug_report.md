name: Bug Report
description: Nahlásiť chybu alebo problém
title: "[BUG]: "
labels: [bug]
body:
  - type: markdown
    attributes:
      value: |
        Ďakujeme, že si chceš nahlásiť chybu! Vyplň prosím všetky potrebné info nižšie 👇
  - type: input
    id: environment
    attributes:
      label: Prostredie
      description: Napr. verzia prehliadača, operačný systém...
      placeholder: "Chrome 122 / Windows 11"
    validations:
      required: true
  - type: textarea
    id: what-happened
    attributes:
      label: Čo sa stalo?
      description: Popíš problém čo najpresnejšie.
      placeholder: "Po kliknutí na tlačidlo sa nič nestane..."
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: Očakávané správanie
      description: Čo by sa malo stať?
      placeholder: "Po kliknutí by sa malo zobraziť okno..."
  - type: textarea
    id: steps
    attributes:
      label: Kroky na zopakovanie
      description: Ako sa dá chyba zopakovať?
      placeholder: |
        1. Otvor stránku
        2. Klikni na tlačidlo
        3. ...

