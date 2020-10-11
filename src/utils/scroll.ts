interface Fractions {
  numerator: number;
  denominator: number;
}

export default {
  darkMode: ({ numerator, denominator }: Fractions): boolean => {
    const change = (window.innerHeight * numerator) / denominator;
    const scroll = window.pageYOffset;

    return scroll >= change;
  },
};
