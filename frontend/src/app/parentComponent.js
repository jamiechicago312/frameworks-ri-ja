import { useClient } from 'next/client';

const parentComponent = () => {
  useClient(); // Mark this component as a Client Component
  return (
    <div>
      {/* Render ./src/app/page.tsx here */}
      <Page />
    </div>
  );
};

export default parentComponent;
