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
    <h2>Binomios Conjugados</h2>
    <p>Los binomios conjugados son dos binomios que tienen los mismos términos, pero uno está sumado y el otro restado, es decir, expresiones de la forma (<em>a</em> + <em>b</em>)(<em>a</em> - <em>b</em>).</p>
    <h3>Fórmula</h3>
    <p>El producto de dos binomios conjugados es igual al cuadrado del primer término menos el cuadrado del segundo término. Los términos del medio se cancelan, por lo que el resultado es una diferencia de cuadrados.</p>
    <p><strong>Binomios conjugados:</strong> (<em>a</em> + <em>b</em>)(<em>a</em> - <em>b</em>) = <em>a</em><sup>2</sup> - <em>b</em><sup>2</sup></p>
    <p><strong>Ejemplo de binomios conjugados (con números):</strong></p>
    <p>(<em>x</em> + 5)(<em>x</em> - 5) = (<em>x</em>)<sup>2</sup> - (5)<sup>2</sup> = <em>x</em><sup>2</sup> - 25</p>
    <p><strong>Comprobación con la tabla:</strong></p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td><em>x</em></td>
                <td class="rojo">-5<em>x</em></td>
                <td>-5</td>
            </tr>
            <tr class="fila-central">
                <td class="rojo"><em>x</em><sup>2</sup></td>
                <td class="rojo">-5<em>x</em> + 5<em>x</em></td>
                <td class="rojo">-25</td>
            </tr>
            <tr>
                <td><em>x</em></td>
                <td class="rojo">5<em>x</em></td>
                <td>5</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado"><em>x</em><sup>2</sup> - 25</span>
    </div>
    <p>La fórmula también se aplica cuando los términos tienen coeficientes o exponentes. Basta con elevar al cuadrado cada término completo, incluyendo su coeficiente.</p>
    <p><strong>Ejemplo de binomios conjugados (con coeficientes):</strong></p>
    <p>(3<em>x</em> + 4)(3<em>x</em> - 4) = (3<em>x</em>)<sup>2</sup> - (4)<sup>2</sup> = 9<em>x</em><sup>2</sup> - 16</p>
    <p><strong>Comprobación con la tabla:</strong></p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td>3<em>x</em></td>
                <td class="rojo">-12<em>x</em></td>
                <td>-4</td>
            </tr>
            <tr class="fila-central">
                <td class="rojo">9<em>x</em><sup>2</sup></td>
                <td class="rojo">-12<em>x</em> + 12<em>x</em></td>
                <td class="rojo">-16</td>
            </tr>
            <tr>
                <td>3<em>x</em></td>
                <td class="rojo">12<em>x</em></td>
                <td>4</td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado">9<em>x</em><sup>2</sup> - 16</span>
    </div>
    <p><strong>Ejemplo de binomios conjugados (con dos variables):</strong></p>
    <p>(2<em>a</em> - 5<em>b</em>)(2<em>a</em> + 5<em>b</em>) = (2<em>a</em>)<sup>2</sup> - (5<em>b</em>)<sup>2</sup> = 4<em>a</em><sup>2</sup> - 25<em>b</em><sup>2</sup></p>
    <p><strong>Comprobación con la tabla:</strong></p>
    <div class="resultado-tabla">
        <table class="tabla-binomio">
            <tr>
                <td>2<em>a</em></td>
                <td class="rojo">10<em>ab</em></td>
                <td>5<em>b</em></td>
            </tr>
            <tr class="fila-central">
                <td class="rojo">4<em>a</em><sup>2</sup></td>
                <td class="rojo">10<em>ab</em> - 10<em>ab</em></td>
                <td class="rojo">-25<em>b</em><sup>2</sup></td>
            </tr>
            <tr>
                <td>2<em>a</em></td>
                <td class="rojo">-10<em>ab</em></td>
                <td>-5<em>b</em></td>
            </tr>
        </table>
        <span>→</span>
        <span class="resultado">4<em>a</em><sup>2</sup> - 25<em>b</em><sup>2</sup></span>
    </div>
</section>`;