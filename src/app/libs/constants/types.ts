type User = {
  accountStatus: string;
  avatar: string;
  clients: [Client];
  email: string;
  firstName: string;
  googlenumber: string;
  hasPassword: boolean;
  number: number;
  invitations: [Invitation];
  isTfaEnabled: boolean;
  lastName: string;
  mnumberdleName: string;
  phone: Phone;
  profile: Profile;
  role: string;
  services: [Service];
  verified: boolean;
};

type Phone = {
  // country: Country;
  number: number;
  phoneNumber: string;
  user: User;
  verified: boolean;
};

type Profile = {
  canTakeMultipleServices: boolean;
  currency: string;
  number: number;
  theme: string;
  user: User;
};

type Invitation = {
  recipient: User;
  service: Service;
};

type Client = {
  services: [Service];
  user: User;
};

type Service = {
  client: Client;
  invitation: Invitation;
  serviceProvnumberer: User;
  user: User;
};
