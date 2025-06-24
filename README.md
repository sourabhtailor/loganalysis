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
