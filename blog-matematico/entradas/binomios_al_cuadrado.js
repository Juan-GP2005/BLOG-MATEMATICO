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

        /* Fila central: raya arriba y abajo de cada celda, para que quede
           encerrada entre dos líneas horizontales. currentColor usa el color del texto */
        .tabla-binomio .fila-central td { border-top: 1px solid currentColor; border-bottom: 1px solid currentColor; }

        /* "td + td" = celda que va después de otra: línea vertical solo ENTRE celdas */
        .tabla-binomio td + td { border-left: 1px solid currentColor; }

        /* Flex: pone la tabla, la flecha y el resultado en una sola línea.
           align-items: center = centrados verticalmente, gap = separación,
           wrap = bajan de línea si no caben (celulares) */
        .resultado-tabla { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }

        /* Resultado en rojo; solo aplica dentro de .resultado-tabla */
        .resultado-tabla .resultado { color: red; }
    </style>

    <!-- Título y definición -->
    <h2>Binomio al cuadrado</h2>
    <p>Un binomio al cuadrado es una expresión algebraica formada por dos términos sumados o restados que se elevan al cuadrado.</p>
    <hr>

    <!-- ============ PARTE 1: SUMA ============ -->
    <h3>Fórmulas</h3>

    <!-- <b> y <strong> se ven igual (negrita); <strong> además indica importancia -->
    <p><b>Suma</b>: El cuadrado de la suma de dos términos es igual al cuadrado del primero, más el doble del primero por el segundo, más el cuadrado del segundo.</p>
    <p><strong>Binomio de la suma al cuadrado:</strong> (a + b)² = a² + 2ab + b²</p>
    <p><strong>Ejemplo de binomio al cuadrado (suma):</strong></p>

    <!-- Método 1: fórmula directa -->
    <p>(x + 5)² = (x)² + 2(x)(5) + (5)² = x² + 10x + 25</p>

    <!-- Método 2: tabla. El cuadrado se escribe como producto de dos factores iguales -->
    <p>Con la tabla: (x + 5)² = (x + 5)(x + 5)</p>

    <!-- Contenedor: tabla + flecha + resultado, en una línea -->
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <!-- Fila superior: productos parciales de uno de los factores -->
            <tr>
                <td>x</td>
                <td>5x</td>
                <td>5</td>
            </tr>
            <!-- Fila central (con rayas): el resultado por columnas.
                 x·x = x², 5x + 5x (los dos productos cruzados), 5·5 = 25 -->
            <tr class="fila-central">
                <td>x²</td>
                <td>5x + 5x</td>
                <td>25</td>
            </tr>
            <!-- Fila inferior: productos parciales del otro factor -->
            <tr>
                <td>x</td>
                <td>5x</td>
                <td>5</td>
            </tr>
        </table>

        <!-- Flecha entre la tabla y el resultado -->
        <span>→</span>

        <!-- Resultado final, en rojo (la clase "resultado" está definida en el CSS) -->
        <span class="resultado">x² + 10x + 25</span>
    </div>
    <hr>

    <!-- ============ PARTE 2: RESTA ============ -->
    <p><b>Resta</b>: El cuadrado de la resta de dos términos es igual al cuadrado del primero, menos el doble del primero por el segundo, más el cuadrado del segundo.</p>
    <p><strong>Binomio de la resta al cuadrado:</strong> (a - b)² = a² - 2ab + b²</p>
    <p><strong>Ejemplo de binomio al cuadrado (resta con coeficientes):</strong></p>

    <!-- Método 1: fórmula directa (el término del medio lleva signo negativo) -->
    <p>(3x - 4)² = (3x)² - 2(3x)(4) + (4)² = 9x² - 24x + 16</p>

    <!-- Método 2: tabla, igual que en la suma pero con signos negativos -->
    <p>Con la tabla: (3x - 4)² = (3x - 4)(3x - 4)</p>

    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <!-- Fila superior: productos parciales de uno de los factores -->
            <tr>
                <td>3x</td>
                <td>-12x</td>
                <td>-4</td>
            </tr>
            <!-- Fila central (con rayas): 3x·3x = 9x², -12x - 12x = -24x, (-4)(-4) = +16 -->
            <tr class="fila-central">
                <td>9x²</td>
                <td>-12x - 12x</td>
                <td>16</td>
            </tr>
            <!-- Fila inferior: productos parciales del otro factor -->
            <tr>
                <td>3x</td>
                <td>-12x</td>
                <td>-4</td>
            </tr>
        </table>

        <span>→</span>

        <!-- Resultado final de la resta, en rojo -->
        <span class="resultado">9x² - 24x + 16</span>
    </div>
</section>`; // Cierra el texto y la instrucción con ;
