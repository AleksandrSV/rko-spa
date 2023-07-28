import {Home, Settings, Wallet, User} from 'app/providers/icons'
import type { BtnData } from 'shared/ui/ico-button'
import { router } from 'app/providers'

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