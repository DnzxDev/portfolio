export interface GitHubFile {
    name: string;
    content: string;
    language: string;
  }
  
  // Função para buscar o conteúdo de um repositório do GitHub
  export async function fetchGitHubRepo(owner: string, repo: string, path: string = ""): Promise<GitHubFile[]> {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch repository contents");
    }
  
    const data = await response.json();
    return Array.isArray(data) ? data : [data];
  }
  
  // Função para buscar o conteúdo de um arquivo do GitHub
  export const fetchFileContent = async (url: string, filename: string): Promise<string> => {
    const response = await fetch(url);
    const content = await response.text();  // Sempre buscar como texto
  
    // Se for um arquivo JSON, tentar parseá-lo
    if (filename.endsWith('.json')) {
      try {
        return JSON.stringify(JSON.parse(content)); // Se for JSON, parse e retorna como string formatada
      } catch (e) {
        console.error(`Erro ao parsear JSON para ${filename}:`, e);
        return content; // Se falhar ao parsear, retornar o conteúdo bruto
      }
    } else {
      return content;  // Para arquivos JavaScript ou outros, retorna o conteúdo bruto
    }
  };
  
  // Função para obter a linguagem com base na extensão do arquivo
  export function getLanguageFromFilename(filename: string): string {
    const ext = filename.split(".").pop()?.toLowerCase();
    const languageMap: Record<string, string> = {
      js: "javascript",
      jsx: "javascript",
      ts: "typescript",
      tsx: "typescript",
      css: "css",
      html: "html",
      lua: "lua",
      json: "json",
    };
    return languageMap[ext || ""] || "plaintext";
  }