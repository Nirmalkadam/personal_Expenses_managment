import React from 'react'
export default function App() {
  React.useEffect(() => { window.location.replace('/ledgerly.html') }, [])
  return <main style={{minHeight:'100dvh',display:'grid',placeItems:'center',background:'#0a1118',color:'#eaf1f4',fontFamily:'system-ui'}}>Opening Nirvani…</main>
}
