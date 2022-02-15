import { BsFolder } from "react-icons/bs";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: BsFolder,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
