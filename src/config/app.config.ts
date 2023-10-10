interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Store Employee'],
  customerRoles: ['End User'],
  tenantRoles: [
    'Business Owner',
    'Store Manager',
    'Store Employee',
    'Customer Service Representative',
    'Individual Customer',
  ],
  tenantName: 'Lead',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage user information',
    'Create, Read, Edit, Delete lead information',
    'Read store information',
    'Read tool information',
    'Manage rental information',
    'Read invoice information',
  ],
  ownerAbilities: ['Manage tool', 'Manage store', 'Read rental', 'Read invoice'],
  getQuoteUrl: 'https://app.roq.ai/proposal/a47f785e-b465-4137-94b7-8a12caf998b9',
};
