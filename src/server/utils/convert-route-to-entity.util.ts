const mapping: Record<string, string> = {
  invoices: 'invoice',
  leads: 'lead',
  rentals: 'rental',
  stores: 'store',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
