
import CloseIcon from '@mui/icons-material/Close';
import Fieldset from './fieldset';
import { useState } from 'react';


function AddPost({ isOpen, setModalOpen }) {

    const [inputValues, setInputValues] = useState({
        title: '',
        content: '',
        status: true,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleClick = () => {
        console.log(inputValues);
        // Aqui você pode fazer o que quiser com o valor do input

        console.log('Chama o componente com os cadastros')
    };


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
                        <Fieldset fieldName="Titulo *">
                            <input 
                                placeholder="Adicionar Children"
                                type="text"
                                name='title'
                                value={inputValues.title}
                                onChange={handleChange}
                                className='border-2 bborder-primary-gray block w-full pl-3 py-2 rounded outline-0' />
                        </Fieldset>

                        <Fieldset fieldName="Conteúdo *">
                            <textarea 
                                placeholder='Adicionar conteúdo do post' 
                                type="text"
                                name='content'
                                value={inputValues.content}
                                onChange={handleChange}  
                                className='border-2 border-primary-gray block w-full pl-3 py-2 rounded outline-0 h-[250px]' />
                        </Fieldset>
                        
                        <Fieldset fieldName="Status *">
                            <select 
                                value={inputValues.status}
                                name='status'
                                onChange={handleChange} 
                                className='block border-2 border-primary-gray w-full h-[40px] px-3 py-2'>

                                <option value="Ativo">Ativo</option>
                                <option value="Inativo">Inativo</option>
                            </select>
                        </Fieldset>
                    </form>
                </div>

                <div className='pt-3 flex gap-2 justify-end items-center'>
                    <button className='text-gray border-b-2 border-primary-gray h-[25px]' onClick={setModalOpen}>Cancelar</button>
                    <button className='bg-primary-orange text-white px-4 py-2 rounded' onClick={handleClick}>Salvar</button>
                </div>
            </aside>
        )
    }
    return ''
}

export default AddPost