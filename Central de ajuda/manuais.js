// Banco de dados dos manuais - Igreja Total
const dadosManuais = [
    {
        id: "pessoas",
        titulo: "PESSOAS",
        icone: "fa-users",
        descricao: "O módulo Pessoas é uma ferramenta abrangente e essencial para a gestão eficiente dos membros e visitantes.",
        artigos: [
            {
                id: 1,
                titulo: "Como cadastrar um novo membro",
                conteudo: `
                    <p class="mb-4">Cadastrar membros no <strong>Igreja Total</strong> é simples. Siga os passos abaixo:</p>
                
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Acesse o Módulo de Pessoas</h3>
                    <p class="mb-4">No menu lateral esquerdo, clique em "Pessoas" e depois no botão azul "Novo Membro".</p>
                    
                    <div class="my-6">
                        <img src="img/modulopessoas.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Tela de cadastro">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Tela inicial do módulo de pessoas</p>
                    </div>

                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">2. Preencha os Dados</h3>
                    <p class="mb-4">Insira o nome completo, data de nascimento e telefone. O e-mail é opcional, mas recomendado para envio de comunicados.</p>
                    
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                        <p class="text-blue-800 text-sm">
                            <strong>Dica de Organização:</strong><br>
                            Durante o cadastro, já preencha a função, grupo e ministério da pessoa. Isso já organiza automaticamente os respectivos módulos.
                        </p>
                    </div>

                    <p class="mb-4">Preencha também as outras informações que não são obrigatórias, mas que ajudarão você a ter um controle melhor dos seus membros. Após isso, é só clicar em <strong>Salvar Cadastro</strong>.</p>

                    <div class="my-6">
                        <img src="img/pessoas-ministérios.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Tela de cadastro">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Preenchendo detalhes do membro</p>
                    </div>
                `
            },
            {
                id: 2,
                titulo: "Como inativar ou excluir membros",
                conteudo: `
                    <p class="mb-4">Gerenciar a saída de membros no <strong>Igreja Total</strong> é simples. Siga os passos abaixo:</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Para Excluir (Permanente)</h3>
                    <p class="mb-4">No menu lateral esquerdo, clique em "Pessoas", escolha o membro que quer excluir e clique no botão de excluir.</p>
                    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
                        <p class="text-red-800 text-sm">
                            <strong>Atenção:</strong> Dessa forma os dados do membro serão excluídos permanentemente e não poderão ser recuperados.
                        </p>
                    </div>
                    
                    <div class="my-6">
                        <img src="img/excluirmembro.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Tela de exclusão">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Ação de excluir membro</p>
                    </div>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">2. Para Inativar (Recomendado)</h3>
                    <p class="mb-4">Se preferir não apagar o histórico, você pode inativá-lo. Clique no botão de editar e, no campo <strong>Status</strong>, mude de "Ativo" para "Inativo".</p>
                    <p class="mb-4">Dessa forma, os dados do membro ficam salvos no sistema, mas ele não será contabilizado nos relatórios ativos nem poderá acessar o app.</p>
                    
                    <div class="my-6">
                        <img src="img/inativarmembro.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Tela de inativação">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Alterando status para inativo</p>
                    </div>
                `
            }
        ]
    },
    {
        id: "ministerios",
        titulo: "MINISTÉRIOS",
        icone: "fa-church",
        descricao: "Gerencie todas as equipes de voluntários e lideranças. Organize quem serve e onde.",
        artigos: [
            {
                id: 3,
                titulo: "Criar um novo ministério",
                conteudo: `
                    <p class="mb-4">Criar um novo ministério no <strong>Igreja Total</strong> é simples. Siga os passos abaixo:</p>
                
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Acesse o Módulo de Ministérios</h3>
                    <p class="mb-4">No menu lateral esquerdo, clique em "Ministérios" e depois no botão azul <strong>"Novo Ministério"</strong>.</p>
                    <p class="mb-4">É só preencher as informações (nome, líder responsável, descrição) e clicar em <strong>Salvar Ministério</strong>.</p>
                    
                    <div class="my-6">
                        <img src="img/ministerios.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Tela de novo ministério">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Tela inicial do módulo de Ministérios</p>
                    </div>
                `
            },
            {
                id: 4,
                titulo: "Adicionar voluntários",
                conteudo: `
                    <p class="mb-4">Para vincular pessoas aos ministérios, o processo é feito pelo cadastro do membro:</p>
                
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Acesse o Módulo de Pessoas</h3>
                    <p class="mb-4">No menu lateral, clique em "Pessoas", escolha quem deseja adicionar e clique em <strong>Editar</strong>.</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">2. Vínculo Ministerial</h3>
                    <p class="mb-4">No formulário de edição, procure o campo "Ministérios", selecione a equipe desejada e clique em <strong>Salvar Cadastro</strong>.</p>
                    
                    <div class="my-6">
                        <img src="img/pessoas-ministérios.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Tela de vínculo">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Vinculando membro a um ministério</p>
                    </div>
                `
            }
        ]
    },
    {
        id: "grupos",
        titulo: "GRUPOS",
        icone: "fa-user-group",
        descricao: "Acompanhe de perto a saúde dos seus pequenos grupos. Gerencie líderes e relatórios.",
        artigos: [
            {
                id: 5,
                titulo: "Criar um novo pequeno grupo",
                conteudo: `
                    <p class="mb-4">Criar um novo pequeno grupo no <strong>Igreja Total</strong> é simples:</p>
                
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Acesse o Módulo de Grupos</h3>
                    <p class="mb-4">No menu lateral esquerdo, clique em "Grupos" e depois no botão azul <strong>"Novo Grupo"</strong>.</p>
                    
                    <div class="my-6">
                        <img src="img/grupo.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Tela de novo grupo">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Tela inicial do módulo de Grupos</p>
                    </div> 

                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">2. Preencha o Formulário</h3>
                    <p class="mb-4">Insira as informações do grupo, como horário, dia da semana e o líder responsável. Finalize clicando em <strong>Salvar Grupo</strong>.</p>
                    
                    <div class="my-6">
                        <img src="img/grupoinfo.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Formulário de grupo">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Preenchendo detalhes do grupo</p>
                    </div>
                `
            },
            {
                id: 6,
                titulo: "Adicionar líderes ao grupo",
                conteudo: `
                    <p class="mb-4">Caso você não tenha adicionado um líder ao grupo no momento da criação, pode fazer isso depois:</p>
                
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Editando o Grupo</h3>
                    <p class="mb-4">No menu "Grupos", clique no botão de editar (lápis) do grupo desejado.</p>
                    <p class="mb-4">Localize o campo <strong>"Líderes"</strong>, busque a pessoa pelo nome e selecione. Depois, basta clicar em salvar.</p>
                    
                    <div class="my-6">
                        <img src="img/grupoinfo.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Editando líderes">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Tela de edição de líderes</p>
                    </div> 
                `
            }
        ]
    },
    {
        id: "agenda",
        titulo: "AGENDA",
        icone: "fa-calendar-days",
        descricao: "O calendário oficial da sua igreja. Agende cultos e eventos especiais.",
        artigos: [
            {
                id: 7,
                titulo: "Como criar um novo evento",
                conteudo: `
                    <p class="mb-4">Cadastrar um novo evento no <strong>Igreja Total</strong> é simples:</p>
                
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Acesse o Módulo de Agenda</h3>
                    <p class="mb-4">No menu lateral esquerdo, clique em "Agenda" e depois no botão azul <strong>"Novo Evento"</strong>.</p>
                    
                    <div class="my-6">
                        <img src="img/novoevento.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Botão novo evento">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Tela inicial do módulo de agenda</p>
                    </div>

                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">2. Preencha os Detalhes</h3>
                    <p class="mb-4">Insira nome, data, hora, local e descrição.</p>
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                        <p class="text-blue-800 text-sm">
                            <strong>Visibilidade:</strong><br>
                            Clique em "Mostrar evento no site público" para que ele apareça automaticamente na página da igreja.
                        </p>
                    </div>

                    <div class="my-6">
                        <img src="img/informaçõesdoevento.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Detalhes do evento">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Tela de informações do evento</p>
                    </div>
                `
            },
            {
                id: 8,
                titulo: "Solicitar inscrições no evento",
                conteudo: `
                    <p class="mb-4">Para eventos com vagas limitadas ou pagos, ative as inscrições:</p>
                
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Configuração de Vagas</h3>
                    <p class="mb-4">Durante o cadastro (ou edição) do evento, marque a opção <strong>"Evento com inscrições"</strong>.</p>
                    <p class="mb-4">Defina a quantidade de vagas disponíveis, data de início e fim das inscrições.</p>
                    <p class="mb-4">Ao clicar em salvar, o site da igreja passará a exibir um formulário de inscrição para este evento.</p>
                    
                    <div class="my-6">
                        <img src="img/inscriçõesevento.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Configurando inscrições">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Configuração de vagas e prazos</p>
                    </div>
                `
            },
            {
                id: 9,
                titulo: "Gerenciar inscrições",
                conteudo: `
                    <p class="mb-4">Acompanhe quem já garantiu vaga no seu evento:</p>
                
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Painel do Evento</h3>
                    <p class="mb-4">Na tela inicial da Agenda (abaixo do calendário), localize a lista de eventos. Clique no botão <strong>Gerenciar</strong> no evento desejado.</p>
                    
                    <div class="my-6">
                        <img src="img/eventoadmin.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Lista de eventos">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Localizando o evento na lista</p>
                    </div>

                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">2. Lista de Inscritos</h3>
                    <p class="mb-4">Ao abrir a tela, você consegue consultar a lista de nomes e a quantidade de vagas restantes.</p>

                    <div class="my-6">
                        <img src="img/gerenciarevento.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Gerenciamento de inscritos">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Painel de controle das inscrições</p>
                    </div>
                `
            }
        ]
    },
    {
        id: "financeiro",
        titulo: "FINANCEIRO",
        icone: "fa-hand-holding-dollar",
        descricao: "Controle total das entradas e saídas. Lance dízimos, ofertas e pague contas.",
        artigos: [
            {
                id: 10,
                titulo: "Lançar dízimos e ofertas",
                conteudo: `
                    <p class="mb-4">Lançar entradas no <strong>Igreja Total</strong> é simples:</p>
                
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Acesse o Módulo Financeiro</h3>
                    <p class="mb-4">No menu lateral esquerdo, clique em "Financeiro" e depois no botão azul <strong>"Novo Lançamento"</strong>.</p>
                    
                    <div class="my-6">
                        <img src="img/novatransacao.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Botão novo lançamento">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Tela inicial do módulo Financeiro</p>
                    </div> 

                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">2. Preencha os Detalhes</h3>
                    <p class="mb-4">Insira nome, data, valor e categoria (Dízimo/Oferta). Depois clique em <strong>Registrar Transação</strong>.</p>

                    <div class="my-6">
                        <img src="img/transaçãoeditar.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Detalhes da transação">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Preenchendo a entrada</p>
                    </div>
                `
            },
            {
                id: 11,
                titulo: "Lançar despesas",
                conteudo: `
                    <p class="mb-4">Para registrar pagamentos e saídas:</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Novo Lançamento</h3>
                    <p class="mb-4">No menu "Financeiro", clique no botão azul <strong>"Novo Lançamento"</strong>.</p>
                    
                    <div class="my-6">
                        <img src="img/novatransacao.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Botão novo lançamento">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Tela inicial do módulo Financeiro</p>
                    </div> 

                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">2. Configurar como Saída</h3>
                    <p class="mb-4">No formulário, mude o tipo para <strong>Saída</strong> (Despesa). Informe o nome, data e valor.</p>
                    <p class="mb-4">Se for uma conta fixa (ex: Energia), você pode definir a <strong>Recorrência</strong> para que o sistema lance automaticamente todo mês.</p>

                    <div class="my-6">
                        <img src="img/despesa.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Detalhes da despesa">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Registrando uma saída</p>
                    </div>
                `
            },
            {
                id: 12,
                titulo: "Fechar mês",
                conteudo: `
                    <p class="mb-4">Garanta a integridade dos dados financeiros fechando o caixa mensalmente.</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Botão Fechar Mês</h3>
                    <p class="mb-4">No menu "Financeiro", clique no botão <strong>"Fechar Mês"</strong>.</p>
                    
                    <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
                        <p class="text-amber-800 text-sm">
                            <strong>Importante:</strong><br>
                            Após fechar o mês, não será possível fazer alterações nos lançamentos daquele período. Somente o administrador geral poderá reabrir o mês se necessário.
                        </p>
                    </div>
                    
                    <div class="my-6">
                        <img src="img/fecharmes.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Ação de fechar mês">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Localização do botão Fechar Mês</p>
                    </div> 
                `
            },
            {
                id: 13,
                titulo: "Gerar relatório mensal",
                conteudo: `
                    <p class="mb-4">Exporte seus dados para contabilidade ou conferência:</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Exportar para Excel</h3>
                    <p class="mb-4">No menu "Financeiro", clique no botão <strong>"Exportar"</strong>.</p>
                    <p class="mb-4">O download de uma planilha Excel (.xlsx) com o relatório mensal completo iniciará automaticamente.</p>
                    
                    <div class="my-6">
                        <img src="img/novatransacao.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Botão exportar">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Botão de exportação no topo da tela</p>
                    </div> 
                `
            }
        ]
    },
    {
        id: "patrimonio",
        titulo: "PATRIMÔNIO",
        icone: "fa-boxes-stacked",
        descricao: "Inventário completo dos bens da igreja. Saiba onde está cada equipamento.",
        artigos: [
            {
                id: 14,
                titulo: "Cadastrar bens da igreja",
                conteudo: `
                    <p class="mb-4">Mantenha o inventário em dia no <strong>Igreja Total</strong>:</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Acesse o Módulo Patrimônio</h3>
                    <p class="mb-4">No menu lateral esquerdo, clique em "Patrimônio" e depois no botão <strong>"Novo Item"</strong>.</p>
                    <p class="mb-4">Preencha as informações do bem, o preço unitário e a quantidade. O sistema calculará automaticamente o valor total do seu patrimônio.</p>
                    
                    <div class="my-6">
                        <img src="img/patrimonio.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Tela de patrimônio">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Tela inicial do módulo Patrimônio</p>
                    </div> 
                `
            }
        ]
    },
    {
        id: "midia",
        titulo: "MÍDIA",
        icone: "fa-photo-film",
        descricao: "Centralize o acervo digital da igreja. Fotos e vídeos organizados.",
        artigos: [
            {
                id: 15,
                titulo: "Upload de fotos e vídeos",
                conteudo: `
                    <p class="mb-4">Armazene as memórias da sua igreja:</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Criar Álbum</h3>
                    <p class="mb-4">No menu lateral esquerdo, clique em "Mídia" e depois no botão <strong>"Criar álbum"</strong>.</p>
                    
                    <div class="my-6">
                        <img src="img/midia.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Tela de mídia">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Tela inicial do módulo de Mídia</p>
                    </div> 
                `
            },
            {
                id: 16,
                titulo: "Gerenciar galeria do site",
                conteudo: `
                    <p class="mb-4">Configure como as fotos aparecem para o público:</p>

                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Configurar Álbum</h3>
                    <p class="mb-4">Após clicar em Criar Álbum, preencha os campos (nome, data).</p>
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                        <p class="text-blue-800 text-sm">
                            <strong>Privacidade:</strong><br>
                            Defina se o álbum vai aparecer no site público. Você também pode definir uma senha para que apenas membros com o código possam ver.
                        </p>
                    </div>
                    <p class="mb-4">Selecione os arquivos do seu computador e clique em <strong>Criar Álbum</strong>.</p>
                    
                    <div class="my-6">
                        <img src="img/album.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Cadastro de álbum">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Tela de upload de fotos</p>
                    </div>
                `
            }
        ]
    },
    {
        id: "configuracoes",
        titulo: "CONFIGURAÇÕES",
        icone: "fa-gear",
        descricao: "Ajuste o sistema às necessidades da sua igreja e defina permissões.",
        artigos: [
            {
                id: 17,
                titulo: "Dados da organização",
                conteudo: `
                    <p class="mb-4">Mantenha os dados da igreja atualizados:</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Editar Informações</h3>
                    <p class="mb-4">No menu lateral esquerdo, clique em "Configurações".</p>
                    <p class="mb-4">Preencha ou atualize as informações necessárias (Endereço, CNPJ, Telefone) e salve.</p>
                    
                    <div class="my-6">
                        <img src="img/config.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Tela de configurações">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Tela geral de Configurações</p>
                    </div>
                `
            },
            {
                id: 18,
                titulo: "Gerenciar Equipe e permissões",
                conteudo: `
                    <p class="mb-4">Defina quem pode acessar o sistema e o que cada um pode ver:</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Acessar Equipe</h3>
                    <p class="mb-4">No menu "Configurações", clique na aba <strong>Gerenciar Equipe</strong>.</p>
                    
                    <div class="my-6">
                        <img src="img/gerenciar.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Aba gerenciar equipe">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Aba de gestão de usuários</p>
                    </div>

                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">2. Novo Usuário e Permissões</h3>
                    <p class="mb-4">Clique em "Novo Usuário". Defina o e-mail e senha de acesso.</p>
                    <p class="mb-4">Selecione as permissões (módulos) que este usuário poderá acessar.</p>
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                        <p class="text-blue-800 text-sm">
                            <strong>Nota:</strong> A permissão de "Administrador" concede acesso total a todos os módulos do sistema.
                        </p>
                    </div>
                    
                    <div class="my-6">
                        <img src="img/equipe.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Definindo permissões">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Cadastro de usuário e níveis de acesso</p>
                    </div>
                `
            }
        ]
    },
    {
        id: "meu_site",
        titulo: "MEU SITE",
        icone: "fa-globe",
        descricao: "Gerencie o conteúdo do seu site oficial. Altere banners, textos e horários.",
        artigos: [
            {
                id: 19,
                titulo: "Personalizar Site",
                conteudo: `
                    <p class="mb-4">Deixe o site com a cara da sua igreja:</p>
                
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Aparência Geral</h3>
                    <p class="mb-4">No menu lateral, clique em "Meu Site". Defina um tema de cores, adicione a logo da igreja e uma imagem (ou vídeo) de capa impactante.</p>
                    
                    <div class="my-6">
                        <img src="img/meusite.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Personalização do site">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Painel de personalização visual</p>
                    </div>

                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">2. Funcionalidades e Ordem</h3>
                    <p class="mb-4">Na seção de funcionalidades, você pode:</p>
                    <ul class="list-disc pl-5 space-y-2 mb-4">
                        <li>Clicar na setinha de cada tema para editar o texto.</li>
                        <li>Marcar/Desmarcar o que deseja exibir publicamente.</li>
                        <li>Arrastar os blocos para mudar a ordem em que aparecem no site.</li>
                    </ul>
                    
                    <div class="my-6">
                        <img src="img/funcionalidades.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Funcionalidades do site">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Organizando as seções do site</p>
                    </div>
                `
            },
            {
                id: 20,
                titulo: "Transmissão ao vivo",
                conteudo: `
                    <p class="mb-4">Exiba seus cultos ao vivo direto no site:</p>
                    <p class="mb-4">Na seção "Transmissão ao vivo", cole o link do seu vídeo (YouTube/Facebook). Marque a opção <strong>Ativar</strong> e salve.</p>
                    <p class="mb-4">O player de vídeo aparecerá automaticamente na página inicial da igreja.</p>

                    <div class="my-6">
                        <img src="img/transmissão.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Configurar live">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Configuração de link de transmissão</p>
                    </div>
                `
            },
            {
                id: 21,
                titulo: "Configurar agenda fixa",
                conteudo: `
                    <p class="mb-4">Informe seus horários de culto recorrentes:</p>
                    <p class="mb-4">Na seção "Horários", preencha os 3 principais eventos fixos da semana.</p>
                    <p class="mb-4">Estes horários ficarão fixos no rodapé ou destaque do site, independente da agenda de eventos esporádicos.</p>

                    <div class="my-6">
                        <img src="img/horarios.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Agenda fixa">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Configuração de horários de culto</p>
                    </div>
                `
            },
            {
                id: 22,
                titulo: "Redes Sociais",
                conteudo: `
                    <p class="mb-4">Conecte os visitantes às suas redes:</p>
                    <p class="mb-4">Na seção "Redes Sociais", cole os links das suas páginas (Instagram, Facebook, YouTube) e clique em <strong>Salvar Links</strong>.</p>
                    <p class="mb-4">Os ícones aparecerão no topo e rodapé do site.</p>

                    <div class="my-6">
                        <img src="img/redessociais.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Configurar redes sociais">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Inserção de links sociais</p>
                    </div>
                `
            },
            {
                id: 23,
                titulo: "Doações/Ofertas",
                conteudo: `
                    <p class="mb-4">Facilite a contribuição online:</p>
                    <p class="mb-4">Na seção de doações, configure:</p>
                    <ul class="list-disc pl-5 space-y-2 mb-4">
                        <li>Sua Chave PIX.</li>
                        <li>Dados bancários para transferência.</li>
                        <li>Uma foto do QR Code do PIX.</li>
                    </ul>
                    <p class="mb-4">Ao salvar, uma aba ou botão <strong>"Oferte"</strong> ficará disponível no site com essas informações.</p>

                    <div class="my-6">
                        <img src="img/ofertas.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Configurar doações">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Dados para dízimos e ofertas</p>
                    </div>
                `
            },
            {
                id: 24,
                titulo: "Visualizar Site",
                conteudo: `
                    <p class="mb-4">Confira como ficou seu trabalho:</p>
                    <p class="mb-4">Clique no botão ou link <strong>Visualizar Site</strong>. Isso abrirá a página da igreja em uma nova aba.</p>
                    <p class="mb-4">Verifique se tudo está correto, copie o link (URL) e compartilhe com seus membros!</p>

                    <div class="my-6">
                        <img src="img/site.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Visualizar site pronto">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Botão para acessar o site publicado</p>
                    </div>
                `
            }
        ]
    },
    {
        id: "assinatura",
        titulo: "ASSINATURA",
        icone: "fa-file-invoice-dollar",
        descricao: "Gerencie sua conta Igreja Total. Visualize faturas e altere planos.",
        artigos: [
            {
                id: 25,
                titulo: "Gerenciar Assinatura e Planos",
                conteudo: `
                    <p class="mb-4">No <strong>Igreja Total</strong>, você tem total liberdade para gerenciar sua assinatura.</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-8 mb-2">1. Primeira Assinatura</h3>
                    <p class="mb-4">Para ativar sua conta após o teste grátis:</p>
                    
                    <ol class="list-decimal pl-5 space-y-2 mb-6 marker:text-brand-600 marker:font-bold">
                        <li>No menu lateral, clique em <strong>Assinaturas</strong>.</li>
                        <li>Clique no botão <strong>Mudar de Plano</strong>.</li>
                        <li>Selecione o plano desejado (Básico, Avançado ou Pro).</li>
                        <li>Escolha: <strong>Cartão de Crédito</strong> (renovação automática) ou <strong>PIX</strong>.</li>
                    </ol>

                    <div class="my-6">
                        <img src="img/assinaturas.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Tela de planos">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Seleção de planos e pagamento</p>
                    </div>

                    <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">2. Upgrade (Aumentar Plano)</h3>
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                        <p class="text-blue-800 text-sm">
                            <strong>Cálculo Pro-Rata (Desconto Inteligente):</strong><br>
                            Ao mudar para um plano maior, você paga apenas a diferença pelos dias restantes do mês. O novo plano é liberado na hora.
                        </p>
                    </div>

                    <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">3. Downgrade (Reduzir Plano)</h3>
                    <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
                        <p class="text-amber-800 text-sm">
                            <strong>Mudança no Vencimento:</strong><br>
                            Ao reduzir o plano, você continua usando o plano atual até o fim do ciclo vigente. A mudança só ocorre na próxima fatura.
                        </p>
                    </div>
                `
            },
            {
                id: 26,
                titulo: "Ver Consumo e Limites do Plano",
                conteudo: `
                    <p class="mb-4">Acompanhe o uso de recursos (espaço, membros) da sua conta:</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Acessando Detalhes</h3>
                    <p class="mb-4">Na aba <strong>Assinatura</strong>, clique no botão <strong>"Ver detalhes do plano"</strong>.</p>

                    <div class="my-6">
                        <img src="img/detalhesplano.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Botão detalhes">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Botão de detalhes na aba Assinatura</p>
                    </div>

                    <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">2. O que monitorar?</h3>
                    <ul class="space-y-3 mb-6">
                        <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i> <span class="text-slate-700"><strong>Próxima Fatura:</strong> Data de vencimento.</span></li>
                        <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i> <span class="text-slate-700"><strong>Barras de Consumo:</strong> Uso de Membros, Armazenamento, Cursos e Site.</span></li>
                    </ul>

                    <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-6">
                        <p class="text-amber-800 text-sm">
                            <strong>Atingiu 100%?</strong><br>
                            Se a barra ficar vermelha, será necessário fazer um Upgrade para continuar cadastrando novos itens.
                        </p>
                    </div>
                `
            },
            {
                id: 27,
                titulo: "Histórico de Faturas e Pagamentos",
                conteudo: `
                    <p class="mb-4">Consulte pagamentos passados e notas fiscais:</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Tabela de Histórico</h3>
                    <p class="mb-4">Na tela de <strong>Assinatura</strong>, role até a seção <strong>"Histórico de Faturas"</strong>.</p>

                    <div class="my-6">
                        <img src="img/faturas.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Histórico financeiro">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Lista de faturas pagas</p>
                    </div>

                    <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">2. Informações Disponíveis</h3>
                    <ul class="space-y-2 mb-6">
                        <li class="text-slate-700"><strong>Data:</strong> Quando o pagamento compensou.</li>
                        <li class="text-slate-700"><strong>Método:</strong> Pix ou Cartão.</li>
                        <li class="text-slate-700"><strong>Vigência:</strong> Período de acesso liberado.</li>
                    </ul>
                    
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                        <p class="text-blue-800 text-sm">
                            <strong>Valores Diferentes?</strong> Valores quebrados geralmente indicam cobrança Pro-Rata de mudança de plano.
                        </p>
                    </div>
                `
            }
        ]
    },
    {
        id: "suporte",
        titulo: "SUPORTE",
        icone: "fa-headset",
        descricao: "Canais de atendimento direto para resolver suas dúvidas.",
        artigos: [
            {
                id: 28,
                titulo: "Central de Suporte e Tickets",
                conteudo: `
                    <p class="mb-4">Precisa de ajuda? Siga o fluxo abaixo:</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Autoatendimento</h3>
                    <p class="mb-4">Ao acessar o módulo Suporte, verifique primeiro as <strong>Perguntas Frequentes (FAQ)</strong>. A maioria das dúvidas é resolvida ali.</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">2. Abrir Ticket</h3>
                    <p class="mb-4">Se precisar falar com a equipe, clique no botão azul <strong>"Novo Ticket"</strong>.</p>

                    <div class="my-6">
                        <img src="img/suporte.png" class="rounded-lg border border-slate-200 shadow-sm w-full" alt="Tela de ticket">
                        <p class="text-sm text-slate-400 mt-2 text-center italic">Formulário de abertura de chamado</p>
                    </div>

                    <p class="mb-4">Preencha Assunto, Descrição e anexe um <strong>Print da tela</strong> com o erro para agilizar o atendimento.</p>

                    <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">3. Suporte VIP (Plano PRO)</h3>
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6 flex items-start gap-3">
                        <i class="fab fa-whatsapp text-green-600 text-3xl mt-1"></i>
                        <div>
                            <p class="text-green-700 text-sm">
                                Clientes PRO têm um botão exclusivo <strong>"Falar no WhatsApp"</strong> para atendimento prioritário em tempo real.
                            </p>
                        </div>
                    </div>
                `
            },
            {
                id: 29,
                titulo: "Horários de Atendimento",
                conteudo: `
                    <p class="mb-4">O sistema funciona 24h, mas nosso time de suporte atende nos seguintes horários:</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm text-center">
                            <h4 class="font-bold text-slate-700 uppercase text-sm mb-1">Segunda a Sexta</h4>
                            <p class="text-brand-600 font-bold text-lg">08h às 20h</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm text-center">
                            <h4 class="font-bold text-slate-700 uppercase text-sm mb-1">Sábado</h4>
                            <p class="text-brand-600 font-bold text-lg">09h às 16h</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm text-center">
                            <h4 class="font-bold text-slate-700 uppercase text-sm mb-1">Domingo</h4>
                            <p class="text-brand-600 font-bold text-lg">09h às 13h</p>
                        </div>
                    </div>

                    <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">Prazos</h3>
                    <ul class="space-y-3 mb-6 bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <li class="flex items-start text-slate-700">
                            <i class="fas fa-clock text-slate-400 mt-1 mr-3"></i>
                            <span><strong>Tickets:</strong> Resposta em até 24h úteis.</span>
                        </li>
                        <li class="flex items-start text-slate-700">
                            <i class="fas fa-moon text-slate-400 mt-1 mr-3"></i>
                            <span><strong>Fora do Expediente:</strong> Chamados entram na fila de prioridade para o dia seguinte.</span>
                        </li>
                    </ul>
                `
            }
        ]
    }
];

