// estilizacao do componente
import './Card.css';

// importacao do componente
import Imagem from './Imagem';

// importacao das imagens
import livro_ogene_egoista from '../img/ogene-egoista.jpg';
import livro_como_faz_amigos from '../img/como_fazer_amigos_e_influenciar_pessoas.jpg';
import livro_pai_rico_pai_pobre from '../img/pai_rico_pai_pobre.jpg';
import livro_a_regra_e_nao_ter_regra from '../img/a_regra_e_nao_ter_regra.jpg';
import livro_rapido_e_devagar from '../img/rapido_e_devagar.jpg';
import livro_o_ego_e_seu_inimigo from '../img/o_ego_e_seu_inimigo.jpg';
import livro_o_milagre_da_manha from '../img/o_milagre_da_manha.jpg';
import livro_a_coragem_de_ser_imperfeito from '../img/a_coragem_de_ser_imperfeito.jpg';
import livro_os_segredos_da_mente_milionaria from '../img/os_segredos_da_mente_milionaria.jpg';
import livro_o_homem_mais_rico_da_babilonia from '../img/o_homem_mais_rico_da_babilonia.jpg';
import livro_arrume_sua_cama from '../img/arrume_sua_cama.jpg';
import livro_foco from '../img/foco.jpg';
import livro_voce_pode_curar_sua_vida from '../img/voce_pode_curar_sua_vida.jpg';
import livro_quem_pensa_enriquece from '../img/quem_pensa_enriquece.jpg';
import livro_mais_esperto_que_o_diabo from '../img/mais_esperto_que_o_diabo.jpg';
import livro_o_poder_do_subconsciente from '../img/o_poder_do_subconsciente.jpg';
import livro_especialista_em_pessoas from '../img/especialista_em_pessoas.jpg';
import livro_o_poder_da_autorresponsabilidade from '../img/o_poder_da_autorresponsabilidade.jpg';
import livro_essencialismo from '../img/essencialismo.jpg';
import livro_habitos_atomicos from '../img/habitos_atomicos.jpg';
import livro_o_jeito_disney_de_encantar_clientes from '../img/o_jeito_disney_de_encantar_clientes.jpg';
import livro_mude_seus_horarios_mude_sua_vida from '../img/mude_seus_horarios_mude_sua_vida.jpg';
import livro_a_psicologia_financeira from '../img/a_psicologia_financeira.jpg';
import livro_manual_de_persuasao_do_fbi from '../img/manual_de_persuasao_do_fbi.jpg';
import livro_os_7_habitos_das_pessoas_altamente_eficazes from '../img/os_7_habitos_das_pessoas_altamente_eficazes.jpg';
import livro_o_poder_do_habito from '../img/o_poder_do_habito.jpg';
import livro_ted_talks from '../img/ted_talks.jpg';
import livro_neuromarketing from '../img/neuromarketing.jpg';
import livro_roube_como_um_artista from '../img/roube_como_um_artista.jpg';
import livro_mostre_seu_trabalho from '../img/mostre_seu_trabalho.jpg';
import livro_comece_pelo_porque from '../img/comece_pelo_porque.jpg';
import livro_como_convencer_alguem_em_90_segundos from '../img/como_convencer_alguem_em_90_segundos.jpg';
import livro_faca_fortuna_com_acoes from '../img/faca_fortuna_com_acoes.jpg';
import livro_48_leis_do_poder from '../img/48_leis_do_poder.jpg';
import livro_as_armas_da_persuasao from '../img/as_armas_da_persuasao.jpg';
import livro_atencao_plena from '../img/atencao_plena.jpg';
import livro_12_regras_para_a_vida from '../img/12_regras_para_a_vida.jpg';

