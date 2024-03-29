import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import { Link, Head,useForm } from "@inertiajs/inertia-react";
import { useEffect } from "react";
import ValidationErrors from "@/Components/ValidationErrors";
export default function Login() {
    const {data,setData, post, processing,errors,reset}=useForm({
        email: "",
        password: ""
    })

    useEffect(()=>{
        return ()=>{
            reset('password')
        };
    }, [])

    const onHandleChange=(e)=>{
        setData(
            e.target.name,
            e.target.value
        )
    }

    const submit =(e)=>{
        e.preventDefault()
        // console.log(data)
        post(route("login"))
    }
    return (
        <>
        <Head title="Login"/>
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div className="fixed top-[-50px] hidden lg:block">
                <img
                    src="/images/signup-image.png"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                    alt=""
                />
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/moonton-white.svg" alt="" />
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Welcome Back
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br />
                            the better insight for your life
                        </p>
                        <ValidationErrors errors={errors} />
                    </div>
                    <form className="w-[370px]" onSubmit={submit}>
                        <div className="flex flex-col gap-6">
                            <div>
                                {/* <label className="text-base block mb-2">Email Address</label> */}
                                <Label forInput="email" value="Email Address" />
                                {/* <input type="email" name="email"
                            className=""
                            placeholder="Email Address" /> */}
                                <Input
                                    type="email"
                                    name="email"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Email Address"
                                    value={data.email}
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div>
                                {/* <label className="text-base block mb-2">Password</label> */}
                                <Label forInput="password" value="Password" />
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    value={data.password}
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                                {/* <input type="password" name="password"
                            className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                             /> */}
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            
                            <Button type="submit" variant="primary" processing={processing}>
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </Button>
                            
                            <Link href={route('prototype.register')}>
                                <Button type="button" variant="light-outline">
                                    <span className="text-base text-white">
                                        Create New Account
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}
