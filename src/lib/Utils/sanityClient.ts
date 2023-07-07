import { createClient } from "next-sanity";

//...

export const client = createClient({
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-07-04",
  useCdn: false,
});
