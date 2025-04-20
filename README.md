# 🗨️ DexasChat

**DexasChat** je jednoduchá webová chatovacia aplikácia napísaná v HTML, CSS, JavaScripte a PHP. Dá sa spustiť na bežnom webhostingu alebo lokálne cez XAMPP. Každý používateľ si môže zvoliť meno a okamžite si začať písať s ostatnými.

---

## ✨ Funkcie

- 💬 Live chat medzi viacerými používateľmi
- 🧑‍💻 Zadanie mena cez input
- ⚡ Odosielanie správ cez tlačidlo alebo klávesu Enter
- 🎨 Moderný tmavý dizajn
- 📦 Jednoduchá inštalácia bez databázy (uloženie do `chat.txt`)

---

## 📁 Struktúra projektu

```
/
├── index.html       # Hlavná stránka s chatom
├── style.css        # Moderný štýl rozhrania
├── script.js        # Klientská logika - načítanie, odoslanie správ
├── write.php        # Ukladanie správ
├── read.php         # Načítanie správ zo servera
├── README.md        # README subor
└── chat.txt         # Súbor, kde sa ukladajú správy
```

---

## 🚀 Inštalácia

1. Stiahni alebo naklonuj projekt:
```bash
git clone https://github.com/DenisVargaeu/webchat.git
```

2. Nahraj projekt na svoj webhosting **alebo** spusti lokálne cez [XAMPP](https://www.apachefriends.org/index.html).

3. Uisti sa, že súbor `chat.txt` má povolenie na zápis (`chmod 666` na Linuxe alebo povolenie zápisu na hostingu).

---

## 🛡️ Bezpečnostné poznámky

- Tento chat je určený na **výučbu alebo menšie súkromné použitie**.
- V produkcii odporúčame upraviť kód pre ochranu pred XSS a súbežným zápisom.

---

## 📸 Náhľad

![Ukážka chatu](https://via.placeholder.com/600x300?text=DexasChat+Preview)

---

## 💡 Nápady na vylepšenie

- Uloženie správ do databázy (napr. MySQL)
- Systém používateľov a prihlásenie
- Emoji podpora, notifikácie, svetlý režim
- WebSocket pre instantný chat

---

## 🧠 Autor

Vyrobené s 💚 Denisom (11 ročný programátor)
