
export const FAMILY_ID = 'gen-lang-client-0669556100';

// Salário cai no mês anterior (referência para o mês seguinte)
// Datas baseadas no Calendário da Folha de Pagamento 2026 (Maricá)
export const PAYMENT_SCHEDULE: Record<number, string> = {
    1: '-01-28', // Jan (Qua)
    2: '-02-26', // Fev (Qui)
    3: '-03-27', // Mar (Sex)
    4: '-04-28', // Abr (Ter)
    5: '-05-22', // Mai
    6: '-06-22', // Jun
    7: '-07-22', // Jul
    8: '-08-22', // Ago
    9: '-09-22', // Set
    10: '-10-22', // Out
    11: '-11-22', // Nov
    12: '-12-22'  // Dez
};

export const MONTH_NAMES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export const CATEGORY_ICONS: Record<string, string> = { 
    'Salário': '💰', 
    'Mumbuca': '💳', 
    'Moradia': '🏠', 
    'Alimentação': '🛒', 
    'Transporte': '🚗', 
    'Saúde': '💊', 
    'Educação': '📚', 
    'Lazer': '🎉', 
    'Dívidas': '💸', 
    'Investimento': '📈', 
    'Abastecimento': '⛽', 
    'Doação': '🎁', 
    'Renda Extra': '💵',
    'Outros': '📝'
};

export const INITIAL_GOALS = []; // Cleared to avoid generic goals, now generated dynamically

export const INITIAL_ACCOUNTS = [
    { id: 'acc_main', name: 'Conta Principal', balance: 0 },
    { id: 'acc_mum', name: 'Mumbuca', balance: 0 }
];