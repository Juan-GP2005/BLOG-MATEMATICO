// Guarda todo el HTML de la entrada en la variable global "contenidoEntrada".
// Las comillas invertidas (`) permiten escribir varias líneas.
// entrada.html leerá esta variable y la inyectará en la página.
contenidoEntrada = `
<!-- <section> agrupa todo el contenido de la entrada.
     Esta entrada no lleva <style>: usa solo los estilos por defecto del navegador -->
<section>

    <!-- Título y definición -->
    <h2>Factorización explicada</h2>
    <p>La factorización es una técnica que consiste en descomponer una expresión algebraica o un número entero en un producto de factores más simples.</p>
    <hr>

    <!-- ============ CASO 1: TÉRMINO COMÚN ============ -->
    <h3>1. Término común</h3>

    <!-- Cada caso sigue la misma estructura: reconocerlo, procedimiento, ejemplo -->
    <h4>¿Cómo reconocerlo?</h4>
    <p>Se reconoce cuando los términos de la expresión comparten elementos en común, estos pueden ser factores numéricos como el Máximo Común Divisor de los coeficientes y cada letra que se repite con su menor exponente.</p>

    <h4>Procedimiento</h4>
    <!-- <ul> = lista con viñetas; cada <li> es un paso general del método -->
    <ul>
        <li>Encontrar el máximo común divisor de los coeficientes</li>
        <li>Identificar letras repetidas y seleccionar el que tiene el exponente más pequeño.</li>
        <li>Dividir cada término original entre el factor común encontrado para obtener los términos que quedarán dentro del paréntesis.</li>
    </ul>

    <h4>Ejemplo</h4>
    <p>Factoriza: <strong>6x³ + 9x² − 3x</strong></p>

    <!-- La clase "paso" agrupa cada paso en su propia caja. En este archivo no hay CSS
         que la use, así que por ahora solo separa los pasos en bloques -->
    <div class="paso">
        <!-- <b> pone el texto en negrita (aquí, la etiqueta del paso) -->
        <b>Paso 1:</b> Busca el máximo común divisor de los coeficientes (6, 9 y 3): <b>3</b>.
    </div>
    <div class="paso">
        <b>Paso 2:</b> Busca la variable común con el menor exponente: <b>x</b>.
    </div>
    <div class="paso">
        <!-- <br> = salto de línea sin crear un párrafo nuevo -->
        <b>Paso 3:</b> El término común es <b>3x</b>. Divide cada término entre él:<br>
        <p>6x³ ÷ 3x = 2x²</p>
        <p>9x² ÷ 3x = 3x</p>
        <p>−3x ÷ 3x = −1</p>
        <p>Resultado: 3x(2x² + 3x − 1)</p>
    </div>
    <!-- Dos clases a la vez: "paso" (caja de paso) y "comprobacion" (para distinguir la verificación).
         Tampoco tiene CSS todavía -->
    <div class="paso comprobacion">
        <b>Comprobación:</b> multiplica 3x por cada término del paréntesis:<br>
        3x · 2x² = 6x³<br>
        3x · 3x = 9x²<br>
        3x · (−1) = −3x<br>
        Al sumar: 6x³ + 9x² − 3x ✔<br>
        Coincide con la expresión original, así que la factorización es correcta.
    </div>

    <hr>

    <!-- ============ CASO 2: TRINOMIO CUADRADO PERFECTO ============ -->
    <h3>2. Trinomio cuadrado perfecto</h3>
    <h4>¿Cómo reconocerlo?</h4>
    <p>Es un trinomio (tres términos) que resulta de elevar al cuadrado un binomio. Cumple estas condiciones:</p>
    <ul>
        <li>El primer y el tercer término son cuadrados perfectos (tienen raíz cuadrada exacta).</li>
        <li>El término del medio es el doble producto de las raíces de esos dos términos.</li>
    </ul>

    <!-- Las dos fórmulas: con suma y con resta en el término central -->
    <p>Fórmulas:</p>
    <p><strong>a² + 2ab + b² = (a + b)²</strong></p>
    <p><strong>a² − 2ab + b² = (a − b)²</strong></p>

    <h4>Procedimiento</h4>
    <ul>
        <li>Calcular la raíz cuadrada del primer término (a) y del tercer término (b).</li>
        <li>Comprobar que el término central sea igual a 2 · a · b.</li>
        <li>Escribir el binomio al cuadrado, usando el mismo signo que tiene el término central.</li>
    </ul>

    <h4>Ejemplo</h4>
    <p>Factoriza: <strong>4x² − 12x + 9</strong></p>
    <div class="paso">
        <!-- Raíces: √(4x²) = 2x y √9 = 3 -->
        <b>Paso 1:</b> Saca la raíz cuadrada del primer y del tercer término:<br>
        √(4x²) = 2x<br>
        √9 = 3
    </div>
    <div class="paso">
        <!-- 2 · (2x) · 3 = 12x; el término central es −12x, por eso el binomio lleva signo menos -->
        <b>Paso 2:</b> Verifica que el término central sea el doble producto de las raíces:<br>
        2 · (2x) · (3) = 12x ✔<br>
        Como el término central es −12x, el signo del binomio será negativo.
    </div>
    <div class="paso">
        <b>Paso 3:</b> Escribe el binomio al cuadrado:<br>
        <p>Resultado: (2x − 3)²</p>
    </div>
    <!-- Se hace el camino inverso: desarrollar el binomio y ver que da la expresión original -->
    <div class="paso comprobacion">
        <b>Comprobación:</b> desarrolla (2x − 3)² = (2x − 3)(2x − 3):<br>
        (2x)² = 4x²<br>
        2 · (2x) · (−3) = −12x<br>
        (−3)² = 9<br>
        Al sumar: 4x² − 12x + 9 ✔<br>
        Coincide con la expresión original, así que la factorización es correcta.
    </div>

    <hr>

    <!-- ============ CASO 3: DIFERENCIA DE CUADRADOS ============ -->
    <h3>3. Diferencia de cuadrados</h3>
    <h4>¿Cómo reconocerla?</h4>
    <p>Es un binomio (dos términos) donde ambos términos son cuadrados perfectos y están separados por un signo de resta.</p>
    <p>Fórmula:</p>
    <p><strong>a² − b² = (a + b)(a − b)</strong></p>
    <p>El resultado son dos binomios conjugados: iguales, pero uno con signo positivo y otro con signo negativo.</p>

    <h4>Procedimiento</h4>
    <ul>
        <li>Calcular la raíz cuadrada del primer término (a) y del segundo término (b).</li>
        <li>Escribir un paréntesis con la suma de las raíces: (a + b).</li>
        <li>Escribir otro paréntesis con la resta de las raíces: (a − b).</li>
    </ul>

    <h4>Ejemplo</h4>
    <p>Factoriza: <strong>25x² − 49</strong></p>
    <div class="paso">
        <!-- Se comprueba que ambos términos son cuadrados: 25x² = (5x)² y 49 = 7² -->
        <b>Paso 1:</b> Verifica que sea una resta de dos cuadrados perfectos:<br>
        25x² = (5x)²<br>
        49 = 7²
    </div>
    <div class="paso">
        <b>Paso 2:</b> Saca las raíces: a = 5x y b = 7.
    </div>
    <div class="paso">
        <b>Paso 3:</b> Escribe el producto de la suma por la diferencia:<br>
        <p>Resultado: (5x + 7)(5x − 7)</p>
    </div>
    <div class="paso comprobacion">
        <!-- Multiplicando los conjugados, los términos del medio (−35x y +35x) se cancelan -->
        <b>Comprobación:</b> multiplica (5x + 7)(5x − 7):<br>
        5x · 5x = 25x²<br>
        5x · (−7) = −35x<br>
        7 · 5x = 35x<br>
        7 · (−7) = −49<br>
        Al sumar: 25x² − 35x + 35x − 49 = 25x² − 49 ✔<br>
        Los términos de en medio se cancelan y coincide con la expresión original.
    </div>
        <hr>

    <!-- ============ CASO 4: IDA Y REGRESO ============ -->
    <!-- Esta parte une la factorización con los productos notables de otras entradas -->
    <h3>4. Ida y regreso</h3>
    <p>Cada caso de factorización es el camino de vuelta de un producto notable. En los productos notables vas de los factores al resultado desarrollado (ida); al factorizar recorres el camino contrario, del resultado a los factores (regreso).</p>

    <!-- Término común ↔ propiedad distributiva -->
    <h4>Término común ↔ Multiplicación de un monomio por un polinomio</h4>
    <p>El producto notable es la propiedad distributiva: <strong>a(b + c + d) = ab + ac + ad</strong></p>
    <div class="paso">
        <b>Ida:</b> 3x(2x² + 3x − 1) = 6x³ + 9x² − 3x
    </div>
    <div class="paso">
        <b>Regreso:</b> 6x³ + 9x² − 3x = 3x(2x² + 3x − 1)
    </div>

    <!-- Trinomio cuadrado perfecto ↔ binomio al cuadrado (entrada "Binomios al Cuadrado") -->
    <h4>Trinomio cuadrado perfecto ↔ Binomio al cuadrado</h4>
    <p>El producto notable es el cuadrado de un binomio: <strong>(a ± b)² = a² ± 2ab + b²</strong></p>
    <div class="paso">
        <b>Ida:</b> (2x − 3)² = 4x² − 12x + 9
    </div>
    <div class="paso">
        <b>Regreso:</b> 4x² − 12x + 9 = (2x − 3)²
    </div>

    <!-- Diferencia de cuadrados ↔ binomios conjugados (entrada "Binomios Conjugados") -->
    <h4>Diferencia de cuadrados ↔ Binomios conjugados</h4>
    <p>El producto notable es el producto de binomios conjugados: <strong>(a + b)(a - b) = a² - b²</strong></p>
    <div class="paso">
        <b>Ida:</b> (5x + 7)(5x − 7) = 25x² − 49
    </div>
    <div class="paso">
        <b>Regreso:</b> 25x² − 49 = (5x + 7)(5x − 7)
    </div>
</section>
`; // Cierra el texto y la instrucción con ;
