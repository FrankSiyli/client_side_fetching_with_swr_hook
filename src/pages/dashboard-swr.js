import useSwr from 'swr'

/* npm install -g json-server
json-server --watch db.json (Testserver läuft default auf 3000)
json-server -p 4000 db.json */




const fetcher = async ()=> {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}

export default function DashboardSWR() {
 const { data, error } = useSwr('dashboard', fetcher)

 if (error) return "failed to load"
 if (!data) return "loading..."

 return (<div>
    <h1>Dashboard</h1>
    <h2>Posts: {data.posts}</h2>
    <h2>Likes: {data.likes}</h2>
    <h2>Followers: {data.followers}</h2>
    <h2>Following: {data.following}</h2>
    
</div>
)
}