const Parallax = async () => {
  let data = await fetch("https://akvan84.github.io/JsonDB/db.json");
  let result = await data.json();
  let parallax = `<div style="
      background: url(${result.parallax.image})
        no-repeat center center fixed;
      background-size: cover;
    "
  >
  <div>
  <h1>${result.parallax.title}</h1>
  <div style="font-size: ${result.parallax.fontsize}">${result.parallax.content}</div></div>
  </div>`;
  document.querySelector(".parallax").innerHTML = parallax;
};

export default Parallax;
