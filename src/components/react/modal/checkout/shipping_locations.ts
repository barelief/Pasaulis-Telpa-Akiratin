// Array of objects representing shipping locations
// Each location has a label (for display) and a value (which can represent the cost)

type LocationOption = {
  label: string;
  value: number;
  description: string;
}

export const locations: LocationOption[] = [
  { label: 'Lietuva', description: 'Pristatymas Lietuvoje 3€', value: 3 },
  { label: 'ES', description: 'Pristatymas ES 7€', value: 7 },
  { label: "Pasaulis", description: 'Pristatymas pasaulyje 19€', value: 19 },
];

