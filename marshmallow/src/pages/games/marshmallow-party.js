import react, {useEffect} from 'react'
import { useRouter } from 'next/router'

const Marshmallow_Party = () => {
    const router = useRouter()
    useEffect(() => {
        router.push("/")
    }, [])

    return (
        <div>Welcome to MarshMallow Game</div>
    )
}

export default Marshmallow_Party