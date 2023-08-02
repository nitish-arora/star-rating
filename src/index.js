import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

(function () {
  const app = document.getElementById("app");
  const allStars = [...document.getElementsByClassName("star")];
  const activeClassName = "fa fa-star";
  const inactiveClassName = "fa fa-star-o";

  allStars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      console.log(index);
      for (let i = 0; i <= index; i++) {
        allStars[i].classList.add("active");
        allStars[i].classList.remove("inactive");
      }
      for (let i = index + 1; i < allStars.length; i++) {
        allStars[i].classList.add("inactive");
        allStars[i].classList.remove("active");
      }
    });

    // star.addEventListener()
  });
  // app.addEventListener("mouseout", () => {
  //   for (let i = 0; i < allStars.length; i++) {
  //     allStars[i].classList.remove("active");
  //     allStars[i].classList.remove("inactive");
  //   }
  // });
})();
