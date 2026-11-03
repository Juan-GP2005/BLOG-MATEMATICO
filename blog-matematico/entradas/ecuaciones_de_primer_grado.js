// Guarda todo el HTML de la entrada en la variable global "contenidoEntrada".
// Las comillas invertidas (`) permiten escribir varias líneas.
// entrada.html leerá esta variable y la inyectará en la página.
contenidoEntrada = `
<!-- <section> agrupa todo el contenido de la entrada.
     Esta entrada no lleva <style>: usa solo los estilos por defecto del navegador -->
<section>

    <!-- Título y presentación -->
    <h2>Ecuaciones de Primer Grado</h2>
    <p>En esta entrada se explicará el procedimiento general para resolver cualquier ecuación de primer grado con ejemplos.</p>
    <hr>

    <!-- ============ PROCEDIMIENTO GENERAL ============ -->
    <h3>El procedimiento general para resolver una ecuación de primer grado o ecuación lineal consiste en encontrar el valor de la incógnita (x) que hace que la igualdad sea verdadera.</h3>

    <!-- <ol> = lista ORDENADA (numerada automáticamente 1, 2, 3...). Cada <li> es un paso -->
    <ol>
        <!-- Paso 1: quitar paréntesis con la propiedad distributiva -->
        <li>Eliminar paréntesis de la ecuación y aplicar la propiedad distributiva multiplicando el número o signo que está fuera por cada uno de los términos que se encuentran dentro del paréntesis.</li>
        <!-- Paso 2: quitar fracciones multiplicando todo por el mcm de los denominadores -->
        <li>Multiplicar la ecuación por el mínimo compun múltiplo (mcm) de los demominadores para convertir la ecuación en entera.</li>
        <!-- Paso 3: pasar las x a un lado y los números al otro -->
        <li>Agrupar términos que contienen incógnita (x) en un miembro de la ecuación (comúnmente la izquierda) y los términos independientes en el otro miembro.</li>
        <!-- Paso 4: reducir sumando o restando -->
        <li>Simplificar ambos lados sumando o restando coeficientes</li>
        <!-- Paso 5: despejar x -->
        <li>Despejar la incógnita aislando la variable dividiendo ambos lados por el coeficiente que le acompañe.</li>
    </ol>

    <!-- ============ EJEMPLOS POR TIPO ============ -->
    <h2>Ejemplos por tipo</h2>

    <!-- ---------- Tipo 1: ecuación entera (sin fracciones ni paréntesis) ---------- -->
    <h3>1. Ecuación Entera</h3>
    <p><strong>Resolver:</strong> 5x - 3 = 2x + 12</p>
    <p><strong>Procedimiento:</strong></p>

    <!-- <ul> = lista NO ordenada (viñetas). Cada <li> es un paso de la resolución.
         &Rightarrow; es una entidad HTML que se muestra como la flecha ⇒ -->
    <ul>
      <!-- Se pasa 2x a la izquierda (queda restando) y -3 a la derecha (queda sumando) -->
      <li>5x - 2x = 12 + 3 (Transposición)</li>
      <li>3x = 15 (Reducción)</li>
      <li>x = 15 / 3 &Rightarrow; x = 5 (Despeje)</li>
    </ul>

    <hr>

    <!-- ---------- Tipo 2: ecuación fraccionaria ---------- -->
    <h3>2. Ecuación Fraccionaria</h3>
    <p><strong>Resolver:</strong> x / 2 + 1 / 3 = x / 3 + 5 / 6</p>
    <p><strong>Procedimiento:</strong></p>
    <ul>
      <!-- El mcm de 2, 3 y 6 es 6. Se multiplica cada término por 6 y desaparecen los denominadores:
           6(x/2) = 3x, 6(1/3) = 2, 6(x/3) = 2x, 6(5/6) = 5 -->
      <li>6(x / 2) + 6(1 / 3) = 6(x / 3) + 6(5 / 6) &Rightarrow; 3x + 2 = 2x + 5 (Eliminación de denominadores)</li>
      <li>3x - 2x = 5 - 2 (Transposición)</li>
      <li>x = 3 (Reducción y despeje)</li>
    </ul>

    <hr>

    <!-- ---------- Tipo 3: ecuación con paréntesis (signos de agrupación) ---------- -->
    <h3>3. Ecuación con Signos de Agrupación</h3>
    <p><strong>Resolver:</strong> 2(3x - 4) - 3(x + 1) = 4</p>
    <p><strong>Procedimiento:</strong></p>
    <ul>
      <!-- Propiedad distributiva: 2(3x - 4) = 6x - 8 y -3(x + 1) = -3x - 3.
           El signo menos delante del paréntesis cambia el signo de cada término de dentro -->
      <li>6x - 8 - 3x - 3 = 4 (Eliminación de paréntesis)</li>
      <!-- 6x - 3x = 3x y -8 - 3 = -11 -->
      <li>3x - 11 = 4 (Reducción inicial)</li>
      <li>3x = 4 + 11 (Transposición)</li>
      <li>3x = 15 (Reducción)</li>
      <li>x = 15 / 3 &Rightarrow; x = 5 (Despeje)</li>
    </ul>

    <hr>

    <!-- ---------- Tipo 4: ecuación literal (con letras en lugar de números) ---------- -->
    <h3>4. Ecuación Literal</h3>
    <p><strong>Resolver:</strong> ax + b = cx + d (despejar x)</p>
    <p><strong>Procedimiento:</strong></p>
    <ul>
      <li>ax - cx = d - b (Transposición)</li>
      <!-- Factorización: se saca x como factor común de ax - cx -->
      <li>x(a - c) = d - b (Factorización)</li>
      <!-- Se divide entre (a - c). Requiere que a sea distinto de c -->
      <li>x = (d - b) / (a - c) (Despeje)</li>
    </ul>
    <hr>

    <!-- ============ PROBLEMA DE PLANTEAMIENTO ============ -->
    <!-- <div> agrupa todo el problema. La clase "problema-algebraico" sirve para darle
         estilos, pero en este archivo no hay CSS que la use, así que por ahora no cambia nada -->
    <div class="problema-algebraico">
      <h3>Problema de Planteamiento: Optimización de Horas de Desarrollo</h3>

      <!-- Enunciado del problema -->
      <p><strong>Enunciado:</strong> Durante un sprint de desarrollo ágil, un programador junior y un desarrollador senior optimizan un total de 105 líneas de código defectuoso en una aplicación. Si el desarrollador senior optimiza el doble de líneas que el junior menos 15 líneas, ¿cuántas líneas de código optimizó cada programador?</p>

      <!-- Paso 1: definir la incógnita y expresar la otra cantidad en función de ella -->
      <h4>1. Incógnita</h4>
      <ul>
        <li>Sea x = líneas de código optimizadas por el programador junior.</li>
        <li>El desarrollador senior optimizó: 2x - 15 líneas.</li>
      </ul>

      <!-- Paso 2: pasar las palabras del enunciado a una igualdad -->
      <h4>2. Traducción al Lenguaje Algebraico</h4>
      <ul>
        <li>La suma total de líneas optimizadas entre ambos es igual a 105.</li>
        <li>Ecuación en lenguaje verbal: (Líneas del junior) + (Líneas del senior) = 105</li>
      </ul>

      <!-- Paso 3: escribir la ecuación con la incógnita -->
      <h4>3. Planteamiento de la Ecuación</h4>
      <ul>
        <li>x + (2x - 15) = 105</li>
      </ul>

      <!-- Paso 4: resolver con el procedimiento general -->
      <h4>4. Solución de la Ecuación</h4>
      <ul>
        <!-- El paréntesis tiene signo + delante, así que se quita sin cambiar signos -->
        <li>x + 2x - 15 = 105 (Eliminar paréntesis)</li>
        <li>3x - 15 = 105 (Reducir términos semejantes)</li>
        <li>3x = 105 + 15 (Transposición de términos)</li>
        <li>3x = 120 (Reducción)</li>
        <li>x = 120 / 3 &Rightarrow; x = 40 (Despeje del junior)</li>
        <!-- Con x ya conocida se calcula la cantidad del senior -->
        <li>Sustituyendo para el senior: 2(40) - 15 = 80 - 15 = 65</li>
      </ul>

      <!-- Paso 5: comprobar que los resultados cumplen el enunciado -->
      <h4>5. Validación contra el Enunciado</h4>
      <ul>
        <li>Comprobación de la suma total: 40 (junior) + 65 (senior) = 105 líneas de código. (¡La igualdad se cumple perfectamente!)</li>
      </ul>
    </div>
</section>
`; // Cierra el texto y la instrucción con ;
