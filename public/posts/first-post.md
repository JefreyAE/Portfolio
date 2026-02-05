# Principios SOLID con ejemplos en JavaScript

Los principios **SOLID** son cinco reglas fundamentales para escribir código limpio, mantenible y escalable. Estos principios guían el diseño orientado a objetos, pero se aplican en cualquier paradigma para mejorar la calidad del código.

---

## Single Responsibility Principle (SRP)

Una clase debe tener una única responsabilidad y, por tanto, una única razón para cambiar. Esto mejora la mantenibilidad y facilita la evolución del código.

Ejemplo:

```js
// Ejemplo incorrecto: múltiples responsabilidades
class Coche {
  constructor(marca) {
    this.marca = marca;
  }

  guardar() {
    // Guardar coche en base de datos (responsabilidad extra)
  }
}

// Ejemplo correcto: separación de responsabilidades
class Coche {
  constructor(marca) {
    this.marca = marca;
  }
}

class CocheRepository {
  guardar(coche) {
    // Código para guardar el coche en la base de datos
  }
}
```

---

## Open/Closed Principle (OCP)

Las entidades de software deben estar abiertas para extensión, pero cerradas para modificación. Esto permite añadir funcionalidades sin cambiar el código existente y sin introducir bugs.

Ejemplo:

```js
class Coche {
  precioMedio() {
    throw new Error("Método debe implementarse");
  }
}

class Renault extends Coche {
  precioMedio() {
    return 18000;
  }
}

class Audi extends Coche {
  precioMedio() {
    return 25000;
  }
}

```

---

## Liskov Substitution Principle (LSP)


Los objetos de una subclase deben poder reemplazar a los objetos de la superclase sin alterar el comportamiento esperado del programa.

Ejemplo:

```js
class Car {
  turnOnEngine() {
    console.log("Motor encendido");
  }
  accelerate() {
    console.log("Acelerando");
  }
}

class MotorCar extends Car {}

class ElectricCar extends Car {
  turnOnEngine() {
    // Violación del principio: esta subclase no cumple la expectativa
    throw new Error("No tengo motor");
  }
}
```

---

## Interface Segregation Principle (ISP)


Es preferible tener varias interfaces específicas y pequeñas que una interfaz única con métodos innecesarios para las clases que la implementan.

Ejemplo:

```js
class BearCleaner {
  washTheBear() {
    console.log("Limpio el oso");
  }
}

class BearFeeder {
  feedTheBear() {
    console.log("Alimento el oso");
  }
}

class BearPetter {
  petTheBear() {
    console.log("Acaricio el oso");
  }
}

class BearCarer extends BearCleaner {}

class CrazyPerson extends BearPetter {}
```

---

## Dependency Inversion Principle (DIP)


Los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones. Las abstracciones no deben depender de detalles, sino que los detalles deben depender de abstracciones.

Ejemplo:

```js
class Keyboard {
  pressKey() {
    throw new Error("Este método debe implementarse");
  }
}

class StandardKeyboard extends Keyboard {
  pressKey() {
    console.log("Tecla presionada");
  }
}

class WindowsMachine {
  constructor(keyboard) {
    this.keyboard = keyboard;
  }

  type() {
    this.keyboard.pressKey();
  }
}

const keyboard = new StandardKeyboard();
const pc = new WindowsMachine(keyboard);
pc.type(); // Tecla presionada


