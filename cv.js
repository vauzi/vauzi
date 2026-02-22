function toggleDarkMode() { document.documentElement.classList.toggle('dark'); }

async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const element = document.getElementById("cv-content");
  const buttons = document.getElementById("action-buttons");
  const wasDark = document.documentElement.classList.contains("dark");
  
  buttons.style.display = "none";
  document.documentElement.classList.remove("dark");
  
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.style.transition = "none";
    el.style.opacity = "1";
    el.style.transform = "none";
  });

  try {
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false
    });

    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * pageWidth) / canvas.width;
    
    pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, imgHeight);
    pdf.save("Isman_Vauzi_Software_Engineer_CV.pdf");
    
  } catch (err) {
    alert("Gagal mengunduh PDF.");
  } finally {
    buttons.style.display = "flex";
    fadeElements.forEach(el => { el.style.transition = ""; });
    if (wasDark) document.documentElement.classList.add("dark");
  }
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));