import { CartResumeBox, FormBox, MoviesCartBox, EndCart } from "./style";

import { MovieInEndCartComponent } from "../../components/MovieEndCart";
import { ModalComponent } from "../../components/Modal";

import { Input } from "../../components/Input";

import { useSelector } from "react-redux";
import { useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface UserData {
  name: string;
  email: string;
  adress: string;
  cpf: string;
  cep: string;
  cel: string;
  city: string;
  state: string;
}

interface StoreProps {
  moviescart: Cart[];
  cartsidebar: boolean;
  favsidebar: boolean;
}

interface Cart {
  movie: Movie;
  qty: number;
  price: number;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  populatiry: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const CartResume = () => {
  const cartSideBar = useSelector((store: StoreProps) => store.cartsidebar);
  const favSideBar = useSelector((store: StoreProps) => store.favsidebar);
  const moviesCart = useSelector((store: StoreProps) => store.moviescart);

  const [values, setValues] = useState({ cpf: "", cep: "", cel: "" });
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({} as UserData);

  let cartValue = 0;

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .email("Formato incorreto do email")
      .required("Email é obrigatório"),
    adress: yup.string().required("Endereço obrigatório"),
    city: yup.string().required("Cidade obrigatório"),
    state: yup.string().required("Estado obrigatório"),
    cpf: yup
      .string()
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
      .required("CPF é obrigatório")
      .min(14, "O CPF deve ter no mínimo 11 digitos")
      .max(14, "O CPF deve ter no máximo 11 digitos"),
    // .transform((value) => {

    //   return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    // }),
    cep: yup
      .string()
      .matches(/(\d{5}-\d{3})/, "CEP inválido")
      .required("CEP é obrigatório")
      .min(9, "O CEP deve ter no 8 digitos")
      .max(9, "O CPF deve ter no 8 digitos"),
    cel: yup
      .string()
      .matches(/^\(\d{2}\)\d{5}-\d{4}$/, "Celular inválido")
      .required("Número de celular obrigatório")
      .min(14, "Número do celular deve ter 9 digitos")
      .max(14, "Número do celular deve ter 9 digitos"),
  });

  // ------- CPF FORMAT ----------

  const handleChangeCpfInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Atualiza o valor do input de CPF com o valor formatado
    if (event.target.value.length < 9) {
      event.target.value = event.target.value.replace(/(\d{3})(?=\d)/g, "$1.");
    } else {
      event.target.value = event.target.value.replace(
        /(\d{3})(\d{1})(?=\d)/g,
        "$1-$2"
      );
    }

    setValues({ ...values, cpf: event.target.value });
  };

  // ------- CEP FORMAT ----------

  const handleChangeCepInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(/(\d{5})(\d{3})/, "$1-$2");

    setValues({ ...values, cep: event.target.value });
  };

  // ------- CEL FORMAT ----------

  const handleChangeCelInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 3) {
      event.target.value = event.target.value.replace(/^(\d{2})/, "($1)");
    } else {
      event.target.value = event.target.value.replace(
        /(\d{5})(\d{4})/,
        "$1-$2"
      );

      setValues({ ...values, cel: event.target.value });
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  const checkout = (data: UserData) => {
    console.log(data);
    if (cartValue > 0) {
      setModal(true);
      setUser(data);
    } else {
      alert("Carrinho está vazio!");
    }
  };

  return (
    <>
      <CartResumeBox cartPageOn={cartSideBar} favPageOn={favSideBar}>
        <FormBox>
          <form id="dataForm" onSubmit={handleSubmit(checkout)}>
            <h2>finalizar compra</h2>
            <Input
              inputWidth="93%"
              placeholder="Nome Completo"
              type="text"
              {...register("name")}
            />
            {!!errors.name ? <span>{errors.name?.message}</span> : null}
            <Input
              inputWidth="45%"
              placeholder="CPF"
              {...register("cpf")}
              onChange={handleChangeCpfInput}
              maxLength={14}
            />

            <Input
              inputWidth="45%"
              placeholder="Celular"
              {...register("cel")}
              onChange={handleChangeCelInput}
              maxLength={14}
            />
            {!!errors.cel || !!errors.cpf ? (
              <>
                <span>{errors.cpf?.message}</span>
                <span>{errors.cel?.message}</span>
              </>
            ) : null}

            <Input
              inputWidth="93%"
              placeholder="Email"
              {...register("email")}
            />
            {!!errors.email ? <span>{errors.email?.message}</span> : null}
            <Input
              inputWidth="25%"
              placeholder="CEP"
              {...register("cep")}
              maxLength={9}
              onChange={handleChangeCepInput}
            />

            <Input
              inputWidth="65%"
              placeholder="Endereço"
              {...register("adress")}
            />
            {!!errors.adress || !!errors.cep ? (
              <>
                <span>{errors.cep?.message}</span>
                <span>{errors.adress?.message}</span>
              </>
            ) : null}

            <Input
              inputWidth="45%"
              placeholder="Cidade"
              {...register("city")}
            />
            <Input
              inputWidth="45%"
              placeholder="Estado"
              {...register("state")}
            />
            {!!errors.city || !!errors.state ? (
              <>
                <span>{errors.city?.message}</span>
                <span>{errors.state?.message}</span>
              </>
            ) : null}
          </form>
          <div>
            <ul>
              <li>imagem</li>
              <li>nome</li>
              <li className="movieTitle">qtd</li>
              <li>preço</li>
            </ul>
            <MoviesCartBox>
              {moviesCart?.map((element) => {
                cartValue = cartValue + element.price;
                return (
                  <MovieInEndCartComponent
                    title={element.movie.title}
                    image={element.movie.poster_path}
                    key={element.movie.id}
                    quantity={element.qty}
                    price={element.price}
                    movieSelected={element.movie}
                  />
                );
              })}
            </MoviesCartBox>
            <EndCart>
              <p>Total: </p>
              <span>{cartValue.toFixed(2)}</span>
              <button form="dataForm" type="submit">
                fechar conta
              </button>
            </EndCart>
          </div>
        </FormBox>
        {modal ? (
          <ModalComponent setModal={setModal} name={user.name} reset={reset} />
        ) : null}
      </CartResumeBox>
    </>
  );
};
