let currentPage = 1;
const totalPages = 7;

const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

function toBanglaNumber(number) {
  return String(number).replace(/[0-9]/g, digit => banglaNumbers[digit]);
}

function showPage(number) {
  if (number < 1 || number > totalPages) return;

  currentPage = number;

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById("page" + currentPage)
    .classList.add("active");

  document.getElementById("pageCount").textContent =
    toBanglaNumber(currentPage) + " / " + toBanglaNumber(totalPages);

  document.getElementById("backBtn").disabled =
    currentPage === 1;

  document.getElementById("nextBtn").disabled =
    currentPage === totalPages;

  document.getElementById("nextBtn").textContent =
    currentPage === totalPages ? "শেষ পাতা" : "পরের পাতা →";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextPage() {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
}

function prevPage() {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
}

const notes = [
  "তুমি আমার জীবনের খুব সুন্দর একটি অংশ। সবসময় এমনই থেকো। ❤️",
  "তোমার প্রতিটি দিন আনন্দে ভরে উঠুক। 🌷",
  "তোমার সব স্বপ্ন একদিন সত্যি হোক। ✨",
  "দূরত্ব থাকলেও বন্ধুত্বের ভালোবাসা কখনো কমে না। 💗"
];

function showNote(index) {
  document.getElementById("noteMessage").textContent = notes[index];
}

const gifts = [
  "তোমার জন্য এক বুক ভালোবাসা! ❤️",
  "তোমার জন্য অনেক অনেক শুভকামনা! 🌸",
  "তোমার হাসিটা সবসময় এমনই সুন্দর থাকুক! 💝"
];

function showGift(index) {
  document.getElementById("giftMessage").textContent = gifts[index];
}

// ভাসমান হৃদয়ের অ্যানিমেশন
function createHeart() {
  const heart = document.createElement("span");

  heart.className = "floating-heart";
  heart.textContent = "♥";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  heart.style.animationDuration = (7 + Math.random() * 5) + "s";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

setInterval(createHeart, 1200);

// ওয়েবসাইট চালু
showPage(1);