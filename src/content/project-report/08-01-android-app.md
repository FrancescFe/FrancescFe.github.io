# Client Environment: Android Application

The client environment is a piece of hardware or software that requests and uses services or data provided by a server. In this project, the client is an Android application.

## Android APP

The frontend is hosted in the `book-publishing-app` repository. It is a native Android application that consumes the backend's RESTful API to manage books, authors, and collections. The chosen language is Kotlin, the framework is Android SDK with Jetpack Compose for the user interface, and Gradle as the dependency manager.

- **Kotlin:** a modern, statically typed language that runs on the JVM. Completely interoperable with Java, it offers a more concise and secure alternative. It mixes object-oriented programming with functional programming, reduces verbosity, and helps prevent Null Pointer Exceptions.
- **Android SDK:** Google's mobile platform that offers the necessary tools and APIs to develop native applications for Android devices.
- **Jetpack Compose:** modern and declarative toolkit for building native Android user interfaces. It allows creating the UI declaratively, simplifying interface development and maintenance.
- **Gradle Build Tool:** dependency manager, responsible for compilation, packaging, test execution, and APK generation.

## Most Important Dependencies

- **Retrofit:** a typed HTTP client library for Android and Java. It simplifies communication with RESTful APIs through declarative interfaces.
- **OkHttp:** an efficient HTTP client for Android and Java. It is used as the basis for Retrofit and offers interceptors for logging and authentication.
- **Kotlinx Serialization:** Kotlin native serialization library to convert objects to JSON and vice versa, necessary for API communication.
- **Jetpack Navigation:** navigation component that manages navigation between application screens in a typed and secure way.
- **Material Design 3:** Google's design system that provides consistent and modern user interface components, with support for light and dark themes.
- **ViewModel:** component of the Android architecture that manages UI-related data in a lifecycle-aware manner.
- **Kotlin Coroutines:** library for asynchronous programming that simplifies working with web operations and databases.
- **JUnit 5:** unit testing framework to verify business logic and ViewModels.
- **Compose Testing:** library for declaratively testing Compose components.
- **Spotless:** static analysis and code formatting tool, which will ensure that the code has a consistent format and applies good practices.

## Applied Methodologies

- **Model-View-ViewModel (MVVM):** architectural pattern that separates presentation logic from business logic. ViewModels manage the UI state and communication with the domain layer, while Composables represent the view and react to state changes.
- **Vertical Slice Architecture:** organizes code by feature or use case, grouping related components. In this case, the Vertical Slice has been applied on top of the clean architecture, dividing the classes first by contexts (`auth`, `author`, `book`, `collection`, and `shared`) and then by layers (`ui`, `domain`, `data`). This facilitates the localization of all code related to a specific functionality in a single place.
