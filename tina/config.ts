import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content",
        match: {
          include: "*/posts/**"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
       {
        name: "home",
        label: "Homepage",
        path: "content",
        format: "md",
        match: {
          include: "**/_index", // Matches content/_index.md
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Intro Text", isBody: true },
          { type: "string", name: "description", label: "SEO Description" },
          { type: "image", name: "heroImage", label: "Hero Image", required: false },
        ],
      },
             {
        name: "about",
        label: "About",
        path: "content",
        format: "md",
        match: {
          include: "*/about/_index", // Matches content/zh/about/_index.md and content/en/about/_index.md
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Bio", isBody: true },
          { type: "string", name: "description", label: "SEO Description" },
          { type: "string", name: "credentials", label: "Credentials" },
          { type: "string", name: "psychologyTodayLink", label: "Psychology Today URL" },
          { type: "image", name: "profileImage", label: "Profile Image", required: false },
          
     
    ],
  },]
  },
});
