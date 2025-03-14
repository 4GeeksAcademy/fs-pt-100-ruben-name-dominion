
console.log("Hello Rigo from the console!");
const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon', 'paredes', 'partio'];
const dominio = ['com', 'es', 'io', 'net'];
let container = document.getElementById("resultados");
container.innerHTML = "";
let groupedResults = {};
dominio.forEach(ext => {
  groupedResults[ext] = [];
});
pronoun.forEach(el => {
  adj.forEach(val => {
    noun.forEach(item => {
      dominio.forEach(page => {
        //let newItem = item.endsWith(page) ? item.slice(0, -page.length) : item; Opcion hacindo una ternaria
        let newItem = item;
        if (item.endsWith(page)) {
          newItem = item.slice(0, -page.length);
        }
        let dominioGenerado = `${el}${val}${newItem}.${page}`
        console.log(dominioGenerado);
        groupedResults[page].push(dominioGenerado);
      });
    });
  });
});
console.log(groupedResults);
for (let key in groupedResults) {
  let tableContainer = document.createElement("div");
  tableContainer.classList.add("table-container");
  let tableTitle = document.createElement("h2");
  tableTitle.textContent = `Dominios con terminación '${key}'`;
  tableContainer.appendChild(tableTitle);
  let table = document.createElement("table");
  table.classList.add("table", "table-bordered");
  table.innerHTML = `
      <thead>
        <tr>
        </tr>
      </thead>
      <tbody></tbody>
    `;
  let tbody = table.getElementsByTagName("tbody")[0];
  let fragmento = document.createDocumentFragment();
  groupedResults[key].forEach(dom => {
    let tr = document.createElement("tr");
    let tdDominio = document.createElement("td");
    tdDominio.textContent = dom;
    tr.appendChild(tdDominio);
    fragmento.appendChild(tr);
  });
  tbody.appendChild(fragmento);
  tableContainer.appendChild(table);
  container.appendChild(tableContainer);
}


// const pronoun = ['the', 'our'];
// const adj = ['great', 'big'];
// const noun = ['jogger', 'racoon', 'paredes', 'partio'];
// const dominio = ['.com', '.es', '.io', '.net'];

// pronoun.forEach(el => {adj.forEach(val => {noun.forEach(item => {dominio.forEach(page => console.log(`${el}${val}${item}${page}`))})})})

// let listaResultados;
//   const conectHtml = () => {
//     document.getElementById("resultados").innerHTML = ;
//     listaResultados = document.getElementById("resultados").innerHTML;
//     return listaResultados;
//   }