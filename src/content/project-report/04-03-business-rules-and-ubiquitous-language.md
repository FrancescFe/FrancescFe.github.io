# Requirements Analysis: Business Rules and Ubiquitous Language

## Business Rules and Ubiquitous Language

To establish solid foundations for building a maintainable and scalable project, it is essential to define business rules and to establish a Ubiquitous Language: a shared business language understood and used by all stakeholders, both technical and non-technical. This language is also reflected in the business rules and will be particularly useful when applying Domain-Driven Design (DDD).

## Main Business Rules

### Author Context

- An author must have a name.
- If an author has an email address, it must be unique.

### Collection Context

- A collection must have a name.
- The collection name must be unique.
- “Out of collection” is considered a valid collection.

### Book Context

- A book must have a title.
- A book must have an author.
- A book must belong to a collection.
- A book must have a base price.
- If a book has an ISBN, it must be unique.
- A book must have a tax rate (VAT).
- By default, the tax rate is 4%.
- A book must have a retail price (RRP – Recommended Retail Price).
- A book may have more than one language, but no more than four.
- A book may have between zero and three subgenres.
- A book must have a status.

## Ubiquitous Language

### Book Status

A book can have four possible states:

| Term | Definition |
| --- | --- |
| **Draft** | The book has not yet been released for sale. |
| **Published** | The book has been released and copies are available. |
| **Out of stock** | The book has been released but no copies are currently available. |
| **Discontinued** | The book has been released but has been permanently withdrawn from the market due to lack of stock or any other reason. |

### Reading Level

A collection or a book can be categorized according to the target reader’s age group:

| Term | Age group |
| --- | --- |
| **Children** | 0 to 11 years |
| **Young Adult** | 12 to 17 years |
| **Adult** | 18+ |
