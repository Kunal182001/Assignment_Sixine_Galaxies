# ✨ Luxury Skincare

Luxury Skincare is a beautifully animated and responsive landing page built for modern skincare brands. It showcases high-end design, smooth user experience, and engaging product presentation through the use of **GSAP animations**, **Tailwind CSS**, and **React.js**.

Whether on mobile, tablet, or desktop, this website provides a premium browsing experience with fluid transitions, interactive FAQ sections, and animated hover effects that reflect a truly luxurious aesthetic.

---
## 🚀 Features

- **Luxury-Inspired Design**: Soft tones, elegant fonts, and premium layout.
- **GSAP Animations**: Image reveals, text slide-ins, hover/tap interactions, and smooth FAQ expansion.
- **Responsive UI**: Looks stunning on mobile, tablet, and desktop screens.
- **FAQ Section**: Expand/collapse questions with smooth, animated transitions.
- **Product Highlights**: Best-seller blocks, "Shop Now" CTA, and engaging imagery.
- **Interactive Elements**: Hover & tap effects on buttons, cards, and icons.

---
## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Bundler**: Vite

---

## 🎨 Installation & Setup

Follow these steps to install and run the project locally:

### 1️⃣ Clone the Repository
```
 git clone  https://github.com/Kunal182001/Assignment_Sixine_Galaxies.git
 cd Assignment
```

### 2️⃣ Install Dependencies
```
 npm install
```

### 3️⃣ Install Tailwind CSS 4.0
```
 npm install tailwindcss @tailwindcss/vite
```

### 4️⃣ Configure Tailwind CSS in Vite
Edit **vite.config.js** and add the Tailwind plugin:
js
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

### 5️⃣ Import Tailwind CSS
In **index.css** or your main CSS file, add:
css
```
@import "tailwindcss";
```
### 6️⃣ Run the Project
```
 npm run dev
```
## 📁 Folder Structure

```
Movie_Vision/
├── public/            # Static files
├── src/
│   ├── assets/        # Images and icons
│   ├── components/    # Reusable UI components
│   ├── App.js         # Main application entry
│   └── index.js       # Root file
└── README.md          # Documentation
```

## 📌 Live Preview

Check out the live site **[here](https://assignment-sixine-galaxies.vercel.app/)**.

## 📝 License

This project is **open-source**. Feel free to use it, but please credit the repository if you do.

