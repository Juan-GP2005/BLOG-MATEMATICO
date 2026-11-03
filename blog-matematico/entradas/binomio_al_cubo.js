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
    <p><strong>Binomio de la suma al cubo:</strong> (a + b)³ = a³ + 3a²b + 3ab² + b³</p>
    <p><strong>Ejemplo de binomio al cubo (suma):</strong></p>
    <p>(x + 2)³ = (x)³ + 3(x)²(2) + 3(x)(2)² + (2)³ = x³ + 6x² + 12x + 8</p>
    <p>Con tablas: (x + 2)³ = (x + 2)²(x + 2). El primer factor ya se sabe resolver: (x + 2)² = x² + 4x + 4.</p>
    <p>Ahora multiplica (x² + 4x + 4)(x + 2) con divide:</p>
    <div class="tablas-fila">
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x²</td>
                <td>4x</td>
                <td>4</td>
            </tr>
            <tr>
                <td>x</td>
                <td>x</td>
                <td>x</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>x³</td>
                <td>4x²</td>
                <td>4x</td>
            </tr>
        </table>
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x²</td>
                <td>4x</td>
                <td>4</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>2x²</td>
                <td>8x</td>
                <td>8</td>
            </tr>
        </table>
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x³</td>
                <td>x²</td>
                <td>x¹</td>
                <td>x⁰</td>
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
    <p><strong>Resultado:</strong> <span class="resultado-final">x³ + 6x² + 12x + 8</span> ✓ — el mismo que con la fórmula.</p>
    <p>El cubo de la resta de dos términos sigue la misma estructura, pero los signos se alternan (+, -, +, -): el cubo del primero, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo.</p>
    <p><strong>Binomio de la resta al cubo:</strong> (a - b)³ = a³ - 3a²b + 3ab² - b³</p>
    <p><strong>Ejemplo de binomio al cubo (resta):</strong></p>
    <p>(x - 2)³ = (x)³ - 3(x)²(2) + 3(x)(2)² - (2)³ = x³ - 6x² + 12x - 8</p>
    <p>Con tablas: (x - 2)³ = (x - 2)²(x - 2). El primer factor ya se sabe resolver: (x - 2)² = x² - 4x + 4.</p>
    <p>Ahora multiplica (x² - 4x + 4)(x - 2) con divide:</p>
    <div class="tablas-fila">
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x²</td>
                <td>-4x</td>
                <td>+4</td>
            </tr>
            <tr>
                <td>x</td>
                <td>x</td>
                <td>x</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>x³</td>
                <td>-4x²</td>
                <td>4x</td>
            </tr>
        </table>
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x²</td>
                <td>-4x</td>
                <td>+4</td>
            </tr>
            <tr>
                <td>-2</td>
                <td>-2</td>
                <td>-2</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>-2x²</td>
                <td>8x</td>
                <td>-8</td>
            </tr>
        </table>
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x³</td>
                <td>x²</td>
                <td>x¹</td>
                <td>x⁰</td>
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
    <p><strong>Resultado:</strong> <span class="resultado-final">x³ - 6x² + 12x - 8</span> ✓ — el mismo que con la fórmula.</p>
</section>`;contenidoEntrada = `
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
    <p><strong>Binomio de la suma al cubo:</strong> (a + b)³ = a³ + 3a²b + 3ab² + b³</p>
    <p><strong>Ejemplo de binomio al cubo (suma):</strong></p>
    <p>(x + 2)³ = (x)³ + 3(x)²(2) + 3(x)(2)² + (2)³ = x³ + 6x² + 12x + 8</p>
    <p>Con tablas: (x + 2)³ = (x + 2)²(x + 2). El primer factor ya se sabe resolver: (x + 2)² = x² + 4x + 4.</p>
    <p>Ahora multiplica (x² + 4x + 4)(x + 2) con divide:</p>
    <div class="tablas-fila">
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x²</td>
                <td>4x</td>
                <td>4</td>
            </tr>
            <tr>
                <td>x</td>
                <td>x</td>
                <td>x</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>x³</td>
                <td>4x²</td>
                <td>4x</td>
            </tr>
        </table>
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x²</td>
                <td>4x</td>
                <td>4</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>2x²</td>
                <td>8x</td>
                <td>8</td>
            </tr>
        </table>
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x³</td>
                <td>x²</td>
                <td>x¹</td>
                <td>x⁰</td>
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
    <p><strong>Resultado:</strong> <span class="resultado-final">x³ + 6x² + 12x + 8</span> ✓ — el mismo que con la fórmula.</p>
    <p>El cubo de la resta de dos términos sigue la misma estructura, pero los signos se alternan (+, -, +, -): el cubo del primero, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo.</p>
    <p><strong>Binomio de la resta al cubo:</strong> (a - b)³ = a³ - 3a²b + 3ab² - b³</p>
    <p><strong>Ejemplo de binomio al cubo (resta):</strong></p>
    <p>(x - 2)³ = (x)³ - 3(x)²(2) + 3(x)(2)² - (2)³ = x³ - 6x² + 12x - 8</p>
    <p>Con tablas: (x - 2)³ = (x - 2)²(x - 2). El primer factor ya se sabe resolver: (x - 2)² = x² - 4x + 4.</p>
    <p>Ahora multiplica (x² - 4x + 4)(x - 2) con divide:</p>
    <div class="tablas-fila">
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x²</td>
                <td>-4x</td>
                <td>+4</td>
            </tr>
            <tr>
                <td>x</td>
                <td>x</td>
                <td>x</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>x³</td>
                <td>-4x²</td>
                <td>4x</td>
            </tr>
        </table>
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x²</td>
                <td>-4x</td>
                <td>+4</td>
            </tr>
            <tr>
                <td>-2</td>
                <td>-2</td>
                <td>-2</td>
            </tr>
            <tr class="linea-arriba rojo">
                <td>-2x²</td>
                <td>8x</td>
                <td>-8</td>
            </tr>
        </table>
        <table class="tabla-binomio">
            <tr class="linea-abajo">
                <td>x³</td>
                <td>x²</td>
                <td>x¹</td>
                <td>x⁰</td>
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
    <p><strong>Resultado:</strong> <span class="resultado-final">x³ - 6x² + 12x - 8</span> ✓ — el mismo que con la fórmula.</p>
</section>`;
