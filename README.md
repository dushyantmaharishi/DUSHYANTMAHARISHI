# Online PDF Editor Suite

This project provides a lightweight web app for:

- Converting DOC/DOCX to PDF
- Converting XLS/XLSX to PDF
- Converting JPG/JPEG/PNG to PDF
- Converting PDF to JPG/JPEG/PNG
- Converting PDF to DOCX
- Converting PDF to XLSX (text extraction)
- Redacting specific terms inside PDFs

## Run locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Open http://localhost:5000.

## Notes

- Office-to-PDF conversions require LibreOffice installed and available on `PATH`.
- PDF-to-XLSX extracts line text into a workbook; it is not full table reconstruction.
