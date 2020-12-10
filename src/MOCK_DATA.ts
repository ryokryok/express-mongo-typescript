interface IUser {
  id: number;
  name: string;
  email: string;
  gender: "Female" | "Male";
}
export const Users: IUser[] = [
  { id: 1, name: "Aimil Wawer", email: "awawer0@army.mil", gender: "Female" },
  { id: 2, name: "Itch Eakley", email: "ieakley1@lulu.com", gender: "Male" },
  { id: 3, name: "Star Fernandez", email: "sfernandez2@aboutads.info", gender: "Female" },
  { id: 4, name: "Bendix Faulkner", email: "bfaulkner3@msn.com", gender: "Male" },
  { id: 5, name: "Kimmy Meric", email: "kmeric4@virginia.edu", gender: "Female" },
];
