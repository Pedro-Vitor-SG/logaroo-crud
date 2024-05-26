
import CloseIcon from '@mui/icons-material/Close';


function AddPost({isOpen, setModalOpen}) {
    if (isOpen) {
        return (
            <aside className='bg-white fixed top-0 right-0 py-4 px-4 h-full w-[350px] border-2 border-primary-gray'>
                <div className="border-b-2 border-primary-gray pb-3">
                    <div className="px-4 flex justify-between">
                        <h1 className="primary-orange font-bold uppercase text-lg">Editar Post</h1>
                        <CloseIcon className='cursor-pointer' 
                            onClick={setModalOpen} />
                    </div>
                </div>
                <div className='border-b-2 border-primary-gray pt-2'>
                    <form>
                        <fieldset className="mb-9">
                            <label>Titulo *</label>
                            <input placeholder='Adicionar Titulo' type="text" className='border-2 bborder-primary-gray block w-full pl-3 py-2 rounded outline-0	' />
                        </fieldset>
                        <fieldset className="mb-9">
                            <label>Titulo *</label>
                            <textarea placeholder='Adicionar conteúdo do post' className='border-2 border-primary-gray block w-full pl-3 py-2 rounded outline-0 h-[250px]' />
                        </fieldset>

                        <fieldset className="mb-9">
                            <label>Status *</label>
                            <select className='block border-2 border-primary-gray w-full h-[40px] px-3 py-2' name="" id="">
                                <option value="">Ativo</option>
                                <option value="">Inativo</option>
                            </select>
                        </fieldset>
                    </form>
                </div>

                <div className='pt-3 flex gap-2 justify-end items-center'>
                    <button className='text-gray border-b-2 border-primary-gray h-[25px]'>Cancelar</button>
                    <button className='bg-primary-orange text-white px-4 py-2 rounded'>Salvar</button>
                </div>
            </aside>
        )
    }
    return ''
}

export default AddPost