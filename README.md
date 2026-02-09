# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# loganalysis

# 🧾 Web Server Log Analyzer

This is a simple **Bash shell script** to analyze Nginx/Apache-style access logs and output the following:

- ✅ Top 5 IP addresses with the most requests
- ✅ Top 5 most requested paths
- ✅ Top 5 HTTP response status codes
- ✅ Top 5 user agents

---

## 📂 Requirements

- Linux or macOS terminal
- Bash shell
- Standard Unix tools: `awk`, `sort`, `uniq`, `head`

---

## 📦 Files

- `log-analyzer.sh` — The main shell script
- Your web server access log file (e.g. `access.log`)

---

## 🚀 Usage

```bash
chmod +x log-analyzer.sh
./log-analyzer.sh /path/to/access.log

Project URL:-

https://roadmap.sh/projects/nginx-log-analyser
