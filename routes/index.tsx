/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import CurrencyConverterForm from '../islands/ConverterForm.tsx';

export default function Home() {
  return (
    <main class={tw`flex justify-center items-center h-screen`}>
      <div class={tw`p-4 max-w-screen-md bg-white shadow-md rounded px-8 pt-6 pb-6`}>
        <CurrencyConverterForm></CurrencyConverterForm>
      </div>
    </main>
  );
}
