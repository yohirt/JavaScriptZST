import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Pętle po kolekcjach</h1>
`;

let gallery = document.querySelectorAll(".gallery");
console.log(gallery);

for (let gal of gallery) {
  gal.addEventListener("click", function (e) {
    e.preventDefault();
    alert(
      (e.target.src =
        "data:image/jpeg;base64,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")
    );
  });
}
// asd
