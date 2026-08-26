# Repository Delivery Workflow

This is the canonical workflow for planning, implementing, validating, and delivering changes to the portfolio. Instructions for a specific task take precedence over these defaults.

## Sources of Truth

- The current milestone and issue define product scope and acceptance criteria.
- For visual work, follow the approved [design decisions](../design/00-design-decisions.md) and [mockups](../mockups/README.md).

## Creating a Milestone

- Use [the milestone template](../../.github/milestone_template.md) when drafting a milestone.
- Refine its product scope before creation:
  - Description: summarize the goal and its value.
  - Scope: define all known functional requirements clearly.
  - Delivery Stages: divide the objective into stages with observable outcomes.
  - Out of Scope: list known exclusions explicitly.
  - Success Criteria: define verifiable milestone outcomes.

## Creating an Issue

- Use [the feature issue template](../../.github/ISSUE_TEMPLATE/feature.md) when creating an issue.
- Refine it from a technical perspective before creation:
  - Context: explain the product background and problem.
  - Description: describe the intended change and propose a technical approach with any relevant constraints.
  - Acceptance Criteria: define observable, verifiable outcomes.
- Assign the most appropriate label and milestone for the current context.
- Add the issue to the `[PF] Portfolio Project`. Set `Priority`, `Size`, `Iteration`, and `Stage` when the current context determines them; otherwise, leave the relevant fields blank. Prefer `S` for a small, focused issue.
- Set Project `Status` to `Ready For Dev`.

## Implementing a Milestone

1. Implement the milestone stage by stage, following the order specified by the user or, by default, the order defined in the milestone.
2. At the start of each stage, divide its scope into dependency-ordered, atomic issues with one observable outcome and one Pull Request each.
3. Implement those issues one by one using the [Implementing an Issue](#implementing-an-issue) workflow.
4. Consider a stage complete only when its issues are closed, its Pull Requests are merged, and its combined outcome has been validated and reviewed.
5. Do not plan or begin the next stage until the current stage is complete.

## Implementing an Issue

1. If linked, review the issue's milestone and assigned stage. Then read the issue and confirm that its scope is clear and feasible. Request clarification or refinement before implementation if it is not.
2. Set Project `Status` to `In Progress`.
3. Update local `main` from `origin/main`, then create and check out the issue branch.
4. Implement only the acceptance criteria and relevant supporting changes. Keep unrelated behavior, refactors, and documentation out of the issue.
5. Validate the changes in proportion to their risk.
6. Review `git diff` and run `git diff --check`.
7. Commit and push the changes, then create and configure the Pull Request.
8. Re-read the acceptance criteria and mark only verified criteria as complete.
9. When the requested delivery includes a merge, wait for required checks using one watcher: `gh pr checks <pr> --watch --interval 30`. Keep repetitive progress out of the model context and retrieve only the final summary or relevant failure details.
10. Merge only when the delivery is authorized and all [merge safeguards](#pull-requests-and-merges) pass. Otherwise, stop after reporting the Pull Request.
11. After a merge, verify the issue and Project status, switch to `main`, and update it from `origin/main`.
12. During multi-issue delivery, retain a concise delivery summary and compact the context before starting the next issue.

## Work References and Branches

Work references are three-digit sequential numbers independent from GitHub issue numbers. If none is provided, inspect recent merged Pull Requests and branches and use the next available reference. Ask the user if the sequence is ambiguous.

Create each branch from an up-to-date `main` using:

```text
PF-{reference}_{descriptive_snake_case_name}
```

Example: `PF-004_add_agent_guidance_and_document_delivery_workflow`.

Never implement multiple issues in the same branch.

## Commit Conventions

Use:

```text
{type}(PF-{reference}): {lowercase message}
```

Choose an appropriate conventional type. Keep the branch focused and prefer one meaningful commit when it accurately represents the work.

## Pull Requests and Merges

Every Pull Request must:

- target `main` and contain only its issue's scope;
- be ready for review unless the user requests a draft;
- use `Resolves #{issue_number}` from the Pull Request template;
- be assigned to `FrancescFe` and use the issue's primary label;
- use the title `[{reference}] {lowercase description}`.

A request to deliver an issue, batch, or milestone end to end authorizes in-scope merges after all safeguards pass.
A request limited to implementation, Pull Request creation, or review does not authorize merge.
An explicit review-first or no-merge instruction always takes precedence.

Before an authorized merge:

1. Re-read every acceptance criterion and verify it against the change and validation evidence.
2. Mark only fulfilled acceptance-criteria checkboxes as complete.
3. Confirm required reviews, conversations, and checks have passed.
4. Squash and merge using the Pull Request title as the squash commit title.

Do not merge with an unmet criterion or a pending, skipped, cancelled, or failing required check.

## Validation

For application changes, run the repository-defined formatting, linting, tests, and production build relevant to the change. Add or update automated tests for behavior where practical.

For UI changes, also:

- compare the result with the approved design documentation and nearest existing UI;
- check the affected mobile and desktop layouts;
- verify semantic structure, keyboard access, visible focus, contrast, and reduced-motion behavior where relevant.

For documentation-only changes, verify Markdown structure, relative links, terminology, consistency with related documents, and `git diff --check`. Application build tasks are unnecessary unless the documentation changes executable examples or build configuration.

## Milestone Completion

Before reporting a milestone ready for manual closure:

- confirm every planned issue is closed or deliberately marked `not planned`;
- confirm every associated Pull Request is merged and the milestone has no open issues;
- update local `main` and run the full repository validation suite;
- confirm the worktree is clean and synchronized with `origin/main`;
- verify the deployed site when deployment is part of the milestone.

Agents must not close GitHub milestones.
