import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { NewEditForm } from '../yara-rule-edit-form';

// ----------------------------------------------------------------------

export function UserCreateView() {
  return (
    <DashboardContent maxWidth="xl">
      <CustomBreadcrumbs
        heading="Create a new user"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'New user' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <NewEditForm />
    </DashboardContent>
  );
}
