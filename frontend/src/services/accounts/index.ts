import { atom } from 'jotai'
import { CHAIN_ID } from '@/utils/constants'

export const accountsAtom = atom<string[]>([])
export const networkAtom = atom<string | undefined>('')

//Write-only atom;
export const asyncAccountsAtom = atom(
  null,
  async (get, set, type: 'initial' | 'connect') => {
    if (typeof window === 'undefined') return
    if (!window.ethereum) {
      throw new Error('Please install MetaMask')
    }
    if (type === 'initial') {
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      })
      set(accountsAtom, accounts)
      const network = window.ethereum.networkVersion
      set(networkAtom, network)
      return
    }
    if (type === 'connect') {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      set(accountsAtom, accounts)
      const network = window.ethereum.networkVersion
      if (network !== CHAIN_ID) {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xaa36a7' }],
        })
      }
      set(networkAtom, CHAIN_ID)
    }
  }
)
