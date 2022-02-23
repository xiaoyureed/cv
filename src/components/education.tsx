/* Import ---------------------------------------------------------------------- */ // - x70

import { Timeline } from '../components/timeline'

/* ---------------------------------------------------------------------- */

export const Education = () => {
    return (
        <div className='container'>
            <h2>Education</h2>
            <ul>
                <Timeline
                    title='湖北民族大学 | Hubei Minzu University'
                    description='University education'
                    data='2011 - 2015'
                    link='https://www.hbmzu.edu.cn/'
                    decoration={true}
                    context='education'
                />
                <Timeline
                    title='枝江一中 | Zhi Jiang First Senior High School '
                    description='High school'
                    data='2009 - 2011'
                    link='https://www.google.com/search?q=zenaide+lopes+de+oliveira+godoy'
                    decoration={true}
                    context='education'
                />
            </ul>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .container ul { width: 70%; }



                /* Desktop */
                @media (min-width: 350px) { .container ul { max-width: 60%; } }
                @media (min-width: 450px) { .container ul { max-width: 50%; } }
                @media (min-width: 550px) { .container ul { max-width: 40%; } }
                @media (min-width: 650px) { .container ul { max-width: 30%; } }
                @media (min-width: 750px) { .container { align-items: flex-start; } .container ul { max-width: 100%; } }
            `}</style>
        </div>
    )
}