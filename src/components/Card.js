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

const Card = () => {
    let nome_autor = ["Richard Dawkins", "Dale Carnegie", "Robert T. Kiyosaki", "Hastings e Meyer", "Daniel Kahneman", "Ryan Holiday",
    "Hal Elrod", "Brené Brown","T. Harv", "George S.", "William H.", "Daniel Goleman", "Louise L.", "Napoleon Hill", "Napoleon Hill", 
    "Joseph Murphy", "Tiago Brunet"];
    
    let alt_imagem = ["O Gene Egoísta, Richard Dawkins", "Como fazer amigos e influenciar pessoas, Dale Carnegie", "Pai Rico, Pai Pobre", "A Regra é Não Ter Regras", 
    "Rápido e Devagar", "O Ego é Seu Inimigo", "O Milagre da Manhã", "A Coragem de Ser Imperfeito", "Os Segredos da Mente Milionária",
    "O Homem Mais Rico da Babilônia", "Arrume Sua Cama", "Foco", "Você Pode Curar Sua Vida", "Quem Pensa Henriquece", "Mais Esperto que o Diabo",
    "O Poder do Subconsciente", "Especialista em Pessoas"]
    
    let url = ["https://amzn.to/3nn7mSI", "https://amzn.to/40foeJB", "https://amzn.to/3JJj8Oz", "https://amzn.to/3nkh2gC", "https://amzn.to/3LRp0YJ",
    "https://amzn.to/3lAGGNT", "https://amzn.to/3JNmKzh", "https://amzn.to/3K98ySu", "https://amzn.to/40m570r", "https://amzn.to/3z7r07N",
    "https://amzn.to/3FS7dNh", "https://amzn.to/3LQDWGw", "https://amzn.to/40k0q7m", "https://amzn.to/3ZiNMV1", "https://amzn.to/40CTHFe",
    "https://amzn.to/3ZfEwAP", "https://amzn.to/3z7UVfX"];
    
    let url_imagem = [livro_ogene_egoista, livro_como_faz_amigos, livro_pai_rico_pai_pobre, livro_a_regra_e_nao_ter_regra, livro_rapido_e_devagar,
        livro_o_ego_e_seu_inimigo, livro_o_milagre_da_manha, livro_a_coragem_de_ser_imperfeito, livro_os_segredos_da_mente_milionaria,
        livro_o_homem_mais_rico_da_babilonia, livro_arrume_sua_cama, livro_foco, livro_voce_pode_curar_sua_vida, livro_quem_pensa_enriquece, 
        livro_mais_esperto_que_o_diabo, livro_o_poder_do_subconsciente, livro_especialista_em_pessoas];

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
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
        <Imagem url={url[0]} url_imagem={url_imagem[0]} alt_imagem={alt_imagem[0]} nome_autor={nome_autor[0]} />
    </div>
  )
}

export default Card