const Card = () => {
    let nome_autor = ["Richard Dawkins", "Dale Carnegie", "Robert T. Kiyosaki", "Hastings e Meyer", "Daniel Kahneman", "Ryan Holiday",
    "Hal Elrod", "Brené Brown","T. Harv", "George S.", "William H.", "Daniel Goleman", "Louise L.", "Napoleon Hill", "Napoleon Hill", 
    "Joseph Murphy", "Tiago Brunet", "Paulo Vieira", "Greg Mckeown", "James Clear", "Richard Branson", "Dr. Suhas", "Morgan Housel",
    "Shafer e Karlins", "Stephen R.", "Charles Duhigg", "Chris Anderson", "Darren Bridger", "Kleon e Villa", "Kleon e Isabel",
    "Sinek e Geiger", "Nicholas Boothman", "Decío Bazin", "Robert Greene", "Robert B.", "Williams e Penman", "Jordan B."];
    
    let alt_imagem = ["O Gene Egoísta, Richard Dawkins", "Como fazer amigos e influenciar pessoas, Dale Carnegie", "Pai Rico, Pai Pobre", "A Regra é Não Ter Regras", 
    "Rápido e Devagar", "O Ego é Seu Inimigo", "O Milagre da Manhã", "A Coragem de Ser Imperfeito", "Os Segredos da Mente Milionária",
    "O Homem Mais Rico da Babilônia", "Arrume Sua Cama", "Foco", "Você Pode Curar Sua Vida", "Quem Pensa Henriquece", "Mais Esperto que o Diabo",
    "O Poder do Subconsciente", "Especialista em Pessoas", "O Poder da Autorresponsabilidade", "Essencialismo", "Hábitos Atômicos", 
    "O Jeito Disney de Encantar Clientes", "Mude Seus Horários, Mude Sua Vida", "A Psicologia Financeira", "Manual de Persuasão do FBI",
    "Os 7 Habitos das Pessoas Altamente Eficazes", "O Poder do Hábito", "Ted Talks", "Neuromarketing", "Roube como um Artista",
    "Mostre seu Trabalho", "Comece pelo Porque", "Como Convencer Alguém em 90 Segundos", "Faça Fortuna com Ações", "48 Leis do Poder",
    "As Armas da Persuasão", "Atenção Plena", "12 Regras para a Vida"]
    
    let url = ["https://amzn.to/3nn7mSI", "https://amzn.to/40foeJB", "https://amzn.to/3JJj8Oz", "https://amzn.to/3nkh2gC", "https://amzn.to/3LRp0YJ",
    "https://amzn.to/3lAGGNT", "https://amzn.to/3JNmKzh", "https://amzn.to/3K98ySu", "https://amzn.to/40m570r", "https://amzn.to/3z7r07N",
    "https://amzn.to/3FS7dNh", "https://amzn.to/3LQDWGw", "https://amzn.to/40k0q7m", "https://amzn.to/3ZiNMV1", "https://amzn.to/40CTHFe",
    "https://amzn.to/3ZfEwAP", "https://amzn.to/3z7UVfX", "https://amzn.to/40wNnjf", "https://amzn.to/3LNVDGZ", "https://amzn.to/3ZhHSDv",
    "https://amzn.to/3ZhIdpL", "https://amzn.to/3nl0WU6", "https://amzn.to/3lDuXy2", "https://amzn.to/3lFZA5M", "https://amzn.to/42FaPfk",
    "https://amzn.to/3LTY2Qw", "https://amzn.to/3Zb0LYE", "https://amzn.to/42DHm5E", "https://amzn.to/3TJfl8A", "https://amzn.to/3z8mYMw",
    "https://amzn.to/3KaeY3C", "https://amzn.to/3FSO6Tz", "https://amzn.to/3nkJAXk", "https://amzn.to/3lFgJMU", "https://amzn.to/3JSvhB8",
    "https://amzn.to/3FSbkc6", "https://amzn.to/3JM8czP"];
    
    let url_imagem = [livro_ogene_egoista, livro_como_faz_amigos, livro_pai_rico_pai_pobre, livro_a_regra_e_nao_ter_regra, livro_rapido_e_devagar,
        livro_o_ego_e_seu_inimigo, livro_o_milagre_da_manha, livro_a_coragem_de_ser_imperfeito, livro_os_segredos_da_mente_milionaria,
        livro_o_homem_mais_rico_da_babilonia, livro_arrume_sua_cama, livro_foco, livro_voce_pode_curar_sua_vida, livro_quem_pensa_enriquece, 
        livro_mais_esperto_que_o_diabo, livro_o_poder_do_subconsciente, livro_especialista_em_pessoas, livro_o_poder_da_autorresponsabilidade,
        livro_essencialismo, livro_habitos_atomicos, livro_o_jeito_disney_de_encantar_clientes, livro_mude_seus_horarios_mude_sua_vida,
        livro_a_psicologia_financeira, livro_manual_de_persuasao_do_fbi, livro_os_7_habitos_das_pessoas_altamente_eficazes,
        livro_o_poder_do_habito, livro_ted_talks, livro_neuromarketing, livro_roube_como_um_artista, livro_mostre_seu_trabalho,
        livro_comece_pelo_porque, livro_como_convencer_alguem_em_90_segundos, livro_faca_fortuna_com_acoes, livro_48_leis_do_poder,
        livro_as_armas_da_persuasao, livro_atencao_plena, livro_12_regras_para_a_vida];

  return (
    <div class="cards">
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[1]} url_imagem={url_imagem[1]} alt_imagem={alt_imagem[1]} nome_autor={nome_autor[1]} />
        <Imagem url={url[2]} url_imagem={url_imagem[2]} alt_imagem={alt_imagem[2]} nome_autor={nome_autor[2]} />
        <Imagem url={url[3]} url_imagem={url_imagem[3]} alt_imagem={alt_imagem[3]} nome_autor={nome_autor[3]} />
        <Imagem url={url[4]} url_imagem={url_imagem[4]} alt_imagem={alt_imagem[4]} nome_autor={nome_autor[4]} />
        <Imagem url={url[5]} url_imagem={url_imagem[5]} alt_imagem={alt_imagem[5]} nome_autor={nome_autor[5]} />
        <Imagem url={url[6]} url_imagem={url_imagem[6]} alt_imagem={alt_imagem[6]} nome_autor={nome_autor[6]} />
        <Imagem url={url[7]} url_imagem={url_imagem[7]} alt_imagem={alt_imagem[7]} nome_autor={nome_autor[7]} />
        <Imagem url={url[8]} url_imagem={url_imagem[8]} alt_imagem={alt_imagem[8]} nome_autor={nome_autor[8]} />
        <Imagem url={url[9]} url_imagem={url_imagem[9]} alt_imagem={alt_imagem[9]} nome_autor={nome_autor[9]} />
        <Imagem url={url[10]} url_imagem={url_imagem[10]} alt_imagem={alt_imagem[10]} nome_autor={nome_autor[10]} />
        <Imagem url={url[11]} url_imagem={url_imagem[11]} alt_imagem={alt_imagem[11]} nome_autor={nome_autor[11]} />
        <Imagem url={url[12]} url_imagem={url_imagem[12]} alt_imagem={alt_imagem[12]} nome_autor={nome_autor[12]} />
        <Imagem url={url[13]} url_imagem={url_imagem[13]} alt_imagem={alt_imagem[13]} nome_autor={nome_autor[13]} />
        <Imagem url={url[14]} url_imagem={url_imagem[14]} alt_imagem={alt_imagem[14]} nome_autor={nome_autor[14]} />
        <Imagem url={url[15]} url_imagem={url_imagem[15]} alt_imagem={alt_imagem[15]} nome_autor={nome_autor[15]} />
        <Imagem url={url[16]} url_imagem={url_imagem[16]} alt_imagem={alt_imagem[16]} nome_autor={nome_autor[16]} />
        <Imagem url={url[17]} url_imagem={url_imagem[17]} alt_imagem={alt_imagem[17]} nome_autor={nome_autor[17]} />
        <Imagem url={url[18]} url_imagem={url_imagem[18]} alt_imagem={alt_imagem[18]} nome_autor={nome_autor[18]} />
        <Imagem url={url[19]} url_imagem={url_imagem[19]} alt_imagem={alt_imagem[19]} nome_autor={nome_autor[19]} />
        <Imagem url={url[20]} url_imagem={url_imagem[20]} alt_imagem={alt_imagem[20]} nome_autor={nome_autor[20]} />
        <Imagem url={url[21]} url_imagem={url_imagem[21]} alt_imagem={alt_imagem[21]} nome_autor={nome_autor[21]} />
        <Imagem url={url[22]} url_imagem={url_imagem[22]} alt_imagem={alt_imagem[22]} nome_autor={nome_autor[22]} />
        <Imagem url={url[23]} url_imagem={url_imagem[23]} alt_imagem={alt_imagem[23]} nome_autor={nome_autor[23]} />
        <Imagem url={url[24]} url_imagem={url_imagem[24]} alt_imagem={alt_imagem[24]} nome_autor={nome_autor[24]} />
        <Imagem url={url[25]} url_imagem={url_imagem[25]} alt_imagem={alt_imagem[25]} nome_autor={nome_autor[25]} />
        <Imagem url={url[26]} url_imagem={url_imagem[26]} alt_imagem={alt_imagem[26]} nome_autor={nome_autor[26]} />
        <Imagem url={url[27]} url_imagem={url_imagem[27]} alt_imagem={alt_imagem[27]} nome_autor={nome_autor[27]} />
        <Imagem url={url[28]} url_imagem={url_imagem[28]} alt_imagem={alt_imagem[28]} nome_autor={nome_autor[28]} />
        <Imagem url={url[29]} url_imagem={url_imagem[29]} alt_imagem={alt_imagem[29]} nome_autor={nome_autor[29]} />
        <Imagem url={url[30]} url_imagem={url_imagem[30]} alt_imagem={alt_imagem[30]} nome_autor={nome_autor[30]} />
        <Imagem url={url[31]} url_imagem={url_imagem[31]} alt_imagem={alt_imagem[31]} nome_autor={nome_autor[31]} />
        <Imagem url={url[32]} url_imagem={url_imagem[32]} alt_imagem={alt_imagem[32]} nome_autor={nome_autor[32]} />
        <Imagem url={url[33]} url_imagem={url_imagem[33]} alt_imagem={alt_imagem[33]} nome_autor={nome_autor[33]} />
        <Imagem url={url[34]} url_imagem={url_imagem[34]} alt_imagem={alt_imagem[34]} nome_autor={nome_autor[34]} />
        <Imagem url={url[35]} url_imagem={url_imagem[35]} alt_imagem={alt_imagem[35]} nome_autor={nome_autor[35]} />
        <Imagem url={url[36]} url_imagem={url_imagem[36]} alt_imagem={alt_imagem[36]} nome_autor={nome_autor[36]} />
    </div>
  )
}

export default Card