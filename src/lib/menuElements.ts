interface TOOLS_INSTRUCTION {
    name: string;
    link: string;
    showThis: boolean;
}

const TOOLS_INSTRUCTIONS:TOOLS_INSTRUCTION[] = [{
    name: "scadenzario clienti", link: "/scadenzario_clienti", showThis: true,
},{
    name: "scadenzario fornitori", link:"/scadenzario_fornitori", showThis: true,
},{
    name: "Analisi marginalità || prodotti", link: "/analisi_margini_prodotti", showThis: true,
},{
    name: "Analisi marginalità || clienti", link: "/analisi_margini_clienti", showThis:true,
},{
    name: "Esistenza di magazzino", link: "/esistenza", showThis: true,
},{
    name: "Genera listino prezzi", link: "/generatore_listino_prezzi", showThis: true,
}]

const HOMEPAGE_INSTRUCTIONS = [{
    name: "Dashboard", link: "/dashboard", showThis: true,
},{
    name: "Homepage", link: "/homepage", showThis: true,
},]

const SETTING_INSTRUCTIONS = [{
    name: "Impostazioni", link: "/impostazioni", showThis: true,
},{
    name: "Gestione utenti", link: "/gestione_utenti", showThis: true,
},{
    name: "Supporto", link: "/supporto", showThis: true,
}]

export {TOOLS_INSTRUCTIONS, HOMEPAGE_INSTRUCTIONS, SETTING_INSTRUCTIONS}