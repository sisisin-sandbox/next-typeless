import dynamic from 'next/dynamic';

const loader = () => import('../features/{{kebabCase name}}/module').then(({ {{pascalCase name}}Module }) => {{pascalCase name}}Module);
const {{pascalCase name}}Page = dynamic(loader, { ssr: false });
export default {{pascalCase name}}Page;
