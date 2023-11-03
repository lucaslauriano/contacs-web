'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import Button from '@/components/Button';
import Input from '@/components/Input';
import {
  EyeDropperIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/20/solid';

const formSchema = z.object({
  email: z.string().email('E-mail inválido.').min(1, 'E-mail é obrigatório.'),
  password: z.string().min(1, 'Senha é obrigatória.'),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const [isHiddingPassword, setIsHiddingPassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (callbackUrl && callbackUrl.includes('verified=true')) {
      toast.success(
        'Conta confirmada com sucesso. Faça o login para começar a utilizar.'
      );
    }
  }, [callbackUrl]);

  const togglePasswordVisibility = () => {
    setIsHiddingPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      const result = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (result?.error) {
        toast.error('Erro ao realizar o login. Usuário ou senha inválidos.');
        console.error(result?.error);
        return;
      }

      toast.success('Login realizado com sucesso.');
      router.push(callbackUrl || '/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <div className='mt-8 flex flex-col gap-y-2 rounded-md border p-10 '>
        <span className='font-semibold text-center'>Login</span>
        <Input
          id='email'
          type='email'
          label='Email'
          required
          placeholder='Digite seu email'
          error={!!errors.email?.message}
          supportingText={errors.email?.message || ''}
          {...register('email')}
        />

        <Input
          id='password'
          type={isHiddingPassword ? 'password' : 'text'}
          label='Senha'
          required
          placeholder='Digite sua senha'
          error={!!errors.password?.message}
          supportingText={errors.password?.message || ''}
          {...register('password')}
          trailingContent={
            <button
              type='button'
              onClick={togglePasswordVisibility}
              tabIndex={-1}
              className='text-sm text-gray-600 transition-all duration-200 hover:text-black'
            >
              {isHiddingPassword ? (
                <EyeIcon className='mb-1 mr-1 h-5 w-5' />
              ) : (
                <EyeSlashIcon className='mb-1 mr-1 h-5 w-5' />
              )}
            </button>
          }
        />

        <div className='flex w-full items-center justify-center  py-8'>
          <Button type='submit' loading={isSubmitting} disabled={isSubmitting}>
            Entrar
          </Button>
        </div>

        <Link
          href='/sign-up'
          className='flex w-full items-center justify-center px-4 py-2 text-center text-sm font-normal'
        >
          Não é cadastrado?
          <span className='ml-1 font-extrabold underline'>Cadastre-se</span>
        </Link>
      </div>
    </form>
  );
}
