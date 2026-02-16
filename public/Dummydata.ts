export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  dateOfBirth: string;
}

export const DUMMY_USERS: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1-234-567-8900',
    country: 'United States',
    dateOfBirth: '1990-05-15',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+1-234-567-8901',
    country: 'Canada',
    dateOfBirth: '1992-08-22',
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@example.com',
    phone: '+44-234-567-8902',
    country: 'United Kingdom',
    dateOfBirth: '1988-12-03',
  },
  {
    id: '4',
    firstName: 'Sarah',
    lastName: 'Williams',
    email: 'sarah.williams@example.com',
    phone: '+61-234-567-8903',
    country: 'Australia',
    dateOfBirth: '1995-03-10',
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.brown@example.com',
    phone: '+33-234-567-8904',
    country: 'France',
    dateOfBirth: '1991-07-25',
  },
  {
    id: '6',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@example.com',
    phone: '+49-234-567-8905',
    country: 'Germany',
    dateOfBirth: '1993-01-18',
  },
  {
    id: '7',
    firstName: 'Robert',
    lastName: 'Miller',
    email: 'robert.miller@example.com',
    phone: '+1-234-567-8906',
    country: 'United States',
    dateOfBirth: '1987-09-30',
  },
  {
    id: '8',
    firstName: 'Lisa',
    lastName: 'Wilson',
    email: 'lisa.wilson@example.com',
    phone: '+44-234-567-8907',
    country: 'United Kingdom',
    dateOfBirth: '1994-04-12',
  },
  {
    id: '9',
    firstName: 'James',
    lastName: 'Moore',
    email: 'james.moore@example.com',
    phone: '+81-234-567-8908',
    country: 'Japan',
    dateOfBirth: '1989-11-05',
  },
  {
    id: '10',
    firstName: 'Catherine',
    lastName: 'Taylor',
    email: 'catherine.taylor@example.com',
    phone: '+39-234-567-8909',
    country: 'Italy',
    dateOfBirth: '1996-06-20',
  },
];

export const COUNTRIES = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'France',
  'Germany',
  'Japan',
  'Italy',
  'Spain',
  'Mexico',
  'India',
  'Brazil',
];