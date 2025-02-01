#Project Overview
Use this guide to build a web app where users can give a text prompt to generate emojis using the sdxl-emoji model hosted on Replicate.

#Feature Requirements
- We will use Next.js, Shadcn, Lucide, and Replicate.
- Create a form where users can put in prompt, and clicking on a button that calls the replicate model to generate emojis.
- Have a nice UI and animation when the emoji is blank or generating.
- Display all the images ever generated in grid.
- When hover each emoji img, an icon button for download, and a like button should be shown up.

#Relevant Documentation
npm install replicate


import Replicate from "replicate";
const replicate = new Replicate();

const input = {
    prompt: "A TOK emoji of a man",
    apply_watermark: false
};

const output = await replicate.run("fofr/sdxl-emoji:dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e", { input });

import { writeFile } from "node:fs/promises";
for (const [index, item] of Object.entries(output)) {
  await writeFile(`output_${index}.png`, item);
}
//=> output_0.png written to disk

#Current File Structure
emoji_maker
├── .next
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── components
│       └── ui
│           ├── button.tsx
│           ├── card.tsx
│           └── input.tsx
├── lib
│   └── utils.ts
├── node_modules
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── requirements
│   └── frontend-instructions.md
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

#Rules for File Organization
- All new components should be placed in the `/components` folder and named in a consistent format.
- All pages should be placed in the `app` folder.