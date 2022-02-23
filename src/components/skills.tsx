export const Skills = () => {
  return (
    <div className="container">
      <h2>Skills</h2>
      <div>
        <ul>
          <li>Golang</li>
          <li>Gin</li>
          <li>Gorm</li>
          <li>go-micro</li>
        </ul>

        <ul>
          <li>Java</li>
          <li>SpringBoot</li>
          <li>Microservice(SpringCloud)</li>
          <li>Redis</li>
          <li>MQ</li>
          <li>MySQL/postgres, MongoDB</li>
        </ul>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container div {
          padding-left: 2rem;

          display: flex;

          gap: 2rem;
        }

        /* Desktop */
        @media (min-width: 750px) {
          .container {
            align-items: flex-start;
          }
          .container div {
            padding-left: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}
