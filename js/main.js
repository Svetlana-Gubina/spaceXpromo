var rellax = new Rellax(".rellax");

if (document.body.clientWidth < 560) {
  rellax.destroy();
}

AOS.init();

// Stars

const createStar = (center, radius, animation) => {
  const star = document.createElement("div");
  star.className = "star";
  star.style.width = `${radius}px`;
  star.style.height = `${radius}px`;
  star.style.top = `${center.top - radius / 2}px`;
  star.style.left = `${center.left - radius / 2}px`;
  star.style.animationDelay = `${animation.delay}s`;
  star.style.animationDuration = `${animation.duration}s`;
  if (radius > 3) {
    star.classList.add("shine");
  }
  return star;
};

const container = document.querySelector("#d");
for (var i = 0; i < 110; i++) {
  container.appendChild(
    createStar(
      {
        top: getRandom(0, container.offsetHeight),
        left: getRandom(0, container.offsetWidth),
      },
      getRandom(2, 7),
      {
        duration: getRandom(3, 15, false),
        delay: getRandom(0, 7, false),
      }
    )
  );
}

function getRandom(min, max, notFloor) {
  return ((!notFloor && Math.floor) || ((a) => a))(
    Math.random() * (max - min + 1) + min
  );
}
