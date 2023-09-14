import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
           <TwitterFollowCard userName="kikobeats?ttl=1h" name="Seba" />
            <TwitterFollowCard userName="kikobeats?ttl=1h" name="Sebastian Konicoff BLA BLA BAL" /> 
        </section>
    )
}