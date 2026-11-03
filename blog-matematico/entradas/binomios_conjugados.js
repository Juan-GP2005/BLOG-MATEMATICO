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
    <h2>Binomios Conjugados</h2>
    <p>Los binomios conjugados son dos binomios que tienen los mismos términos, pero uno está sumado y el otro restado, es decir, expresiones de la forma (a + b)(a - b).</p>
    <h3>Fórmula</h3>
    <p>El producto de dos binomios conjugados es igual al cuadrado del primer término menos el cuadrado del segundo término. Los términos del medio se cancelan, por lo que el resultado es una diferencia de cuadrados.</p>
    <p><strong>Binomios conjugados:</strong> (a + b)(a - b) = a² - b²</p>
    <p><strong>Ejemplo de binomios conjugados (con números):</strong></p>
    <p>(x + 5) (x - 5) = (x)² - (5)² = x² - 25</p>
    <p><strong>Comprobación con la tabla:</strong></p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td>x</td>
                <td class="rojo">-5x</td>
                <td>-5</td>
            </tr>
            <tr class="fila-central">
                <td class="rojo">x²</td>
                <td class="rojo">-5x + 5x</td>
                <td class="rojo">-25</td>
            </tr>
            <tr>
                <td>x</td>
                <td class="rojo">5x</td>
                <td>5</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado">x² - 25</span>
    </div>
    <p>La fórmula también se aplica cuando los términos tienen coeficientes o exponentes. Basta con elevar al cuadrado cada término completo, incluyendo su coeficiente.</p>
    <p><strong>Ejemplo de binomios conjugados (con coeficientes):</strong></p>
    <p>(3x + 4) (3x - 4) = (3x)² - (4)² = 9x² - 16</p>
    <p><strong>Comprobación con la tabla:</strong></p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td>3x</td>
                <td class="rojo">-12x</td>
                <td>-4</td>
            </tr>
            <tr class="fila-central">
                <td class="rojo">9x²</td>
                <td class="rojo">-12x + 12x</td>
                <td class="rojo">-16</td>
            </tr>
            <tr>
                <td>3x</td>
                <td class="rojo">12x</td>
                <td>4</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado">9x² - 16</span>
    </div>
    <p><strong>Ejemplo de binomios conjugados (con dos variables):</strong></p>
    <p>(2a - 5b) (2a + 5b) = (2a)² - (5b)² = 4a² - 25b²</p>
    <p><strong>Comprobación con la tabla:</strong></p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td>2a</td>
                <td class="rojo">10ab</td>
                <td>5b</td>
            </tr>
            <tr class="fila-central">
                <td class="rojo">4a²</td>
                <td class="rojo">10ab - 10ab</td>
                <td class="rojo">-25b²</td>
            </tr>
            <tr>
                <td>2a</td>
                <td class="rojo">-10ab</td>
                <td>-5b</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado">4a² - 25b²</span>
    </div>
</section>`;
