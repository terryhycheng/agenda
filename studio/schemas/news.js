import { BsNewspaper } from "react-icons/bs";

export default {
  name: "news",
  title: "News",
  type: "document",
  icon: BsNewspaper,
  fields: [
    {
      name: "title",
      title: "News Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featureImg",
      title: "Feature Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          name: "block",
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
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
      name: "video",
      title: "Video (if any)",
      description: "Please paste the complete video link down below.",
      type: "string",
    },
  ],
  orderings: [
    {
      title: "Date From Latest",
      name: "dateFromLatest",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Date From Oldest",
      name: "dateFromOldest",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "featureImg",
    },
  },
};
