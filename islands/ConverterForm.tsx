import supportedCurrencies from '../supported-currencies.json' assert { type: 'json' };
import { useState } from 'https://esm.sh/stable/preact@10.11.0/deno/hooks.js';
import AmountInput from '../components/AmountInput.tsx';
import CurrencySelect from '../components/CurrencySelect.tsx';

const currencyCodes = Object.entries(supportedCurrencies.fiats).map(([, currency]) => currency.currency_code);

interface ConverterFormProps {
  amount?: number,
  from?: string,
  to?: string
}

export default function ConverterForm({amount, from, to}: ConverterFormProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="" action="/convert" onSubmit={() => setSubmitted(true)}>
      <div className="flex">
        <AmountInput value={amount}></AmountInput>
        <CurrencySelect currencies={currencyCodes} defaultCurrency="USD" name="from" selectedCurrency={from} label="From"></CurrencySelect>
        <CurrencySelect currencies={currencyCodes} defaultCurrency="EUR" name="to" selectedCurrency={to} label="To"></CurrencySelect>
      </div>
      <div className="flex items-center justify-center px-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit" disabled={submitted}>
          {submitted ? 'Converting...' : 'Convert'}
        </button>
      </div>
    </form>
  )
}