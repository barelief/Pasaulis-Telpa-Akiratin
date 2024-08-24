<!-- markdownlint-disable MD013 -->

# Pasaulis Telpa Akiratin

![Pasaulis telpa akiratin website](https://literaci.lt/pta/website_pta.jpg)

Interactive demo: https://literaci.lt/pta    
Printed demo: https://literaci.lt/print  
Vue based prototype: https://literaci.lt/postvilnius  

## Overview

**Pasaulis Telpa Akiratin** is a bilingual poetry collection website, presenting a carefully curated selection of Polish and Lithuanian poems. The site organizes poems under various themes, including relationships, identity, and transgression, offering readers an immersive experience in exploring diverse poetic expressions.

The project is built with modern web development technologies such as Astro, React, nanostores, Tailwind CSS, Airtable, and Paged.js. 

## Features

- **Bilingual Content**: The website supports both Polish and Lithuanian languages, catering to a diverse audience.
- **Thematic Categorization**: Poems are categorized under distinct themes like relationships, identity, and transgression for easy navigation.
- **Dynamic Foldable UI**: A unique foldable UI component allows users to dynamically fold and unfold poem content, enhancing the browsing experience.
- **Liked Poems modal**: Users can interact with poems by marking them as liked, creating a personalized collection of favorite poems.
- **Interactive Shopping Cart**: An intuitive shopping cart feature is integrated with the Paysera API, providing a one-product shopping experience, allowing users to purchase books directly from the website.
- **PDF Generation**: Paged.js and Puppetteer are utilized to generate the final PDF version of the book, facilitating the production of a printed copy using JavaScript.
 
## Technologies Used

- **Astro**: A modern, fast web framework optimized for static site generation.
- **React**: A JavaScript library for building user interfaces, allowing for dynamic and responsive components.
- Nanostores: Lightweight state management solution used for managing and persisting state outside of components, enhancing application efficiency and scalability. 
- **Tailwind CSS**: A utility-first CSS framework that helps in creating responsive and customizable UI designs.
- **Airtable**: A flexible database used for managing and organizing the poem content.
- **Paged.js**: A library for paginating web content into print-ready PDFs, perfect for generating the final printed book version.
- **Paysera API**: An API integration for handling secure online payments within the site.

## Project Structure

```bash
├── 📄 astro.config.mjs          # Configuration file for Astro
├── 📄 dep.cmd                   # Batch script to build and deploy automatically
├── 📄 deploy.py                 # Python script for deploying the project
├── 📄 dev.cmd                   # Batch script to start the development server
├── 📄 package.json              # NPM config
├── 📂 public                    # Publicly accessible static files and assets
│   └── 📂 scripts               # Directory for JavaScript files used in the public-facing site
│       └── 📄 toggleDivVisibility.js  # Script to toggle the visibility of a div (secton) on the website
├── 📄 README.md                 # Project's readme file
├── 📂 src                       
│   ├── 📂 assets                
│   │   ├── 📂 data              # data files
│   │   │   └── 📄 poems.json    # JSON file containing data related to poems
│   │   ├── 📂 images            # Directory for image files
│   │   │   ├── 📂 icons         # Directory for icon files 
│   │   │   └── 📂 textures      # Directory for texture image files
│   │   └── 📂 styles            
│   │       └── 📄 base.css      # foundational styles
│   ├── 📂 components            # Reusable UI components used throughout the application
│   │   ├── 📄 Footer.astro      # Astro component for the website's footer
│   │   ├── 📄 Navbar.astro      # Astro component for the website's navigation bar
│   │   ├── 📄 PoemTopicSection.astro  # Astro component for displaying a section of poem topics
│   │   ├── 📂 react             # React components directory
│   │   │   ├── 📄 AddToCart.tsx      # React component for adding items to a cart
│   │   │   ├── 📄 FoldedDiv.jsx      # React component for a collapsible/foldable div
│   │   │   ├── 📂 modal              # Directory for modal-related components
│   │   │   │   ├── 📂 checkout       # Components related to the checkout process
│   │   │   │   │   ├── 📄 CostSummary.jsx          # Component displaying the cost summary
│   │   │   │   │   ├── 📄 ModalBase.jsx            # Base component for modals
│   │   │   │   │   ├── 📄 ModalCart.jsx            # Component for the cart modal
│   │   │   │   │   ├── 📄 ModalReviewOrder.jsx     # Component for reviewing the order before confirmation
│   │   │   │   │   ├── 📄 ModalShippingDetails.jsx # Component for entering shipping details in a modal
│   │   │   │   │   └── 📄 shipping_locations.ts    # Data file for shipping location options
│   │   │   │   ├── 📄 ModalManagerCheckout.jsx     # Manager component handling modal states during checkout
│   │   │   │   ├── 📄 ReopenLastModal.jsx          # Component to reopen the last viewed modal
│   │   │   │   └── 📄 ToggleModal.jsx              # Component to toggle modals on and off
│   │   │   ├── 📄 ToggleFlyoutCart.tsx             # Component to toggle a cart modal
│   │   │   └── 📄 ToggleFlyoutLikes.tsx            # Component to toggle a likes modal
│   │   └── 📄 ToggleSection.astro  # Astro component to toggle visibility of a section
│   ├── 📄 env.d.ts               # TypeScript environment configuration file
│   ├── 📂 layouts                # Layout components for different page layouts
│   │   └── 📄 Layout.astro       # Astro layout component for consistent page structure
│   ├── 📂 pages                  # Directory containing the actual pages of the site
│   │   ├── 📄 apie.astro         # Astro page for the "About" section
│   │   ├── 📄 index.astro        # Astro page for the home page
│   │   └── 📄 taisykles.md       # Markdown file for the "Rules" section of the site
│   ├── 📂 sandbox                # Sandbox directory for testing and experimenting
│   ├── 📂 scripts                # JavaScript/TypeScript scripts for various functionalities
│   │   ├── 📄 fetchPoems.js      # Script to fetch poems data (Node based)
│   │   └── 📄 saveJSONToFile.js  # Script to save JSON data to a file (Node based)
│   ├── 📂 stores                 # Directory for managing global state using stores
│   │   ├── 📄 checkoutStore.ts   # Store for managing checkout-related state
│   │   ├── 📄 likesStore.ts      # Store for managing likes-related state
│   │   └── 📄 modalStore.ts      # Store for managing modal-related state
│   └── 📂 types                  # TypeScript type definitions
│       └── 📄 poem.ts            # Type definitions related to poems
├── 📄 sync.cmd                   # Batch script to synchronize files to server
├── 📄 tailwind.config.js         # Tailwind CSS configuration file
├── 📄 tree.txt                   # File containing the directory tree
└── 📄 tsconfig.json              # TypeScript configuration file
```

## TODO for production

- [ ] Connect to Paysera API Service https://developers.paysera.com/en/checkout/flow 
- [ ] i18n
- [x] persist nanostores
  - [x] cart items
  - [x] user favorites
  - [ ] ~~Fold / unfold section~~
- [x] Hide / show section
- [x] Expand / Hide all
- [x] modal / route
  - [ ] Favorite poem modal
  - [x] Shopping cart modal
  - [ ] checkout modal


## Author

- **Bartosh Polonski*** - [GitHub Profile](https://github.com/barelief)

## License

The code in this repository is licensed under the MIT License.  

*However, the poems and book content (`poems.json`) are **not** covered by this license and are copyrighted by their respective authors. Please contact the authors or rights holders for more information regarding the usage of the poems and book content.*

© Mantas Balakauskas, Dorota Bartoszewicz, Mirosława Bartoszewicz, Alina Borzenkaitė, Ramunė Brundzaitė, Nerijus Cibulskas, Linas Daugėla, Marek Domański, Daniel Dowejko, Paulius Gadeikis, Dovydas Grajauskas, Ignė Grikevičiūtė, Patricija Gudeikaitė, Goda Gurinskaitė, Jonas Jankauskas, Aušra Kaziliūnaitė, Jovaras Kelpšas, Mindaugas Kirka, Daniel Krajczyński, Laura Kromalcaitė, Žygimantas Kudirka, Gabrielė Labanauskaitė, Augustas Lapinskas, Romuald Ławrynowicz, Ramūnas Liutkevičius, Agnieszka Mackojć, Marzena Mackojć-Sinkevičienė, Agnieszka Masalytė, Bożena Naruszewicz, Ewa Nausewicz, Ernestas Noreika, Dominykas Norkūnas, Dominika Olicka, Karol Pasznikowicz, Krystyna Pawtel, Tomas Petrulis, Marius Povilas Elijas Martynenko, Nojus Saulytis, Tomasz Snarski, Monika Staugaitytė, Patrycja Stefanowicz, Tomas Tamošiūnas, Guoda Taraškevičiūtė, Uršulė Toleikytė, Mantas Toločka, Kristina Užėnaitė, Indrė Valantinaitė, Gabrielė Vetkinaitė, Ingrida Viluckytė, Kamila Zujevič, Maria Żukowska, eilėraščiai, 2023  
© Birutė Jonuškaitė, Vidas Morkūnas, Žilvinas Norkūnas, Jūratė Petronienė, Bartoš Polonski, Agnieszka Rembiałkowska, vertimai, 2023  
© Bartoš Polonski, sudarymas, dizainas, 2023  
© Lenkų literatų asociacija, 2023  
