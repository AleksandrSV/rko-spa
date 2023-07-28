//@ts-ignore чото делать с этими импортами
import Home from '/home.svg'
//@ts-ignore
import User from '/user.svg'
//@ts-ignore
import Wallet from '/wallet.svg'
//@ts-ignore
import Settings from '/settings.svg'
import type { BtnData } from 'shared/ui/ico-button'
import { router } from 'app/providers'
//сюда ещё экшн добавить и интерфейс сделать 

export const links: {[key: string]: BtnData[]} = {
    top: [
      {ico: Wallet, active: true, action: () => router.push('/')},
      {ico: Home},
      {ico: User}
    ],
    bot: [
      {ico: Settings}
    ]
  }