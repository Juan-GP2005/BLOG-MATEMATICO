contenidoEntrada = `
<section>
    <h2>Factorización explicada</h2>
    <p>La factorización es una técnica que consiste en descomponer una expresión algebraica o un número entero en un producto de factores más simples.</p>
    <hr>

    <h3>1. Término común</h3>
    <h4>¿Cómo reconocerlo?</h4>
    <p>Se reconoce cuando los términos de la expresión comparten elementos en común, estos pueden ser factores numéricos como el Máximo Común Divisor de los coeficientes y cada letra que se repite con su menor exponente.</p>
    <h4>Procedimiento</h4>
    <ul>
        <li>Encontrar el máximo común divisor de los coeficientes</li>
        <li>Identificar letras repetidas y seleccionar el que tiene el exponente más pequeño.</li>
        <li>Dividir cada término original entre el factor común encontrado para obtener los términos que quedarán dentro del paréntesis.</li>
    </ul>
    <h4>Ejemplo</h4>
    <p>Factoriza: <strong>6x<sup>3</sup> + 9x<sup>2</sup> − 3x</strong></p>
    <div class="paso">
        <b>Paso 1:</b> Busca el máximo común divisor de los coeficientes (6, 9 y 3): <b>3</b>.
    </div>
    <div class="paso">
        <b>Paso 2:</b> Busca la variable común con el menor exponente: <b>x</b>.
    </div>
    <div class="paso">
        <b>Paso 3:</b> El término común es <b>3x</b>. Divide cada término entre él:<br>
        <p>6x<sup>3</sup> ÷ 3x = 2x<sup>2</sup></p>
        <p>9x<sup>2</sup> ÷ 3x = 3x</p>
        <p>−3x ÷ 3x = −1</p>
        <p>Resultado: 3x(2x<sup>2</sup> + 3x − 1)</p>
    </div>
    <div class="paso comprobacion">
        <b>Comprobación:</b> multiplica 3x por cada término del paréntesis:<br>
        3x · 2x<sup>2</sup> = 6x<sup>3</sup><br>
        3x · 3x = 9x<sup>2</sup><br>
        3x · (−1) = −3x<br>
        Al sumar: 6x<sup>3</sup> + 9x<sup>2</sup> − 3x ✔<br>
        Coincide con la expresión original, así que la factorización es correcta.
    </div>

    <hr>

    <h3>2. Trinomio cuadrado perfecto</h3>
    <h4>¿Cómo reconocerlo?</h4>
    <p>Es un trinomio (tres términos) que resulta de elevar al cuadrado un binomio. Cumple estas condiciones:</p>
    <ul>
        <li>El primer y el tercer término son cuadrados perfectos (tienen raíz cuadrada exacta).</li>
        <li>El término del medio es el doble producto de las raíces de esos dos términos.</li>
    </ul>
    <p>Fórmulas:</p>
    <p><strong>a<sup>2</sup> + 2ab + b<sup>2</sup> = (a + b)<sup>2</sup></strong></p>
    <p><strong>a<sup>2</sup> − 2ab + b<sup>2</sup> = (a − b)<sup>2</sup></strong></p>
    <h4>Procedimiento</h4>
    <ul>
        <li>Calcular la raíz cuadrada del primer término (a) y del tercer término (b).</li>
        <li>Comprobar que el término central sea igual a 2 · a · b.</li>
        <li>Escribir el binomio al cuadrado, usando el mismo signo que tiene el término central.</li>
    </ul>
    <h4>Ejemplo</h4>
    <p>Factoriza: <strong>4x<sup>2</sup> − 12x + 9</strong></p>
    <div class="paso">
        <b>Paso 1:</b> Saca la raíz cuadrada del primer y del tercer término:<br>
        √(4x<sup>2</sup>) = 2x<br>
        √9 = 3
    </div>
    <div class="paso">
        <b>Paso 2:</b> Verifica que el término central sea el doble producto de las raíces:<br>
        2 · (2x) · (3) = 12x ✔<br>
        Como el término central es −12x, el signo del binomio será negativo.
    </div>
    <div class="paso">
        <b>Paso 3:</b> Escribe el binomio al cuadrado:<br>
        <p>Resultado: (2x − 3)<sup>2</sup></p>
    </div>
    <div class="paso comprobacion">
        <b>Comprobación:</b> desarrolla (2x − 3)<sup>2</sup> = (2x − 3)(2x − 3):<br>
        (2x)<sup>2</sup> = 4x<sup>2</sup><br>
        2 · (2x) · (−3) = −12x<br>
        (−3)<sup>2</sup> = 9<br>
        Al sumar: 4x<sup>2</sup> − 12x + 9 ✔<br>
        Coincide con la expresión original, así que la factorización es correcta.
    </div>

    <hr>

    <h3>3. Diferencia de cuadrados</h3>
    <h4>¿Cómo reconocerla?</h4>
    <p>Es un binomio (dos términos) donde ambos términos son cuadrados perfectos y están separados por un signo de resta.</p>
    <p>Fórmula:</p>
    <p><strong>a<sup>2</sup> − b<sup>2</sup> = (a + b)(a − b)</strong></p>
    <p>El resultado son dos binomios conjugados: iguales, pero uno con signo positivo y otro con signo negativo.</p>
    <h4>Procedimiento</h4>
    <ul>
        <li>Calcular la raíz cuadrada del primer término (a) y del segundo término (b).</li>
        <li>Escribir un paréntesis con la suma de las raíces: (a + b).</li>
        <li>Escribir otro paréntesis con la resta de las raíces: (a − b).</li>
    </ul>
    <h4>Ejemplo</h4>
    <p>Factoriza: <strong>25x<sup>2</sup> − 49</strong></p>
    <div class="paso">
        <b>Paso 1:</b> Verifica que sea una resta de dos cuadrados perfectos:<br>
        25x<sup>2</sup> = (5x)<sup>2</sup><br>
        49 = 7<sup>2</sup>
    </div>
    <div class="paso">
        <b>Paso 2:</b> Saca las raíces: a = 5x y b = 7.
    </div>
    <div class="paso">
        <b>Paso 3:</b> Escribe el producto de la suma por la diferencia:<br>
        <p>Resultado: (5x + 7)(5x − 7)</p>
    </div>
    <div class="paso comprobacion">
        <b>Comprobación:</b> multiplica (5x + 7)(5x − 7):<br>
        5x · 5x = 25x<sup>2</sup><br>
        5x · (−7) = −35x<br>
        7 · 5x = 35x<br>
        7 · (−7) = −49<br>
        Al sumar: 25x<sup>2</sup> − 35x + 35x − 49 = 25x<sup>2</sup> − 49 ✔<br>
        Los términos de en medio se cancelan y coincide con la expresión original.
    </div>
        <hr>
    <h3>4. Ida y regreso</h3>
    <p>Cada caso de factorización es el camino de vuelta de un producto notable. En los productos notables vas de los factores al resultado desarrollado (ida); al factorizar recorres el camino contrario, del resultado a los factores (regreso).</p>

    <h4>Término común ↔ Multiplicación de un monomio por un polinomio</h4>
    <p>El producto notable es la propiedad distributiva: <strong>a(b + c + d) = ab + ac + ad</strong></p>
    <div class="paso">
        <b>Ida:</b> 3x(2x<sup>2</sup> + 3x − 1) = 6x<sup>3</sup> + 9x<sup>2</sup> − 3x
    </div>
    <div class="paso">
        <b>Regreso:</b> 6x<sup>3</sup> + 9x<sup>2</sup> − 3x = 3x(2x<sup>2</sup> + 3x − 1)
    </div>

    <h4>Trinomio cuadrado perfecto ↔ Binomio al cuadrado</h4>
    <p>El producto notable es el cuadrado de un binomio: <strong>(a ± b)<sup>2</sup> = a<sup>2</sup> ± 2ab + b<sup>2</sup></strong></p>
    <div class="paso">
        <b>Ida:</b> (2x − 3)<sup>2</sup> = 4x<sup>2</sup> − 12x + 9
    </div>
    <div class="paso">
        <b>Regreso:</b> 4x<sup>2</sup> − 12x + 9 = (2x − 3)<sup>2</sup>
    </div>

    <h4>Diferencia de cuadrados ↔ Binomios conjugados</h4>
    <p>El producto notable es el producto de binomios conjugados: <strong>(a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup></strong></p>
    <div class="paso">
        <b>Ida:</b> (5x + 7)(5x − 7) = 25x<sup>2</sup> − 49
    </div>
    <div class="paso">
        <b>Regreso:</b> 25x<sup>2</sup> − 49 = (5x + 7)(5x − 7)
    </div>
</section>
`;