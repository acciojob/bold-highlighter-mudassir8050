function highlight() {
  const boldWords = document.querySelectorAll("#paragraph strong");
  boldWords.forEach((word) => {
    word.classList.add("highlight");
  });
}

function return_normal() {
  const boldWords = document.querySelectorAll("#paragraph strong");
  boldWords.forEach((word) => {
    word.classList.remove("highlight");
  });
}

const link = document.getElementById("highlightLink");
link.addEventListener("mouseover", highlight);
link.addEventListener("mouseout", return_normal);
