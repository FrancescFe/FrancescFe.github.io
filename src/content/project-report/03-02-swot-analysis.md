# SWOT Analysis

## SWOT Method

As a strategic tool, the following SWOT analysis has been carried out:

<div class="swot-grid">
  <section class="swot-card swot-card--weaknesses">
    <h3>Weaknesses</h3>
    <p><strong>Internal Analysis</strong></p>
    <ul>
      <li>One-man project</li>
      <li>Academic project without multidisciplinary profiles</li>
      <li>Limited to Android devices</li>
      <li>No monetization or economic profitability plan</li>
    </ul>
  </section>

  <section class="swot-card swot-card--strengths">
    <h3>Strengths</h3>
    <p><strong>Internal Analysis</strong></p>
    <ul>
      <li>Modern and in-demand technology stack</li>
      <li>Decoupled and scalable architecture</li>
      <li>Process automation</li>
      <li>Deep and real knowledge of the publishing sector</li>
    </ul>
  </section>

  <section class="swot-card swot-card--threats">
    <h3>Threats</h3>
    <p><strong>External Analysis</strong></p>
    <ul>
      <li>Risk of becoming obsolete due to new standards</li>
      <li>Highly competitive sector</li>
    </ul>
  </section>

  <section class="swot-card swot-card--opportunities">
    <h3>Opportunities</h3>
    <p><strong>External Analysis</strong></p>
    <ul>
      <li>Excellent technical portfolio</li>
      <li>Easily iterable to introduce improvements</li>
      <li>Reusable for other projects</li>
    </ul>
  </section>
</div>

### Weaknesses

- The project is developed by a single person: development blockers may take longer to resolve, and feature delivery speed may be affected.
- It is an academic project with the inherent limitations of not being a professional team: absence of roles such as architect, senior developer, designer, etc.
- Mobile application limited to Android devices.
- No solution has been implemented to economically monetize the investment.

### Threats

- The emergence of new technological standards that could render some aspects of the project obsolete.
- Very high competition in the content management systems (CMS) sector, with numerous mature and consolidated solutions.

### Strengths

- Use of modern technologies with strong demand in the labor market.
- Architecture designed to be decoupled, easy to maintain, and scalable.
- Process automation to save time on repetitive tasks and ensure quality standards.
- The student has several years of experience in the publishing sector, providing real and in-depth knowledge of the domain and product needs.

### Opportunities

- The project represents an excellent and comprehensive technical portfolio to demonstrate skills in potential recruitment processes.
- The project foundation can be extended with new features such as order management, shopping cart functionality, user management, etc.
- The RESTful API architecture can be reused for external projects, for example by adding a web client to the ecosystem that consumes the API.

## Strategic Plan (Cross SWOT Analysis)

<div class="cross-swot-grid">
  <section class="cross-swot-card cross-swot-card--reorientation">
    <h3>Reorientation Strategies (W–T)</h3>
    <ul>
      <li>CI/CD with GitHub Actions</li>
      <li>Strict API-First approach</li>
      <li>Organized planning</li>
      <li>Functional and technical refinements</li>
    </ul>
  </section>

  <section class="cross-swot-card cross-swot-card--defensive">
    <h3>Defensive Strategies (S–T)</h3>
    <ul>
      <li>Project visibility</li>
      <li>High-quality documentation</li>
    </ul>
  </section>

  <section class="cross-swot-card cross-swot-card--survival">
    <h3>Survival Strategies (W–O)</h3>
    <ul>
      <li>Focus on a solid MVP</li>
      <li>Quality over quantity</li>
    </ul>
  </section>

  <section class="cross-swot-card cross-swot-card--offensive">
    <h3>Offensive Strategies (S–O)</h3>
    <ul>
      <li>Modern, future-proof tech stack</li>
      <li>Clean and decoupled architecture</li>
    </ul>
  </section>
</div>

Based on the analysis of internal and external factors, an action plan is defined to maximize the project’s potential and mitigate risks. By cross-referencing the elements of the SWOT analysis, the following strategies are proposed, each associated with concrete, measurable, and executable initiatives.

### Reorientation Strategies (W–T)

Compensating for the limitation of being a single developer by leveraging automation and ensuring quality.

- Implement the following GitHub Actions across all repositories to reduce potential issues and improve development speed:
  - Static code checks: pre-runtime validation ensuring code follows conventions.
  - Build checks: validation that branches compile correctly and that all tests pass.
- Avoid technical debt and unnecessary development:
  - Apply a strict API-First approach.
  - Apply SOLID, KISS, and YAGNI design principles.
- Organized and meticulous planning to compensate for the absence of a team:
  - Use GitHub Projects to plan work using a Kanban board.
  - Use GitHub Projects to create work tickets that enforce functional and technical refinement instead of coding directly.

### Survival Strategies (W–O)

Ensuring that the project fulfills its primary purpose: effectively demonstrating technical competencies.

- Focus development on a solid MVP rather than secondary features.
- Use GitHub Projects to define milestones that establish iterative objectives, guiding the project from a minimal MVP to increasingly complete and functional versions.
- Prioritize quality over quantity: a well-designed backend and application with partial functionality is more valuable than a complete but poorly structured system.
- Ensure unit and integration test coverage across the entire codebase.
- Emulate a production environment using Docker and CI/CD:
  - The entire system can be executed in a remote environment.

### Offensive Strategies (S–O)

Positioning the project as a high-level technical portfolio.

- Increase project visibility:
  - Pin the project and its repositories on the GitHub profile.
- Highlight technical decisions:
  - All repositories will include high-quality README files explaining architectural decisions and deployment or usage instructions.

### Defensive Strategies (S–T)

Ensuring project maintainability in the face of technological evolution.

- Select technologies with broad support and future projection.
  - Backend: Kotlin 2 with Spring Boot 3.5.
  - Frontend: Kotlin 2 with Jetpack Compose.
  - Documentation: OpenAPI 3.1.
- Implement a clean and decoupled architecture that allows changes in specific libraries or frameworks with minimal impact.
  - Apply Hexagonal Architecture.

## Conclusions of the SWOT Analysis

The application of the SWOT method is not merely an academic requirement, but a fundamental and widely used tool in the planning phase of any project. Its usefulness has gone beyond simple factor identification, providing a structured framework for decision-making even before writing the first line of code.

This analysis has made it possible to:

- **Anticipate risks:** identifying threats has enabled the design of proactive strategies to mitigate them from the very system design stage.
- **Optimize resources:** recognizing inherent weaknesses allows prioritization of what truly generates impact, maximizing the efficiency of the available time.
- **Maximize value:** the offensive strategy (S–O) guides the project toward a clear dual objective—meeting functional requirements while creating a high-level technical portfolio, thereby increasing tangible value.
- **Define direction:** the strategy matrix is not mere speculation, but a concrete action plan that guides development, ensuring that every technical decision aligns with the goal of strengthening the project against its weaknesses and potential threats, while leveraging its main strengths and opportunities.

In conclusion, the SWOT analysis stands out as a key tool for building a development strategy that guarantees a final result that is viable, robust, maintainable, and valuable.
