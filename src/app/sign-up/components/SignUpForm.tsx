'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';

const formSchema = z
  .object({
    username: z.string().min(1, 'Nome é obrigatório.'),
    email: z.string().email('E-mail inválido.').min(1, 'E-mail é obrigatório.'),
    managerType: z.string().min(1, 'Perfil é obrigatório.'),
    password: z
      .string()
      .min(1, 'Senha é obrigatória.')
      .min(8, 'Senha precisa ter mais de 8 caracteres.'),
    confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Senhas informadas não conferem.',
  });

type FormSchemaType = z.infer<typeof formSchema>;

export default function SignUpForm() {
  const router = useRouter();
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });
  const [isHiddingPassword, setIsHiddingPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setIsHiddingPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    if (data) {
      console.log(data);
      // await signup(data);
    }
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <div className='mt-8 flex w-full flex-col gap-y-4 -mb-8 rounded-md border p-10 '>
        <span className='font-semibold text-center'>Criar Conta</span>
        <Input
          id='username'
          type='text'
          label='Nome de Usuário'
          placeholder='Digite seu nome'
          error={!!errors.username?.message}
          supportingText={errors.username?.message || ''}
          {...register('username')}
        />

        <div className='flex w-full gap-4'>
          <Input
            id='email'
            type='email'
            label='Email'
            placeholder='Digite seu email'
            error={!!errors.email?.message}
            supportingText={errors.email?.message || ''}
            {...register('email')}
          />
        </div>

        <div className='flex w-full gap-4'>
          <Input
            id='password'
            type={isHiddingPassword ? 'password' : 'text'}
            label='Senha'
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

          <Input
            id='confirmPassword'
            type={isHiddingPassword ? 'password' : 'text'}
            label='Confirmar senha'
            placeholder='Confirme sua senha'
            error={!!errors.confirmPassword?.message}
            supportingText={errors.confirmPassword?.message || ''}
            {...register('confirmPassword')}
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
        </div>

        <Button
          type='submit'
          // loading={loading || isSubmitting}
          // disabled={loading || isSubmitting}
          className='mt-2'
        >
          <span>Cadastrar</span>
        </Button>
      </div>
    </form>
  );
}
