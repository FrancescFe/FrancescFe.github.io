## Navigation

The global navigation is intentionally minimal.

The internal navigation exposes only the **Resume** destination.

The global header also provides icon-only links to Fran's **GitHub** and
**LinkedIn** profiles. These professional-profile links use recognizable
monochrome brand marks and expose explicit accessible names.

The Homepage itself acts as the project-discovery surface, so a separate Projects destination is unnecessary.

The visual treatment of navigation is inspired by editor/file conventions and may use file-like naming or similar technical cues.

These references must remain understandable without requiring visitors to recognize the underlying developer metaphor.

The active destination must have a visually distinct state.

## Project navigation

Projects support two complementary navigation mechanisms.

### Sequential discovery

Users scrolling through the Homepage naturally progress through:

`Introduction → Projects List → Project Details`

This is the primary exploratory experience.

### Direct navigation

Selecting a project card from the Projects List navigates directly to the corresponding project-detail section.

Implementation should preserve normal web navigation semantics where possible so that:

- keyboard users can activate project links;
- project sections have stable anchors;
- sections can be linked directly;
- browser behavior remains predictable;
- navigation does not depend on JavaScript-only interaction.
