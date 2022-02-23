/* Import ---------------------------------------------------------------------- */ // - x70

import Document, { Html, Head, Main, NextScript } from 'next/document'

/* ---------------------------------------------------------------------- */

export default class MyDocument extends Document {
    render() {
        const
            en    = 'en',
            title = 'CV - Matheus Vidigal',
            site  = 'CV - Matheus Vidigal',
            link  = 'https://cv-nyctibiusvii.vercel.app',
            favicon      = `${link}/favicon.png`,
            homeImg      = `${link}/HomePage-1366x768.png`,
            NyctibiusVII = 'Matheus Vidigal - (NyctibiusVII)',
            NyctibiusVII_twitter = '@NyctibiusVII',
            description = 'My CV Online - Matheus Vidigal',
            keywords    = 'cv, curriculum, vitae, curriculum_vitae, online, ingles, português, currículo, html, sass, typescript, reactjs, nextjs, projeto, vercel, Matheus, Matheus Vidigal, pdf'

        return (
            <Html lang='en'>
                <Head>
                    <meta charSet='utf-8'              />
                    <meta name='language' content='en' />

                    <meta name='robots'       content='all'                     />
                    <meta name='rating'       content='general'                 />
                    <meta name='distribution' content='global'                  />
                    <meta name='description'  content='Curriculum Vitae Online' />

                    <meta name='MobileOptimized'         content='320'                        />
                    <meta name='HandheldFriendly'        content='True'                       />
                    <meta name='google'                  content='translate'                  />
                    <meta name='referrer'                content='no-referrer-when-downgrade' />
                    <meta name='theme-color'             content='#22232d'                    />
                    <meta name='msapplication-TileColor' content='#22232d'                    />
                    <meta name='msapplication-TileImage' content={ favicon }                  />

                    <meta name='author'   content={ NyctibiusVII } />
                    <meta name='creator'  content={ NyctibiusVII } />
                    <meta name='keywords' content={ keywords }     />

                    <meta httpEquiv='content-type'     content='text/html; charset=UTF-8' />
                    <meta httpEquiv='content-language' content={ en }                     />
                    <meta httpEquiv='X-UA-Compatible'  content='ie=edge'                  />

                    <meta property='article:author' content={ NyctibiusVII } />

                    <meta property='og:title'            content={ title }       />
                    <meta property='og:description'      content={ description } />
                    <meta property='og:locale'           content={ en }          />
                    <meta property='og:type'             content='website'       />
                    <meta property='og:site_name'        content={ site }        />
                    <meta property='og:url'              content={ link }        />
                    <meta property='og:image'            content={ homeImg }     />
                    <meta property='og:image:secure_url' content={ homeImg }     />
                    <meta property='og:image:alt'        content='Thumbnail'     />
                    <meta property='og:image:type'       content='image/png'     />
                    <meta property='og:image:width'      content='1366'          />
                    <meta property='og:image:height'     content='768'           />

                    <meta name='twitter:title'        content={ title }                />
                    <meta name='twitter:description'  content={ description }          />
                    <meta name='twitter:card'         content='summary_large_image'    />
                    <meta name='twitter:site'         content={ site }                 />
                    <meta name='twitter:creator'      content={ NyctibiusVII_twitter } />
                    <meta name='twitter:image'        content={ homeImg }              />
                    <meta name='twitter:image:src'    content={ homeImg }              />
                    <meta name='twitter:image:alt'    content='Thumbnail'              />
                    <meta name='twitter:image:width'  content='1366'                   />
                    <meta name='twitter:image:height' content='768'                    />

                    <link rel='shortcut icon' href='/icons/logo.png' type='image/png' />

                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
                    <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600&amp;display=swap' rel='stylesheet' />

                    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='preload stylesheet' as='font' />
                </Head>
                <body>
                    <Main />
                    <noscript data-n-css=''>
                        <br/><br/>
                        Caro leitor!<br/><br/>
                        Se você estiver lendo esta mensagem é porque o seu navegador não suporta<br/>
                        &quot;Javascript&quot; ou porque a permissão de executar &quot;Javascript&quot; está<br/>
                        desabilitada, se for o caso, por favor habilite.
                    </noscript>
                    <NextScript />
                </body>
            </Html>
        )
    }
}