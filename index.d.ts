export type EmailTemplateProp = {
  title: string;
  description: string;
  image: string;
};

export type InviteMailingProp = {
  my_email: string;
  salutation: string;
  message_content: string;
  use_guest_name: boolean;
};
