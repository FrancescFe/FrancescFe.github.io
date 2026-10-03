# Back-office System for Publishing Management

## Multiplatform Development with a Modern, Maintainable and Scalable Architecture

**Author:** Francesc Ferrer Rubio  
**Version:** 1.0.1  
**Date:** January 20th, 2026

## Table of Contents

- [Introduction](01-introduction.md)
- [State of the Art](02-state-of-the-art.md)
- Feasibility Study
  - [Feasibility Study: Motivation, Market and Feasibility](03-01-feasibility-study.md)
    - Motivation
    - Market Study
    - Technical and Economic Feasibility
    - Time Feasibility
  - [SWOT Analysis](03-02-swot-analysis.md)
    - SWOT Method
    - Strategic Plan (Cross SWOT Analysis)
    - Conclusions of the SWOT Analysis
  - [Methodology and Planning](03-03-methodology-and-planning.md)
    - Methodology and Success Metrics (OKRs / KPIs)
    - Timeline Planning / Work Schedule
      - Milestones Table
      - Detailed Description of the Milestones
      - Gantt Diagram
      - GitHub Projects: Kanban Board and Milestones
      - Work Implementation Cycle
- Requirements Analysis
  - [Requirements](04-01-requirements.md)
    - Functional Requirements (FR)
    - Non-Functional Requirements (NFR)
  - [Main Use Case Diagrams](04-02-use-cases.md)
    - Use Case Diagram: Non-Administrator User
    - Use Case Diagram: Administrator User
  - [Business Rules and Ubiquitous Language](04-03-business-rules-and-ubiquitous-language.md)
    - Main Business Rules
    - Ubiquitous Language
- [Architecture](05-architecture.md)
- [API Contract](06-api-contract.md)
  - Conceptual Design of OpenAPI Components
- Server Environment
  - [RESTful API](07-01-restful-api.md)
    - Main Dependencies
    - Methodologies Applied
    - Applied Design Patterns
    - Configured Environments
  - [Database Design](07-02-database-design.md)
    - Database
    - Conceptual Design of Entity Relationship
    - Relational Logical Design
  - [Database Physical Design](07-03-database-physical-design.md)
    - Physical Design with Liquibase
    - Description of Tables and Fields
    - PostgreSQL Diagram
  - [Object-Oriented Design](07-04-object-oriented-design.md)
    - Object-Oriented
      - Class Diagrams
    - Sequence Diagram
    - Activity Diagram
- Client Environment
  - [Android Application](08-01-android-app.md)
    - Android APP
    - Most Important Dependencies
    - Applied Methodologies
  - [Client Design](08-02-client-design.md)
    - Mockups
    - Mobile APP Map
- API Contract Implementation
  - [OpenAPI Specification](09-01-openapi-specification.md)
    - OpenAPI Endpoint Modelling
    - OpenAPI Components Modelling
  - [Code Generation and Publishing](09-02-code-generation-and-publishing.md)
    - OpenAPI Generator Plugin Configuration
    - Publishing the External Library
- Backend Implementation
  - [Use Case Implementation](10-01-use-case-implementation.md)
    - Domain Layer Modeling
    - Persistence Modeling in the Infrastructure Layer
    - Service Modeling in the Application Layer
    - Controller Modeling in the Infrastructure Layer
  - [Securing the Application](10-02-securing-the-application.md)
    - JWT Secret Configuration
    - Token Generation and Validation
    - User Authentication and Password Management
    - Role Management and Authorization
    - JWT Filter and Request Validation
  - [Error Handling](10-03-error-handling.md)
    - GlobalExceptionHandler
    - Standardized Response Model
- Frontend Implementation
  - [User Story Implementation](11-01-user-story-implementation.md)
    - Domain Layer Implementation
    - Data Layer Implementation
    - ViewModel Implementation in the UI Layer
    - Screen Implementation in the UI Layer
  - [UX and Compatibility](11-02-ux-and-compatibility.md)
    - Preventing Errors with Warnings
    - Ensuring Functionality on Most Used Mobile Devices
  - [Internationalization and Theming](11-03-internationalization-and-theming.md)
    - Internationalization
    - Theme and Appearance
  - [MVP Images](11-04-mvp-images.md)
    - Book List (Admin Session vs. Base User Session)
    - Author Detail (Admin Session vs. Base User Session)
    - Book Update (English Dark Mode vs. Valencian Light Mode)
- [Testing Philosophy](12-testing-philosophy.md)
  - Backend
  - Frontend
- [Documentation](13-documentation.md)
  - External Code Documentation
  - Internal Code Documentation
  - User Manual
- [Deployment](14-deployment.md)
  - Deployment Diagram
  - Server Deployment Description
    - Database Deployment
    - Backend Deployment
    - Server Description
    - Testing the Server
- Evaluation of Objectives and Results
  - [OKR and KPI Evaluation](15-01-okr-kpi-evaluation.md)
  - [Results and Conclusions](15-02-results-and-conclusions.md)
- [Conclusions](16-conclusions.md)
- [Bibliography](17-bibliography.md)

## Abstract

This project describes the design and implementation of a Back Office System (BOS) to manage a book publishing catalog. Applying a data-driven methodology, we defined a success strategy with measurable metrics. The technical solution is composed of an API specification contract, a relational Database (for books, authors and collections), a RESTful API server, and a native Android APP as frontend. The development was guided by agile principles throughout planning and execution.
