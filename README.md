# shivar07 — Interactive WebOS Portfolio

I am a developer and robotics student building an interactive engineering HUD & personal WebOS inspired by Stark Industries and JARVIS.

GitHub: https://github.com/shivar07/J.A.R.V.I.S.-OS.git

---

## 🎨 Design Inspirations & Sources

- **Telemetry System:** Powered by the open-source [Hack Club Hackatime](https://github.com/hackclub/hackatime) API.

---

## 🛠️ Local Setup

Since this is a lightweight static web app, no complex build tools or compilers are needed:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shivar07/J.A.R.V.I.S.-OS.git
   cd J.A.R.V.I.S.-OS
   ```
2. **Launch the application:**
   - Double-click `index.html` to run it directly in your browser.
   - Alternatively, open the directory in VS Code and run the **Live Server** extension.

## ⚙️ Environment Variables & Gemini AI Setup

To enable real-time J.A.R.V.I.S. AI conversational responses via Google Gemini, set your API key:

1. **Local Setup:** Create a `.env` file in the project root:
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key
   ```
2. **Netlify Deployment:** Add `GEMINI_API_KEY` under **Site configuration > Environment variables** in your Netlify dashboard.

---

## 🤖 AI Usage Declaration

AI was used as an assistant to help set up Netlify serverless functions for open-source Hackatime data fetching, handling CORS/redirect logic, and minor UI/code quality fine-tuning.


