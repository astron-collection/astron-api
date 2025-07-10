export default function Login() {
  const handleLogin = async () => {
    try {
      const res = await fetch('/v1/login', {
        method: 'GET',
        redirect: 'follow',
      })

      if (res.redirected) {
        window.location.href = res.url // Redirige vers Discord OAuth automatiquement
      } else {
        console.error('No redirection received from backend.')
      }
    } catch (error) {
      console.error('Login request failed:', error)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Login with Discord</h1>
        <button
          onClick={handleLogin}
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700"
        >
          Connect with Discord
        </button>
      </div>
    </div>
  )
}