import { FormEvent, useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { db } from "../../services/firebaseConnection";
import {
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";

export function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [github, setGithub] = useState("");

  // Para buscar/pegar dados das redes sociais cadastradas
  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");

      // Usando o getDoc não temos atualização em tempo real como o onSnapshot, o getDoc só pega uma vez do banco de Dados:
      getDoc(docRef)
      .then((snapshot) => {
        if(snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook);
          setInstagram(snapshot.data()?.instagram);
          setYoutube(snapshot.data()?.youtube);
          setGithub(snapshot.data()?.github);
        }
      })
    }

    loadLinks();
  }, [])

  // Para registrar redes sociais:
  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), { // social é o nome da collection, e link é o nome do doc
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
      github: github
    })
    .then(() => {
      console.log("CADASTRADOS COM SUCESSO!");
    })
    .catch((error) => {
      console.log("ERRO AO SALVAR" + error);
    })

    // o setDoc além de fazer um cadastro, ele faz um update no doc caso eu o chame novamente com outros dados
    // diferente do addDoc, que sempre cadastra um novo doc!

  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">Link do Facebook</label>
        <Input
          type="url"
          placeholder="Digite a url do facebook..."
          value={facebook}
          onChange={ (e) => setFacebook(e.target.value) }
        />

        <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
        <Input
          type="url"
          placeholder="Digite a url do instagram..."
          value={instagram}
          onChange={ (e) => setInstagram(e.target.value) }
        />

        <label className="text-white font-medium mt-2 mb-2">Link do Youtube</label>
        <Input
          type="url"
          placeholder="Digite a url do youtube..."
          value={youtube}
          onChange={ (e) => setYoutube(e.target.value) }
        />

        <label className="text-white font-medium mt-2 mb-2">Link do Github</label>
        <Input
          type="url"
          placeholder="Digite a url do github..."
          value={github}
          onChange={ (e) => setGithub(e.target.value) }
        />

        <button
          type="submit"
          className="flex bg-blue-600 text-white h-9 rounded-md items-center justify-center mb-7 font-medium mt-3"
        >
          Salvar links
        </button>

      </form>
    </div>
  )
}