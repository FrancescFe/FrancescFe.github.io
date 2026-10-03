# Backend Implementation: Securing the Application

## Securing the Application

The application implements JWT (JSON Web Tokens) based authentication and role-based authorization. The system guarantees that only authenticated users access the resources for which they have permissions based on their role.

The implemented system provides secure authentication with stateless JWT, secure password storage with BCrypt, role-based authorization, flexible configuration with environment variables, and separation between authentication and authorization.

This implementation follows security best practices and allows the system to scale and be maintained securely.

## JWT Secret Configuration

The JWT Secret is the secret key used to sign and verify tokens. It is configured via environment variables to avoid exposing it. The `JwtUtil` class validates the secret, thus guaranteeing resistance to brute force attacks and the use of secure cryptographic algorithms.

## Token Generation and Validation

The `generateToken()` method creates a JWT with username, issue date, expiration date, and signature (HMAC-SHA256 with the secret). The token is validated with `validateToken()` and compared with the authenticated user and expiration.

## User Authentication and Password Management

Users are configured with Spring Boot's `AuthProperties`, allowing different configurations per profile. In the `PasswordConfig` class, BCrypt is used for password hashing.

The authentication process goes through `UserService`, which manages loading users upon application startup, stored encoded in cache for faster loading. Each user has an associated `ROLE_ADMIN` or `ROLE_USER`.

When the client sends credentials to the `/api/v1/auth/login` endpoint, the `AuthenticationManager` class validates the username and password. Upon success, it returns a JWT with a 15-minute expiration date, a scope, and a `userId`.

## Role Management and Authorization

The ADMIN role has full access to the application (read, write, and delete), while the USER role has only read access. `ScopeService` determines permissions according to the role, while `SecurityConfig` defines authorization rules: write operations are reserved for ADMIN, read operations for USER and ADMIN, and public endpoints (login, health, and swagger UI) are defined.

## JWT Filter and Request Validation

The `JwtRequestFilter` intercepts every HTTP request to validate the JWT with the `JwtUtil` class.
