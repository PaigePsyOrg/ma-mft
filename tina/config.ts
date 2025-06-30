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
          { 
            type: "image", 
            name: "profileImage",
            label: "Profile Image",
            required: false,
          },
        ],
      },
      // New collections for Services, Contact, and Book pages
      {
        name: "services",
        label: "Services",
        path: "content",
        format: "md",
        match: {
          include: "*/services/_index",
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Content", isBody: true },
          { type: "string", name: "description", label: "SEO Description" },
          { 
            type: "object", 
            name: "servicesList", 
            label: "Services List",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
            fields: [
              { type: "string", name: "name", label: "Service Name" },
              { type: "string", name: "description", label: "Service Description" },
              { type: "number", name: "price", label: "Price (leave blank if varies)" },
              { type: "boolean", name: "featured", label: "Featured Service" },
            ],
          },
        ],
      },
      {
        name: "contact",
        label: "Contact",
        path: "content",
        format: "md",
        match: {
          include: "*/contact/_index",
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Content", isBody: true },
          { type: "string", name: "description", label: "SEO Description" },
          { type: "string", name: "email", label: "Email Address" },
          { type: "string", name: "phone", label: "Phone Number" },
          { type: "string", name: "location", label: "Office Location" },
          { type: "boolean", name: "showContactForm", label: "Show Contact Form" },
        ],
      },
      {
        name: "book",
        label: "Book",
        path: "content",
        format: "md",
        match: {
          include: "*/book/_index",
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Content", isBody: true },
          { type: "string", name: "description", label: "SEO Description" },
          { type: "string", name: "bookingUrl", label: "Booking URL" },
          { type: "string", name: "bookingInstructions", label: "Booking Instructions" },
        ],
      },
    ]
  },
});
