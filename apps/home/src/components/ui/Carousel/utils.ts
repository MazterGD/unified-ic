/**
 * Returns a default gradient based on index
 */
export const getDefaultGradient = (index: number): string => {
  const gradients = [
    'linear-gradient(135deg, #0061ff, #60efff)',
    'linear-gradient(135deg, #ff0f7b, #f89b29)',
    'linear-gradient(135deg, #00b09b, #96c93d)',
    'linear-gradient(135deg, #8e2de2, #4a00e0)',
    'linear-gradient(135deg, #f857a6, #ff5858)',
    'linear-gradient(135deg, #11998e, #38ef7d)',
  ];

  return gradients[index % gradients.length];
};
