contenidoEntrada = `
<section>
    <style>
        .tabla-binomio { border-collapse: collapse; text-align: center; margin: 0.5rem 0; }
        .tabla-binomio td { padding: 4px 14px; }
        .tabla-binomio td + td { border-left: 1px solid currentColor; }
        .tabla-binomio .linea-abajo td { border-bottom: 1px solid currentColor; }
        .tabla-binomio .linea-arriba td { border-top: 1px solid currentColor; }
        .tabla-binomio .rojo td { color: red; }
        .tablas-fila { display: flex; align-items: flex-start; gap: 2rem; flex-wrap: wrap; }
        .resultado-final { color: red; }
    </style>
    <h2>Binomio al Cubo</h2>
    <p>Un binomio al cubo es una expresión algebraica formada por dos términos sumados o restados que se elevan a la potencia 3.</p>
    <h3>Fórmulas</h3>
    <p>El cubo de la suma de dos términos es igual al cubo del primero, más el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, más el cubo del segundo.</p>
    <p><strong>Binomio de la suma al cubo:</strong> (<em>a</em> + <em>b</em>)<sup>3</sup> = <em>a</em><sup>3</sup> + 3<em>a</em><sup>2</sup><em>b</em> + 3<em>ab</em><sup>2</sup> + <em>b</em><sup>3</sup></p>
    <p><strong>Ejemplo de binomio al cubo (suma):</strong></p>
    <p>(<em>x</em> + 2)<sup>3</sup> = (<em>x</em>)<sup>3</sup> + 3(<em>x</em>)<sup>2</sup>(2) + 3(<em>x</em>)(2)<sup>2</sup> + (2)<sup>3</sup> = <em>x</em><sup>3</sup> + 6<em>x</em><sup>2</sup> + 12<em>x</em> + 8</p>
    <p>Con tablas: (<em>x</em> + 2)<sup>3</sup> = (<em>x</em> + 2)<sup>2</sup>(<em>x</em> + 2). El primer factor ya se sabe resolver: (<em>x</em> + 2)<sup>2</sup> = <em>x</em><sup>2</sup> + 4<em>x</em> + 4.</p>
    <p>Ahora multiplica (<em>x</em><sup>2</sup> + 4<em>x</em> + 4)(<em>x</em> + 2) con divide:</p>
    <div class="tablas-fila">
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td><em>x</em><sup>2</sup></td>
                <td>4<em>x</em></td>
                <td>4</td>
            </tr>
            <tr>
                <td><em>x</em></td>
                <td><em>x</em></td>
                <td><em>x</em></td>
            </tr>
            <tr class="linea-arriba rojo">
                <td><em>x</em><sup>3</sup></td>
                <td>4<em>x</em><sup>2</sup></td>
                <td>4<em>x</em></td>
            </tr>
        </table>
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td><em>x</em><sup>2</sup></td>
                <td>4<em>x</em></td>
                <td>4</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>2<em>x</em><sup>2</sup></td>
                <td>8<em>x</em></td>
                <td>8</td>
            </tr>
        </table>
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td><em>x</em><sup>3</sup></td>
                <td><em>x</em><sup>2</sup></td>
                <td><em>x</em><sup>1</sup></td>
                <td><em>x</em><sup>0</sup></td>
            </tr>
            <tr>
                <td>1</td>
                <td>4</td>
                <td>4</td>
                <td>0</td>
            </tr>
            <tr class="linea-abajo">
                <td>0</td>
                <td>2</td>
                <td>8</td>
                <td>8</td>
            </tr>
            <tr>
                <td>1</td>
                <td>6</td>
                <td>12</td>
                <td>8</td>
            </tr>
        </table>
    </div>
    <p><strong>Resultado:</strong> <span class="resultado-final"><em>x</em><sup>3</sup> + 6<em>x</em><sup>2</sup> + 12<em>x</em> + 8</span> ✓ — el mismo que con la fórmula.</p>
    <p>El cubo de la resta de dos términos sigue la misma estructura, pero los signos se alternan (+, -, +, -): el cubo del primero, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo.</p>
    <p><strong>Binomio de la resta al cubo:</strong> (<em>a</em> - <em>b</em>)<sup>3</sup> = <em>a</em><sup>3</sup> - 3<em>a</em><sup>2</sup><em>b</em> + 3<em>ab</em><sup>2</sup> - <em>b</em><sup>3</sup></p>
    <p><strong>Ejemplo de binomio al cubo (resta):</strong></p>
    <p>(<em>x</em> - 2)<sup>3</sup> = (<em>x</em>)<sup>3</sup> - 3(<em>x</em>)<sup>2</sup>(2) + 3(<em>x</em>)(2)<sup>2</sup> - (2)<sup>3</sup> = <em>x</em><sup>3</sup> - 6<em>x</em><sup>2</sup> + 12<em>x</em> - 8</p>
    <p>Con tablas: (<em>x</em> - 2)<sup>3</sup> = (<em>x</em> - 2)<sup>2</sup>(<em>x</em> - 2). El primer factor ya se sabe resolver: (<em>x</em> - 2)<sup>2</sup> = <em>x</em><sup>2</sup> - 4<em>x</em> + 4.</p>
    <p>Ahora multiplica (<em>x</em><sup>2</sup> - 4<em>x</em> + 4)(<em>x</em> - 2) con divide:</p>
    <div class="tablas-fila">
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td><em>x</em><sup>2</sup></td>
                <td>-4<em>x</em></td>
                <td>+4</td>
            </tr>
            <tr>
                <td><em>x</em></td>
                <td><em>x</em></td>
                <td><em>x</em></td>
            </tr>
            <tr class="linea-arriba rojo">
                <td><em>x</em><sup>3</sup></td>
                <td>-4<em>x</em><sup>2</sup></td>
                <td>4<em>x</em></td>
            </tr>
        </table>
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td><em>x</em><sup>2</sup></td>
                <td>-4<em>x</em></td>
                <td>+4</td>
            </tr>
            <tr>
                <td>-2</td>
                <td>-2</td>
                <td>-2</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>-2<em>x</em><sup>2</sup></td>
                <td>8<em>x</em></td>
                <td>-8</td>
            </tr>
        </table>
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td><em>x</em><sup>3</sup></td>
                <td><em>x</em><sup>2</sup></td>
                <td><em>x</em><sup>1</sup></td>
                <td><em>x</em><sup>0</sup></td>
            </tr>
            <tr>
                <td>1</td>
                <td>-4</td>
                <td>4</td>
                <td>0</td>
            </tr>
            <tr class="linea-abajo">
                <td>0</td>
                <td>-2</td>
                <td>8</td>
                <td>-8</td>
            </tr>
            <tr>
                <td>1</td>
                <td>-6</td>
                <td>12</td>
                <td>-8</td>
            </tr>
        </table>
    </div>
    <p><strong>Resultado:</strong> <span class="resultado-final"><em>x</em><sup>3</sup> - 6<em>x</em><sup>2</sup> + 12<em>x</em> - 8</span> ✓ — el mismo que con la fórmula.</p>
</section>`;