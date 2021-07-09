export const VadilationService = {
    cep(cep = ''): boolean {
      return cep.replace(/\D/g, '').length === 8; //expressão regular - determina um padrão a ser procurar
        
    },
}