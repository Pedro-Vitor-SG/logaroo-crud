import HideSourceRoundedIcon from '@mui/icons-material/HideSourceRounded';
import AddPost from './addPost';
import { useState } from 'react';

function Main() {
    
    const [openModal, setOpenModal] = useState(false);

    return (
        <main className="arial bg-primary-gray pt-3 h-screen">
            <div className="container mx-auto px-4 pb-2">
                <div className="flex justify-between items-center">
                    <h1 className="primary-orange font-bold uppercase text-lg">Blog Post</h1>
                    <button className="bg-primary-orange text-white uppercase font-bold py-1.5 px-2.5 rounded" onClick={() => setOpenModal(true)}>
                        Adicionar
                    </button>
                </div>
            </div>
            <div className="border-t-4 border-[#e8edf1] pt-[150px]">
                <div className="w-[500px] mx-auto bg-secondary-orange arial p-8 text-center">
                    <figure className='w-[150px] h-[150px] m-auto rotate-90'>
                        <HideSourceRoundedIcon className='w-full h-full' />
                    </figure>
                    <p className='uppercase font-bold h-[20px]'>Nenhum Post Cadastro</p>
                    <button className='h-[22px] primary-orange border-b-2  border-primary-orange'>Clique aqui para cadastrar</button>
                </div>
            </div> 
            <AddPost isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}/>
        </main>
    )
}

export default Main;