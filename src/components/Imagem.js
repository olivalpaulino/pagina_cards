const Imagem = ({url, url_imagem, alt_imagem, nome_autor}) => {

  return (
    <figure>
        <a href={url}><img src={url_imagem} alt={alt_imagem} /></a>
        <a href={url}><figcaption>{nome_autor}</figcaption></a>
    </figure>
  )
}

export default Imagem