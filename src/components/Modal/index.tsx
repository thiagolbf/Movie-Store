import { Container } from "./style";

import { useDispatch } from "react-redux";
import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { removeAllCartThunk } from "../../store/modules/cart/thunks";

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

interface ModalComponentProps {
  name: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  reset: UseFormReset<UserData>;
}

export const ModalComponent = ({
  setModal,
  name,
  reset,
}: ModalComponentProps) => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div>
          <h3>Obrigado {name}</h3>

          <p>Sua compra foi realizada com sucesso</p>

          <button
            onClick={() => {
              reset();
              dispatch(removeAllCartThunk());
              navigate("/");
            }}
          >
            Ir para loja
          </button>
        </div>
      </Container>
    </>
  );
};
