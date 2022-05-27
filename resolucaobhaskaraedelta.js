/**
  * Δ = b ^ 2 - 4 * a * c
  * bhaskara = -b +- √Δ / 2 * a
  */

 function eqSegundoGrau(a, b, c) {
    const delta = (b ** 2) - 4 * a * c
  
    const raizDelta = Math.sqrt(delta)
  
    const x1 = (-b + raizDelta) / 2 * a
    const x2 = (-b - raizDelta) / 2 * a
  
    // return [x1, x2]
  
    return {
      x1, // x1: x1
      x2 // x2: x2
    }
}
  
  console.log(eqSegundoGrau(1, -1, -12)) 