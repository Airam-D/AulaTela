export type RootStackParamList = {
    Login: undefined; // Não pede nada
    Apresentacao: undefined
    Dashboard: {userName: string; voluntarioId: string}; // Exige o ID do voluntario e o Nome
};