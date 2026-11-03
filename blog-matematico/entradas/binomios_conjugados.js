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
                 x·x = x², 3x + 5x (productos cruzados), 3·5 = 15
