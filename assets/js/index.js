// Solicitar al usuario que ingrese un nombre
var nombre = prompt("Ingrese un nombre");

// Solicitar al usuario que ingrese un apellido
var apellido = prompt("Ingrese un apellido");

// Solicitar al usuario que ingrese una profesión
var profesion = prompt("Ingrese una profesión");

// Solicitar al usuario que ingrese un salario y convertirlo a número decimal
var salario = parseFloat(prompt("Ingrese un salario"));

// Obtener referencias a elementos HTML mediante sus identificadores
var nombreValue = document.getElementById("nombreValue");
var apellidoValue = document.getElementById("apellidoValue");
var profesionValue = document.getElementById("profesionValue");
var salarioValue = document.getElementById("salarioValue");
var employeeRow = document.getElementById("employeeRow");

// Asignar los valores ingresados a las celdas correspondientes en la tabla
nombreValue.innerHTML = nombre;
apellidoValue.innerHTML = apellido;
profesionValue.innerHTML = profesion;
salarioValue.innerHTML = salario;

// Aplicar estilo a la fila si el salario es mayor a 2000
if (salario > 2000) {
  employeeRow.classList.add("salary-green"); // Agregar la clase 'salary-green'
}
