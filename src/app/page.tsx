'use client';

import { useState, useEffect } from 'react';
import { useExchangeRates } from '@/hooks/useExchangeRates';

const CURRENCIES = [
  { code: 'USD', name: 'Dólar Americano' },
  { code: 'EUR', name: 'Euro' },
  { code: 'BRL', name: 'Real Brasileiro' },
  { code: 'GBP', name: 'Libra Esterlina' },
  { code: 'JPY', name: 'Iene Japonês' },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [result, setResult] = useState<string | null>(null);

  const { rates, loading, error } = useExchangeRates(fromCurrency);

  useEffect(() => {
    if (rates && rates[toCurrency]) {
      const converted = (amount * rates[toCurrency]).toFixed(2);
      setResult(converted);
    } else if (fromCurrency === toCurrency) {
      setResult(amount.toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency, rates]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">CurrencyCraft</h1>
          <p className="text-slate-500">Conversão de moedas simples e rápida</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Valor</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-end">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">De</label>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-lg bg-white"
                >
                  {CURRENCIES.map((c) => <option key={c.code} value={c.code}>{c.code}</option>)}
                </select>
              </div>

              <button onClick={handleSwap} className="p-3 mb-0.5 rounded-full hover:bg-slate-100 text-slate-400">
                ⇄
              </button>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Para</label>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-lg bg-white"
                >
                  {CURRENCIES.map((c) => <option key={c.code} value={c.code}>{c.code}</option>)}
                </select>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 text-center">
              {loading ? (
                <div className="animate-pulse text-slate-400">Atualizando taxas...</div>
              ) : error ? (
                <div className="text-red-500 text-sm">{error}</div>
              ) : (
                <div>
                  <span className="text-slate-500 text-sm block mb-1">{amount} {fromCurrency} =</span>
                  <span className="text-4xl font-bold text-blue-600">{result} {toCurrency}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
