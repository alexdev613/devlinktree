import { Link } from 'react-router-dom';
import oi from "../../assets/images/404.png";

export function ErrorPage() {
  return (
    <div className='flex w-full min-h-screen justify-center items-center flex-col text-white text-center'>
      <h1 className='font-bold sm:text-6xl text-4xl mb-2 '>404</h1>
      <h1 className='font-bold sm:text-4xl text-2xl mb-4'>Página não encontrada!</h1>
      <p className='italic mb-4'>Você caiu em uma página que não existe!</p>

      <Link to="/" className='bg-gray-50/20 py-1 px-4 rounded-md'>
        Voltar para home!
      </Link>
        <img
          className='w-9/12 max-w-xl'
          src={oi}
          alt="Imagem 404"
        />
    </div>
  )
}
