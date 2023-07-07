import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./ProductSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
};
