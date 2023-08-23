const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Léo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" }
];

const proBackend = professores.filter((professor) => {

    return professor.stack === "backend";

});
const proFrontend = professores.filter((professor) => {

    return professor.stack === "frontend";

});


console.log(proBackend);
console.log(proFrontend);