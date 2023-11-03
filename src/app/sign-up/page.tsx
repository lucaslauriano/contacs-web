'use client';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { signInRequest } from '@/services/auth';
import Page from '@/components/Page';
import SignUpForm from '@/app/sign-up/components/SignUpForm';
export default function SignUpPage() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: any) {
    await signIn(data);
  }

  return (
    <Page>
      <div className='flex min-h-screen w-full justify-center items-center -mt-10'>
        <div className='flex w-full flex-col p-6 md:p-10 md:min-w-[480px] md:max-w-[480px]'>
          <SignUpForm />
        </div>
      </div>
    </Page>
  );
}
