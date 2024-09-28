import { EthrDID } from 'ethr-did';
import { toAccount } from "viem/accounts"

if (
    !process.env.PRIVATE_KEY
) {
    console.error(
        "Please set PRIVATE_KEY in .env"
    )
}

async function main(): Promise<void> {
 console.log(';> start')

const privateKey = '0x...'
const did = new EthrDID( 
)
 cossole.log(did)
 console.log(';> end')
}

main()

.catch(console.error)
//.finally(() => process.exit());
