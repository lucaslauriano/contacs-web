import { formatContacsOrder, formatPhoneNumber } from '@/utils/format';

//TODO: refactor - be Integration
const contacts = [
  {
    id: 1,
    name: 'Leslie Abbott',
    email: 'leslie.abbott@example.com',
    phone: '48996410054',
  },
  {
    id: 2,
    name: 'Hector Adams',
    email: 'hector.adams@example.com',
    phone: '48996410054',
  },
  {
    id: 3,
    name: 'Blake Alexander',
    email: 'blake.alexander@example.com',
    phone: '48996410054',
  },
  {
    id: 4,
    name: 'Fabricio Andrews',
    email: 'fabricio.andrews@example.com',
    phone: '48996410054',
  },
  {
    id: 5,
    name: 'Angela Beaver',
    email: 'angela.beaver@example.com',
    phone: '48996410054',
  },
  {
    id: 6,
    name: 'Yvette Blanchard',
    email: 'yvette.blanchard@example.com',
    phone: '48996410054',
  },
  {
    id: 7,
    name: 'Lawrence Brooks',
    email: 'lawrence.brooks@example.com',
    phone: '48996410054',
  },
  {
    id: 8,
    name: 'Jeffrey Clark',
    email: 'jeffrey.clark@example.com',
    phone: '48996410054',
  },
  {
    id: 9,
    name: 'Kathryn Cooper',
    email: 'kathryn.cooper@example.com',
    phone: '48996410054',
    imageUrl:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Alicia Edwards',
    email: 'alicia.edwards@example.com',
    phone: '48996410054',
  },
  {
    id: 11,
    name: 'Benjamin Emerson',
    email: 'benjamin.emerson@example.com',
    phone: '48996410054',
  },
  {
    id: 12,
    name: 'Jillian Erics',
    email: 'jillian.erics@example.com',
    phone: '48996410054',
  },
  {
    id: 13,
    name: 'Chelsea Evans',
    email: 'chelsea.evans@example.com',
    phone: '48996410054',
  },
  {
    id: 14,
    name: 'Michael Gillard',
    email: 'micheal.gillard@example.com',
    phone: '48996410054',
  },
  {
    id: 15,
    name: 'Dries Giuessepe',
    email: 'dries.giuessepe@example.com',
    phone: '48996410054',
  },
  {
    id: 16,
    name: 'Jenny Harrison',
    email: 'jenny.harrison@example.com',
    phone: '48996410054',
    imageUrl:
      'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 17,
    name: 'Lindsay Hatley',
    email: 'lindsay.hatley@example.com',
    phone: '48996410054',
  },
  {
    id: 18,
    name: 'Anna Hill',
    email: 'anna.hill@example.com',
    phone: '48996410054',
  },
  {
    id: 19,
    name: 'Courtney Samuels',
    email: 'courtney.samuels@example.com',
    phone: '48996410054',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 20,
    name: 'Tom Simpson',
    email: 'tom.simpson@example.com',
    phone: '48996410054',
  },
  {
    id: 21,
    name: 'Floyd Thompson',
    email: 'floyd.thompson@example.com',
    phone: '48996410054',
  },
  {
    id: 22,
    name: 'Leonard Timmons',
    email: 'leonard.timmons@example.com',
    phone: '48996410054',
  },
  {
    id: 23,
    name: 'Whitney Trudeau',
    email: 'whitney.trudeau@example.com',
    phone: '48996410054',
  },
  {
    id: 24,
    name: 'Kristin Watson',
    email: 'kristin.watson@example.com',
    phone: '48996410054',
  },
  {
    id: 25,
    name: 'Emily Wilson',
    email: 'emily.wilson@example.com',
    phone: '48996410054',
  },
  {
    id: 26,
    name: 'Emma Young',
    email: 'emma.young@example.com',
    phone: '48996410054',
  },
];

export default function ContactsPage() {
  const orderedContacts = formatContacsOrder(contacts);
  return (
    <div className='mx-auto max-w-3xl mt-6'>
      <div className='h-[80vh] overflow-y-auto' aria-label='Directory'>
        {Object.keys(orderedContacts).map((letter) => (
          <div key={letter} className='relative'>
            <div className='sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-gray-50 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900'>
              <h3>{letter}</h3>
            </div>
            <ul role='list' className='divide-y divide-gray-100'>
              {orderedContacts[letter].map((person: any) => (
                <li
                  key={person.email}
                  className='flex gap-x-4 px-3 py-5 justify-between'
                >
                  <div className='min-w-0'>
                    <div className='flex flex-row items-center'>
                      <p className='text-sm font-semibold leading-6 text-gray-900'>
                        {person.name}
                      </p>
                      <p className='ml-2 mt-1 truncate text-xs leading-5 text-gray-500'>
                        {'-  '}
                        {formatPhoneNumber(person.phone)}
                      </p>
                    </div>
                    <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
                      {person.email}
                    </p>
                  </div>
                  <button className='absolute right-4 rounded-full bg-blue-600 p-2 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
