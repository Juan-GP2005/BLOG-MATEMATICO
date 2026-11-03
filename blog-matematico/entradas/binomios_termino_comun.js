contenidoEntrada = `
<section>
    <style>
        .tabla-binomio { border-collapse: collapse; text-align: center; margin: 0.5rem 0; }
        .tabla-binomio td { padding: 4px 14px; }
        .tabla-binomio td + td { border-left: 1px solid currentColor; }
        .tabla-binomio .fila-central td { border-top: 1px solid currentColor; border-bottom: 1px solid currentColor; }
        .tabla-binomio .rojo { color: red; }
        .resultado-tabla { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
        .resultado-tabla .resultado { color: red; }
    </style>
    <h2>Binomios con Término Común</h2>
    <p>Un binomio con término común es el producto de dos binomios que comparten uno de sus términos, es decir, expresiones de la forma (x + a)(x + b), donde x es el término común.</p>
        <hr>
    <h3>Fórmula</h3>
    <p>El producto de dos binomios con un término común es igual al cuadrado del término común, más la suma de los términos no comunes multiplicada por el término común, más el producto de los términos no comunes.</p>
    <p><strong>Binomios con término común:</strong> (x + a)(x + b) = x² + (a + b)x + ab</p>
    <p><strong>Ejemplo de binomios con término común (ambos positivos):</strong></p>
    <p>(x + 3)(x + 5) = x² + (3 + 5)x + (3)(5) = x² + 8x + 15</p>
    <p><strong>Comprobación con la tabla:</strong></p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td>x</td>
                <td class="rojo">3x</td>
                <td>3</td>
            </tr>
            <tr class="fila-central">
                <td class="rojo">x²</td>
                <td class="rojo">3x + 5x</td>
                <td class="rojo">15</td>
            </tr>
            <tr>
                <td>x</td>
                <td class="rojo">5x</td>
                <td>5</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado">x² + 8x + 15</span>
    </div>
    <p>La fórmula también funciona cuando los términos no comunes son negativos o tienen signos distintos. Basta con tener cuidado con los signos: se suman los términos no comunes con su signo y se multiplican con la ley de los signos.</p>
        <hr>
    <p><strong>Ejemplo de binomios con término común (signos distintos):</strong></p>
    <p>(x - 2)(x + 7) = x² + (-2 + 7)x + (-2)(7) = x² + 5x - 14</p>
    <p><strong>Comprobación con la tabla:</strong></p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td>x</td>
                <td class="rojo">-2x</td>
                <td>-2</td>
            </tr>
            <tr class="fila-central">
                <td class="rojo">x²</td>
                <td class="rojo">-2x + 7x</td>
                <td class="rojo">-14</td>
            </tr>
            <tr>
                <td>x</td>
                <td class="rojo">7x</td>
                <td>7</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado">x² + 5x - 14</span>
    </div>
        <hr>
    <p><strong>Ejemplo de binomios con término común (ambos negativos):</strong></p>
    <p>(x - 4)(x - 6) = x² + (-4 - 6)x + (-4)(-6) = x² - 10x + 24</p>
    <p><strong>Comprobación con la tabla:</strong></p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td>x</td>
                <td class="rojo">-4x</td>
                <td>-4</td>
            </tr>
            <tr class="fila-central">
                <td class="rojo">x²</td>
                <td class="rojo">-4x - 6x</td>
                <td class="rojo">24</td>
            </tr>
            <tr>
                <td>x</td>
                <td class="rojo">-6x</td>
                <td>-6</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado">x² - 10x + 24</span>
    </div>
</section>`;
