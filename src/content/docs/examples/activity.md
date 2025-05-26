---
title: Activity Diagrams
description: Examples of activity diagrams with astro-plantuml
---

Activity diagrams show the flow of control or data through a system. They're great for documenting business processes and algorithms.

## Basic Flow

```plantuml
@startuml
start
:Read input;
:Process data;
:Display result;
stop
@enduml
```

## Conditional Flow

```plantuml
@startuml
start
:Check user credentials;

if (Valid credentials?) then (yes)
  :Grant access;
  :Load dashboard;
else (no)
  :Show error message;
  :Log failed attempt;
endif

stop
@enduml
```

## Order Processing Workflow

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

## Complex Business Process

```plantuml
@startuml
!theme plain

start
:Receive application;

:Initial review;
note right: Check completeness

if (Complete?) then (yes)
  :Technical evaluation;
  
  if (Meets requirements?) then (yes)
    :Schedule interview;
    :Conduct interview;
    
    if (Approved?) then (yes)
      :Make offer;
      
      if (Offer accepted?) then (yes)
        :Onboarding process;
        #palegreen:New hire starts;
      else (no)
        #pink:Close position;
      endif
    else (no)
      :Send rejection;
    endif
  else (no)
    :Send rejection;
  endif
else (no)
  :Request missing info;
  
  if (Info received?) then (yes)
    :Return to review;
  else (no, timeout)
    #pink:Archive application;
  endif
endif

stop
@enduml
```

## Swimlane Activity Diagram

```plantuml
@startuml
|Customer|
start
:Browse products;
:Add to cart;
:Checkout;

|System|
:Validate cart;
:Calculate total;
:Process payment;

|Warehouse|
:Check inventory;
:Pick items;
:Pack order;

|Shipping|
:Generate label;
:Dispatch order;
:Deliver to customer;

|Customer|
:Receive order;
:Confirm delivery;

stop
@enduml
```

## Error Handling Flow

```plantuml
@startuml
start
:Open file;

if (File exists?) then (yes)
  :Read content;
  
  if (Valid format?) then (yes)
    :Parse data;
    
    if (Parse successful?) then (yes)
      :Process data;
      :Save results;
      #palegreen:Success;
    else (no)
      #pink:Log parse error;
      :Show error to user;
    endif
  else (no)
    #pink:Log format error;
    :Show format error;
  endif
else (no)
  #pink:File not found;
  :Create default file;
endif

stop
@enduml
```

## Parallel Processing

```plantuml
@startuml
start

:Initialize system;

fork
  :Load user data;
  :Validate permissions;
fork again
  :Load configuration;
  :Check licenses;
fork again
  :Connect to database;
  :Verify schema;
end fork

:System ready;

partition "Main Process" {
  :Process requests;
  while (More requests?) is (yes)
    :Handle request;
  endwhile (no)
}

:Shutdown;
stop
@enduml
```

## Best Practices

1. **Use colors**: Highlight important states with colors
2. **Add notes**: Provide context for complex decisions
3. **Use swimlanes**: Show responsibility across different actors
4. **Keep it simple**: Don't overcomplicate with too many branches
5. **Label decisions clearly**: Make yes/no paths obvious