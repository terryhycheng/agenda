import { BsFillPeopleFill } from "react-icons/bs";

export default {
  name: "staff",
  title: "Staff",
  type: "document",
  icon: BsFillPeopleFill,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      description:
        "The priority of display in Team page (The highest: 1, then 2,3...)",
      type: "number",
    },
    {
      name: "profilePic",
      title: "Profile Picture",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "socialMedia",
      title: "Social Media Links",
      type: "object",
      fields: [
        {
          name: "facebook",
          title: "Facebook",
          description: "Your personal facebook account.",
          initialValue: "https://www.facebook.com/",
          type: "string",
        },
        {
          name: "instagram",
          title: "Instagram",
          description: "Your personal Instagram account.",
          initialValue: "https://www.instagram.com/",
          type: "string",
        },
        {
          name: "linkedin",
          title: "Linkedin",
          description: "Your personal Linkedin account.",
          initialValue: "https://www.linkedin.com/",
          type: "string",
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "displayOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "profilePic",
    },
  },
};
