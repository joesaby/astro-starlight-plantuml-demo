---
title: Sequence Diagrams
description: Examples of sequence diagrams with astro-plantuml
---

Sequence diagrams show interactions between participants over time. They're perfect for documenting APIs, user flows, and system interactions.

## Basic Sequence Diagram

```plantuml
@startuml
Alice -> Bob: Hello Bob!
Bob --> Alice: Hi Alice!
@enduml
```

## Authentication Flow

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

## Async Communication

```plantuml
@startuml
participant "Service A" as A
participant "Message Queue" as MQ
participant "Service B" as B

A -> MQ: Publish event
note right: Async message
MQ -> MQ: Store message
MQ --> A: Acknowledged

... 5 minutes later ...

B -> MQ: Poll for messages
MQ --> B: Deliver event
B -> B: Process event
B -> MQ: Acknowledge
@enduml
```

## Error Handling

```plantuml
@startuml
participant Client
participant Server
participant Database

Client -> Server: Request data
Server -> Database: Query
Database --> Server: Error: Connection timeout

alt Database error
    Server --> Client: 503 Service Unavailable
    note right: Retry later
else Success
    Server --> Client: 200 OK with data
end
@enduml
```

## Complex Flow with Groups

```plantuml
@startuml
!theme cerulean

participant Browser
participant "Load Balancer" as LB
participant "App Server" as App
participant Cache
participant Database

group Health Check
    LB -> App: Ping
    App --> LB: Pong
end

group User Request
    Browser -> LB: GET /api/users/123
    LB -> App: Forward request
    
    App -> Cache: Check cache
    alt Cache hit
        Cache --> App: Cached data
    else Cache miss
        App -> Database: SELECT user
        Database --> App: User data
        App -> Cache: Store in cache
    end
    
    App --> LB: Response
    LB --> Browser: User data
end
@enduml
```

## Tips for Sequence Diagrams

1. **Use meaningful names**: Instead of `A`, `B`, use `Client`, `Server`
2. **Add notes**: Use `note left/right` to add context
3. **Show timing**: Use `...` to indicate time passing
4. **Group related interactions**: Use `group` blocks
5. **Handle conditions**: Use `alt/else` for different flows