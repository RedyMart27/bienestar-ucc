import NoticiaCard from "./NoticiaCard";

function NoticiaGrid({ noticias }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {noticias.map((noticia) => (

        <NoticiaCard
          key={noticia.id}
          noticia={noticia}
        />

      ))}

    </div>
  );
}

export default NoticiaGrid;