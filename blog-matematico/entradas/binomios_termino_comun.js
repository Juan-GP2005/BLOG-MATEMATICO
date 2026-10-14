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
    <p>Un binomio con término común es el producto de dos binomios que comparten uno de sus términos, es decir, expresiones de la forma (<em>x</em> + <em>a</em>)(<em>x</em> + <em>b</em>), donde <em>x</em> es el término común.</p>
    <h3>Fórmula</h3>
    <p>El producto de dos binomios con un término común es igual al cuadrado del término común, más la suma de los términos no comunes multiplicada por el término común, más el producto de los términos no comunes.</p>
    <p><strong>Binomios con término común:</strong> (<em>x</em> + <em>a</em>)(<em>x</em> + <em>b</em>) = <em>x</em><sup>2</sup> + (<em>a</em> + <em>b</em>)<em>x</em> + <em>ab</em></p>
    <p><strong>Ejemplo de binomios con término común (ambos positivos):</strong></p>
    <p>(<em>x</em> + 3)(<em>x</em> + 5) = <em>x</em><sup>2</sup> + (3 + 5)<em>x</em> + (3)(5) = <em>x</em><sup>2</sup> + 8<em>x</em> + 15</p>
    <p><strong>Comprobación con la tabla:</strong></p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td><em>x</em></td>
                <td class="rojo">3<em>x</em></td>
                <td>3</td>
            </tr>
            <tr class="fila-central">
                <td class="rojo"><em>x</em><sup>2</sup></td>
                <td class="rojo">3<em>x</em> + 5<em>x</em></td>
                <td class="rojo">15</td>
            </tr>
            <tr>
                <td><em>x</em></td>
                <td class="rojo">5<em>x</em></td>
                <td>5</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado"><em>x</em><sup>2</sup> + 8<em>x</em> + 15</span>
    </div>
    <p>La fórmula también funciona cuando los términos no comunes son negativos o tienen signos distintos. Basta con tener cuidado con los signos: se suman los términos no comunes con su signo y se multiplican con la ley de los signos.</p>
    <p><strong>Ejemplo de binomios con término común (signos distintos):</strong></p>
    <p>(<em>x</em> - 2)(<em>x</em> + 7) = <em>x</em><sup>2</sup> + (-2 + 7)<em>x</em> + (-2)(7) = <em>x</em><sup>2</sup> + 5<em>x</em> - 14</p>
    <p><strong>Comprobación con la tabla:</strong></p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td><em>x</em></td>
                <td class="rojo">-2<em>x</em></td>
                <td>-2</td>
            </tr>
            <tr class="fila-central">
                <td class="rojo"><em>x</em><sup>2</sup></td>
                <td class="rojo">-2<em>x</em> + 7<em>x</em></td>
                <td class="rojo">-14</td>
            </tr>
            <tr>
                <td><em>x</em></td>
                <td class="rojo">7<em>x</em></td>
                <td>7</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado"><em>x</em><sup>2</sup> + 5<em>x</em> - 14</span>
    </div>
    <p><strong>Ejemplo de binomios con término común (ambos negativos):</strong></p>
    <p>(<em>x</em> - 4)(<em>x</em> - 6) = <em>x</em><sup>2</sup> + (-4 - 6)<em>x</em> + (-4)(-6) = <em>x</em><sup>2</sup> - 10<em>x</em> + 24</p>
    <p><strong>Comprobación con la tabla:</strong></p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td><em>x</em></td>
                <td class="rojo">-4<em>x</em></td>
                <td>-4</td>
            </tr>
            <tr class="fila-central">
                <td class="rojo"><em>x</em><sup>2</sup></td>
                <td class="rojo">-4<em>x</em> - 6<em>x</em></td>
                <td class="rojo">24</td>
            </tr>
            <tr>
                <td><em>x</em></td>
                <td class="rojo">-6<em>x</em></td>
                <td>-6</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado"><em>x</em><sup>2</sup> - 10<em>x</em> + 24</span>
    </div>
</section>`;