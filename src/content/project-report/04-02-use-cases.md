# Requirements Analysis: Main Use Case Diagrams

## Main Use Case Diagrams

### Use Case Diagram: Non-Administrator User

The following diagram shows that the actor (a standard non-administrator user) can log in and perform read-only operations on the three entities: Author, Book, and Collection.

```mermaid
flowchart LR
    User["Non-Administrator User"]

    Login(("Log in"))
    ViewAuthors(("View Authors"))
    ViewBooks(("View Books"))
    ViewCollections(("View Collections"))

    User --> Login
    User --> ViewAuthors
    User --> ViewBooks
    User --> ViewCollections
```

> **Original report asset:** The original use case diagram should be preserved at `../assets/04-requirements-analysis/use-case-non-admin-original.png`.

### Use Case Diagram: Administrator User

The following diagram provides an overview showing that the actor (administrator) can log in and perform full CRUD operations on each of the entities: Author, Book, and Collection.

```mermaid
flowchart LR
    Admin["Administrator User"]

    Login(("Log in"))
    Authors(("Manage Authors<br/>Create · View · Update · Delete"))
    Books(("Manage Books<br/>Create · View · Update · Delete"))
    Collections(("Manage Collections<br/>Create · View · Update · Delete"))

    Admin --> Login
    Admin --> Authors
    Admin --> Books
    Admin --> Collections
```

> **Original report asset:** The original use case diagram should be preserved at `../assets/04-requirements-analysis/use-case-admin-original.png`.
