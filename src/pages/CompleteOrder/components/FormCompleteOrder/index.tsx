import { MapPinLine } from "phosphor-react";
import { CartItem } from "../CartItems";
import { PaymentMethod } from "../PaymentMethod";
import * as z from "zod";
import { formCompleteOrderValidtionSchema } from "./validation/validation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CartContext } from "../../../../context/CartContext";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

export type FormCompleteValidationData = z.infer<
  typeof formCompleteOrderValidtionSchema
>;

export function FormCompleteOrder() {
  const addressFormData = useForm<FormCompleteValidationData>({
    resolver: zodResolver(formCompleteOrderValidtionSchema),
    defaultValues: {
      cep: "",
      neighborhood: "",
      city: "",
      state: "",
      number: "",
      street: "",
    },
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = addressFormData;

  const { cartItems } = useContext(CartContext);

  function onSubmit(data: FormCompleteValidationData) {
    navigate("/orderConfirmed", {
      state: data,
    });
  }

  return (
    <section className="w-full">
      <h1 className="font-Baloo text-lg font-extrabold mb-4">
        Complete seu pedido
      </h1>
      <div className="flex gap-8">
        <div className="flex flex-col flex-1">
          <div className="bg-base-card rounded-md flex flex-col p-10">
            <div className="flex items-start gap-2 mb-6">
              <MapPinLine size={22} className="text-yellow-dark" />
              <div>
                <h1 className="text-base font-Roboto">Endereço de Entrega</h1>
                <p className="text-sm text-gray-600">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 flex flex-col">
                  <input
                    className="p-2 border rounded-md bg-base-input outline-brand-yellow"
                    {...register("cep", { required: true })}
                    placeholder="CEP"
                  />
                  {errors.street?.message && (
                    <span className="text-red-500">
                      Este campo é obrigatório
                    </span>
                  )}
                </div>

                <div className="col-span-3 flex flex-col">
                  <input
                    className="p-2 border rounded-md bg-base-input outline-brand-yellow"
                    placeholder="Rua"
                    {...register("street", { required: true })}
                  />
                  {errors.street?.message && (
                    <span className="text-red-500">
                      Este campo é obrigatório
                    </span>
                  )}
                </div>
                <div className="col-span-1 flex flex-col">
                  <input
                    className="p-2 border rounded-md bg-base-input outline-brand-yellow"
                    placeholder="Número"
                    {...(register("number"), { required: true })}
                  />
                  {errors.street?.message && (
                    <span className="text-red-500">
                      Este campo é obrigatório
                    </span>
                  )}
                </div>
                <div className="col-span-2 flex flex-col">
                  <input
                    className="p-2 border rounded-md bg-base-input outline-brand-yellow"
                    placeholder="Complemento"
                  />
                </div>
                <div className="col-span-1 flex flex-col">
                  <input
                    className="p-2 border rounded-md bg-base-input outline-brand-yellow"
                    placeholder="Bairro"
                    {...register("neighborhood", { required: true })}
                  />
                  {errors.neighborhood?.message && (
                    <span className="text-red-500">
                      Este campo é obrigatório
                    </span>
                  )}
                </div>
                <div className="col-span-1 flex flex-col">
                  <input
                    className="p-2 border rounded-md bg-base-input outline-brand-yellow"
                    placeholder="Cidade"
                    {...register("city", { required: true })}
                  />
                  {errors.city?.message && (
                    <span className="text-red-500">
                      Este campo é obrigatório
                    </span>
                  )}
                </div>
                <div className="col-span-1 flex flex-col">
                  <input
                    className="p-2 border rounded-md bg-base-input outline-brand-yellow"
                    placeholder="UF"
                    {...register("state", { required: true })}
                  />
                  {errors.state?.message && (
                    <span className="text-red-500">
                      Este campo é obrigatório
                    </span>
                  )}
                </div>
              </div>
            </form>
          </div>
          <PaymentMethod />
        </div>
        <FormProvider {...addressFormData}>
          <CartItem
            message={
              cartItems.length === 0
                ? "voce ainda nao possui itens no carrinho, volte para a secao de cafes clicando no botao abaixo:"
                : null
            }
            cartItems={cartItems}
          />
        </FormProvider>
      </div>
    </section>
  );
}
