import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>DormDev</title>
      </Head>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem"
        }}
      >
        <div className={{ width: "300px" }}>
          <p className="loading">We're recalibrating</p>
          <p>For now, check out:</p>
          <ul>
            <li>
              <a href="https://www.napkin.io">Napkin</a>: Backend in the Browser
            </li>
            <li>
              <a href="https://studentstat.us">Student Status</a>: Student
              Verification API
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
