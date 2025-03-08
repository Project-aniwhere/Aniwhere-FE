import { UserListResponse } from '@/type/api/admin';
import { APIResult } from '@/type/common';
import { Fetch, isFetchError } from '@/util/fetch';
import { ApiError } from 'next/dist/server/api-utils';

const allUsers = [
  {
    id: 1,
    username: 'otaku123',
    email: 'otaku123@example.com',
    role: 'Admin',
  },
  {
    id: 2,
    username: 'animefan',
    email: 'animefan@example.com',
    role: 'User',
  },
  {
    id: 3,
    username: 'mangareader',
    email: 'mangareader@example.com',
    role: 'User',
  },
  {
    id: 4,
    username: 'naruto_lover',
    email: 'naruto@example.com',
    role: 'User',
  },
  {
    id: 5,
    username: 'sailor_moon',
    email: 'sailormoon@example.com',
    role: 'User',
  },
  { id: 6, username: 'goku_fan', email: 'goku@example.com', role: 'User' },
  {
    id: 7,
    username: 'mecha_pilot',
    email: 'mecha@example.com',
    role: 'User',
  },
  {
    id: 8,
    username: 'studio_ghibli',
    email: 'ghibli@example.com',
    role: 'User',
  },
  {
    id: 9,
    username: 'attack_titan',
    email: 'titan@example.com',
    role: 'User',
  },
  {
    id: 10,
    username: 'pokemon_master',
    email: 'pokemon@example.com',
    role: 'User',
  },
  {
    id: 11,
    username: 'onepiece_fan',
    email: 'onepiece@example.com',
    role: 'User',
  },
  {
    id: 12,
    username: 'dragonball_z',
    email: 'dbz@example.com',
    role: 'User',
  },
  {
    id: 13,
    username: 'fullmetal_alchemist',
    email: 'fma@example.com',
    role: 'User',
  },
  {
    id: 14,
    username: 'deathnote_lover',
    email: 'deathnote@example.com',
    role: 'User',
  },
  {
    id: 15,
    username: 'bleach_soul',
    email: 'bleach@example.com',
    role: 'User',
  },
];

export const getDummyAdminUsers = async (page = 1, search = '') => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const filteredUsers = allUsers.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );
  const itemsPerPage = 10;
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return {
    users: paginatedUsers,
    totalPages: Math.ceil(filteredUsers.length / itemsPerPage),
  };
};

export interface UserSearchOptionType {
  nickname?: string;
  email?: string;
  sex?: 'male' | 'female' | '';
}

export const getAdminUsers = async (
  page: number,
  size: number,
  direction: 'ASC' | 'DESC',
  option: UserSearchOptionType
): Promise<APIResult<UserListResponse>> => {
  const query = Object.entries(option)
    .filter(([, value]) => value !== '')
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  const res = await Fetch(
    `/api/admin/filter?page=${page}&size=${size}&direction=${direction}&${query}`
  );
  const data = await res.json();
  console.log(data);
  return data;
};

export const deleteAdminUser = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`User ${id} deleted`);
};
