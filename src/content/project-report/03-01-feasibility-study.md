# Feasibility Study

The development of any software product requires a prior analysis to assess its chances of success. In the business world, traditionally linked to profit-driven objectives, a project must ensure a positive economic return, as well as technical and resource feasibility, and must also align with the company’s overall strategy.

This feasibility study follows a structured and sequential reasoning process:

- First, the **Market Study** provides a macro-level overview, reviewing the most relevant economic, technical, and time-related aspects at a general level. This represents an initial approach to identifying potential risks and costs associated with the development.
- Next, the **SWOT Analysis** is applied to deepen the micro-level perspective, analyzing internal and external factors in order to define a concrete Strategic Plan aimed at increasing the chances of success.
- Subsequently, the plan is materialized through **Methodology and Success Metrics**, where a real working environment is simulated by establishing OKRs and KPIs, allowing the definition of measurable and objective milestones.
- Finally, based on all the previous information, the **Timeline Planning** is created. This realistic work schedule allocates time and effort to a series of specific milestones that must be executed within defined deadlines using the available resources.

> The SWOT analysis and the methodology/planning sections are continued in separate files in this Markdown version of the report.

## Motivation

The present project arises from specific motivations and needs of an already existing company, Editorial Denes[3]. As a company with a low level of technological adoption and increasingly obsolete internal tools, it was necessary to modernize its systems.

The single source of truth for its catalog currently resides in a billing software from the 1990s, which presents a high usability barrier and is installed on legacy hardware running Windows XP as its operating system. There is no direct access to the database of this software; information can only be consulted through its user interface or by generating plain text (TXT) listings, which often contain errors and are difficult to process.

Although the company has had a website for approximately 20 years (which has evolved over time), it has always been based on very basic and limited templates. The website has suffered from several performance, security, and user experience issues. Due to the absence of a database, scaling and improving the current web solution (a Ruby and Jekyll-based template) is particularly challenging.

This situation imposes several limitations on users:

- **Lack of autonomy:** they depend on obsolete hardware to consult catalog information and rely on a developer to update website content.
- **Inability to scale:** inventory management and web presence are implemented as isolated systems that are neither integrated nor interconnected, limiting both improvement and growth.

The client expressed the need for a new solution to manage the data of their catalog that meets the following requirements:

- **Provide a single source of truth:** enabling full control over book, author, and collection data.
- **Guarantee self-sufficiency:** eliminating dependency on external software tied to physical hardware or recurring payments.
- **Ensure a low barrier to use:** allowing employees to use the system as easily as possible, with minimal (ideally zero) training.
- **Serve as a scalable foundation for future iterations:** enabling improvements such as inventory management, royalties administration, the development of a new website sharing the same data, or integration with distributors.
- **Be durable over time and comply with industry standards:** using a modern and future-proof programming language, a clean and decoupled architecture, and optimal performance.
- **Be ready for a production environment at zero cost.**

## Market Study

The project is framed within the sector of content management systems (CMS) and enterprise back-office tools, a highly competitive market saturated with both generic and industry-specific solutions.

The opportunity does not lie in direct competition, but rather in demonstrating the ability to develop a tailored solution for a specific sector—the publishing industry—with full control over architecture, functionality, and security. This type of custom development is in demand by businesses with specific needs that standard solutions cannot optimally address, whether due to complexity (a small business does not require excessively powerful and comprehensive tools), suitability (standard solutions do not adapt to particular requirements), or economic factors (a simple, custom-built solution may be more cost-effective than a complex system with recurring payments or third-party dependencies).

This project arises precisely to address this opportunity: the development of a custom-built tool over which full control is maintained, and to which future complementary modules can be added.

This application has a real client: Editorial Denes, which currently requires a new database and a new content management system (CMS), and is seeking an agile and user-friendly solution that allows non-technical profiles to manage the catalog independently.

All of this makes the project a true Minimum Viable Product (MVP), validated by a genuine business need and ensuring its use and maintenance beyond the completion of the academic program.

## Technical and Economic Feasibility

The economic feasibility of the project is total, as it is based on the use of free or marginal-cost resources, typical of a modern development environment.

### Hardware Resources

- **Development:** A personal computer with sufficient computing capacity is required to run a local environment (IDE, Android emulator, and Docker). This resource is already available to the author.
- **Production / Deployment:** Environments will be deployed on cloud services with free-tier plans such as Google Cloud Platform. The PostgreSQL[4] database will also be deployed on services offering free plans, such as NeonTech.

### Software Resources

All software infrastructure is based on open-source technologies.

- **Development Tools:** Android Studio, IntelliJ IDEA Community
- **Languages and Frameworks:** Kotlin, Spring Boot, Jetpack Compose
- **DevOps Tools:** Docker, GitHub Actions, GitHub Packages
- **Database:** PostgreSQL, Liquibase
- **Project Management:** GitHub Projects

### Human Resources

The project will be carried out by a single developer (the author), who will fully assume the following roles:

- **Analyst:** requirements analysis and architecture design
- **Designer:** UX and UI
- **Full-Stack Developer:** frontend and backend development
- **Systems Administrator (DevOps):** container configuration, CI/CD pipeline setup, and deployment
- **Product Owner**

## Time Feasibility

The project is ambitious but feasible within the established academic deadlines. Its iterative, milestone-based planning enables the achievement of incremental objectives and continuous feedback, thereby minimizing the risk of not reaching a functional version.
