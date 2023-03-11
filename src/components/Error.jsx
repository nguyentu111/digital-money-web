export default function ErrorUi({ error }) {
  return <div className='p-4 rounded-md text-white bg-red-500 font-bold'>{error.message}</div>
}
