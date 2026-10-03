# Testing Philosophy

We followed a testing strategy aligned with the architectures: Hexagonal + DDD (backend) and MVVM (frontend). The goal is to ensure code quality and maintainability through tests that validate business logic and integration between layers.

The testing philosophy has two main concerns: to guarantee the correct behavior of the implemented functionality and to establish that behavior, creating a contract with future implementations.

This strategy ensures code quality, facilitates maintenance, and allows for early detection of regressions in the development cycle.

## Fundamental Principles

To achieve this goal, the fundamental principle followed is **FIRST**:

- **Fast:** prioritizing fast unit tests without frameworks or infrastructure. Optimizing integration tests (slower) with mocks, Testcontainers, and a limited context to ensure appropriate speed for their purpose.
- **Independent:** no dependencies between tests or shared states. `BeforeEach` only configures mocks, not states.
- **Repeatable:** idempotent, guaranteeing consistent results. Data is generated with Object Mothers and specific, reproducible datasets.
- **Self-validating:** binary result (pass/fail) thanks to clear assertions and verifications.
- **Thorough:** covers both happy paths and bad paths.

## Coverage and Strategy

- **Separation by layers:** both in the backend and frontend, each layer has its own tests.
- **Realistic tests:** in the backend, integration tests use Docker containers (Testcontainers) with a real PostgreSQL instance.
- **Maintainability:** use of the Object Mother pattern to create test data consistently and reusably.
- **Pyramid distribution:** more unit tests (fast and cheap), fewer integration or instrumentation tests (slower but necessary).
- **Avoid duplication:** overlapping coverage between tests has been avoided.
- **CI/CD integration:** they are part of GitHub Actions.
- **Edge cases:** validation of business rules and exception handling.
- **Framework functionalities are not tested:** reliance on Spring Boot and JPA to avoid duplicating framework tests.

## Backend

We implemented **254 tests**, covering **88% of code lines** and **77% of branches**.

### Unit Tests

Validate isolated components without external dependencies or Spring.

- **Domain Tests:** validate entities and value objects, business rules, and calculations.
- **Use Case Tests:** validate application logic with mocked repositories and domain services. Verify successful flows and exception handling.
- **Mapper Tests:** validate transformation between layers.
- **Controller Tests:** validate exception handling and delegation to use cases, without loading the Spring context.

### Integration Tests

Validate integration between components and with real infrastructure.

- **Repository Tests:** use Testcontainers with a real PostgreSQL instance. Validate persistence, JPA mappings, audit fields, JSONB handling, and pagination.
- **Controller Tests:** use MockMvc with a partial Spring context. Validate JSON serialization, HTTP validations, security (JWT), and HTTP responses.
- **Dataset-based Tests:** load SQL scripts to validate JPA mappings and audit fields with realistic data.

### Tools and Technologies

- **JUnit 5:** testing framework.
- **Mockito Kotlin:** mocking for unit tests.
- **Testcontainers:** Docker containers for integration tests.
- **Spring Boot Test:** utilities for tests with Spring.
- **MockMvc:** REST controller testing.
- **Spring Security Test:** security and JWT authentication testing.
- **Object Mothers:** pattern for creating test objects consistently.

## Frontend

We implemented **390 tests**: **320 unit tests** and **70 instrumented tests**.

### Unit Tests

Execute on the JVM without an Android device.

- **ViewModels:** validate presentation logic, state management, and data transformation.
- **Repositories:** validate data transformation and error handling.
- **Models and DTOs:** validate serialization/deserialization and transformation between layers.
- **Domain Logic:** business validations and rules.
- **Utilities:** shared components like error mapping and token managers.

### Instrumented Tests (UI)

Execute on a device or emulator. Validate the user interface with Jetpack Compose Testing.

- **Screens:** rendering, states, and navigation.
- **Shared Components:** dialogs, buttons, and reusable elements.
- **User Flows:** creation, editing, and deletion of resources.
- **Permissions and Roles:** visibility based on permissions.

### Tools and Technologies

- **JUnit 4:** primary testing framework for the Android environment.
- **Kotlin Coroutines Test:** management and verification of asynchronous code in ViewModels and repositories.
- **Compose UI Test:** official library for verifying the behavior and state of the user interface built with Jetpack Compose.
- **Manual Mocks for Dependencies:** lightweight, controlled implementations to simulate repositories, services, and external clients, ensuring test isolation.
