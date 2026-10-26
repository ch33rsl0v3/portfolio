#!/bin/sh
# resume/resume_{en,ru}.html -> public/resume_{en,ru}.pdf (served at /portfolio/resume_*.pdf). Needs Microsoft Edge.
cd "$(dirname "$0")/.."
for l in en ru; do
  "/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$(cygpath -w "$PWD/public/resume_$l.pdf")" "file:///$(cygpath -m "$PWD/resume/resume_$l.html")"
done
