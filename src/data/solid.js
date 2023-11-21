
export const single = {
    title: "Single Responsability",
    description: "A class should have only one reason to change, meaning it should have only one responsibility. This promotes maintainability and reduces the impact of changes.",
    code: `class Coche {  
    String marca;
    Coche(String marca){ this.marca = marca; }
    String getMarcaCoche(){ return marca; }
}

class CocheDB{  
    void guardarCocheDB(Coche coche){ ... }
    void eliminarCocheDB(Coche coche){ ... }
}`}

export const openClose = {
    title: "Open-Close",
    description: "A class should be open for extension but closed for modification. This can be achieved through inheritance and interface implementation.",
    code: `abstract class Coche {  
    // ...
    abstract int precioMedioCoche();
}

class Renault extends Coche {  
    @Override
    int precioMedioCoche() { return 18000; }
}

class Audi extends Coche {  
    @Override
    int precioMedioCoche() { return 25000; }
}

class Mercedes extends Coche {  
    @Override
    int precioMedioCoche() { return 27000; }
}

public static void main(String[] args) {

    Coche[] arrayCoches = {
            new Renault(),
            new Audi(),
            new Mercedes()
    };

    imprimirPrecioMedioCoche(arrayCoches);
}

public static void imprimirPrecioMedioCoche(Coche[] arrayCoches){  
    for (Coche coche : arrayCoches) {
        System.out.println(coche.precioMedioCoche());
    }
}`}

export const liskov = {
    title: "Liskov Substitution",
    description: "Objects of a base class should be replaceable with objects of a derived class without affecting the correctness of the program",
    code: `public interface Car {
        void turnOnEngine();
        void accelerate();
    }
    public class MotorCar extends Car {

        private Engine engine;
    
        //Constructors, getters + setters
    
        public void turnOnEngine() {
            //turn on the engine!
            engine.on();
        }
    
        public void accelerate() {
            //move forward!
            engine.powerOn(1000);
        }
    }
    public class ElectricCar implements Car {

        public void turnOnEngine() {
            throw new AssertionError("I don't have an engine!");
        }
    
        public void accelerate() {
            //this acceleration is crazy!
        }
    }
    `}
export const interfaceSegregation = {
    title: "Interface Segregation",
    description: "A class should not be forced to implement interfaces it does not use. It's preferable to have several small, specific interfaces rather than one large interface.",
    code: `// Interface BearKeeper
    class BearKeeper {
      washTheBear() {}
      feedTheBear() {}
      petTheBear() {}
    }
    
    // Interface BearCleaner
    class BearCleaner {
      washTheBear() {}
    }
    
    // Interface BearFeeder
    class BearFeeder {
      feedTheBear() {}
    }
    
    // Interface BearPetter
    class BearPetter {
      petTheBear() {}
    }
    
    // Clase BearCarer que implements BearCleaner and BearFeeder
    class BearCarer extends BearCleaner, BearFeeder {
      washTheBear() {
        // I think we missed a spot...
      }
    
      feedTheBear() {
        // Tuna Tuesdays...
      }
    }
    
    // Clase CrazyPerson que implements BearPetter
    class CrazyPerson extends BearPetter {
      petTheBear() {
        // Good luck with that!
      }
    }
    
        `}

export const dependency = {
    title: "Dependency Invertion",
    description: "High-level modules should not depend on low-level modules, but both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.",
    code: `
    class Keyboard {}
    
    class Monitor {}
    
    class Windows98Machine {
      constructor(keyboard, monitor) {
        this.keyboard = keyboard;
        this.monitor = monitor;
      }
    }
    
    class StandardKeyboard extends Keyboard {}
    `}