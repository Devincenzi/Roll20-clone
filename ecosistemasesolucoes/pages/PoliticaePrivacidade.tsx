import type { NextPage } from 'next';
import NavClient from './components/NavClient';
import { Col, Container, Nav, NavDropdown, Row } from 'react-bootstrap';
import Rodape from './components/Rodape';

const PoliticaePrivacidade : NextPage = () => {
    return (
        <>
        <NavClient needHide={false}>
            <Nav className='w-100 d-flex justify-content-end'>
            <Nav.Link href="/">Início</Nav.Link>
            <NavDropdown title='Downloads' menuVariant='dark'>
                <NavDropdown.Item href='#ebook'>E-book NFCe</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href='https://anydesk.com/pt/downloads/thank-you?dv=win_exe' target='_blank'>AnyDesk</NavDropdown.Item>
                <NavDropdown.Item href='https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe' target='_blank'>Team Viewer</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </NavClient>

        <Container fluid>
            <div className='d-flex justify-content-center align-items-center w-100 pt-4'>
                <div className='bg-dark bg-opacity-75 text-light p-4 rounded-3 m-5'>
                    <h1 className='text-center'>Política de Privacidade</h1>
                    <br/>Na Eco Sistemas e Soluções, privacidade e segurança são prioridades e nos
                    comprometemos com a transparência do tratamento de dados pessoais
                    dos nossos usuários/clientes. Por isso, está presente Política de Privacidade
                    estabelece como é feita a coleta, uso e transferência de informações de
                    clientes ou outras pessoas que acessam ou usam nosso site.
                    Ao utilizar nossos serviços, você entende que coletaremos e usaremos suas
                    informações pessoais nas formas descritas nesta Política, sob as normas de
                    Proteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições
                    consumeristas da Lei Federal 8078/1990 e as demais normas do
                    ordenamento jurídico brasileiro aplicáveis.
                    Dessa forma, a Eco Sistemas e Soluções, doravante denominada
                    simplesmente como “ Eco Sistemas e Soluções”, inscrita no CNPJ/MF sob o
                    nº nº do CNPJ 08.951.144/0001-35, no papel de Controladora de Dados,
                    obriga-se ao disposto na presente Política de Privacidade.
                    <h3>1. Quais dados coletamos sobre você e para qual finalidade?</h3>
                    Nosso site coleta e utiliza alguns dados pessoais seus, de forma a viabilizar
                    a prestação de serviços e aprimorar a experiência de uso.
                    <ul>Dados pessoais fornecidos pelo titular
                        <li>Nome:</li>
                        <li>Email:</li>
                        <li>Telefone:</li>
                        <li>Dados pessoais coletados automaticamente:</li>
                        <li>Nome</li>
                        <li>Email</li>
                        <li>Telefone</li>
                    </ul>
                    <h3>2. Como coletamos os seus dados?</h3>
                    Nesse sentido, a coleta dos seus dados pessoais ocorre da seguinte forma:
                    <ul>
                        <li>Como se coleta</li>
                        <li>Ao preencher e enviar o formulário de contato no site <a href='ecosistemasesolucoes.com.br' className='text-reset'>ecosistemasesolucoes.com.br</a></li>
                        2.1. Consentimento
                        <ul>
                            <li>É a partir do seu consentimento que tratamos os seus dados pessoais. O
                            consentimento é a manifestação livre, informada e inequívoca pela qual
                            você autoriza a Eco Sistemas e Soluções a tratar seus dados.
                            Assim, em consonância com a Lei Geral de Proteção de Dados, seus dados
                            só serão coletados, tratados e armazenados mediante prévio e expresso
                            consentimento.
                            O seu consentimento será obtido de forma específica para cada finalidade
                            acima descrita, evidenciando o compromisso de transparência e boa-fé
                            da Eco Sistemas e Soluções para com seus usuários/clientes, seguindo as
                            regulações legislativas pertinentes.
                            Ao utilizar os serviços da Eco Sistemas e Soluções e fornecer seus dados
                            pessoais, você está ciente e consentindo com as disposições desta Política
                            de Privacidade, além de conhecer seus direitos e como exercê-los.
                            A qualquer tempo e sem nenhum custo, você poderá revogar seu
                            consentimento.
                            É importante destacar que a revogação do consentimento para o
                            tratamento dos dados pode implicar a impossibilidade da performance
                            adequada de alguma funcionalidade do site que dependa da operação. Tais
                            consequências serão informadas previamente.
                        </li>
                    </ul></ul>
                    <h3>3. Quais são os seus direitos?</h3>
                    A Eco Sistemas e Soluções assegura a seus usuários/clientes seus direitos
                    de titular previstos no artigo 18 da Lei Geral de Proteção de Dados. Dessa
                    forma, você pode, de maneira gratuita e a qualquer tempo:
                    <ul>
                        <li>Confirmar a existência de tratamento de dados, de maneira simplificada ou
                            em formato claro e completo.</li>
                        <li>Acessar seus dados, podendo solicitá-los em uma cópia legível sob forma
                        impressa ou por meio eletrônico, seguro e idôneo.</li>
                        <li>Corrigir seus dados, ao solicitar a edição, correção ou atualização destes.</li>
                        <li>Limitar seus dados quando desnecessários, excessivos ou tratados em
                        desconformidade com a legislação através da anonimização, bloqueio ou
                        eliminação.</li>
                        <li>Solicitar a portabilidade de seus dados, através de um relatório de dados
                        cadastrais que a Eco Sistemas e Soluções trata a seu respeito.</li>
                        <li>Eliminar seus dados tratados a partir de seu consentimento, exceto nos
                        casos previstos em lei.</li>
                        <li>Revogar seu consentimento, desautorizando o tratamento de seus dados.</li>
                        <li>Informar-se sobre a possibilidade de não fornecer seu consentimento e
                        sobre as consequências da negativa.</li>
                    </ul>
                    <h3>4. Como você pode exercer seus direitos de titular?</h3>
                    Para exercer seus direitos de titular, você deve entrar em contato com a Eco
                    Sistemas e Soluções através dos seguintes meios disponíveis:
                    <ul>
                        <li>Telefone (51) 991672281</li>
                        <li>Whatssap (51) 991672281</li>
                        <li>Email: comercial@ecosistemasesoluções.com.br</li>
                    </ul>
                    <p>De forma a garantir a sua correta identificação como titular dos dados
                    pessoais objeto da solicitação, é possível que solicitemos documentos ou
                    demais comprovações que possam comprovar sua identidade. Nessa
                    hipótese, você será informado previamente.</p>
                    
                    <h3>5. Como e por quanto tempo seus dados serão armazenados?</h3>
                    Seus dados pessoais coletados pela Eco Sistemas e Soluções serão
                    utilizados e armazenados durante o tempo necessário para a prestação do
                    serviço ou para que as finalidades elencadas na presente Política de
                    Privacidade sejam atingidas, considerando os direitos dos titulares dos
                    dados e dos controladores.
                    De modo geral, seus dados serão mantidos enquanto a relação contratual
                    entre você e a Eco Sistemas e Soluções perdurar. Findado o período de
                    armazenamento dos dados pessoais, estes serão excluídos de nossas bases
                    de dados ou anonimizados, ressalvadas as hipóteses legalmente previstas
                    no artigo 16 lei geral de proteção de dados, a saber:
                    <ul>
                        <li>I – Cumprimento de obrigação legal ou regulatória pelo controlador;</li>
                        <li>II – Estudo por órgão de pesquisa, garantida, sempre que possível, a
                        anonimização dos dados pessoais;</li>
                        <li>III – transferência a terceiro, desde que respeitados os requisitos de
                        tratamento de dados dispostos nesta Lei; ou</li>
                        <li>IV – Uso exclusivo do controlador, vedado seu acesso por terceiro, e desde
                        que anonimizados os dados. </li>
                    </ul>
                    <p>Isto é, informações pessoais sobre você que sejam imprescindíveis para o
                    cumprimento de determinações legais, judiciais e administrativas e/ou para o exercício do direito de defesa em processos judiciais e administrativos
                    serão mantidas, a despeito da exclusão dos demais dados. O armazenamento de dados coletados pela Eco Sistemas e Soluções reflete
                    o nosso compromisso com a segurança e privacidade dos seus dados. Empregamos medidas e soluções técnicas de proteção aptas a garantir a
                    confidencialidade, integridade e inviolabilidade dos seus dados. Além disso, também contamos 
                    com medidas de segurança apropriadas aos riscos e com controle de acesso às informações armazenadas.</p>
                    
                    <h3>6. O que fazemos para manter seus dados seguros?</h3>
                    Para mantermos suas informações pessoais seguras, usamos ferramentas
                    físicas, eletrônicas e gerenciais orientadas para a proteção da sua
                    privacidade. Aplicamos essas ferramentas levando em consideração a natureza dos
                    dados pessoais coletados, o contexto e a finalidade do tratamento e os
                    riscos que eventuais violações gerariam para os direitos e liberdades do
                    titular dos dados coletados e tratados.
                    Entre as medidas que adotamos, destacamos as seguintes:
                    <ul>
                        <li>Apenas pessoas autorizadas têm acesso a seus dados pessoais</li>
                        <li>O acesso a seus dados pessoais é feito somente após o compromisso de
                        confidencialidade</li>
                        <li>Seus dados pessoais são armazenados em ambiente seguro e idôneo.
                        A Eco Sistemas e Soluções se compromete a adotar as melhores posturas
                        para evitar incidentes de segurança. Contudo, é necessário destacar que
                        nenhuma página virtual é inteiramente segura e livre de riscos. É possível
                        que, apesar de todos os nossos protocolos de segurança, problemas de
                        culpa exclusivamente de terceiros ocorram, como ataques cibernéticos
                        de hackers, ou também em decorrência da negligência ou imprudência do
                        próprio usuário/cliente.</li>
                    </ul>
                    <p>Em caso de incidentes de segurança que possa gerar risco ou dano
                    relevante para você ou qualquer um de nossos usuários/clientes,
                    comunicaremos aos afetados e a Autoridade Nacional de Proteção de
                    Dados sobre o ocorrido, em consonância com as disposições da Lei Geral
                    de Proteção de Dados.</p>
                    <h3>7. Com quem seus dados podem ser compartilhados?</h3>
                    Tendo em vista a preservação de sua privacidade, a Eco Sistemas e
                    Soluções não compartilhará seus dados pessoais com nenhum terceiro não
                    autorizado.
                    Além disso, também existem outras hipóteses em que seus dados poderão
                    ser compartilhados, que são:
                    <ul>
                        <li>I – Determinação legal, requerimento, requisição ou ordem judicial, com
                        autoridades judiciais, administrativas ou governamentais competentes.</li>
                        <li>II – Caso de movimentações societárias, como fusão, aquisição e
                        incorporação, de forma automática</li>
                        <li>III – Proteção dos direitos da (nome empresarial simplificado) em qualquer
                        tipo de conflito, inclusive os de teor judicial.</li>
                    </ul>
                    <h5>Transferência internacional de dados</h5>
                        <p>Alguns dos terceiros com quem compartilhamos seus dados podem ser
                        localizados ou ou possuir instalações localizadas em países estrangeiros.
                        Nessas condições, de toda forma, seus dados pessoais estarão sujeitos à
                        Lei Geral de Proteção de Dados e às demais legislações brasileiras de
                        proteção de dados
                        Nesse sentido, a Eco Sistemas e Soluções se compromete a sempre adotar
                        eficientes padrões de segurança cibernética e de proteção de dados, nos
                        melhores esforços de garantir e cumprir as exigências legislativas.
                        Ao concordar com essa Política de Privacidade, você concorda com esse
                        compartilhamento, que se dará conforme as finalidades descritas no
                        presente instrumento.</p>
                    <h3>8. Cookies ou dados de navegação</h3>
                    <p>A Eco Sistemas e Soluções faz uso de Cookies, que são arquivos de texto
                    enviados pela plataforma ao seu computador e que nele se armazenam,
                    que contém informações relacionadas à navegação do site. Em suma, os
                    Cookies são utilizados para aprimorar a experiência de uso.
                    <br/>Ao acessar nosso site e consentir com o uso de Cookies, você manifesta
                    conhecer e aceitar a utilização de um sistema de coleta de dados de
                    navegação com o uso de Cookies em seu dispositivo.
                    <br/>Você pode, a qualquer tempo e sem nenhum custo, alterar as permissões,
                    bloquear ou recusar os Cookies. Todavia, a revogação do consentimento de
                    determinados Cookies pode inviabilizar o funcionamento correto de alguns
                    recursos da plataforma.
                    <br/>Para gerenciar os cookies do seu navegador, basta fazê-lo diretamente nas
                    configurações do navegador, na área de gestão de Cookies. Você pode
                    acessar tutoriais sobre o tema diretamente nos links abaixo:
                    <br/>Se você usa o <span className='text-info'><b>Internet Explorer.</b></span>
                    <br/>Se você usa o <span className='text-info'><b>Firefox.</b></span>
                    <br/>Se você usa o <span className='text-info'><b>Safari.</b></span>
                    <br/>Se você usa o <span className='text-info'><b>Google Chrome.</b></span>
                    <br/>Se você usa o <span className='text-info'><b>Microsoft Edge.</b></span>
                    <br/>Se você usa o <span className='text-info'><b>Opera.</b></span>
                    <br/>Você pode ter maiores informações sobre os Cookies que utilizamos e
                    como eles funcionam na nossa Política de Cookies.
                    <ul>
                        <li>1. Cookies proprietários: são cookies definidos por nós ou por terceiros em
                        nosso nome</li>
                        <li>2. Cookies de terceiros: são cookies definidos por terceiros confiáveis em
                        nossa aplicação</li>
                    </ul>
                    Os cookies, quanto ao seu tempo de vida, podem ser:
                    <ul>
                        <li>1. Cookies de sessão ou temporários: são cookies que expiram assim que
                        você fecha o seu navegador, encerrando a sessão.</li>
                        <li>2. Cookies persistentes ou permanentes: são cookies que permanecem no
                        seu dispositivo durante um período determinado ou até que você os
                        exclua.</li>
                    </ul>
                    Os cookies, quanto a sua finalidade, podem ser:
                    <ul>
                        <li>1. Cookies necessários: são cookies essenciais que possibilitam a navegação
                        em nossas aplicações e o acesso a todos os recursos; se estes, nossos
                        serviços podem apresentar mal desempenho ou não funcionar.</li>
                        <li>2. Cookies de desempenho: são cookies que otimizam a forma que nossas
                        aplicações funcionam, coletando informações anônimas sobre as páginas
                        acessadas.</li>
                        <li>3. Cookies de funcionalidade: são cookies que memorizam suas preferências
                        e escolhas (como seu nome de usuário)</li>
                        <li>4. Cookies de publicidade: são cookies que direcionam anúncios em função
                        dos seus interesses e limitam a quantidade de vezes que o anúncio
                        aparece.</li>
                    </ul>
                    </p>
                    <h3>9. Alteração desta Política de Privacidade</h3>
                    <p>A atual versão da Política de Privacidade foi formulada e atualizada pela
                    última vez em: 22 de setembro de 2022.
                    <br/>
                    Reservamos o direito de modificar essa Política de Privacidade a qualquer
                    tempo, principalmente em função da adequação a eventuais alterações
                    feitas em nosso site ou em âmbito legislativo. Recomendamos que você a
                    revise com frequência.
                    <br/>
                    Eventuais alterações entrarão em vigor a partir de sua publicação em nosso
                    site e sempre lhe notificaremos acerca das mudanças ocorridas.
                    Ao utilizar nossos serviços e fornecer seus dados pessoais após tais
                    modificações, você as consente.
                    </p>
                    <h3>10. Responsabilidade</h3>
                    <p>A Eco Sistemas e Soluções, prevê a responsabilidade dos agentes que
                    atuam nos processos de tratamento de dados, em conformidade com os
                    artigos 42 ao 45 da Lei Geral de Proteção de Dados.
                    <br/>Nos comprometemos em manter esta Política de Privacidade atualizada,
                    observando suas disposições e zelando por seu cumprimento.
                    Além disso, também assumimos o compromisso de buscar condições
                    técnicas e organizativas seguramente aptas a proteger todo o processo de
                    tratamento de dados.
                    <br/>Caso a Autoridade Nacional de Proteção de Dados exija a adoção de
                    providências em relação ao tratamento de dados realizado pela (nome
                    empresarial simplificado), comprometemo-nos a segui-las.
                    <h5>Isenção de responsabilidade</h5>
                    Conforme mencionado no Tópico 6, embora adotemos elevados padrões
                    de segurança a fim de evitar incidentes, não há nenhuma página virtual
                    inteiramente livre de riscos. Nesse sentido, a Eco Sistemas e Soluções não
                    se responsabiliza por:
                    <ul>
                        <li>I – Quaisquer consequências decorrentes da negligência, imprudência ou
                        imperícia dos usuários em relação a seus dados individuais. Garantimos e
                        nos responsabilizamos apenas pela segurança dos processos de
                        tratamento de dados e do cumprimento das finalidades descritas no
                        presente instrumento.</li>

                        Destacamos que a responsabilidade em relação à confidencialidade dos
                        dados de acesso é do usuário.

                        <li>II – Ações maliciosas de terceiros, como ataques de hackers, exceto se
                        comprovada conduta culposa ou deliberada da Eco Sistemas e Soluções.
                        Destacamos que em caso de incidentes de segurança que possam gerar
                        risco ou dano relevante para você ou qualquer um de nossos
                        usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional de
                        Proteção de Dados sobre o ocorrido e cumpriremos as providências
                        necessárias.</li>
                        <li>III – Inveracidade das informações inseridas pelo usuário/cliente nos
                        registros necessários para a utilização dos serviços da (nome empresarial
                        simplificado); quaisquer consequências decorrentes de informações falsas
                        ou inseridas de má-fé são de inteiramente responsabilidade do
                        usuário/cliente.</li>
                    </ul>
                    </p>
                    <h3>11. Encarregado de Proteção de Dados</h3>
                    <p>A Eco Sistemas e Soluções disponibiliza os seguintes meios para que você
                    possa entrar em contato conosco para exercer seus direitos de titular:
                    <br/>Telefone (51) 991672281 – Whatssap (51) 991672281 - Email:
                    comercial@ecosistemasesoluoces.com.br.</p>
                    <p>Caso tenha dúvidas sobre esta Política de Privacidade ou sobre os dados
                    pessoais que tratamos, você pode entrar em contato com o nosso
                    Encarregado de Proteção de Dados Pessoais, através dos seguintes canais:
                    CEO Srº Daniel A. Oliveira, CPF 489.609.690-87 – Email:
                    comercial@ecosistemasesolucoes.com.br</p>
                </div>
            </div>
            <Rodape/>
        </Container>
        </> 
    )
}

export default PoliticaePrivacidade;