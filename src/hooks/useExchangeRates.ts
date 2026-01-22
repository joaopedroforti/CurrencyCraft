import { useState, useEffect } from 'react';

export function useExchangeRates(base: string) {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.frankfurter.dev/v1/latest?base=${base}` );
        if (!response.ok) throw new Error('Falha ao buscar taxas');
        const data = await response.json();
        setRates(data.rates);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar taxas. Tente novamente mais tarde.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (base) fetchRates();
  }, [base]);

  return { rates, loading, error };
}
