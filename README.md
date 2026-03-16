# Client Budget Form
**Carpenter's Homeless Prevention Program — Hesed House**

A mobile-friendly web form for collecting monthly household expense information from clients. Staff can fill it out on an iPhone, then print it or save it as a PDF directly from the browser.

---

## Accessing the Form

Open the following link in Safari on your iPhone or in any web browser on a computer:

**https://envoyprototype.github.io/RRH-Budget-Form/**

No app download or login is required.

---

## How to Use the Form

1. Enter the client's **Name** (this is the only required field).
2. The **Date** will automatically be set to today. You can change it if needed by tapping on it.
3. Fill in any monthly expense amounts that apply. Fields you leave blank are simply ignored.
4. The **Total Monthly Expenses** at the bottom updates automatically as you type.
5. When finished, tap **Print** to print or save as a PDF (see instructions below).
6. To start over, tap **Clear Form**. You will be asked to confirm before anything is erased.

---

## Printing from an iPhone

### Option 1 — Print to a Wireless Printer (AirPrint)

1. Fill out the form in Safari.
2. Tap the **Print** button at the top of the form.
3. Safari will open a print preview showing the form as a single page.
4. Tap **Printer** and select your AirPrint-compatible printer from the list.
5. Make sure **Paper Size** is set to **US Letter** and **Orientation** is set to **Portrait**.
6. Tap the blue **Print** button in the top right corner.

> **Note:** Your iPhone and printer must be connected to the same Wi-Fi network for AirPrint to work.

---

### Option 2 — Save as a PDF (No Printer Needed)

If you don't have access to a printer, you can save the completed form as a PDF file instead.

1. Fill out the form in Safari.
2. Tap the **Print** button at the top of the form.
3. Safari will open a print preview.
4. **Pinch outward** on the page preview with two fingers (like zooming into a photo). This will open the page as a PDF.
5. Tap the **Share** button (the box with an arrow pointing up) in the top right corner.
6. Choose where to save or send the PDF — for example:
   - **Save to Files** — saves it to your iPhone's Files app
   - **Mail** — attaches it to an email
   - **AirDrop** — sends it wirelessly to a nearby Mac or iPhone

---

## Printing from a Computer

1. Open the form in any web browser (Chrome, Safari, Edge, or Firefox).
2. Fill out the form.
3. Click the **Print** button at the top of the form.
4. In the print dialog, make sure:
   - **Paper size** is set to **Letter**
   - **Orientation** is set to **Portrait**
   - **Scale** is set to **100%**
5. Select your printer and click **Print**.

To save as a PDF on a computer, choose **Save as PDF** (or **Microsoft Print to PDF** on Windows) from the printer selection dropdown instead of selecting a physical printer.

---

## Project Files

This form is made up of three files that must be kept in the same folder:

| File | Purpose |
|---|---|
| `index.html` | The form structure and content |
| `styles.css` | All visual styling, including print layout |
| `script.js` | Automatic date, live total calculation, and clear form logic |

---

## Features

- **Mobile responsive** — single-column layout on phones, two-column on desktop
- **Print optimized** — always prints as a compact, single-page letter-sized document regardless of device
- **Live total** — monthly expense total updates automatically as values are entered
- **Auto date** — date field defaults to today's date
- **No server required** — runs entirely in the browser, no internet connection needed once loaded

---

## Making Changes

To update the list of expense categories, open `index.html` in a text editor and find the relevant section. Each row follows this pattern:

```html
<tr>
  <td class="cat">Category Name</td>
  <td class="amt"><input type="number" min="0" step="0.01" placeholder="0.00" data-total></td>
</tr>
```

To change colors or fonts, edit `styles.css`. The main brand color variables are at the top of the file:

```css
--blue:   #1a3a5c;
--accent: #c0392b;
```

---

*Form ID: C02B Client Budget — Last updated March 2026*
