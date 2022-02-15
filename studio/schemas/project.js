import { BsInboxes } from "react-icons/bs";

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon: BsInboxes,
  fields: [
    {
      name: "name",
      title: "Porject Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "innerTitle",
      title: "Inner Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainVideo",
      title: "Main Video",
      description: "Please paste the video link down below.",
      type: "string",
    },
    {
      name: "intro",
      title: "Brief Introduction",
      type: "string",
    },
    {
      name: "introParagraph",
      title: "Introduction",
      type: "array",
      of: [
        {
          name: "block",
          type: "block",
        },
      ],
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          name: "service",
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          name: "feature",
          title: "Feature",
          type: "object",
          fields: [
            {
              name: "featureImage",
              type: "image",
              title: "Feature Image",
              options: { hotspot: true },
            },
            { name: "featureTitle", type: "string", title: "Feature Title" },
            {
              name: "featureContent",
              type: "array",
              title: "Feature Content",
              of: [
                {
                  name: "block",
                  type: "block",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          name: "galleryItem",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      name: "otherVideos",
      title: "Other Videos",
      type: "array",
      description: "Please paste all video links down below.",
      of: [{ name: "video", type: "string" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "category.title", media: "mainImage" },
  },
};
