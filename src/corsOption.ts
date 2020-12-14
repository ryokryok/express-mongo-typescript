import { CorsOptions } from "cors";

export const readOption: CorsOptions = {
  origin: "*",
  methods: "GET",
};
export const writeOption: CorsOptions = {
  origin: process.env.CLIENT_PORT,
};
