import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from "./ContactUs.module.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const ContactUs = () => {
  
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")

  const form = useRef();

  const notify = () => toast.success("Mensagem Enviada com sucesso");
  const notifyError = (mensagem) => toast.error(mensagem);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)
    if(nome === "" || email === "" || mensagem === ""){
      notifyError("Preencha os campos")
      return
    }

    if(nome.length < 3 || email.length < 8 || mensagem.length < 5){
      notifyError("Preencha os campos")
      return
    }

    


    
    /* sendForm 
      são 4 parametros 3 deles são obtidos através do site: 
      "gmailMessage" => primeiro 
      "template_gg2wsr8" => chave do template
      form.current 
      "MYAVpFnIvP3xcYW5d" => chave pública
    */
      // emailjs
      //   .sendForm("gmailMessage", "template_gg2wsr8", form.current, "MYAVpFnIvP3xcYW5d")
      //   .then(
      //     (response) => {
      //       console.log('SUCCESS!',response.status);
      //       notify()
      //     },
      //     (error) => {
      //       console.log('FAILED...', error);
      //       notifyError("Houve problema no envio da mensasgem")
      //     },
      //   );
  };

  return (
    <div>
    <form className={styles.formulario} ref={form} onSubmit={sendEmail}>
      <label className={styles.label_estilo} >Nome</label>
      <input 
        className={styles.input_estilo} 
        type="text" 
        placeholder="Digite seu nome" 
        name="nome" 
        onChange={() => setNome(e.target.value)}
      />
      <label className={styles.label_estilo} >Email</label>
      <input 
        className={styles.input_estilo} 
        type="email" 
        placeholder="Digite seu email" 
        name="email" 
        onChange={() => setEmail(e.target.value)}  
      />
      <label className={styles.label_estilo} >Sugestôes</label>
      <textarea 
        className={styles.input_estilo} 
        placeholder="Digite suas sugestões" 
        type="text" 
        name="mensagem" 
        onChange={() => setMensagem(e.target.value)}  
      />
      <input className={styles.btn_enviar} type="submit" value="Enviar" />
      
    </form>
        <ToastContainer position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  );
};

export default ContactUs