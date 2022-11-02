export function limitarTexto(texto: string, limite: number){
    const textoLimitado = texto.substring(0, limite-3).concat('...');
    return textoLimitado;
}