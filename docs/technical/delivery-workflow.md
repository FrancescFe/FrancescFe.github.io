# Repository Delivery Workflow

This is the canonical workflow for planning, implementing, validating, and delivering changes to the portfolio. Instructions for a specific task take precedence over these defaults.

## Sources Of Truth

- The current milestone and issue define product scope and acceptance criteria.
- For visual work, follow the approved [design decisions](../design/00-design-decisions.md) and [mockups](../mockups/README.md).

## Create a Milestone

- Use [the milestone template](../../.github/milestone_template.md) when creating a milestone.
- Refine the milestone from a product perspective before it is created:
  - Description: a summary of the goal.
  - Scope: All functional requirements must be clear.
  - Delivery stages: the objectives are divided into stages with observable outcomes.
  - Out of Scope: any discarded known requirements.
  - Success Criteria: must be verifiable.

## Create an Issue

- Use [the feature issue template](../../.github/ISSUE_TEMPLATE/feature.md) when creating an issue.
- Refine the issue from technical perspective before it is created:
  - Context: product briefing.
  - Description: a technical approach must be suggested.
  - Acceptance criteria: must be verifiable.
- Label and Milestone: assign the most appropriate from the current context.
- Projects: assign the most appropriate 'priority', 'size' ('s' ideally), 'iteration' and 'stage' or leave it blank.
- Project > status: set to `Ready for Dev`.

## Implementing a Milestone Lifecycle

1. Implement the Milestone stage by stage in the order that the user requires (mandatory) or defined by the milestone (default).
2. Chop each stage into atomic issues and implement them one by one, applying the 'Implementing an Issue Lifecycle' workflow to each.
3. Don't start the next stage until the current one is complete and validated.
4. Create the Pull Request
5. Check Watch
6. Merge the Pull Request
7. Checkout and fetch main

## Implementing an Issue Lifecycle

1. Create a Branch and checkout
2. Ensure the context:
    - Review the milestone and the stage (if the issue is linked to it).
    - Read the issue and verify that the scope is clear and feasible. If not, request clarification or refinement from the user before starting work.
3. Implement only the acceptance criteria and relevant supporting changes
4. Avoid unrelated behavior, refactors, or documentation changes in the same issue
5. Validate the changes
6. Commit the changes and create the Pull Request
7. Wait for the checks to pass:
   - Start `gh pr checks <pr> --watch --interval 30`
   - Keep repetitive watcher progress out of the model context
   - retrieve only the final bounded summary or the failure details
8. Merge the Pull Request
9. Checkout and fetch main
10. Compact the context

## Work References And Branches

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

## Pull Requests And Merges

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

For documentation-only changes, verify Markdown structure, relative links, terminology, consistency with related documents, and `git diff --check`. Application build tasks are unnecessary.

## Milestone Completion

Before reporting a milestone ready for manual closure:

- confirm every planned issue is closed or deliberately marked `not planned`;
- confirm every associated Pull Request is merged and the milestone has no open issues;
- update local `main` and run the full repository validation suite;
- confirm the worktree is clean and synchronized with `origin/main`;
- verify the deployed site when deployment is part of the milestone.

Agents must not close GitHub milestones.
