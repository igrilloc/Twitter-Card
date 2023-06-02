import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const users = [
    {
        userName: 'igrilloc',
        name: 'Ignacio Grillo caimary',
        isFollowing: true
    },
    {
        userName: 'MatiArlas',
        name: 'Matías ⭐⭐⭐',
        isFollowing: false
    },
    {
        userName: 'Lucassgenaro',
        name: 'Lucas',
        isFollowing: true
    },
    {
        userName: 'RensoOlariaga',
        name: 'Renso ⭐⭐⭐',
        isFollowing: false
    },
    {
        userName: 'daidefino',
        name: 'Daiana Defino 🐾',
        isFollowing: false
    },
    {
        userName: 'octaquiles_',
        name: 'octa',
        isFollowing: false
    },
    {
        userName: 'santiolaeta',
        name: 'Raska',
        isFollowing: false
    }
];


export function App () {

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    );

}