# Repository Agent Instructions

These instructions apply to the complete portfolio repository. Instructions for a specific task take precedence over these defaults.

## Required Reading

- Read [the delivery workflow](docs/technical/delivery-workflow.md) completely before planning milestones or issues, changing repository files, validating work, opening a Pull Request, or merging.
- For visual, layout, interaction, or content changes, read the [design documentation index](docs/design/00-design-decisions.md) first. Then read only the design documents and [approved mockups](docs/mockups/README.md) relevant to the task.
- Before implementation, read the current issue and its milestone or assigned stage when linked.

Use these documents as canonical sources instead of copying their complete rules into this file.

## Repository Safeguards

- Preserve unrelated changes and work already present in the worktree.
- Keep each change within the current issue's scope. Do not introduce a dependency, architectural pattern, or refactor solely to satisfy a generic best practice.
- Follow documented design decisions unless a later issue or decision explicitly supersedes them. Do not infer missing requirements from the mockups alone.
- Use the repository-defined scripts and checks for validation, in proportion to the change's risk.
- Write repository documentation, code, issues, Pull Requests, and public portfolio content in English unless the task specifies otherwise.
- Resolve GitHub Project field and option identifiers dynamically; do not treat opaque IDs as permanent configuration.
