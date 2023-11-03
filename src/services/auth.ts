import { api } from '@/services/api';

type SignInRequestData = {
  email: string;
  password: string;
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL as RequestInfo | URL;

export async function signInRequest(data: SignInRequestData): Promise<any> {
  const dynamicData = await api.post(`api/users/login`, {
    body: data,
  });
  return dynamicData;
}

export async function recoverUserInformation() {
  const dynamicData = await fetch(`${baseUrl}api/users/current`, {
    cache: 'no-store',
    headers: {
      Authorization: '{token}',
    },
  });
  return dynamicData;
}
