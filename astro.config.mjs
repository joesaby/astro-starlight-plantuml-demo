import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import plantuml from 'astro-plantuml';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Astro PlantUML',
      description: 'Documentation and examples for the astro-plantuml integration',
      social: {
        github: 'https://github.com/yourusername/astro-plantuml',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/' },
            { label: 'Installation', link: '/installation/' },
            { label: 'Configuration', link: '/configuration/' },
          ],
        },
        {
          label: 'Examples',
          items: [
            { label: 'All Diagrams', link: '/examples/' },
            { label: 'Sequence Diagrams', link: '/examples/sequence' },
            { label: 'Class Diagrams', link: '/examples/class' },
            { label: 'Activity Diagrams', link: '/examples/activity' },
          ],
        },
      ],
    }),
    plantuml({
      // Enable caching to store generated diagrams
      cache: true,
      // Configure retry logic
      retry: {
        maxAttempts: 3,
        initialDelay: 1000, // 1 second
        maxDelay: 5000, // 5 seconds
      },
      // Optional: Use a different PlantUML server if needed
      // server: 'https://your-plantuml-server.com',
    }),
  ],
  site: 'https://astro-plantuml.netlify.app'
});