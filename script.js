const pdfUrl= encodeURIComponent('../../priya-lade-resume.pdf')
document.getElementById(`pdfViewer`).setAttribute(`src`, `pdfjs-dist/web/viewer.html?file=${pdfUrl}`);