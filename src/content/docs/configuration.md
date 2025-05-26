---
title: Configuration
description: Learn how to configure astro-plantuml for your needs
---

## Configuration in astro.config.mjs

The `astro-plantuml` integration accepts several configuration options. Here's how to use them:

```js
import { defineConfig } from 'astro/config';
import plantuml from 'astro-plantuml';

export default defineConfig({
  integrations: [
    plantuml({
      // Configuration options go here
      serverUrl: 'http://www.plantuml.com/plantuml/png/',
      timeout: 10000,
      addWrapperClasses: true,
      language: 'plantuml'
    })
  ],
});
```

## Available Options

### serverUrl

- **Type**: `string`
- **Default**: `'http://www.plantuml.com/plantuml/png/'`
- **Description**: The URL of the PlantUML server to use for rendering diagrams

```js
plantuml({
  serverUrl: 'https://your-custom-plantuml-server.com/plantuml/png/'
})
```

### timeout

- **Type**: `number`
- **Default**: `10000` (10 seconds)
- **Description**: HTTP request timeout in milliseconds

```js
plantuml({
  timeout: 30000 // 30 seconds
})
```

### addWrapperClasses

- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to add CSS classes to the generated HTML elements

When enabled, adds:
- `plantuml-diagram` class to the wrapper `<figure>` element
- `plantuml-img` class to the `<img>` element
- `plantuml-error` class to error containers

```js
plantuml({
  addWrapperClasses: false // Disable CSS classes
})
```

### language

- **Type**: `string`
- **Default**: `'plantuml'`
- **Description**: The language identifier for code blocks

```js
plantuml({
  language: 'uml' // Use ```uml instead of ```plantuml
})
```

## Custom PlantUML Server

### Why Use a Custom Server?

The default public PlantUML server works well for most use cases, but you might want to use a custom server for:

- **Better Performance**: Avoid rate limits and network latency
- **Privacy**: Keep your diagrams on your own infrastructure
- **Custom Themes**: Use organization-specific styling
- **Reliability**: Ensure uptime for critical documentation

### Setting Up a PlantUML Server

#### Using Docker (Recommended)

```bash
docker run -d -p 8080:8080 plantuml/plantuml-server:jetty
```

Then configure astro-plantuml to use your local server:

```js
plantuml({
  serverUrl: 'http://localhost:8080/png/'
})
```

#### Using Java

Download the PlantUML server WAR file and run:

```bash
java -jar plantuml-server.war
```

### Server URL Formats

Different PlantUML servers may use different URL formats:

```js
// Standard format (most servers)
serverUrl: 'http://localhost:8080/plantuml/png/'

// Some servers use this format
serverUrl: 'http://localhost:8080/png/'

// For SVG output
serverUrl: 'http://localhost:8080/plantuml/svg/'
```

## Styling Generated Diagrams

When `addWrapperClasses` is enabled, you can style the generated elements:

```css
/* Center all diagrams */
.plantuml-diagram {
  text-align: center;
  margin: 2rem 0;
}

/* Add border and shadow to images */
.plantuml-img {
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: auto;
}

/* Style error messages */
.plantuml-error {
  background-color: #fff5f5;
  border: 1px solid #feb2b2;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
}

.plantuml-error p {
  color: #c53030;
  margin: 0 0 1rem 0;
}
```

## Environment-Specific Configuration

You can use environment variables for different configurations:

```js
import { defineConfig } from 'astro/config';
import plantuml from 'astro-plantuml';

const isDev = import.meta.env.DEV;

export default defineConfig({
  integrations: [
    plantuml({
      serverUrl: isDev 
        ? 'http://localhost:8080/plantuml/png/'
        : process.env.PLANTUML_SERVER || 'http://www.plantuml.com/plantuml/png/',
      timeout: isDev ? 30000 : 10000
    })
  ],
});
```

## Troubleshooting

### Diagrams Not Rendering

1. Check if the PlantUML server is accessible:
   ```bash
   curl http://www.plantuml.com/plantuml/png/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000
   ```

2. Verify your code blocks use the correct language identifier (default: `plantuml`)

3. Check browser console for errors

### Timeout Errors

Increase the timeout value:

```js
plantuml({
  timeout: 30000 // 30 seconds
})
```

### Encoding Errors

If you see "Huffman encoding" errors, ensure you're using the latest version of astro-plantuml (v0.1.2+).