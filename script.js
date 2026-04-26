// --- 1. Control de Flujo y Manejo de Errores ---
function demoControlFlujo() {
    const hora = new Date().getHours();
    let saludo = "";
    
    // if...else
    if (hora < 12) saludo = "Buenos días";
    else if (hora < 18) saludo = "Buenas tardes";
    else saludo = "Buenas noches";

    // switch
    const dia = new Date().getDay();
    let nombreDia = "";
    switch(dia) {
        case 0: nombreDia = "Domingo"; break;
        case 1: nombreDia = "Lunes"; break;
        case 2: nombreDia = "Martes"; break;
        case 3: nombreDia = "Miércoles"; break;
        case 4: nombreDia = "Jueves"; break;
        case 5: nombreDia = "Viernes"; break;
        case 6: nombreDia = "Sábado"; break;
        default: nombreDia = "Desconocido";
    }
    
    document.getElementById('output-control').innerText = `${saludo}. Hoy es: ${nombreDia}`;
}

function demoErrores() {
    try {
        let user = null;
        if (!user) throw new Error("Usuario no encontrado (Error personalizado)");
    } catch (e) {
        document.getElementById('output-error').innerText = `Capturado: ${e.message}`;
    }
}

// --- 2. Bucles e Iteración ---
function demoBucles() {
    let res = "FOR: ";
    for(let i=0; i<3; i++) res += i + " ";
    
    res += "\nWHILE: ";
    let j = 0;
    while(j < 3) { res += j + " "; j++; }
    
    document.getElementById('output-bucles').innerText = res;
}

// --- 3. Objetos Globales y Formateo ---
function initData() {
    // Math y Number
    const num = 15.75;
    const outputMath = document.getElementById('output-math');
    if (outputMath) {
        outputMath.innerHTML = `
            Original: ${num}<br>
            Entero (Math.floor): ${Math.floor(num)}<br>
            Es NaN: ${Number.isNaN(num)}
        `;
    }

    // Date
    const ahora = new Date();
    const outputDate = document.getElementById('output-date');
    if (outputDate) outputDate.innerText = ahora.toLocaleDateString();

    // String
    const texto = "  Hola Mundo  ";
    const outputString = document.getElementById('output-string');
    if (outputString) outputString.innerText = `Original: "${texto}"\nTrim: "${texto.trim()}"\nUpper: ${texto.toUpperCase()}`;
}

// --- 4. DOM y Arreglos ---
function demoDOM() {
    const output = document.getElementById('output-dom');
    const pClase = document.querySelector('.target-class');
    const colores = ["Rojo", "Verde", "Azul"]; // Arreglo normal
    const typedArray = new Int32Array([10, 20, 30]); // Arreglo tipado
    const items = document.getElementsByName('item-lista'); // Colección por nombre

    output.innerText = `
        Clase encontrada: ${pClase.innerText}
        Elementos en lista (por name): ${items.length}
        Primer color: ${colores[0]}
        Suma Typed Array: ${typedArray[0] + typedArray[1]}
    `;
    
    pClase.style.color = "blue";
}

// Inicializar datos al cargar la ventana
window.onload = initData;