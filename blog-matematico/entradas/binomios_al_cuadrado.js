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
    <p><strong>Binomio de la suma al cuadrado:</strong> (<em>a</em> + <em>b</em>)<sup>2</sup> = <em>a</em><sup>2</sup> + 2<em>ab</em> + <em>b</em><sup>2</sup></p>
    <p><strong>Ejemplo de binomio al cuadrado (suma):</strong></p>
    <p>(<em>x</em> + 5)<sup>2</sup> = (<em>x</em>)<sup>2</sup> + 2(<em>x</em>)(5) + (5)<sup>2</sup> = <em>x</em><sup>2</sup> + 10<em>x</em> + 25</p>
    <p>Con la tabla: (<em>x</em> + 5)<sup>2</sup> = (<em>x</em> + 5)(<em>x</em> + 5)</p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td><em>x</em></td>
                <td>5<em>x</em></td>
                <td>5</td>
            </tr>
            <tr class="fila-central">
                <td><em>x</em><sup>2</sup></td>
                <td>5<em>x</em> + 5<em>x</em></td>
                <td>25</td>
            </tr>
            <tr>
                <td><em>x</em></td>
                <td>5<em>x</em></td>
                <td>5</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado"><em>x</em><sup>2</sup> + 10<em>x</em> + 25</span>
    </div>
    <p>Resta: El cuadrado de la resta de dos términos es igual al cuadrado del primero, menos el doble del primero por el segundo, más el cuadrado del segundo.</p>
    <p><strong>Binomio de la resta al cuadrado:</strong> (<em>a</em> - <em>b</em>)<sup>2</sup> = <em>a</em><sup>2</sup> - 2<em>ab</em> + <em>b</em><sup>2</sup></p>
    <p><strong>Ejemplo de binomio al cuadrado (resta con coeficientes):</strong></p>
    <p>(3<em>x</em> - 4)<sup>2</sup> = (3<em>x</em>)<sup>2</sup> - 2(3<em>x</em>)(4) + (4)<sup>2</sup> = 9<em>x</em><sup>2</sup> - 24<em>x</em> + 16</p>
    <p>Con la tabla: (3<em>x</em> - 4)<sup>2</sup> = (3<em>x</em> - 4)(3<em>x</em> - 4)</p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td>3<em>x</em></td>
                <td>-12<em>x</em></td>
                <td>-4</td>
            </tr>
            <tr class="fila-central">
                <td>9<em>x</em><sup>2</sup></td>
                <td>-12<em>x</em> - 12<em>x</em></td>
                <td>16</td>
            </tr>
            <tr>
                <td>3<em>x</em></td>
                <td>-12<em>x</em></td>
                <td>-4</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado">9<em>x</em><sup>2</sup> - 24<em>x</em> + 16</span>
    </div>
</section>`;