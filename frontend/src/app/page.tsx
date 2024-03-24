'use client'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { WrapperCard } from '@/components/Card'
import AuthConnect from '@/modules/AuthConnect'
import useInTransaction from '@/hooks/useIntransaction'
import { creatToken } from '@/services/NFT'
import { VERCEL_URL } from '@/utils/constants'

interface CastForm {
  castUrl: string
}
export default function Home() {
  const [tokenUrl, setTokenUrl] = useState<string>('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CastForm>()

  const onSubmit = useCallback(async (data: CastForm) => {
    try {
      const res = await creatToken(data.castUrl)
      if (!res) return
      const { newTokenId, imgUrl } = res
      //TODO:  url depends on the environment
      const url = 'https://' + VERCEL_URL + `/${newTokenId}?img=${imgUrl}`
      setTokenUrl(url.toString())
    } catch (err) {
      console.error(err)
    }
  }, [])

  const { loading, handleExecAction } = useInTransaction(onSubmit)

  return (
    <WrapperCard className="flex flex-col justify-between items-center min-w-[350px] min-h-[300px]">
      <h1 className="text-4xl font-bold">Mint the Cast</h1>
      <form
        className="flex flex-col items-center gap-y-[24px]"
        onSubmit={handleSubmit(handleExecAction)}
      >
        <Input
          error={!!errors.castUrl}
          {...register('castUrl', { required: 'This field is required' })}
          placeholder="Enter the cast url"
        />
        <AuthConnect>
          <Button disabled={loading}>
            {loading ? 'pending...' : 'Turn the Cast into NFT'}
          </Button>
        </AuthConnect>
      </form>
      {tokenUrl && (
        <div>
          cast the minting url: <p>{tokenUrl}</p>
        </div>
      )}
    </WrapperCard>
  )
}
