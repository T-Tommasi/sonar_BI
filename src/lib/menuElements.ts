interface INSTRUCTION {
	name: string;
	link: string;
	icon: string;
	showThis: boolean;
}

const TOOLS_INSTRUCTIONS: INSTRUCTION[] = [
	{
		name: 'Scadenzario clienti',
		link: '/scadenzario_clienti',
		icon: 'material-symbols:point-of-sale',
		showThis: true
	},
	{
		name: 'Scadenzario fornitori',
		link: '/scadenzario_fornitori',
		icon: 'material-symbols:delivery-truck-speed-rounded',
		showThis: true
	},
	{
		name: 'Analisi marginalità || prodotti',
		link: '/analisi_margini_prodotti',
		icon: 'material-symbols:balance',
		showThis: true
	},
	{
		name: 'Analisi marginalità || clienti',
		link: '/analisi_margini_clienti',
		icon: 'material-symbols:balance',
		showThis: true
	},
	{
		name: 'Esistenza di magazzino',
		link: '/esistenza',
		icon: 'material-symbols:warehouse-rounded',
		showThis: true
	},
	{
		name: 'Genera listino prezzi',
		link: '/generatore_listino_prezzi',
		icon: 'material-symbols:euro-symbol-rounded',
		showThis: true
	}
];

const HOMEPAGE_INSTRUCTIONS: INSTRUCTION[] = [
	{
		name: 'Dashboard',
		link: '/dashboard',
		icon: 'material-symbols:home',
		showThis: true
	},
	{
		name: 'Homepage',
		link: '/homepage',
		icon: 'none',
		showThis: false
	}
];

const SETTING_INSTRUCTIONS: INSTRUCTION[] = [
	{
		name: 'Impostazioni',
		link: '/impostazioni',
		icon: 'material-symbols:settings',
		showThis: true
	},
	{
		name: 'Gestione utenti',
		link: '/gestione_utenti',
		icon: 'material-symbols:supervised-user-circle-outline',
		showThis: true
	},
	{
		name: 'Supporto',
		link: '/supporto',
		icon: 'material-symbols:help',
		showThis: true
	}
];

export { TOOLS_INSTRUCTIONS, HOMEPAGE_INSTRUCTIONS, SETTING_INSTRUCTIONS };
