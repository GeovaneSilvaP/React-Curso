import { Suspense, use } from "react";

// Função que retorna uma Promise (necessário para use())
async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Erro ao carregar posts");
  }

  return res.json();
}

function PostItem() {
  // Suspense espera essa Promise terminar
  const posts = use(fetchPosts());

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Posts</h2>

      <ul style={{ lineHeight: "1.7", fontSize: "18px" }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Posts() {
  return (
    <Suspense fallback={<p>Carregando posts...</p>}>
      <PostItem />
    </Suspense>
  );
}
