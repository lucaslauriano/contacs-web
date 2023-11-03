'use client';

import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { signInRequest } from '@/services/auth';
import Page from '@/components/Page';
import SignInForm from '@/app/sign-in/components/SignInForm';
export default function SignInPage() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: any) {
    await signIn(data);
  }

  return (
    <Page>
      <div className='flex min-h-screen w-full  justify-center'>
        <div className='flex w-full flex-col  p-6 md:p-12 md:min-w-[480px] md:max-w-[480px]'>
          <span className='font-semibold'>Meus Contatos</span>
          <SignInForm />
        </div>
      </div>
    </Page>
  );
}
