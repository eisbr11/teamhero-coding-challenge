export type ContactApi = {
  /**
   * the id of the contact
   */
  id: number;
  /**
   * an avatar image url
   */
  avatar: string;
  /**
   * the first name of the contact
   */
  firstName: string;
  /**
   * the last name of the contact
   */
  lastName: string;
  /**
   * the email address of the contact
   */
  email: string;
  /**
   * the city, where the contact is located
   */
  location: string;
  /**
   * the skills of the contact
   */
  skills: Skill[];
};

export type ContactsStateType = {
  /**
   * the Contacts Data
   */
  contacts: ContactsApi,
  /**
   * will be true, when data is being fetched
   */
  isFetching: boolean,
  /**
   * will be true, when there is a connection error
   */
  hasError: boolean,
};

export type ContactsApi = ContactApi[];

export type Skill = {
  /**
   * the internal id for the skill
   */
  id: string;
  /**
   * name for the skill
   */
  type: string;
};
