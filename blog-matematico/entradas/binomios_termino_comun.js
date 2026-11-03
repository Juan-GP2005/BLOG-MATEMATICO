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

        /* Fila central: raya arriba y abajo de cada celda, para que quede
           encerrada entre dos líneas horizontales */
        .tabla-binomio .fila-central td { border-top: 1px solid currentColor; border-bottom: 1px solid currentColor; }

        /* Clase para pintar de rojo una celda concreta (se pone directamente en el <td>).
           Marca las celdas que forman el resultado */
        .tabla-binomio .rojo { color: red; }

        /* Flex: pone la tabla, la flecha y el resultado en una sola línea.
           align-items: center = centrados verticalmente, gap = separación,
           wrap = bajan de línea si no caben (celulares) */
        .resultado-tabla { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }

        /* Resultado final en rojo; solo aplica dentro de .resultado-tabla */
        .resultado-tabla .resultado { color: red; }
    </style>

    <!-- Título y definición -->
    <h2>Binomios con Término Común</h2>
    <p>Un binomio con término común es el producto de dos binomios que comparten uno de sus términos, es decir, expresiones de la forma (x + a)(x + b), donde x es el término común.</p>
        <hr>

    <!-- ============ FÓRMULA GENERAL ============ -->
    <h3>Fórmula</h3>
    <p>El producto de dos binomios con un término común es igual al cuadrado del término común, más la suma de los términos no comunes multiplicada por el término común, más el producto de los términos no comunes.</p>
    <p><strong>Binomios con término común:</strong> (x + a)(x + b) = x² + (a + b)x + ab</p>

    <!-- ============ EJEMPLO 1: AMBOS POSITIVOS ============ -->
    <p><strong>Ejemplo de binomios con término común (ambos positivos):</strong></p>

    <!-- Método 1: fórmula directa -->
    <p>(x + 3)(x + 5) = x² + (3 + 5)x + (3)(5) = x² + 8x + 15</p>

    <!-- Método 2: tabla para comprobar el resultado -->
    <p><strong>Comprobación con la tabla:</strong></p>

    <!-- Contenedor: tabla + flecha + resultado, en una línea -->
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <!-- Fila superior: términos del primer binomio (x y 3).
                 3x es el producto de 3 por la x del otro binomio (en rojo porque entra al resultado) -->
            <tr>
                <td>x</td>
                <td class="rojo">3x</td>
                <td>3</td>
            </tr>
            <!-- Fila central (con rayas): el resultado por columnas.
                 x·x = x², 3x + 5x (productos cruzados), 3·5 = 15 -->
            <tr class="fila-central">
                <td class="rojo">x²</td>
                <td class="rojo">3x + 5x</td>
                <td class="rojo">15</td>
            </tr>
            <!-- Fila inferior: términos del segundo binomio (x y 5).
                 5x es el producto de 5 por la x del primer binomio -->
            <tr>
                <td>x</td>
                <td class="rojo">5x</td>
                <td>5</td>
            </tr>
        </table>

        <!-- Flecha entre la tabla y el resultado -->
        <span>→</span>

        <!-- Resultado final, en rojo (la clase "resultado" está definida en el CSS) -->
        <span class="resultado">x² + 8x + 15</span>
    </div>

    <p>La fórmula también funciona cuando los términos no comunes son negativos o tienen signos distintos. Basta con tener cuidado con los signos: se suman los términos no comunes con su signo y se multiplican con la ley de los signos.</p>
        <hr>

    <!-- ============ EJEMPLO 2: SIGNOS DISTINTOS ============ -->
    <p><strong>Ejemplo de binomios con término común (signos distintos):</strong></p>

    <!-- Fórmula directa: -2 + 7 = 5 y (-2)(7) = -14 -->
    <p>(x - 2)(x + 7) = x² + (-2 + 7)x + (-2)(7) = x² + 5x - 14</p>
    <p><strong>Comprobación con la tabla:</strong></p>

    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <!-- Fila superior: primer binomio (x y -2) y su producto cruzado -2x -->
            <tr>
                <td>x</td>
                <td class="rojo">-2x</td>
                <td>-2</td>
            </tr>
            <!-- Fila central: x², -2x + 7x (= 5x) y (-2)(7) = -14 -->
            <tr class="fila-central">
                <td class="rojo">x²</td>
                <td class="rojo">-2x + 7x</td>
                <td class="rojo">-14</td>
            </tr>
            <!-- Fila inferior: segundo binomio (x y 7) y su producto cruzado 7x -->
            <tr>
                <td>x</td>
                <td class="rojo">7x</td>
                <td>7</td>
            </tr>
        </table>

        <span>→</span>

        <!-- Resultado final de este ejemplo -->
        <span class="resultado">x² + 5x - 14</span>
    </div>
        <hr>

    <!-- ============ EJEMPLO 3: AMBOS NEGATIVOS ============ -->
    <p><strong>Ejemplo de binomios con término común (ambos negativos):</strong></p>

    <!-- Fórmula directa: -4 - 6 = -10 y (-4)(-6) = +24 (menos por menos da más) -->
    <p>(x - 4)(x - 6) = x² + (-4 - 6)x + (-4)(-6) = x² - 10x + 24</p>
    <p><strong>Comprobación con la tabla:</strong></p>

    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <!-- Fila superior: primer binomio (x y -4) y su producto cruzado -4x -->
            <tr>
                <td>x</td>
                <td class="rojo">-4x</td>
                <td>-4</td>
            </tr>
            <!-- Fila central: x², -4x - 6x (= -10x) y (-4)(-6) = 24 -->
            <tr class="fila-central">
                <td class="rojo">x²</td>
                <td class="rojo">-4x - 6x</td>
                <td class="rojo">24</td>
            </tr>
            <!-- Fila inferior: segundo binomio (x y -6) y su producto cruzado -6x -->
            <tr>
                <td>x</td>
                <td class="rojo">-6x</td>
                <td>-6</td>
            </tr>
        </table>

        <span>→</span>

        <!-- Resultado final de este ejemplo -->
        <span class="resultado">x² - 10x + 24</span>
    </div>
</section>`; // Cierra el texto y la instrucción con ;
