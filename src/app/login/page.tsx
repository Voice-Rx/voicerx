import { NextPage } from "next";
import type { Metadata } from 'next'
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: 'VoiceRx Login',
  description: 'Login into your VoiceRx account',
}

const Login: NextPage = () => {
    return(
        <div className="w-100 flex">
          <div className="w-1/3 bg-white h-screen">
            <LoginForm />
          </div>
          <div className="w-2/3 loginBg h-screen"></div>
        </div>
    )
}

export default Login;