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
    <h2>Binomios Conjugados</h2>
    <p>Los binomios conjugados son dos binomios que tienen los mismos términos, pero uno está sumado y el otro restado, es decir, expresiones de la forma (a + b)(a - b).</p>

    <!-- ============ FÓRMULA GENERAL ============ -->
    <h3>Fórmula</h3>
    <p>El producto de dos binomios conjugados es igual al cuadrado del primer término menos el cuadrado del segundo término. Los términos del medio se cancelan, por lo que el resultado es una diferencia de cuadrados.</p>

    <!-- <sup> escribe el texto como superíndice: a<sup>2</sup> se ve a² -->
    <p><strong>Binomios conjugados:</strong> (a + b)(a - b) = a<sup>2</sup> - b<sup>2</sup></p>

    <!-- ============ EJEMPLO 1: CON NÚMEROS ============ -->
    <p><strong>Ejemplo de binomios conjugados (con números):</strong></p>

    <!-- Método 1: fórmula directa -->
    <p>(x + 5)(x - 5) = (x)<sup>2</sup> - (5)<sup>2</sup> = x<sup>2</sup> - 25</p>

    <!-- Método 2: tabla para comprobar el resultado -->
    <p><strong>Comprobación con la tabla:</strong></p>

    <!-- Contenedor: tabla + flecha + resultado, en una línea -->
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <!-- Fila superior: términos de (x - 5) y su producto cruzado -5x (en rojo) -->
            <tr>
                <td>x</td>
                <td class="rojo">-5x</td>
                <td>-5</td>
            </tr>
            <!-- Fila central (con rayas): el resultado por columnas.
                 x·x = x², -5x + 5x (se cancelan, da 0) y (-5)(5) = -25 -->
            <tr class="fila-central">
                <td class="rojo">x<sup>2</sup></td>
                <td class="rojo">-5x + 5x</td>
                <td class="rojo">-25</td>
            </tr>
            <!-- Fila inferior: términos de (x + 5) y su producto cruzado 5x -->
            <tr>
                <td>x</td>
                <td class="rojo">5x</td>
                <td>5</td>
            </tr>
        </table>

        <!-- Flecha entre la tabla y el resultado -->
        <span>→</span>

        <!-- Resultado final, en rojo (la clase "resultado" está definida en el CSS) -->
        <span class="resultado">x<sup>2</sup> - 25</span>
    </div>

    <p>La fórmula también se aplica cuando los términos tienen coeficientes o exponentes. Basta con elevar al cuadrado cada término completo, incluyendo su coeficiente.</p>

    <!-- ============ EJEMPLO 2: CON COEFICIENTES ============ -->
    <p><strong>Ejemplo de binomios conjugados (con coeficientes):</strong></p>

    <!-- Se eleva al cuadrado todo el término: (3x)² = 9x² -->
    <p>(3x + 4)(3x - 4) = (3x)<sup>2</sup> - (4)<sup>2</sup> = 9x<sup>2</sup> - 16</p>
    <p><strong>Comprobación con la tabla:</strong></p>

    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <!-- Fila superior: términos de (3x - 4) y su producto cruzado -12x -->
            <tr>
                <td>3x</td>
                <td class="rojo">-12x</td>
                <td>-4</td>
            </tr>
            <!-- Fila central: 3x·3x = 9x², -12x + 12x = 0 y (-4)(4) = -16 -->
            <tr class="fila-central">
                <td class="rojo">9x<sup>2</sup></td>
                <td class="rojo">-12x + 12x</td>
                <td class="rojo">-16</td>
            </tr>
            <!-- Fila inferior: términos de (3x + 4) y su producto cruzado 12x -->
            <tr>
                <td>3x</td>
                <td class="rojo">12x</td>
                <td>4</td>
            </tr>
        </table>

        <span>→</span>

        <!-- Resultado final de este ejemplo -->
        <span class="resultado">9x<sup>2</sup> - 16</span>
    </div>

    <!-- ============ EJEMPLO 3: CON DOS VARIABLES ============ -->
    <p><strong>Ejemplo de binomios conjugados (con dos variables):</strong></p>

    <!-- Aquí el término restado va primero, pero el resultado sigue siendo diferencia de cuadrados -->
    <p>(2a - 5b)(2a + 5b) = (2a)<sup>2</sup> - (5b)<sup>2</sup> = 4a<sup>2</sup> - 25b<sup>2</sup></p>
    <p><strong>Comprobación con la tabla:</strong></p>

    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <!-- Fila superior: términos de (2a + 5b) y su producto cruzado 10ab -->
            <tr>
                <td>2a</td>
                <td class="rojo">10ab</td>
                <td>5b</td>
            </tr>
            <!-- Fila central: 2a·2a = 4a², 10ab - 10ab = 0 y (5b)(-5b) = -25b² -->
            <tr class="fila-central">
                <td class="rojo">4a<sup>2</sup></td>
                <td class="rojo">10ab - 10ab</td>
                <td class="rojo">-25b<sup>2</sup></td>
            </tr>
            <!-- Fila inferior: términos de (2a - 5b) y su producto cruzado -10ab -->
            <tr>
                <td>2a</td>
                <td class="rojo">-10ab</td>
                <td>-5b</td>
            </tr>
        </table>

        <span>→</span>

        <!-- Resultado final de este ejemplo -->
        <span class="resultado">4a<sup>2</sup> - 25b<sup>2</sup></span>
    </div>
</section>`; // Cierra el texto y la instrucción con ;
