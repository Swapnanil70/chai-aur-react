export const gitHubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Swapnanil70')
    const data = await res.json()
    return data
}