let sayac = 0;
const buton = document.getElementById("sayac-btn");

buton.addEventListener("click", () => {
  sayac++;
  buton.textContent = `Tıklanma: ${sayac}`;
});