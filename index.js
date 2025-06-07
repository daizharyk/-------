window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const image = document.querySelector(".image_main");
  const name = document.querySelector(".name");
  const uzatu = document.querySelector(".uzatu");
  const flower = document.querySelector(".flower");

  if (image) image.style.transform = `translateY(${scrollY * 0.2}px)`;
  if (name)
    name.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.1}px))`;
  if (uzatu)
    uzatu.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.05}px))`;


  const targetDate = new Date("2025-08-15T18:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
});
