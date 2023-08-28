const slugifyName = (name) => {
  return name
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove non-word characters
    .substring(0, 50); // Limit to 50 characters
};

export default slugifyName;
