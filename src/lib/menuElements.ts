interface TOOLS_INSTRUCTION {
    name: string;
    link: string;
    icon: string|"none"|ImageBitmap;
    showThis: boolean;
}

const TOOLS_INSTRUCTIONS:TOOLS_INSTRUCTION[] = [{
    name: "scadenzario clienti", link: "/scadenzario_clienti", icon: "none",  showThis: true,
},{
    name: "scadenzario fornitori", link:"/scadenzario_fornitori", icon: "none", showThis: true,
},{
    name: "Analisi marginalità || prodotti", link: "/analisi_margini_prodotti", icon: "none", showThis: true,
},{
    name: "Analisi marginalità || clienti", link: "/analisi_margini_clienti", icon: "none", showThis:true,
},{
    name: "Esistenza di magazzino", link: "/esistenza", icon: "none", showThis: true,
},{
    name: "Genera listino prezzi", link: "/generatore_listino_prezzi", icon: "none", showThis: true,
}]

const HOMEPAGE_INSTRUCTIONS:TOOLS_INSTRUCTION[] = [{
    name: "Dashboard", link: "/dashboard", icon: "none", showThis: true,
},{
    name: "Homepage", link: "/homepage", icon: "none", showThis: false,
},]

const SETTING_INSTRUCTIONS:TOOLS_INSTRUCTION[] = [{
    name: "Impostazioni", link: "/impostazioni", icon: "none", showThis: true,
},{
    name: "Gestione utenti", link: "/gestione_utenti", icon: "none", showThis: true,
},{
    name: "Supporto", link: "/supporto", icon: "none", showThis: true,
}]

export {TOOLS_INSTRUCTIONS, HOMEPAGE_INSTRUCTIONS, SETTING_INSTRUCTIONS}