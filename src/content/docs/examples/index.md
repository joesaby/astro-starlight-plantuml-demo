---
title: All Diagram Examples
description: Complete showcase of PlantUML diagrams rendered with astro-plantuml
---

This page showcases all the different types of PlantUML diagrams you can create with the `astro-plantuml` integration. Each diagram is rendered automatically from markdown code blocks.

## Sequence Diagram

Here's a simple sequence diagram showing a user authentication flow:

```plantuml
@startuml
!theme plain
participant User
participant "Web App" as App
participant "Auth Service" as Auth
participant Database

User -> App: Login (username, password)
App -> Auth: Validate credentials
Auth -> Database: Query user
Database --> Auth: User data
Auth -> Auth: Verify password
Auth --> App: JWT token
App --> User: Login successful
@enduml
```

## Class Diagram

A typical e-commerce system class structure:

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

## Activity Diagram

The order processing workflow:

```plantuml
@startuml
start
:Customer places order;

if (Payment authorized?) then (yes)
  :Process payment;
  :Update inventory;
  
  fork
    :Send confirmation email;
  fork again
    :Generate invoice;
  fork again
    :Notify warehouse;
  end fork
  
  :Order completed;
else (no)
  :Cancel order;
  :Send failure notification;
endif

stop
@enduml
```

## State Diagram

Order lifecycle states:

```plantuml
@startuml
[*] --> Pending: Order placed

Pending --> Processing: Payment confirmed
Pending --> Cancelled: Payment failed

Processing --> Shipped: Items packed
Processing --> Cancelled: Out of stock

Shipped --> Delivered: Package received
Shipped --> Returned: Customer returns

Delivered --> [*]
Returned --> Refunded: Refund processed
Refunded --> [*]
Cancelled --> [*]
@enduml
```

## Component Diagram

System architecture overview:

```plantuml
@startuml
!theme cerulean

package "Frontend" {
  [React App]
  [Mobile App]
}

package "API Gateway" {
  [REST API]
  [GraphQL]
}

package "Microservices" {
  [Auth Service]
  [Order Service]
  [Product Service]
  [Payment Service]
}

package "Data Layer" {
  database "PostgreSQL" as db
  database "Redis Cache" as cache
  queue "Message Queue" as mq
}

[React App] --> [REST API]
[Mobile App] --> [GraphQL]

[REST API] --> [Auth Service]
[REST API] --> [Order Service]
[GraphQL] --> [Product Service]
[GraphQL] --> [Payment Service]

[Auth Service] --> db
[Order Service] --> db
[Order Service] --> cache
[Product Service] --> db
[Payment Service] --> mq
@enduml
```

## Mind Map

Project features overview:

```plantuml
@startmindmap
* Astro PlantUML
** Features
*** Auto-conversion
*** Multiple diagram types
*** Custom servers
*** Error handling
** Use Cases
*** Documentation
*** Technical specs
*** Architecture diagrams
*** Process flows
** Benefits
*** No manual exports
*** Version control friendly
*** Easy to maintain
*** Fast rendering
@endmindmap
```

## Gantt Chart

Development timeline:

```plantuml
@startgantt
Project starts 2024-01-01
[Design Phase] lasts 10 days
[Implementation] lasts 20 days
[Implementation] starts at [Design Phase]'s end
[Testing] lasts 10 days
[Testing] starts at [Implementation]'s end
[Documentation] lasts 5 days
[Documentation] starts at [Testing]'s start
[Release] happens at [Testing]'s end
@endgantt
```

