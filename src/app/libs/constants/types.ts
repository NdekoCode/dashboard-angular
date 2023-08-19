type User = {
  accountStatus: string;
  avatar: string;
  clients?: Client[];
  email: string;
  firstName: string;
  googlenumber: string;
  hasPassword: boolean;
  number: number;
  invitations?: Invitation[];
  isTfaEnabled: boolean;
  lastName: string;
  mnumberdleName: string;
  phone: Phone;
  profile: Profile;
  role: string;
  services?: Service[];
  verified: boolean;
};
// "university": .+\n+\s+.+\n+\s+.+\n+\s+.+\n+\s+
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
  services?: Service[];
  user: User;
};

type Service = {
  client: Client;
  invitation: Invitation;
  serviceProvnumberer: User;
  user: User;
};
export type userTest = {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  accountStatus: string;
  hasPassword: boolean;
  email: string;
  phone: string;
  username: string;
  password: string;
  avatar: string;
  verified: boolean;
  role?: string;
  isTfaEnabled?: boolean;
  googleId?: string;
  ip?: string;
  address?: Address;
  macAddress?: string;
  company?: Company;
  userAgent?: string;
  userStatus?: string;
  createdAt: Date | string;
  lastConnection: string | Date;
  registrationSource: string;
};

export type DateAgoInterval = {
  year: number;
  month: number;
  week: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  [key: string]: number;
};
type Address = {
  address: string;
  city?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  postalCode?: string;
  state: string;
};
type Company = {
  address: Address;
  department: string;
  name: string;
  title: string;
};
