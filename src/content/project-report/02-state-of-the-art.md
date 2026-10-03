# State of the Art

The state of the art in multiplatform application development can be analyzed from several perspectives:

From the mobile frontend perspective, there is a clear preference for native architectures in order to achieve better performance and user experience. For this reason, Kotlin with Jetpack Compose has been chosen for the frontend.

Regarding the backend, the standard approach is to use frameworks that improve development speed, security, and scalability. Kotlin, Gradle, and Spring Boot have been selected due to their balance between ecosystem maturity and language modernity.

Current trends in software design favor clean and decoupled architectures. For this reason, the Hexagonal Architecture, also known as Ports and Adapters, has been adopted. Establishing a contract is a robust approach that facilitates development and enables parallel work between frontend and backend teams. In REST API-based solutions, the strictest way to define such a contract is through an API-First approach.

Nowadays, development teams rely on DevOps practices such as continuous integration and continuous delivery (CI/CD), as well as environment virtualization, to ensure robust and consistent deployments. Docker has been chosen for containerization as it is a de facto standard, and GitHub Actions has been selected for being modern, lightweight, easy to configure, and offering a user interface integrated directly into GitHub.

An effort has also been made to emulate a real-world working environment in the organization of the project. Although Jira was not used due to its cost and excessive complexity for a small project, agile methodologies were applied through the use of Scrumban, work tickets, and GitHub Projects.
