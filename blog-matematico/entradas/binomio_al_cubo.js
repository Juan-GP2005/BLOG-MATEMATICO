// Guarda todo el HTML de la entrada en la variable global "contenidoEntrada".
// Las comillas invertidas (`) permiten escribir varias líneas.
// entrada.html leerá esta variable y la inyectará en la página.
contenidoEntrada = `
<!-- <section> agrupa todo el contenido de la entrada -->
<section>

    <!-- Estilos propios de esta entrada -->
    <style>
        /* Sin espacios entre celdas, texto centrado, margen arriba y abajo */
        .tabla-binomio { border-collapse: collapse; text-align: center; margin: 0.5rem 0; }

        /* Espacio interior de cada celda */
        .tabla-binomio td { padding: 4px 14px; }

        /* "td + td" = celda que va después de otra: línea vertical solo ENTRE celdas.
           currentColor usa el mismo color del texto */
        .tabla-binomio td + td { border-left: 1px solid currentColor; }

        /* Raya debajo de cada celda de la fila (la raya de la multiplicación) */
        .tabla-binomio .linea-abajo td { border-bottom: 1px solid currentColor; }

        /* Raya encima de cada celda de la fila (separa el resultado) */
        .tabla-binomio .linea-arriba td { border-top: 1px solid currentColor; }

        /* Texto rojo para la fila de productos */
        .tabla-binomio .rojo td { color: red; }

        /* Flex: coloca las 3 tablas una al lado de otra.
           gap = separación, wrap = bajan de línea si no caben (celulares),
           flex-start = alineadas por arriba */
        .tablas-fila { display: flex; align-items: flex-start; gap: 2rem; flex-wrap: wrap; }

        /* Resultado final en rojo */
        .resultado-final { color: red; }
    </style>

    <!-- Título y definición -->
    <h2>Binomio al Cubo</h2>
    <p>Un binomio al cubo es una expresión algebraica formada por dos términos sumados o restados que se elevan a la potencia 3.</p>
    <hr>

    <!-- ============ PARTE 1: SUMA ============ -->
    <h3>Fórmulas</h3>
    <p>El cubo de la suma de dos términos es igual al cubo del primero, más el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, más el cubo del segundo.</p>
    <p><strong>Binomio de la suma al cubo:</strong> (a + b)³ = a³ + 3a²b + 3ab² + b³</p>
    <p><strong>Ejemplo de binomio al cubo (suma):</strong></p>

    <!-- Método 1: fórmula directa -->
    <p>(x + 2)³ = (x)³ + 3(x)²(2) + 3(x)(2)² + (2)³ = x³ + 6x² + 12x + 8</p>

    <!-- Método 2: tablas. Se separa el cubo en un cuadrado por el binomio -->
    <p>Con tablas: (x + 2)³ = (x + 2)²(x + 2). El primer factor ya se sabe resolver: (x + 2)² = x² + 4x + 4.</p>
    <p>Ahora multiplica (x² + 4x + 4)(x + 2) con divide:</p>

    <!-- Contenedor de las 3 tablas -->
    <div class="tablas-fila">

        <!-- TABLA 1: (x² + 4x + 4) · x -->
        <table class="tabla-binomio">
            <!-- Fila 1: términos del primer factor, con raya debajo -->
            <tr class="linea-abajo">
                <td>x²</td>
                <td>4x</td>
                <td>4</td>
            </tr>
            <!-- Fila 2: el multiplicador repetido en cada columna -->
            <tr>
                <td>x</td>
                <td>x</td>
                <td>x</td>
            </tr>
            <!-- Fila 3: productos, con raya arriba y en rojo -->
            <tr class="linea-arriba rojo">
                <td>x³</td>
                <td>4x²</td>
                <td>4x</td>
            </tr>
        </table>

        <!-- TABLA 2: (x² + 4x + 4) · 2 (misma estructura, otro multiplicador) -->
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x²</td>
                <td>4x</td>
                <td>4</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>2x²</td>
                <td>8x</td>
                <td>8</td>
            </tr>
        </table>

        <!-- TABLA 3: suma de los resultados, una columna por cada potencia de x -->
        <table class="tabla-binomio">
            <!-- Encabezado: una columna por grado -->
            <tr class="linea-abajo">
                <td>x³</td>
                <td>x²</td>
                <td>x¹</td>
                <td>x⁰</td>
            </tr>
            <!-- Coeficientes de la tabla 1 (el 0 rellena la columna x⁰ vacía) -->
            <tr>
                <td>1</td>
                <td>4</td>
                <td>4</td>
                <td>0</td>
            </tr>
            <!-- Coeficientes de la tabla 2 (el 0 rellena la columna x³), con raya debajo -->
            <tr class="linea-abajo">
                <td>0</td>
                <td>2</td>
                <td>8</td>
                <td>8</td>
            </tr>
            <!-- Suma de cada columna = coeficientes del resultado final -->
            <tr>
                <td>1</td>
                <td>6</td>
                <td>12</td>
                <td>8</td>
            </tr>
        </table>
    </div>

    <!-- Resultado de la suma; <span> permite pintar solo esa parte en rojo -->
    <p><strong>Resultado:</strong> <span class="resultado-final">x³ + 6x² + 12x + 8</span> ✓ — el mismo que con la fórmula.</p>

    <!-- ============ PARTE 2: RESTA ============ -->
    <p>El cubo de la resta de dos términos sigue la misma estructura, pero los signos se alternan (+, -, +, -): el cubo del primero, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo.</p>
    <hr>
    <p><strong>Binomio de la resta al cubo:</strong> (a - b)³ = a³ - 3a²b + 3ab² - b³</p>
    <p><strong>Ejemplo de binomio al cubo (resta):</strong></p>

    <!-- Método 1: fórmula directa (signos alternados) -->
    <p>(x - 2)³ = (x)³ - 3(x)²(2) + 3(x)(2)² - (2)³ = x³ - 6x² + 12x - 8</p>

    <!-- Método 2: tablas, igual que en la suma pero con signos negativos -->
    <p>Con tablas: (x - 2)³ = (x - 2)²(x - 2). El primer factor ya se sabe resolver: (x - 2)² = x² - 4x + 4.</p>
    <p>Ahora multiplica (x² - 4x + 4)(x - 2) con divide:</p>

    <div class="tablas-fila">

        <!-- TABLA 1: (x² - 4x + 4) · x -->
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x²</td>
                <td>-4x</td>
                <td>+4</td>
            </tr>
            <tr>
                <td>x</td>
                <td>x</td>
                <td>x</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>x³</td>
                <td>-4x²</td>
                <td>4x</td>
            </tr>
        </table>

        <!-- TABLA 2: (x² - 4x + 4) · (-2). El multiplicador negativo cambia los signos -->
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x²</td>
                <td>-4x</td>
                <td>+4</td>
            </tr>
            <tr>
                <td>-2</td>
                <td>-2</td>
                <td>-2</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>-2x²</td>
                <td>8x</td>
                <td>-8</td>
            </tr>
        </table>

        <!-- TABLA 3: suma por columnas de potencia, ahora con coeficientes negativos -->
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x³</td>
                <td>x²</td>
                <td>x¹</td>
                <td>x⁰</td>
            </tr>
            <!-- Coeficientes de la tabla 1 -->
            <tr>
                <td>1</td>
                <td>-4</td>
                <td>4</td>
                <td>0</td>
            </tr>
            <!-- Coeficientes de la tabla 2 -->
            <tr class="linea-abajo">
                <td>0</td>
                <td>-2</td>
                <td>8</td>
                <td>-8</td>
            </tr>
            <!-- Suma por columnas = coeficientes del resultado -->
            <tr>
                <td>1</td>
                <td>-6</td>
                <td>12</td>
                <td>-8</td>
            </tr>
        </table>
    </div>

    <!-- Resultado de la resta -->
    <p><strong>Resultado:</strong> <span class="resultado-final">x³ - 6x² + 12x - 8</span> ✓ — el mismo que con la fórmula.</p>
</section>`; // Cierra el texto y la instrucción con ;
