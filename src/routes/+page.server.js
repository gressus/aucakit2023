import { error } from "@sveltejs/kit";
// import { posts } from "../data.js";



import { Deta } from "deta";
const deta = Deta("c08f3qnqxes_EgznwZB5c3C5TATsgsE2ED8bPwY5GYet");
const db = deta.Base("events"); // Make sure this matches your actual base name

export async function load({ params }) {
  // const post = posts.find((post) => post.slug === params.slug);

  // if (!post) throw error(404);

  let events = [];

  async function fetchEvents() {
    try {
      const result = await db.fetch(); // Fetch all events from the base
      events = result.items;
      console.log(events);
      currentEvent = events[0];
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }  

  await fetchEvents(); // Fetch events when the script loads

  return {
    events,
  };
}
