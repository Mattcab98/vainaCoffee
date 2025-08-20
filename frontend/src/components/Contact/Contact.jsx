import './contact.css';
import { ButtonAction } from '../utils/buttonAction/ButtonAction';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // acá podrías hacer un fetch o axios POST al backend
        reset(); // limpia el formulario después de enviar
    };

    return (
        <>
            <div className="container__form">
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

                    {/* Nombre */}
                    <label htmlFor="name">Nombre Completo:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Tu nombre"
                        {...register("name", { required: "Este campo es obligatorio" })}
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}

                    {/* Email */}
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="ejemplo@mail.com"
                        {...register("email", {
                            required: "El email es obligatorio",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Formato de email inválido"
                            }
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}

                    {/* Mensaje */}
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        placeholder="Escribe tu mensaje..."
                        rows="5"
                        {...register("message", { required: "Por favor escribe un mensaje" })}
                    />
                    {errors.message && <p className="error">{errors.message.message}</p>}

                    {/* Botón */}
                    <ButtonAction className='buttonContact' nameButton={'Enviar'} type='submit' />
                </form>
            </div>
        </>
    );
};

export { Contact };
