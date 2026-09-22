# Yash — Creative Designer Portfolio

This is a complete editable static portfolio website for VS Code.

## Folder structure

```text
yash-creative-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── project-gallery.jpg
    ├── branding-print.jpg
    ├── design-focuses.jpg
    └── portfolio-and-poster.jpg
```

## Run in VS Code

1. Extract the ZIP.
2. Open the extracted folder in VS Code.
3. Open `index.html`.
4. Recommended: install the **Live Server** extension in VS Code.
5. Right-click `index.html` → **Open with Live Server**.

## Change your email

Open `script.js` and change:

```js
const YOUR_EMAIL = "your-email@example.com";
```

to your real email.

## Main places to edit

- Text/content → `index.html`
- Colors/layout/animations → `style.css`
- Form email + interactions → `script.js`
- Portfolio images → `assets/`

## Pricing

The current example prices are:
- Single Post: ₹499+
- Premium Post: ₹999+
- Post Pack: ₹2,499+

Change these directly in `index.html` if your charges are different.

## Important

This version is a static front-end portfolio. The Start Project form opens the visitor's default email application using `mailto:`. For a real online form that stores submissions or sends them automatically, connect a form/backend service later.
