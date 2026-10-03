# Requirements Analysis: Requirements

## Requirements Description

### Functional Requirements (FR)

The main objective of the system is to provide a comprehensive tool for managing the digital catalog of a publishing house. The functionalities are focused on basic CRUD operations for maintaining the data of the main entities, which can be managed by an administrator user:

| ID | Requirement |
| --- | --- |
| **FR-01** | **Author management.** The administrator shall be able to create, view, update, and delete authors in the system. Each author will be defined using basic and essential attributes. |
| **FR-02** | **Collection management.** The administrator shall be able to create, view, update, and delete collections in the system. |
| **FR-03** | **Book management.** The administrator shall be able to create, view, update, and delete books. Each book will be defined by attributes such as title, ISBN, number of pages, cover image, among others, and will be linked to an existing author and an existing collection. |
| **FR-04** | **User authentication.** The system shall restrict access through a secure login mechanism. Only authenticated users will be able to access the system functionalities. Administrator users will have access to full functionality, while non-administrator users will be limited to read-only access to entities. |

### Non-Functional Requirements (NFR)

These requirements define the system’s constraints and quality attributes, ensuring that it is robust, secure, and maintainable:

| ID | Requirement |
| --- | --- |
| **NFR-01** | **Clean architecture.** The backend shall be implemented following the principles of Hexagonal Architecture (also known as Ports and Adapters), decoupling business logic from infrastructure concerns. |
| **NFR-02** | **API-First design.** The API shall be defined first using OpenAPI 3.0, acting as a single and immutable contract between the frontend and the backend. |
| **NFR-03** | **Security.** Access to the API shall require authentication using JWT (JSON Web Tokens), ensuring that all communications are properly authorized. |
| **NFR-04** | **Usability.** The mobile application must be intuitive and easy to use for all types of users, with a minimal learning curve. |
| **NFR-05** | **Compatibility.** The mobile application shall be compatible with recent versions of the Android operating system. |
| **NFR-06** | **Performance.** Read (query) operations must have a response time of less than 2 seconds under normal load conditions. |
| **NFR-07** | **Maintainability.** The codebase shall be well documented, follow Kotlin coding conventions, and use static code analysis tools to ensure quality. |
| **NFR-08** | **Deployment.** The system must support automated deployment through CI/CD pipelines using GitHub Actions and be packaged in Docker containers to ensure consistency across environments. |
