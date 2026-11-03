contenidoEntrada = `
<section>
    <style>
        .tabla-binomio { border-collapse: collapse; text-align: center; margin: 0.5rem 0; }
        .tabla-binomio td { padding: 4px 14px; }
        .tabla-binomio .fila-central td { border-top: 1px solid currentColor; border-bottom: 1px solid currentColor; }
        .tabla-binomio td + td { border-left: 1px solid currentColor; }
        .resultado-tabla { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
        .resultado-tabla .resultado { color: red; }
    </style>
    <h2>Binomio al cuadrado</h2>
    <p>Un binomio al cuadrado es una expresión algebraica formada por dos términos sumados o restados que se elevan al cuadrado.</p>
    <h3>Fórmulas</h3>
    <p>Suma: El cuadrado de la suma de dos términos es igual al cuadrado del primero, más el doble del primero por el segundo, más el cuadrado del segundo.</p>
    <p><strong>Binomio de la suma al cuadrado:</strong> (a + b)² = a² + 2ab + b²</p>
    <p><strong>Ejemplo de binomio al cuadrado (suma):</strong></p>
    <p>(x + 5)² = (x)² + 2(x)(5) + (5)² = x² + 10x + 25</p>
    <p>Con la tabla: (x + 5)² = (x + 5)(x + 5)</p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td>x</td>
                <td>5x</td>
                <td>5</td>
            </tr>
            <tr class="fila-central">
                <td>x²</td>
                <td>5x + 5x</td>
                <td>25</td>
            </tr>
            <tr>
                <td>x</td>
                <td>5x</td>
                <td>5</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado">x² + 10x + 25</span>
    </div>
    <p>Resta: El cuadrado de la resta de dos términos es igual al cuadrado del primero, menos el doble del primero por el segundo, más el cuadrado del segundo.</p>
    <p><strong>Binomio de la resta al cuadrado:</strong> (a - b)² = a² - 2ab + b²</p>
    <p><strong>Ejemplo de binomio al cuadrado (resta con coeficientes):</strong></p>
    <p>(3x - 4)² = (3x)² - 2(3x)(4) + (4)² = 9x² - 24x + 16</p>
    <p>Con la tabla: (3x - 4)² = (3x - 4)(3x - 4)</p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td>3x</td>
                <td>-12x</td>
                <td>-4</td>
            </tr>
            <tr class="fila-central">
                <td>9x²</td>
                <td>-12x - 12x</td>
                <td>16</td>
            </tr>
            <tr>
                <td>3x</td>
                <td>-12x</td>
                <td>-4</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado">9x² - 24x + 16</span>
    </div>
</section>`;
