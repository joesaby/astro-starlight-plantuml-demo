---
title: Class Diagrams
description: Examples of class diagrams with astro-plantuml
---

Class diagrams show the structure of a system by depicting classes, their attributes, methods, and relationships.

## Basic Class

```plantuml
@startuml
class User {
  -String id
  -String email
  -String password
  +login()
  +logout()
  +resetPassword()
}
@enduml
```

## Inheritance Example

```plantuml
@startuml
abstract class Animal {
  #String name
  #int age
  +makeSound()
  +eat()
  +sleep()
}

class Dog extends Animal {
  -String breed
  +bark()
  +wagTail()
}

class Cat extends Animal {
  -String furColor
  +meow()
  +purr()
}

class Bird extends Animal {
  -double wingspan
  +fly()
  +chirp()
}
@enduml
```

## E-commerce System

```plantuml
@startuml
!theme blueprint

class Product {
  -String id
  -String name
  -double price
  -int stock
  +getPrice(): double
  +updateStock(quantity: int): void
}

class Order {
  -String id
  -Date createdAt
  -OrderStatus status
  -List<OrderItem> items
  +calculateTotal(): double
  +addItem(product: Product, quantity: int): void
}

class OrderItem {
  -Product product
  -int quantity
  -double price
  +getSubtotal(): double
}

class Customer {
  -String id
  -String name
  -String email
  -List<Order> orders
  +placeOrder(order: Order): void
}

Customer "1" --> "*" Order : places
Order "1" --> "*" OrderItem : contains
OrderItem "*" --> "1" Product : refers to
@enduml
```

## Design Patterns

### Factory Pattern

```plantuml
@startuml
interface Vehicle {
  +start()
  +stop()
  +accelerate()
}

class Car implements Vehicle {
  +start()
  +stop()
  +accelerate()
}

class Bike implements Vehicle {
  +start()
  +stop()
  +accelerate()
}

class VehicleFactory {
  +createVehicle(type: String): Vehicle
}

VehicleFactory ..> Vehicle : creates
VehicleFactory ..> Car : creates
VehicleFactory ..> Bike : creates
@enduml
```

### Observer Pattern

```plantuml
@startuml
interface Observer {
  +update(event: Event)
}

abstract class Subject {
  -List<Observer> observers
  +attach(observer: Observer)
  +detach(observer: Observer)
  +notify()
}

class ConcreteSubject extends Subject {
  -String state
  +getState(): String
  +setState(state: String)
}

class ConcreteObserver implements Observer {
  -String name
  +update(event: Event)
}

Subject o--> Observer : notifies
ConcreteSubject --> ConcreteObserver
@enduml
```

## Advanced Relationships

```plantuml
@startuml
class School {
  -String name
  -String address
}

class Department {
  -String name
  -String code
}

class Professor {
  -String name
  -String employeeId
}

class Student {
  -String name
  -String studentId
}

class Course {
  -String title
  -String code
  -int credits
}

' Composition: School "owns" departments
School "1" *-- "many" Department : has

' Aggregation: Department has professors
Department "1" o-- "many" Professor : employs

' Association: Professor teaches courses
Professor "1" -- "many" Course : teaches

' Many-to-many: Students enroll in courses
Student "many" -- "many" Course : enrolls

note right of School : Composition:\nDepartments cannot\nexist without School

note right of Department : Aggregation:\nProfessors can exist\nwithout Department
@enduml
```

## Visibility Modifiers

- `+` Public
- `-` Private
- `#` Protected
- `~` Package/Internal

## Relationship Types

- `--|>` Inheritance
- `..|>` Interface implementation
- `--` Association
- `-->` Directed association
- `o--` Aggregation
- `*--` Composition
- `..>` Dependency