// Função que desenha os cards na tela ajuda.html
function renderizarCategorias() {
    const grid = document.getElementById('grid-categorias');
    if (!grid) return; // Se não estiver na página inicial, para aqui.

    grid.innerHTML = dadosManuais.map(categoria => `
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div class="flex items-center gap-3 mb-4">
                <i class="fas ${categoria.icone} text-brand-600 text-xl"></i>
                <h2 class="text-slate-800 font-bold uppercase tracking-wide cursor-pointer hover:text-brand-600" onclick="window.location.href='artigo.html?categoria=${categoria.id}'">
                    ${categoria.titulo} 
                    <span class="text-slate-400 text-sm font-normal normal-case">(${categoria.artigos.length})</span>
                </h2>
            </div>
            
            <ul class="space-y-3 mb-6">
                ${categoria.artigos.slice(0, 3).map(artigo => `
                    <li>
                        <a href="artigo.html?id=${artigo.id}" class="flex items-start gap-2 text-slate-600 hover:text-brand-600 transition-colors group">
                            <i class="fas fa-file-lines mt-1 text-slate-300 group-hover:text-brand-400 text-xs"></i>
                            <span class="text-sm">${artigo.titulo}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>

            <a href="artigo.html?categoria=${categoria.id}" class="text-brand-600 text-sm font-semibold hover:underline">Ver todos os artigos &rarr;</a>
        </div>
    `).join('');
}