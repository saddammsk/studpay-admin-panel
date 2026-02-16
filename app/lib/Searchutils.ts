import { User, DUMMY_USERS } from '@/public/Dummydata';

interface SearchFilters {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  dateOfBirth: string;
}

export const searchUsers = (filters: SearchFilters): User[] => {
  return DUMMY_USERS.filter((user) => {
    const firstNameMatch = user.firstName
      .toLowerCase()
      .includes(filters.firstName.toLowerCase());

    const lastNameMatch = user.lastName
      .toLowerCase()
      .includes(filters.lastName.toLowerCase());

    const emailMatch = user.email
      .toLowerCase()
      .includes(filters.email.toLowerCase());

    const phoneMatch = user.phone.includes(filters.phone);

    const countryMatch =
      !filters.country || user.country === filters.country;

    const dateMatch = !filters.dateOfBirth || user.dateOfBirth === filters.dateOfBirth;

    return (
      firstNameMatch &&
      lastNameMatch &&
      emailMatch &&
      phoneMatch &&
      countryMatch &&
      dateMatch
    );
  });
};