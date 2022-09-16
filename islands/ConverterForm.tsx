/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

interface ConverterFormProps {
  currencies?: string[]
}

export default function ConverterForm({ currencies = [] }: ConverterFormProps) {
  return (
    <form className={tw`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`} action="/routes/convert">
      <div className={tw`flex`}>
        <div className={tw`mb-4 px-1`}>
          <label className={tw`block text-gray-700 text-sm font-bold mb-2`} htmlFor="amount">
            Amount
          </label>
          <input
            className={tw`shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="amount" name="amount" type="number" placeholder="0.0"/>
        </div>
        <div className={tw`mb-6 px-1`}>
          <label className={tw`block text-gray-700 text-sm font-bold mb-2`} htmlFor="from">
            From
          </label>
          <select
            className={tw`shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="from"
            name="from">
            {currencies.map((currency) => <option key={currency} value={currency}>{currency}</option>)}
          </select>
        </div>
        <div className={tw`mb-6 px-1`}>
          <label className={tw`block text-gray-700 text-sm font-bold mb-2`} htmlFor="to">
            To
          </label>
          <select
            className={tw`shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="to"
            name="to">
            {currencies.map((currency) => <option key={currency} value={currency}>{currency}</option>)}
          </select>
        </div>
      </div>
      <div className={tw`flex items-center justify-center px-2`}>
        <button
          className={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          type="submit">
          Convert
        </button>
      </div>
    </form>
  )
}