# Documentation

## External Code Documentation

The OpenAPI specification of this project is excellent API documentation, which should be the only channel of communication with other services or clients. The OpenAPI Generator plugin already generates the documentation and it is accessible from the backend at the following route:

```text
/swagger-ui/index.html
```

No further documentation has been generated as it is not necessary at the current system stage nor a best practice recommendation.

A future improvement could be integrating Redocly (economical), Stoplight (premium), or using a static web template (and hosting it on GitHub Pages) to improve the current presentation of SwaggerUI documentation.

## Internal Code Documentation

The OpenAPI Generator plugin already adds internal documentation to the classes it creates. No further documentation has been generated as it is not necessary nor a best practice recommendation.

An attempt has been made to apply the best possible practices and design patterns to ensure self-explanatory, well-structured, and simple-to-understand code. Furthermore, strict version control has been carried out applying [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Adding to this that all work and its refinement has been documented with work parts available on GitHub three clicks away, it has been decided that adding extra in-code comments does not add value; on the contrary: it worsens code readability and is a risk as they can easily become obsolete.

## User Manual

A great effort has been made so that the APP does not need a user manual and contains an invisible tutorial that guides the user through its functionalities and navigation. That is why Google's app design recommendations have been applied; forms guide the user with error messages, and the app's minimalist design does not leave much room for mistakes.

A user manual requires constant maintenance to not become outdated and useless quickly, while also being a sign of an application with design problems.
