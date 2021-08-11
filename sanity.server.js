// lib/sanity.server.js
import { createClient } from "next-sanity";
import { config } from "./config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: `skrc2qPmeThbLZBTdpcR5cnIFNxSedu4iXqKLscvEW3TpeIfHUyEir8LaGs2BNXwMWW5vKxJbqJvnmsj741hiorEwRunRRjpWiPGkTdFfh7yUq1CLKobztwfNpTFHSIGBobWP7kDA9lM2sEBmMyoBEnfFOvHPtcjr6tEDrS7VUf8u54bJZT5`,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
