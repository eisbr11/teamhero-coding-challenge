export type ContactsApi = {
  id: number;

  avatar: string;

  firstName: string;

  lastName: string;

  email: string;

  location: string;

  skills: Skill[];
};

type Skill = {
  id: string;
  type: string;
};
