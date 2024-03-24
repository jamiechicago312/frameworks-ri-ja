'use client'
import { PropsWithChildren, useCallback } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import {
  asyncAccountsAtom,
  accountsAtom,
  networkAtom,
} from '@/services/accounts'
import { CHAIN_ID } from '@/utils/constants'
import Button from '@/components/Button'
import useInTransaction from '@/hooks/useIntransaction'

//Distinguish whether users have connected to the wallet and whether the network is correct
const AuthConnect: React.FC<PropsWithChildren> = ({ children, ...props }) => {
  const accounts = useAtomValue(accountsAtom)
  const network = useAtomValue(networkAtom)
  const [, asyncAccounts] = useAtom(asyncAccountsAtom)
  const networkMatch = network === CHAIN_ID
  const handleConnect = useCallback(async () => {
    await asyncAccounts('connect')
  }, [])

  const { loading, handleExecAction } = useInTransaction(handleConnect)

  if (accounts && accounts.length > 0 && networkMatch) return <>{children}</>

  return (
    <Button onClick={handleExecAction} disabled={loading} {...props}>
      {!accounts || accounts.length <= 0 ? 'Connect Wallet' : 'Switch Network'}
    </Button>
  )
}

export default AuthConnect
