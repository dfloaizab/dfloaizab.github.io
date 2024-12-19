let currentPage = 1;
let pg1 = "Complex arithmetic";
let pg2 = "Linear Algebra"
let pg3 = "Qubit"
let pg4 = "Single qubit gates"
const totalPages = 6;

// Páginas con contenido y posibles imágenes
const pages = [
  { text: "<b>Suggested learning path:</b>", image: "", accordion: `
                    <div class="accordion">
                        <div class="accordion-item">
                            <div class="accordion-header" onclick="toggleAccordion(this)">
                                Basic concepts and fundamentals:Qubits and gates
                            </div>
                            <div class="accordion-content">
                                <p></p>
                                <p>Complex Arithmetic</a></p>
                                <p>Linear Algebra</p>
                                <p>Qubit fundamentals</p>
                                <p>Single qubit gates</p>
                                <p>Quantum computing gates</p>
                                <p>Multi-qubit systems and gates</p>
                                
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header" onclick="toggleAccordion(this)">
                                Measurements
                            </div>
                            <div class="accordion-content">
                                <p>Sub-sección 2.1: Tema principal</p>
                                <p>Sub-sección 2.2: Ejemplos</p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header" onclick="toggleAccordion(this)">
                                Q# and Quantum Computing Development Kits
                            </div>
                            <div class="accordion-content">
                                <p>Sub-sección 3.1: Resumen</p>
                                <p>Sub-sección 3.2: Reflexiones finales</p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header" onclick="toggleAccordion(this)">
                                Simple algorithms
                            </div>
                            <div class="accordion-content">
                                <p>Sub-sección 3.1: Resumen</p>
                                <p>Sub-sección 3.2: Reflexiones finales</p>
                            </div>
                        </div>
                    </div>
                ` },
  { text: pg1, image: "",accordion:`` },
  { text: pg2, image: "",accordion:`` },
  { text: pg3, image: "",accordion:`` },
  { text: pg4, image: "",accordion:`` },
  { text: "You're done! Thanks", image: "" }
];

// Función para actualizar la página
function updatePage() {
  const content = document.querySelector('.page-content-text');
  const imageContainer = document.querySelector('.page-image');
  const footer = document.getElementById('footer-text');
  const input = document.getElementById('page-number');

  // Actualizar contenido
  //content.innerHTML = `<p>${pages[currentPage - 1].text}</p>`;

  // Actualizar contenido
  content.innerHTML = `<p>${pages[currentPage - 1].text}</p>`;
  if (pages[currentPage - 1].accordion) {
      content.innerHTML += pages[currentPage - 1].accordion;
  }

  // Actualizar imagen si existe
  if (pages[currentPage - 1].image) {
    imageContainer.innerHTML = `<img src="${pages[currentPage - 1].image}" alt="Imagen de página ${currentPage}">`;
  } else {
    imageContainer.innerHTML = ""; // Limpiar si no hay imagen
  }

  // Actualizar pie de página y número de página
  //footer.textContent = `Página ${currentPage}`;
  input.value = currentPage;
}

// Función para ir a la página anterior
function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
}

// Función para ir a la página siguiente
function goToNextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
  }
}

// Función para ir a la primera página
function goToFirstPage() {
  currentPage = 1;
  updatePage();
}

// Función para ir a la última página
function goToLastPage() {
  currentPage = totalPages;
  updatePage();
}

function goToPage(pg)
{
  currentPage = pg;
  updatePage();
}

// Función para ir a una página específica
function goToPage() {
  const input = document.getElementById('page-number');
  const requestedPage = parseInt(input.value) || 1;

  if (requestedPage >= 1 && requestedPage <= totalPages) {
    currentPage = requestedPage;
    updatePage();
  } else {
    input.value = currentPage; // Restaurar página actual si el valor es inválido
  }
}

    // Función para abrir/cerrar un acordeón
    function toggleAccordion(header) {
      const content = header.nextElementSibling;
      const isOpen = content.style.display === "block";
      content.style.display = isOpen ? "none" : "block";
  }

  goToFirstPage();