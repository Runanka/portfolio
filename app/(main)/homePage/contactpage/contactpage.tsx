import Image from "next/image";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { SubTitleFont } from "../../_components/fonts";
import { start } from "repl";

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    startTransition(() => {
      fetch(
        `/api/update-message-table?name=${data.name}&email=${data.email}&message=${data.message}`
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    });
  };

  return (
    <div className="w-min h-svh z-20 flex flex-col justify-center items-center">
      <SubTitleFont className=" text-[#3B2F2F] text-[clamp(1.8rem,8.2vw+0.16rem,10rem)] my-8">
        <a href="mailto:runanka@outlook.com">runanka@outlook.com</a>
      </SubTitleFont>
      <div className="w-full  flex flex-col-reverse lg:flex-row">
        <a
          href="https://buymeacoffee.com/runanka"
          target="_blank"
          rel="noreferrer noopener"
          className="w-full relative lg:w-[30%] h-full min-h-[6rem] border-4 border-dashed border-[#3B2F2F] bg-[#FFDD00] rounded-3xl"
        >
          <Image src="/bmc-button.svg" fill alt="Buy me a coffee" />
        </a>

        <div className="w-full lg:w-[70%] flex flex-col mb-8 lg:mb-0 lg:ml-8 text-lg  md:text-xl lg:text-2xl ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder=" Name"
                disabled={isPending}
                className="w-[40%] mb-4 mr-2 p-2 border-2 border-gray-300 rounded-full"
              />
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder=" Email"
                disabled={isPending}
                className="w-[60%] mb-4 ml-2 p-2 border-2 border-gray-300 rounded-full"
              />
            </div>
            <div className="w-full flex">
              <input
                {...register("message", { required: true })}
                type="text"
                name="message"
                placeholder=" Message"
                disabled={isPending}
                className="w-[80%] mt-4 mr-2 p-2 border-2 border-gray-300 rounded-full"
              />
              <button
                type="submit"
                disabled={isPending}
                className="w-[20%] mt-4 ml-2 bg-[#1E90FF] text-white rounded-full "
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
