contenidoEntrada = `
<section>
	<h2>Factorización explicada parte 2</h2>
	<p>En esta entrada se explicarán los conceptos de la Suma de Cubos, la Diferencia de Cubos, los Trinomios de la forma x2 + bx + c y los Trinomios de la forma ax2 + bx + c (método de aspa simple).</p>
	<hr>
<head>
    <h2>1. Suma y Diferencia de cubos</h2>
    Para identificar una suma o diferencia de cubos, la expresión debe cumplir con las siguientes características:
    <ul>
        <li><strong>Binomio:</strong> Debe tener exactamente dos términos.</li>
        <li><strong>Operación:</strong> Los términos deben estar sumándose (+) o restándose (-).</li>
        <li><strong>Raíces cúbicas exactas:</strong> Ambos términos deben ser cubos perfectos[cite: 1] (se les puede extraer raíz cúbica exacta).
            <ul>
                <li>En los coeficientes/números: 1, 8, 27, 64, 125, etc.</li>
                <li>En las variables/letras: los exponentes deben ser divisibles entre 3 (ej. (x³, y⁶, z⁹).</li>
            </ul>
        </li>
    </ul>
    
    <h2>Procedimiento</h2>
    <p>1. <strong>Extraer la raíz cúbica de ambos términos para formar un binomio (a + b, a - b)</strong></p>
    <p>2. <strong>Forma el segundo factor (trinomio) usando las raíces encontradas</strong>:</p>
    <ol>
        <li>El cuadrado del primer término (a²).</li>
        <li>El producto del primero por el segundo (a x b).</li>
        <li>El cuadrado del segundo término (b²).</li>
    </ol>
    <p>3. <strong>Aplica la regla de signos (SOP/SOPNO)</strong>:</p>
    <ol>
        <li>Para suma (+): los signos son (+) = (+, -, +).</li>
        <li>Para diferencia (-): los signos son (-) = (-,+.+).</li>
    </ol>
    
    <h2>Ejemplo</h2>
    <p><strong>Factorizar la expresión</strong>: x³ + 8</p>
    <ol>
        <li>Raíz cúbica de x³ = x</li>
        <li>Raíz cúbica de 8 = 2</li>
    </ol>
    <p><strong>Con fórmula de suma de cubos</strong>: x³ + 8 = (x + 2) (x² - 2x + 4)</p>
    
    <p><strong>Comprobación</strong>: (x + 2)(x² - 2x + 4) = x(x² - 2x + 4) + 2(x² - 2x + 4) = x³ - 2x² + 4x + 2x² - 4x + 8 = x³ + 8</p>
    
        <p><strong>Otro ejemplo (diferencia de cubos)</strong>: 27x³ - 64</p>
    <ol>
        <li>Raíz cúbica de 27x³ = 3x</li>
        <li>Raíz cúbica de 64 = 4</li>
    </ol>
    <p><strong>Con fórmula de diferencia de cubos</strong>: 27x³ - 64 = (3x - 4) (9x² + 12x + 16)</p>
    
    <p><strong>Comprobación</strong>: (3x - 4)(9x² + 12x + 16) = 27x³ + 36x² + 48x - 36x² - 48x - 64 = 27x³ - 64</p>
    <hr>

    <h2>2. Trinomios de la forma x² + bx + c</h2>
    Para identificar este tipo de trinomio, debe cumplir con las siguientes características:
    <ul>
        <li><strong>Tres términos:</strong> Tiene un término cuadrático, uno lineal y uno independiente.</li>
        <li><strong>Coeficiente principal igual a 1:</strong> El término x² no lleva número delante (o sea, a = 1).</li>
        <li><strong>Estructura:</strong> El primer término es x² y el segundo lleva la misma letra con exponente 1 (bx).</li>
    </ul>
    
    <h2>Procedimiento</h2>
    <p>1. <strong>Abrir dos paréntesis con la raíz del primer término</strong>: (x    ) (x    ).</p>
    <p>2. <strong>Buscar dos números (m y n) que cumplan dos condiciones a la vez</strong>:</p>
    <ol>
        <li>Al multiplicarlos den el término independiente: m × n = c.</li>
        <li>Al sumarlos den el coeficiente del término lineal: m + n = b.</li>
    </ol>
    <p>3. <strong>Escribir los números encontrados con su signo</strong>: (x + m)(x + n).</p>
    
    <h2>Ejemplo</h2>
    <p><strong>Factorizar la expresión</strong>: x² - 5x - 14</p>
    <ol>
        <li>Abrimos los paréntesis: (x    ) (x    )</li>
        <li>Buscamos dos números que multiplicados den -14 y sumados den -5: -7 y 2</li>
        <li>Comprobamos: (-7)(2) = -14 y -7 + 2 = -5</li>
    </ol>
    <p><strong>Resultado</strong>: x² - 5x - 14 = (x - 7)(x + 2)</p>
    
    <p><strong>Comprobación</strong>: (x - 7)(x + 2) = x² + 2x - 7x - 14 = x² - 5x - 14</p>
    <hr>

    <h2>3. Trinomios de la forma ax² + bx + c (aspa simple)</h2>
    Para identificar este tipo de trinomio, debe cumplir con las siguientes características:
    <ul>
        <li><strong>Tres términos:</strong> Un término cuadrático, uno lineal y uno independiente.</li>
        <li><strong>Coeficiente principal distinto de 1:</strong> El término x² lleva un número delante (a ≠ 1).</li>
        <li><strong>Factorizable:</strong> Se pueden encontrar factores del primer y del último término que, al cruzarlos, reproduzcan el término del medio.</li>
    </ul>
    
    <h2>Procedimiento</h2>
    <p>1. <strong>Descomponer el primer término (ax²) en dos factores</strong> y escribirlos en una columna a la izquierda.</p>
    <p>2. <strong>Descomponer el último término (c) en dos factores</strong> y escribirlos en una columna a la derecha.</p>
    <p>3. <strong>Multiplicar en cruz (el "aspa") y sumar los dos productos</strong>:</p>
    <ol>
        <li>Si la suma es igual al término del medio (bx), la descomposición es correcta.</li>
        <li>Si no coincide, se prueban otros factores hasta que funcione.</li>
    </ol>
    <p>4. <strong>Escribir los factores en horizontal</strong>: cada fila (factor izquierdo + factor derecho) forma un paréntesis.</p>
    
    <h2>Ejemplo</h2>
    <p><strong>Factorizar la expresión</strong>: 6x² + 11x + 3</p>
    <ol>
        <li>Descomponemos 6x² = (2x)(3x)</li>
        <li>Descomponemos 3 = (3)(1)</li>
        <li>Multiplicamos en cruz: (2x)(1) = 2x y (3x)(3) = 9x</li>
        <li>Sumamos: 2x + 9x = 11x, que coincide con el término del medio</li>
    </ol>
    <p><strong>Resultado</strong>: 6x² + 11x + 3 = (2x + 3)(3x + 1)</p>
    
    <p><strong>Comprobación</strong>: (2x + 3)(3x + 1) = 6x² + 2x + 9x + 3 = 6x² + 11x + 3</p>
</head>
</section>
`;